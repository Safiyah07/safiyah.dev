import { Link } from "react-router-dom";
import DarkButton from "../shared/DarkButton";

function Home() {
	const nav = [
		{
			name: "home",
		},
		{
			name: "projects",
		},
		{
			name: "about",
		},
	];
	return (
		<main className="py-5 px-20">
			<section className="flex justify-between font-normal">
				<h1 className="text-xl font-medium tracking-wider">Safiyah</h1>
				<div className="flex items-center gap-16 capitalize">
					{nav.map((item, id) => (
						<Link
							to={`/${item.name}`}
							key={id}
						>
							{item.name}
						</Link>
					))}
					<DarkButton>
						<a href="mailto:safiyahmasud@gmail.com">Get in touch</a>
					</DarkButton>
				</div>
			</section>
		</main>
	);
}

export default Home;
