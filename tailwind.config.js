/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				gradient:
					"linear-gradient(to right, #0c0c0d 0%, #bdff68 25%, #0c0c0d 50%, #e066ff 75%, #0c0c0d 100%)",
			},
			colors: {
				dark: "#0b1215",
				light: "#f8f8ff",
				green: "#bdff68",
				purple: "#e066ff",
				shadow: "#696969",
			},
			boxShadow: {
				"3xl": "0px 3px 2px 0px rgba(35, 35, 35, 0.5)",
			},
		},
		screens: {
			sm: { max: "479px" },
			md: { min: "480px", max: "880px" },
			lg: { min: "881px" },
		},
	},
	plugins: [],
};
