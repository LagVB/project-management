import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface User {
        id: string,
        email: string,
    }
    interface Session {
        user: User & {
            id: string,
            email: string,
        }
        token: {
            id: string,
            email: string,
        }
    }
}