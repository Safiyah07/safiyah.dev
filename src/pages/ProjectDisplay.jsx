import Nanny from "../assets/Laptop.svg";
import Button from "./../shared/Button";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Bootstrap from "../assets/bootstrap.png";
import Tailwind from "../assets/tailwind.png";
import Js from "../assets/js.png";
import ReactJs from "../assets/reactjs.png";
import NextJs from "../assets/next.png";

function ProjectDisplay() {
	const frontend = [
		{
			name: "HTML",
			icon: HTML,
		},
		{ name: "CSS", icon: CSS },
		{ name: "Tailwind CSS", icon: Tailwind },
		{ name: "Bootstrap", icon: Bootstrap },
		{ name: "Javascript", icon: Js },
		{ name: "React Js", icon: ReactJs },
		{ name: "Next Js", icon: NextJs },
	];

	return (
		<section className="pt-20 text-xl">
			<div className="flex flex-col gap-10 px-16 py-10 bg-p1 shadow-light-3xl rounded-2xl md:px-10 sm:px-3">
				<div className="flex items-center justify-between">
					<h1>Nanny App</h1>
					<a
						href="https://nanny-9d0g.onrender.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button className={"cursor-pointer"}>View Project</Button>
					</a>
				</div>
				{/* Mockup */}
				<div className="flex flex-col items-center justify-center gap-10 m-auto w-fit">
					<img
						src={Nanny}
						alt=""
						className="object-cover sm:h-40"
					/>
					<div className="w-full h-[15px] bg-shadow opacity-50 rounded-[100%] blur-[10px]"></div>
				</div>

				<div>
					<div className="flex items-center justify-between mb-5">
						<h1>Nanny Finder Project</h1>
						<a
							href="https://nanny-9d0g.onrender.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="sm:hidden"
						>
							<Button className={"cursor-pointer"}>View Project</Button>
						</a>
					</div>

					<div className="flex flex-col gap-5">
						<div className="flex items-baseline gap-2">
							<h1 className="mb-5 text-base">Role:</h1>
							<p>Full-Stack Developer</p>
						</div>

						<div className="">
							<h1 className="text-base">Problem:</h1>
							<ul className="ml-6 list-disc">
								<li>
									Finding a reliable and trustworthy nanny can be a daunting
									task for parents. Traditional methods often involve
									time-consuming searches and personal referrals, which may not
									always yield satisfactory results.
								</li>
							</ul>
						</div>
						<div className="">
							<h1 className="text-base">Solution:</h1>
							<ul className="ml-6 list-disc">
								<li>
									Streamline the process of finding a nanny by providing a
									user-friendly online platform.
								</li>
							</ul>
						</div>

						{/* Mockup */}
						<div className="flex flex-col items-center justify-center gap-10 m-auto my-20 w-fit">
							<img
								src={Nanny}
								alt=""
								className="object-cover sm:h-40"
							/>
							<div className="w-full h-[15px] bg-shadow opacity-50 rounded-[100%] blur-[10px]"></div>
						</div>

						{/* key features */}
						<div className="flex flex-col gap-2">
							<h1 className="mb-5 text-base">Key features include:</h1>
							<ul className="ml-6 list-disc">
								<li>
									Easy Registration: I implemented an intuitive registration
									system that allows parents and nannies to create profiles and
									sign up effortlessly.
								</li>
								<li>
									Intuitive Dashboard: Both parents and nannies have access to a
									well-organized dashboard for managing their profiles,
									searching for matches, and communicating.
								</li>
								<li>
									Filter Search: Parents can use advanced filters to search for
									nannies based on location, experience, availability, and
									specific requirements, such as caring for children with
									special needs. Comprehensive Nanny Profiles: Nanny profiles
									include detailed information about their qualifications,
									experience and availability.
								</li>
								<li>
									Backend APIs: I developed and integrated several APIs to
									handle the core functionalities, including user
									authentication, nanny profiles, and search queries.
								</li>
								<li>
									MongoDB Database: The app uses MongoDB to store user and nanny
									data, ensuring that all information is securely handled and
									easily accessible, ensuring scalability and flexibility.
								</li>
								<li>
									Special Needs Accommodation: The platform offers options for
									parents to add detailed information about their child’s
									special needs, helping them find nannies with the appropriate
									skills and experience and nannies are well-informed and
									prepared.
								</li>
							</ul>
						</div>

						{/* Tech Stack */}
						<div className="">
							<h1 className="mb-5 text-base">Tech Stack:</h1>
							<div className="grid w-full grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
								{frontend.map((item, id) => (
									<div
										key={id}
										className="flex items-center justify-center w-40 gap-3 py-2 mb-5 border rounded-full sm:gap-2 sm:w-36"
									>
										<img
											src={item.icon}
											className="w-5"
											alt=""
										/>
										<p>{item.name}</p>
									</div>
								))}
							</div>
						</div>

						{/* Conclusion */}
						<p>
							The app delivers both performance and aesthetics. This project
							reflects my focus on solving real-world problems by combining
							clean design with robust, scalable code to create a seamless user
							experience.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProjectDisplay;
