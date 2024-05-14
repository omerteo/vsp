"use client"

import logoutAction from "@/utils/logOutUtil"
import ThemeToggle from "@/utils/themeToggle"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useEffect, useState } from "react"
import SideBar from "./SideBar"

const Header = () => {
	const session = useSession()
	const user = session?.data?.user
	const [openSidebar, setOpenSidebar] = useState(false)
	const [openUserMenu, setOpenUserMenu] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	const toggleSidebar = () => {
		setOpenSidebar(!openSidebar)
	}

	const toggleUserMenu = () => {
		setOpenUserMenu(!openUserMenu)
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setIsMobile(true)
			} else {
				setIsMobile(false)
			}
		}

		handleResize()

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<>
			<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
				<div className="px-3 py-3 lg:px-5 lg:pl-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center justify-start rtl:justify-end">
							<button
								data-drawer-target="logo-sidebar"
								data-drawer-toggle="logo-sidebar"
								aria-controls="logo-sidebar"
								type="button"
								aria-expanded="false"
								onClick={toggleSidebar}
								className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							>
								<span className="sr-only">Open sidebar</span>
								<svg
									className="w-6 h-6"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										clipRule="evenodd"
										fillRule="evenodd"
										d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
									></path>
								</svg>
							</button>
							<a href="https://flowbite.com" className="flex ms-2 md:me-24">
								<Image
									src="https://flowbite.com/docs/images/logo.svg"
									className="h-8 me-3"
									alt="FlowBite Logo"
									width={8}
									height={8}
								/>
								<span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
									Flowbite
								</span>
							</a>
						</div>

						<div className="flex justify-end items-center space-x-6 max-w-full ">
							<ThemeToggle />
							<div className="relative inline-block text-left">
								<div>
									<Image
										className="w-8 h-8 rounded-full cursor-pointer"
										src={user?.image || "https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
										alt="user photo"
										width={8}
										height={8}
										onClick={toggleUserMenu}
									/>
								</div>

								{openUserMenu && (
									<div className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
										<div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
											<button
												className="block px-4 py-2 text-sm w-36 text-gray-700 hover:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
												role="menuitem"
												onClick={() => logoutAction()}
											>
												Sign out
											</button>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</nav>
			{(openSidebar || !isMobile) && <SideBar />}
		</>
	)
}

export default Header
