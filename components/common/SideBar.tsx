import { Loader } from "lucide-react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const SideBar = () => {
	const session = useSession()
	const pathname = usePathname()
	const isActive = (path: string) => pathname.includes(path)

	const protectedRoutes = [
		{
			path: "/assets",
			icon: (
				<svg
					className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10 2a 8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 1a 7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm0 2a 5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1a 4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1a 3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 1a 2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 1a 1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
					/>
				</svg>
			),
			title: "Assets",
		},
		{
			path: "/asset-types",
			icon: (
				<svg
					className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 1a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
					/>
				</svg>
			),
			title: "Asset Types",
		},
		{
			path: "/profile",
			icon: (
				<svg
					className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10 2a 8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 1a 7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm0 2a 5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1a 4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1a 3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 1a 2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 1a 1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
					/>
				</svg>
			),
			title: "Profile",
		},
		{
			path: "/employees",
			icon: (
				<svg
					className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10 2a 8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 1a 7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm0 2a 5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1a 4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1a 3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 1a 2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 1a 1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
					/>
				</svg>
			),
			title: "Employees",
		},
		{
			path: "/plan-viewer",
			icon: (
				<svg
					className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10 2a 8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 1a 7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm0 2a 5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1a 4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1a 3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 1a 2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 1a 1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
					/>
				</svg>
			),
			title: "Plan Viewer",
		},
		{
			path: "/schedules",
			icon: (
				<svg
					className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10 2a 8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 1a 7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm0 2a 5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1a 4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1a 3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 1a 2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 1a 1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
					/>
				</svg>
			),
			title: "Schedules",
		},
	]

	const publicRoutes = [
		{
			path: "/login",
			icon: (
				<svg
					className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 18 16"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
					/>
				</svg>
			),
			title: "Sign In",
		},
		{
			path: "/register",
			icon: (
				<svg
					className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
					<path
						d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0
0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"
					/>

					<path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
				</svg>
			),
			title: "Sign Up",
		},
	]

	if (session.status === "loading") {
		return <Loader />
	}

	return (
		<>
			<aside
				id="logo-sidebar"
				className="fixed top-0 left-0 z-40 w-64 h-screen pt-20  bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
				aria-label="Sidebar"
			>
				<div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
					<ul className="space-y-2 font-medium">
						{session && session?.data?.user ? (
							<>
								{protectedRoutes.map((route) => (
									<li key={route.path}>
										<Link
											href={route.path}
											className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
												isActive(route.path) ? "bg-gray-100 dark:bg-gray-700" : ""
											}`}
										>
											{route.icon}
											<span className="flex-1 ms-3 whitespace-nowrap">{route.title}</span>
										</Link>
									</li>
								))}
							</>
						) : (
							<>
								{publicRoutes.map((route) => (
									<li key={route.path}>
										<Link
											href={route.path}
											className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
												isActive(route.path) ? "bg-gray-100 dark:bg-gray-700" : ""
											}`}
										>
											{route.icon}
											<span className="flex-1 ms-3 whitespace-nowrap">{route.title}</span>
										</Link>
									</li>
								))}
							</>
						)}
					</ul>
				</div>
			</aside>
		</>
	)
}

export default SideBar
