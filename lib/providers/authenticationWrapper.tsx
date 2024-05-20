import { getCookie, setCookie } from "cookies-next"
import { signOut, useSession } from "next-auth/react"
import React, { useEffect } from "react"
import { deleteLocalStorageItem, setLocalStorageItem } from "../dom"

import { useRouter } from "next/navigation"
import decodeJWT from "../jwtToken/jwtDecoder"
import { useUserStore } from "../slices/userInfoSlice"

type AuthenticationHOCProps = {
	children: React.ReactNode
}

const AuthenticationHOC = ({ children }: AuthenticationHOCProps) => {
	const router = useRouter()

	const { data: session, status } = useSession()
	const loading = status === "loading"

	const setUserInfo = useUserStore((state) => state.setUserInfo)

	useEffect(() => {
		if (typeof window !== "undefined") {
			const t = window.location.hash.substring(1)
			if (t) {
				const extractToken = new URLSearchParams(t)
				setCookie("token", extractToken?.get("access_token"))
				setLocalStorageItem("token", extractToken?.get("access_token") || "")
				router.replace("/")
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const token = getCookie("token")
		if (session && !token) {
			deleteLocalStorageItem("token")
			signOut()
		}
		if ((session && !token && !loading) || (!session && token && !loading)) {
			deleteLocalStorageItem("token")
		}
	}, [session, loading])

	const jwtToken = getCookie("token")
	useEffect(() => {
		const decodedToken = decodeJWT(jwtToken) as any

		if (decodedToken) {
			setUserInfo({
				name: decodedToken?.name,
				email: decodedToken?.email,
				profilePicture: `https://apitoss.teo-intl.com/Images/Employees/${decodedToken?.id}.png`,
				employeeId: decodedToken?.employeeId,
			})
		}
	}, [jwtToken, setUserInfo])

	return <>{children}</>
}

export default AuthenticationHOC
