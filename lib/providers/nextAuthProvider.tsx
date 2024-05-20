"use client"
import AuthenticationHOC from "@/lib/providers/authenticationWrapper"
import { SessionProvider } from "next-auth/react"
import propTypes from "prop-types"

type NextAuthProviderProps = {
	children: React.ReactNode
}

export default function NextAuthProvider({ children }: NextAuthProviderProps) {
	return (
		<SessionProvider>
			<AuthenticationHOC>{children}</AuthenticationHOC>
		</SessionProvider>
	)
}

NextAuthProvider.propTypes = {
	children: propTypes.node,
}
