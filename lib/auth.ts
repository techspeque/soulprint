import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { Resend } from "resend";
import { kvAdapter } from "./kv-adapter";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: kvAdapter,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    verifyRequest: "/login?verify=true",
  },
  providers: [
    EmailProvider({
      server: { host: "smtp.resend.com", port: 465, auth: { user: "resend", pass: "dummy" } },
      from: process.env.EMAIL_FROM || "noreply@example.com",
      sendVerificationRequest: async ({ identifier: email, url }) => {
        await getResend().emails.send({
          from: process.env.EMAIL_FROM!,
          to: email,
          subject: "Sign in to Soulprint",
          html: `
            <div style="font-family: 'Palatino Linotype', serif; background: #07070A; color: #D4D4D8; padding: 48px; text-align: center;">
              <h1 style="color: #F0F0F0; font-weight: 400;">
                <span style="color: #E8927C;">SOUL</span>PRINT
              </h1>
              <p style="color: #777; margin: 24px 0;">Click below to sign in:</p>
              <a href="${url}" style="display: inline-block; background: rgba(232,146,124,0.12); border: 1px solid rgba(232,146,124,0.3); color: #E8927C; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-size: 14px; letter-spacing: 1px;">
                Sign in to Soulprint
              </a>
              <p style="color: #444; font-size: 12px; margin-top: 32px;">
                If you didn't request this, you can safely ignore this email.
              </p>
            </div>
          `,
        });
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});
