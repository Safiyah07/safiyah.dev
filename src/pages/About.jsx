import {
	FaBootstrap,
	FaCss3,
	FaCss3Alt,
	FaFigma,
	FaHtml5,
	FaJs,
	FaNodeJs,
	FaReact,
} from "react-icons/fa";
import Button from "../shared/Button";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

function About() {
	const frontend = [
		{ name: "HTML", icon: <FaHtml5 /> },
		{ name: "CSS", icon: <FaCss3Alt /> },
		{ name: "Tailwind CSS", icon: <SiTailwindcss /> },
		{ name: "Bootstrap", icon: <FaBootstrap /> },
		{ name: "Javascript", icon: <FaJs /> },
		{ name: "React Js", icon: <FaReact /> },
		{ name: "Next Js", icon: <RiNextjsFill /> },
	];

	const backend = [
		{ name: "Node Js", icon: <FaNodeJs /> },
		{ name: "Express Js", icon: <FaCss3Alt /> },
	];

	const db = [
		{ name: "MongoDB", icon: <FaHtml5 /> },
		{ name: "Contentful", icon: <FaCss3Alt /> },
		{ name: "Firebase", icon: <SiFirebase /> },
	];

	const aSkills = [
		{ name: "Figma", icon: <FaFigma /> },
		{ name: "PhotoPea", icon: <FaCss3Alt /> },
	];

	return (
		<main className="pt-32 sm:pt-44 flex flex-col gap-20 text-xl">
			<section className="pb-36">
				<h1 className="text-2xl sm:text-xl mb-4">Hey There, I’m Safiyah</h1>

				<p>
					A freelance full-stack developer with 2 years of experience under my
					belt, I started my career as a frontend developer at Pryde Lab. After
					some convincing (and a little curiosity), I dipped my toes into
					backend development and now, I’m all in! I’ve been loving the
					full-stack journey so far, and while I’m currently freelancing, I’m
					always on the lookout for the next exciting project.
				</p>
				<br />
				<p>
					Beyond my coding skills, I’m also a passionate advocate for mental
					health. I believe in the power of open conversations and empathy to
					create a supportive and inclusive work environment. So, if you ever
					need a friendly ear or a shoulder to lean on, I’m here for you.
				</p>
			</section>
			<section className="">
				<Button className={"py-20 w-full px-28"}>
					<h1 className="text-2xl sm:text-xl mb-10">What i can do for you</h1>

					<div className="flex justify-between gap-[100px]">
						<div>
							<h1 className="mb-5">Frontend Development</h1>
							<ul className="list-disc ml-[1.4rem] flex flex-col gap-5">
								<li>Build responsive and interactive UIs.</li>
								<li>Develop dynamic apps.</li>
								<li>Implement website and web app designs.</li>
								<li>
									Implement style using Bootstrap / Tailwind CSS(Daisy UI).
								</li>
							</ul>
						</div>

						<div>
							<h1 className="mb-5">Backend Development</h1>
							<ul className="list-disc ml-[1.4rem] flex flex-col gap-5">
								<li>Create robust APIs with Node.js and Express.js.</li>
								<li>Manage databases using MongoDB.</li>
								<li>Integrate headless CMS with Contentful and Firebase.</li>
							</ul>
						</div>
					</div>
				</Button>
			</section>
			<section>
				<h1 className="text-2xl sm:text-xl mb-10">Tech Stack / Tools</h1>
				<div className="flex flex-col gap-10">
					{/* frontend */}
					<div>
						<h1 className="mb-5 text-lg">Frontend</h1>
						<div className="grid grid-cols-4 w-full">
							{frontend.map((item, id) => (
								<div
									key={id}
									className="flex justify-center items-center gap-3 mb-5 border w-40 py-2 rounded-full"
								>
									{item.icon}
									<p>{item.name}</p>
								</div>
							))}
						</div>
					</div>

					{/* backend */}
					<div>
						<h1 className="mb-5 text-lg">Backend</h1>
						<div className="grid grid-cols-4 w-full">
							{backend.map((item, id) => (
								<div
									key={id}
									className="flex justify-center items-center gap-3 mb-5 border w-40 py-2 rounded-full"
								>
									{item.icon}
									<p>{item.name}</p>
								</div>
							))}
						</div>
					</div>

					{/* db and cms */}
					<div>
						<h1 className="mb-5 text-lg">Database / Content Management</h1>
						<div className="grid grid-cols-4 w-full">
							{db.map((item, id) => (
								<div
									key={id}
									className="flex justify-center items-center gap-3 mb-5 border w-40 py-2 rounded-full"
								>
									{item.icon}
									<p>{item.name}</p>
								</div>
							))}
						</div>
					</div>

					{/* Additional Skills */}
					<div>
						<h1 className="mb-5 text-lg">Additional Skills (Basics)</h1>
						<div className="grid grid-cols-4 w-full">
							{aSkills.map((item, id) => (
								<div
									key={id}
									className="flex justify-center items-center gap-3 mb-5 border w-40 py-2 rounded-full"
								>
									{item.icon}
									<p>{item.name}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section>
				<p>
					When I’m not coding, you can find me exploring my interests in
					psychology, watching medical procedures (don’t judge!), enjoying
					delicious yogurt, or indulging in freshly baked bread.
				</p>
				<p>
					I’m always open to new opportunities and collaborations. Feel free to
					reach out if you’re interested in working together or simply want to
					have a chat. Let’s create something amazing together!
				</p>
			</section>
		</main>
	);
}

export default About;
