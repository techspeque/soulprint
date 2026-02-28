export interface Song {
  title: string;
  artist: string;
  allArtists: string[];
}

export function parseCSV(text: string): Song[] {
  const lines = text.split("\n").filter((l) => l.trim());
  if (lines.length < 2)
    throw new Error("CSV needs at least a header row and one song");

  const rows = lines.slice(1);
  const parsed: Song[] = [];

  for (const row of rows) {
    const fields: string[] = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < row.length; i++) {
      if (row[i] === '"') {
        inQuotes = !inQuotes;
      } else if (row[i] === "," && !inQuotes) {
        fields.push(current.trim());
        current = "";
      } else {
        current += row[i];
      }
    }
    fields.push(current.trim());

    if (fields.length >= 2 && fields[0] && fields[1]) {
      const hasVideoId =
        /^[a-zA-Z0-9_-]{8,15}$/.test(fields[0]) || fields[0].startsWith("-");
      if (hasVideoId && fields.length >= 4) {
        const title = fields[1];
        const artists = fields.slice(3).filter((a) => a);
        if (title && artists.length > 0) {
          parsed.push({ title, artist: artists[0], allArtists: artists });
        }
      } else if (hasVideoId && fields.length >= 3) {
        parsed.push({
          title: fields[1],
          artist: fields[2],
          allArtists: fields.slice(2).filter((a) => a),
        });
      } else {
        parsed.push({
          title: fields[0],
          artist: fields[1],
          allArtists: fields.slice(1).filter((a) => a),
        });
      }
    }
  }

  if (parsed.length === 0)
    throw new Error("Couldn't parse any songs from the CSV");
  return parsed;
}

export function handleManualPaste(text: string): Song[] {
  const lines = text
    .split("\n")
    .filter((l) => l.trim() && l.includes("-"));
  const parsed = lines.map((line) => {
    const parts = line.split("-").map((p) => p.trim());
    return {
      title: parts[1] || parts[0],
      artist: parts[0],
      allArtists: [parts[0]],
    };
  });
  return parsed;
}
