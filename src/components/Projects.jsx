import { Link } from "react-router-dom";
import Phone from "../assets/phone.png";
import Nanny from "../assets/laptop.svg";
import Button from "../shared/Button";

function Projects() {
	return (
		<section id="projects">
			<div className="text-xl lg:pl-40 lg:w-4/5">
				<h1 className="pb-20 text-3xl sm:text-xl sm:pb-10">Case Studies</h1>
				<div className="flex flex-col gap-10 px-16 py-10 bg-p1 shadow-light-3xl rounded-2xl md:px-10 sm:px-3">
					<div className="flex flex-col self-center gap-10 w-max">
						<div className="flex items-center justify-center">
							<img
								src={Phone}
								alt=""
								className="relative hidden object-cover h-64 rounded-t-2xl sm:hidden md:hidden"
							/>
							<img
								src={Nanny}
								alt=""
								className="object-cover sm:h-40"
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
						<Link to="/display">See Project</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Projects;
