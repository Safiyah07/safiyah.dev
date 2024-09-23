import PropTypes from "prop-types";

function DarkButton({ children }) {
	return (
		<div className="px-3 py-2 border-4 rounded-xl gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
			{children}
		</div>
	);
}

DarkButton.propTypes = {
	children: PropTypes.any,
};

export default DarkButton;
