import React from "react"
import Header from "./Header"

type NavigationProps = {
	children: React.ReactNode
}

const Navigation = ({ children }: NavigationProps) => {
	return (
		<>
			<Header />

			<div className="p-4 sm:ml-64 bg-white dark:bg-gray-800">{children}</div>
		</>
	)
}

export default Navigation
