import { useState } from "react";
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
		<section
			// style={{ width: "-webkit-fill-available" }}
			className="absolute top-0 pr-20 md:pr-10 sm:pr-5 pt-5 pb-20 wid m-auto"
		>
			<div className="font-normal w-full">
				<div className="flex justify-between items-center">
					<Link to="/">
						<h1 className="text-xl font-medium tracking-wider">Safiyah</h1>
					</Link>
					{/* Desktop menu */}
					<div className="flex md:hidden sm:hidden items-center h-full relative gap-16 text-xl w-auto">
						{nav.map((item, id) => (
							<Link
								key={id}
								to={`/#${item.name}`}
								className={`${
									pathMatchRoute(`#${item.name}`) && " font-semibold"
								} capitalize hover:font-medium transition-all ease-in-out duration-300`}
							>
								{/* <a
									href={`#${item.name}`}
									className={`${
										pathMatchRoute(`#${item.name}`) && " font-semibold"
									} capitalize hover:font-medium transition-all ease-in-out duration-300`}
								> */}
								{item.name}
								{/* </a> */}
							</Link>
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
						className="lg:hidden max-md:hidden cursor-pointer font-normal"
					>
						<Button>{showMenu ? <div>Menu</div> : <div>Close</div>}</Button>
					</div>
				</div>

				{/* md and sm menu */}
				<div
					className={`${
						showMenu ? "-translate-y-[950px]" : "translate-y-[0px]"
					} flex flex-col items-center justify-center gap-16 h-[80svh] rounded-xl p-5 my-[50px] bg-dark text-2xl lg:hidden max-md:hidden transition-all ease-in-out duration-500 relative z-10 shadow-2xl`}
				>
					{nav.map((item, id) => (
						<Link
							key={id}
							to={`/#${item.name}`}
							className={`${
								pathMatchRoute(`#${item.name}`) && " font-semibold"
							} capitalize hover:font-medium transition-all ease-in-out duration-300`}
						>
							{/* <a
							href={`/#${item.name}`}
							className={`${
								pathMatchRoute(`#${item.name}`) && " font-semibold"
							} capitalize hover:font-medium transition-all ease-in-out duration-300`}
						> */}
							{item.name}
							{/* </a> */}
						</Link>
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
			</div>
		</section>
	);
}

export default Header;
