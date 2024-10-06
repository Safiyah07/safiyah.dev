import HomePage from "../components/Home";
import Projects from "../pages/Projects";

function Home() {
	return (
		<main className="flex flex-col gap-20">
			<HomePage />
			<Projects />
		</main>
	);
}

export default Home;
