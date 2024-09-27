import PropTypes from "prop-types";

import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			setTheme(storedTheme);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		localStorage.setItem("theme", newTheme);
		setTheme(newTheme);
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme,
			}}
		>
			<main
				className={`
					${
						theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
					} min-h-svh py-5 px-20 md:px-10 sm:px-5 max-w-full`}
			>
				{children}
			</main>
		</ThemeContext.Provider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.any,
};

export default ThemeContext;
