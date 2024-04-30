import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "react-hot-toast"
import { SessionProvider } from "next-auth/react"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const revalidate = 0
export const dynamic = "force-dynamic"

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionProvider>
					<Header />

					{children}
				</SessionProvider>

				<Toaster />
			</body>
		</html>
	)
}
