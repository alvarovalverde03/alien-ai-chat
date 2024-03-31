import { type NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET as string

/*
const GITHUB_ID = process.env.GITHUB_ID as string
const GITHUB_SECRET = process.env.GITHUB_SECRET as string
*/
const GOOGLE_ID = process.env.GOOGLE_ID as string
const GOOGLE_SECRET = process.env.GOOGLE_SECRET as string

export const options: NextAuthOptions = {
    secret: NEXTAUTH_SECRET,
    providers: [
        /*
        GitHubProvider({
            clientId: GITHUB_ID,
            clientSecret: GITHUB_SECRET
        }),
        */
        GoogleProvider({
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET
        })
    ]
}