import Phone from "../assets/phone.png";
import Nanny from "../assets/laptop.svg";

function Projects() {
	return (
		<section id="#projects">
			<div className="lg:pl-40 text-xl">
				<div className="bg-p1 rounded-2xl">
					<div className="flex justify-center items-center">
						<img
							src={Phone}
							alt=""
							className="h-64 object-cover rounded-t-2xl"
						/>
						<img
							src={Nanny}
							alt=""
						/>
					</div>
					<h1>Projects</h1>
				</div>
			</div>
		</section>
	);
}

export default Projects;
