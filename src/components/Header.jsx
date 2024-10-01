import { useContext, useState } from "react";
import Button from "../shared/Button";
import { useLocation } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

function Header() {
	const { theme } = useContext(ThemeContext);

	const [showMenu, setShowMenu] = useState(true);

	const menuDisplay = () => {
		setShowMenu((prevState) => !prevState);
	};

	const nav = [
		{
			name: "home",
		},
		{
			name: "projects",
		},
	];

	const location = useLocation();

	const pathMatchRoute = (route) => {
		if (route === location.hash) {
			return true;
		}
	};

	return (
		<section
			id="home"
			// style={{ width: "-webkit-fill-available" }}
			className="absolute top-0 pt-5 pb-20 pr-20 m-auto md:pr-10 sm:pr-5 wid"
		>
			<div className="w-full font-normal">
				<div className="flex items-center justify-between">
					<a href="/">
						<h1 className="text-xl font-medium tracking-wider">Safiyah</h1>
					</a>
					{/* Desktop menu */}
					<div className="relative flex items-center w-auto h-full gap-16 text-xl md:hidden sm:hidden">
						{nav.map((item, id) => (
							<a
								key={id}
								href={`/#${item.name}`}
								className={`${
									pathMatchRoute(`#${item.name}`) && " font-semibold"
								} capitalize hover:font-medium transition-all ease-in-out duration-300`}
							>
								{item.name}
							</a>
						))}
						{/* ${
								location.pathname === "/" && "font-medium"
							} */}
						<a
							href={`/about`}
							className={`${
								location.pathname === "/about" && "font-medium"
							} capitalize hover:font-medium transition-all ease-in-out duration-300`}
						>
							About
						</a>
						<Button>
							<a href="mailto:safiyahmasud@gmail.com">Get in touch</a>
						</Button>
					</div>

					{/* md and sm menu btn */}
					<div
						onClick={menuDisplay}
						className="font-normal cursor-pointer lg:hidden max-md:hidden"
					>
						<Button>{showMenu ? <div>Menu</div> : <div>Close</div>}</Button>
					</div>
				</div>

				{/* md and sm menu */}
				<div
					className={`${
						showMenu ? "-translate-y-[1000px]" : "translate-y-[0px]"
					} flex flex-col items-center justify-center gap-16 h-[80svh] rounded-xl p-5 my-[50px] sm:my-0 sm:p-0 sm:h-svh ${
						theme === "dark" ? "bg-dark" : "bg-light"
					} text-2xl lg:hidden max-md:hidden transition-all ease-in-out duration-500 relative z-10`}
				>
					{nav.map((item, id) => (
						<a
							key={id}
							href={`/#${item.name}`}
							className={`${
								pathMatchRoute(`#${item.name}`) && " font-semibold"
							} capitalize hover:font-medium transition-all ease-in-out duration-300`}
						>
							{item.name}
						</a>
					))}
					{/* ${
								location.pathname === "/" && "font-medium"
							} */}
					<a
						href={`/about`}
						className={`${
							location.pathname === "/about" && "font-medium"
						} capitalize hover:font-medium transition-all ease-in-out duration-300`}
					>
						About
					</a>
					<Button>
						<a href="mailto:safiyahmasud@gmail.com">Get in touch</a>
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Header;
