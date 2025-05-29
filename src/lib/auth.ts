import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 0 + 24 * 60 * 60
    },
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',

            credentials: {
                email: { label: "emailLogin", type: "email", placeholder: "example@gmail.com" },
                password: { label: "passwordLogin", type: "password" }
            },

            async authorize(credentials, req) {


                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const existingUser = await db.user.findUnique({
                    where: { email: credentials.email }
                })

                if (!existingUser) return null;

                return {
                    id: existingUser.id.toString(),
                    email: existingUser.email,
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    id: user.id,
                    name: user.name,
                }
            }
            return token
        },

        async session({ session, user, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    name: token.name,

                }
            }
        },
    }
}