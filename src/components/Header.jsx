import Button from "../shared/Button";
import { Link, useLocation } from "react-router-dom";

function Header() {
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
		<main className="py-5 px-20">
			<section className="flex justify-between items-center font-normal">
				<Link to="/">
					<h1 className="text-xl font-medium tracking-wider">Safiyah</h1>
				</Link>
				<div className="flex items-center gap-16 text-xl">
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
		</main>
	);
}

export default Header;
