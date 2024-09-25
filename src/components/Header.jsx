import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import Button from "../shared/Button";
import { Link, useLocation } from "react-router-dom";

function Header() {
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
		<section className="py-5 absolute w-svw h-svh z-10 lg:px-20 md:px-10 sm:px-5">
			<section className="font-normal w-full">
				<div className="flex justify-between items-center">
					<Link to="/">
						<h1 className="text-xl font-medium tracking-wider">Safiyah</h1>
					</Link>
					{/* Desktop menu */}
					<div className="flex md:hidden sm:hidden items-center h-full relative gap-16 text-xl w-auto">
						{nav.map((item, id) => (
							<a
								href={`#${item.name}`}
								className={`${
									pathMatchRoute(`#${item.name}`) && " font-semibold"
								} capitalize hover:font-medium transition-all ease-in-out duration-300`}
								key={id}
							>
								{item.name}
							</a>
						))}
						{/* ${
								location.pathname === "/" && "font-medium"
							} */}
						<Link
							to={`/about`}
							className={`${
								location.pathname === "/about" && "font-medium"
							} capitalize hover:font-medium transition-all ease-in-out duration-300`}
						>
							About
						</Link>
						<Button>
							<a href="mailto:safiyahmasud@gmail.com">Get in touch</a>
						</Button>
					</div>

					{/* md and sm menu btn */}
					<div
						onClick={menuDisplay}
						className="lg:hidden cursor-pointer"
					>
						<Button>{showMenu ? <div>Menu</div> : <div>Close</div>}</Button>
					</div>
				</div>

				{/* md and sm menu display */}
				<div
					className={`${
						showMenu
							? "hidden"
							: "flex flex-col items-center justify-center gap-16 text-xl h-auto rounded-xl p-5 my-[50px] bg-dark border"
					}`}
				>
					{nav.map((item, id) => (
						<a
							href={`#${item.name}`}
							className={`${
								pathMatchRoute(`#${item.name}`) && " font-semibold"
							} capitalize hover:font-medium transition-all ease-in-out duration-300`}
							key={id}
						>
							{item.name}
						</a>
					))}
					{/* ${
								location.pathname === "/" && "font-medium"
							} */}
					<Link
						to={`/about`}
						className={`${
							location.pathname === "/about" && "font-medium"
						} capitalize hover:font-medium transition-all ease-in-out duration-300`}
					>
						About
					</Link>
					<Button>
						<a href="mailto:safiyahmasud@gmail.com">Get in touch</a>
					</Button>
				</div>
			</section>
		</section>
	);
}

export default Header;
