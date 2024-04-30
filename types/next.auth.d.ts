import { DefaultSession } from "next-auth"

declare module "next-auth" {
	interface Session extends DefaultSession {
		session: {
			user: {
				id: string
				name: string
				email: string
				image: string
			}
			token: {
				id: string
				randomKey: string
			}
		}
		token: {
			id: string
			randomKey: string
		}
	}
}
