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
					<div className="flex md:flex-col sm:flex-col gap-20 md:gap-10 sm:gap-10 px-20 md:pl-0 sm:px-0 py-20 justify-between">
						<div className="flex flex-col gap-20 md:gap-10 sm:gap-10 md:w-full sm:w-full w-3/5">
							<h1 className="tracking-widest leading-tight text-[50px] max-md:text-[40px] md:text-3xl sm:text-2xl capitalize">
								Let&apos;s talk about your project
							</h1>
							<Button>
								<a href="mailto:safiyahmasud@gmail.com">Get in touch</a>
							</Button>
						</div>

						<div className="flex flex-col gap-5">
							<Button className={""}>
								<div className="flex gap-5">
									<BsSun
										className="cursor-pointer"
										onClick={() => setTheme("light")}
									/>{" "}
									<BsMoon
										className={`${
											theme === "dark" && "bg-purple"
										} cursor-pointer`}
										onClick={() => setTheme("dark")}
									/>
								</div>
							</Button>
							<Link to={"/about"}>CV</Link>
							<Link to={"/about"}>LinkedIn</Link>
							<Link to={"/about"}>Twitter/X</Link>
						</div>
					</div>

					<div className="flex justify-end pr-20 pb-10">
						<Button className={"px-[10px] py-2 rounded-full"}>
							<BsArrowUp />
						</Button>
					</div>
				</div>
			</Button>
		</section>
	);
}

export default Footer;
