import Phone from "../assets/phone.png";
import Nanny from "../assets/laptop.svg";
import Button from "../shared/Button";
import { Link } from "react-router-dom";

function Projects() {
	return (
		<section id="projects">
			<div className="lg:pl-40 lg:w-4/5 text-xl">
				<h1 className="text-3xl sm:text-xl pb-20 sm:pb-10">Case Studies</h1>
				<div className="bg-p1 rounded-2xl flex flex-col gap-10 px-16 py-10 md:px-10 sm:px-3">
					<div className="flex flex-col sm:self-center gap-10 w-max">
						<div className="flex justify-center items-center">
							<img
								src={Phone}
								alt=""
								className="h-64 object-cover rounded-t-2xl sm:hidden md:hidden"
							/>
							<img
								src={Nanny}
								alt=""
								className="sm:h-40 object-cover"
							/>
						</div>
						<div className="w-auto h-[15px] bg-shadow opacity-50 rounded-[100%] blur-[10px]"></div>
					</div>

					<h1 className="sm:text-lg">
						Designed to bridge the gap between parents and nannies.
					</h1>
					<p>
						I developed both the frontend and backend of a web app that
						simplifies the process of finding the right nanny. The platform
						offers intuitive search features and seamless functionality to
						connect parents with suitable nannies efficiently.
					</p>

					<Button>
						<Link to="/">See Project</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Projects;
