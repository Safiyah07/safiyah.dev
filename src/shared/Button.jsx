import PropTypes from "prop-types";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

function Button({ children }) {
	const { theme } = useContext(ThemeContext);

	return (
		<div
			className={`${
				theme === "light"
					? "bg-light-gradient shadow-light-3xl"
					: "bg-gradient shadow-3xl"
			} relative p-1 h-auto rounded-[20px] bg-gradient w-fit`}
		>
			<div
				className={`${
					theme === "light" ? "bg-light" : "bg-dark"
				} h-full w-full bg-dark rounded-[18px] px-5 py-2`}
			>
				{children}
			</div>
		</div>
	);
}

Button.propTypes = {
	children: PropTypes.any,
};

export default Button;
