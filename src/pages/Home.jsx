import { useEffect } from "react";
import HomePage from "../components/Home";
import Projects from "../pages/Projects";

function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="flex flex-col gap-20">
			<HomePage />
			<Projects />
		</main>
	);
}

export default Home;
