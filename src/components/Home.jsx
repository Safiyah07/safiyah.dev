import { useContext } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import BlackStar from "../assets/black-star.svg";
import WhiteStar from "../assets/white-star.svg";
import ThemeContext from "../context/ThemeContext";
import Button from "./../shared/Button";

function Home() {
	const { theme } = useContext(ThemeContext);

	return (
		<section
			id="home"
			className="flex flex-col items-center justify-center h-svh"
		>
			<div className="w-full text-xl lg:pl-40 md:pb-10 sm:pb-10">
				<div className="flex flex-col gap-8">
					<div className="tracking-widest leading-tight text-[80px] md:text-[60px] sm:text-[35px] lg:w-3/4">
						<h1 className="flex gap-10 md:gap-3 sm:gap-4">
							Full-Stack
							<img
								src={`${theme === "dark" ? WhiteStar : BlackStar}`}
								alt=""
								className="w-10 md:w-8 sm:w-8 animate-pulse"
							/>
						</h1>
						<h1 className="flex gap-32 md:gap-12 sm:gap-12">
							Developer{" "}
							<img
								src={`${theme === "dark" ? WhiteStar : BlackStar}`}
								alt=""
								className="w-10 md:w-8 sm:w-8 animate-pulse"
							/>
						</h1>
					</div>
					{/* <h1>Developer</h1> */}
					<p className="lg:w-1/2 max-md:w-1/2 md:w-3/4 sm:w-full">
						Hi, I’m Safiyah👋, I develop beautiful and efficient websites and
						web apps. When i&apos;m not coding, i explore psychology and indulge
						in culinary adventures.
					</p>
					<a
						href="mailto:safiyahmasud@gmail.com"
						className="block mt-4 mb-6 w-fit lg:mb-0 max-md:mb-0"
					>
						<Button>Get in touch</Button>
					</a>
				</div>
			</div>

			<div className="flex items-center justify-center animate-bounce">
				<BsChevronDoubleDown size={30} />
			</div>
		</section>
	);
}

export default Home;
