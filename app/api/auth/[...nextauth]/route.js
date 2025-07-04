import NextAuth from "next-auth";
import ZohoProvider from "next-auth/providers/zoho";

const handler = NextAuth({
  debug: true,
  providers: [
    ZohoProvider({
      clientId: process.env.ZOHO_CLIENT_ID,
      clientSecret: process.env.ZOHO_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "ZohoMail.messages.ALL",
          access_type: "offline",
          prompt: "consent"
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    }
  },
  authorization: {
    url: "https://accounts.zoho.com/oauth/v2/auth"
  },
  token: {
    url: "https://accounts.zoho.com/oauth/v2/token"
  },
  userinfo: {
    url: "https://accounts.zoho.com/oauth/user/info"
  }
});

export const GET = handler;
export const POST = handler;
