import PropTypes from "prop-types";

function DarkButton({ children }) {
	return (
		<div className="relative p-1 h-auto rounded-[20px] bg-gradient shadow-3xl">
			<div className="h-full w-full bg-dark rounded-[18px] px-5 py-2">
				{children}
			</div>
		</div>
	);
}

DarkButton.propTypes = {
	children: PropTypes.any,
};

export default DarkButton;
