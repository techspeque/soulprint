import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const isAuthed = !!token;

  if (req.nextUrl.pathname.startsWith("/api/analyze")) {
    if (!isAuthed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  if (req.nextUrl.pathname.startsWith("/analyze")) {
    if (!isAuthed) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/analyze/:path*", "/api/analyze/:path*"],
};
