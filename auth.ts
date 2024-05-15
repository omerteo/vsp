import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./prisma/prisma"
import github from "next-auth/providers/github"
import google from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import AzureProvider from "next-auth/providers/azure-ad"
import type { Adapter } from "@auth/core/adapters"

export const { handlers, auth, signIn, signOut } = NextAuth({
	session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
	secret: process.env.JWT_SECRET,
	adapter: PrismaAdapter(prisma) as Adapter,
	pages: {
		signIn: "/login",
	},
	providers: [
		github,
		google,
		AzureProvider({
			clientId: `${process.env.AZ_CLIENTID}`,
			tenantId: process.env.AZ_TENANTID,
			clientSecret: `${process.env.AZ_CLIENTSECRET}`,
			allowDangerousEmailAccountLinking: true,
		}),
		CredentialsProvider({
			name: "Sign in",
			id: "credentials",
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "example@example.com",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) {
					return null
				}

				const user = await prisma.user.findUnique({
					where: {
						email: String(credentials.email),
					},
				})

				if (!user || !(await bcrypt.compare(String(credentials.password), user.password!))) {
					return null
				}

				return {
					id: user.id,
					email: user.email,
					name: user.name,
					randomKey: process.env.JWT_SECRET,
				}
			},
		}),
	],
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user
			const paths = ["/profile", "/client-side", "/asset-types"]
			const isProtected = paths.some((path) => nextUrl.pathname.startsWith(path))

			if (isProtected && !isLoggedIn) {
				const redirectUrl = new URL("/api/auth/signin", nextUrl.origin)
				redirectUrl.searchParams.append("callbackUrl", nextUrl.href)
				return Response.redirect(redirectUrl)
			}
			return true
		},
		jwt: ({ token, user }) => {
			if (user) {
				const u = user as unknown as any
				return {
					...token,
					id: u.id,
					randomKey: u.randomKey,
				}
			}
			return token
		},
		session(params: any) {
			return {
				...params.session,
				user: {
					...params.session.user,
					id: params.token.id as string,
					randomKey: params.token.randomKey,
				},
			}
		},
	},
})
