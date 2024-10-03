import { Link } from "react-router-dom";
import Phone from "../../public/phone.png";
import Button from "../shared/Button";
import { useEffect, useState } from "react";

function Projects() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const proj = async () => {
			try {
				const response = await fetch("/data/projects.json");
				const data = await response.json();
				setPosts(data);
			} catch (error) {
				console.log(error);
			}
		};

		proj();
	}, []);

	return (
		<section id="projects">
			<div className="text-xl lg:pl-40 lg:w-4/5">
				<h1 className="pb-20 text-3xl sm:text-xl sm:pb-10">Case Studies</h1>
				<div className="flex flex-col gap-10">
					{posts.map((project) => (
						<div
							key={project.id}
							className={`${project.gradient} flex flex-col gap-10 px-16 py-10 shadow-light-3xl rounded-2xl md:px-10 sm:px-3`}
						>
							<div className="flex flex-col self-center gap-10 w-max">
								<div className="flex items-center justify-center">
									<img
										src={Phone}
										alt=""
										className="relative hidden object-cover h-64 rounded-t-2xl sm:hidden md:hidden"
									/>
									<img
										src={project.mockup[0]}
										alt=""
										className="object-cover sm:h-40"
									/>
								</div>
								<div className="w-auto h-[15px] bg-shadow opacity-50 rounded-[100%] blur-[10px]"></div>
							</div>

							<h1 className="sm:text-lg">{project.previewHeader}</h1>
							<p>{project.previewP}</p>

							<Button>
								<Link to={`project/${project.name}`}>See Project</Link>
							</Button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
