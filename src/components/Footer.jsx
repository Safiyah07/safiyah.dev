import { Link } from "react-router-dom";
import Button from "../shared/Button";
import { BsArrowUp, BsMoon, BsSun } from "react-icons/bs";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Footer() {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<section className="pt-20 text-2xl">
			<Button>
				<div>
					<div className="flex justify-between gap-20 px-16 py-20 md:px-5 sm:px-5 md:flex-col sm:flex-col md:gap-10 sm:gap-10">
						<div className="flex flex-col w-3/5 gap-20 md:gap-10 sm:gap-10 md:w-full sm:w-full">
							<h1 className="tracking-widest md:tracking-wide leading-tight text-[50px] max-md:text-[40px] md:text-[40px] sm:text-2xl capitalize">
								Let&apos;s talk about your project
							</h1>
							<Button className={"px-7"}>
								<a href="mailto:safiyahmasud@gmail.com">Get in touch</a>
							</Button>
						</div>

						<div className="flex flex-col gap-5 sm:items-center">
							<Button
								className={`${theme === "dark" ? "dark-btn" : "light-btn"}`}
							>
								<div className="flex items-center justify-center gap-10 ">
									<BsSun
										// size={20}
										className="z-10 cursor-pointer"
										onClick={() => setTheme("light")}
									/>{" "}
									<BsMoon
										// size={20}
										className={` cursor-pointer z-10`}
										onClick={() => setTheme("dark")}
									/>
								</div>
							</Button>
							<Link to={"/about"}>CV</Link>
							<Link to={"https://www.linkedin.com/in/safiyah-amedu-9424b6230/"}>
								LinkedIn
							</Link>
							<Link to={"https://twitter.com/Sa_fi_yah"}>Twitter/X</Link>
						</div>
					</div>

					<a
						href="#home"
						className="flex justify-end pb-10 pr-20 cursor-pointer md:pr-0 sm:pr-0"
					>
						<Button className={"px-[10px] py-2 rounded-full"}>
							<BsArrowUp />
						</Button>
					</a>
				</div>
			</Button>
		</section>
	);
}

export default Footer;
