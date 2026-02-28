import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { ANALYSIS_SYSTEM_PROMPT } from "@/lib/constants";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { songs } = await req.json();
  if (!songs || !Array.isArray(songs) || songs.length === 0) {
    return NextResponse.json({ error: "No songs provided" }, { status: 400 });
  }

  const songText = songs
    .slice(0, 500)
    .map(
      (s: { title: string; artist: string; allArtists?: string[] }) =>
        `"${s.title}" by ${s.allArtists?.join(", ") || s.artist}`
    )
    .join("\n");

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
        "X-Title": "Soulprint",
      },
      body: JSON.stringify({
        model: "anthropic/claude-sonnet-4-20250514",
        max_tokens: 4096,
        messages: [
          { role: "system", content: ANALYSIS_SYSTEM_PROMPT },
          {
            role: "user",
            content: `Here is a playlist of ${songs.length} songs. Analyze the emotional architecture of this listener.\n\n${songText}`,
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("OpenRouter error:", response.status, errorBody);
    return NextResponse.json(
      { error: "AI analysis failed" },
      { status: 502 }
    );
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content || "";
  const cleaned = text.replace(/```json|```/g, "").trim();

  let result;
  try {
    result = JSON.parse(cleaned);
  } catch {
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      result = JSON.parse(jsonMatch[0]);
    } else {
      return NextResponse.json(
        { error: "Could not parse AI response" },
        { status: 502 }
      );
    }
  }

  if (!result.clusters || !result.tension) {
    return NextResponse.json(
      { error: "Incomplete analysis returned" },
      { status: 502 }
    );
  }

  return NextResponse.json(result);
}
