import HomePage from "../components/Home";
import Projects from "../components/Projects";

function Home() {
	return (
		<main className="pt-32 sm:pt-44 flex flex-col gap-20">
			<HomePage />
			<Projects />
		</main>
	);
}

export default Home;
