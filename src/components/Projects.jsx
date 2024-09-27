import Nanny from "../assets/nanny-mockup.svg";

function Projects() {
	return (
		<section id="#projects">
			<div className="lg:pl-40 w-full text-xl">
				<div className="bg-p1 rounded-2xl">
					<img
						src={Nanny}
						alt=""
					/>
					<h1>Projects</h1>
				</div>
			</div>
		</section>
	);
}

export default Projects;
