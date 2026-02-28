import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secureCookieName = "__Secure-authjs.session-token";
const devCookieName = "authjs.session-token";

export async function middleware(req: NextRequest) {
  const isSecure = req.nextUrl.protocol === "https:";
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
    cookieName: isSecure ? secureCookieName : devCookieName,
  });
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
