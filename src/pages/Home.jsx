import { useEffect } from "react";
import HomeHero from "../components/Home";
import Projects from "../components/Projects";

function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main id="top">
			<HomeHero />
			<Projects />
		</main>
	);
}

export default Home;
