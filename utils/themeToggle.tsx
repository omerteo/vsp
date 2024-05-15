import React from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"

function ThemeToggle() {
	const [dark, setDark] = React.useState(false)

	const darkModeHandler = () => {
		setDark(!dark)
		document.body.classList.toggle("dark")
	}

	return (
		<div className="bg-yellow-">
			<button onClick={() => darkModeHandler()}>
				{dark && <MdLightMode color="white" size={20} />}
				{!dark && <MdDarkMode color="black" />}
			</button>
		</div>
	)
}

export default ThemeToggle
