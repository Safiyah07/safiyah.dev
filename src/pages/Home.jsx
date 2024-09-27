import HomePage from "../components/Home";
import Projects from "../components/Projects";

function Home() {
	return (
		<main className="translate-y-32 sm:translate-y-44 flex flex-col gap-20 h-fit">
			<HomePage />
			<Projects />
		</main>
	);
}

export default Home;
