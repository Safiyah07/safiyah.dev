import HomePage from "../components/Home";
import Projects from "../components/Projects";

function Home() {
	return (
		<main className="translate-y-32 sm:translate-y-44 absolute top-0 flex flex-col gap-20">
			<HomePage />
			<Projects />
		</main>
	);
}

export default Home;
