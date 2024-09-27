import { Link } from "react-router-dom";
import Button from "../shared/Button";

function Footer() {
	return (
		<section className="pt-20 text-2xl">
			<Button>
				<div className="flex px-20 py-20 justify-between">
					<div className="flex flex-col gap-20 w-3/5">
						<h1 className="tracking-widest leading-tight text-[50px] md:text-[40px] sm:text-[35px] capitalize">
							Let&apos;s talk about your project
						</h1>
						<Button>
							<a href="mailto:safiyahmasud@gmail.com">Get in touch</a>
						</Button>
					</div>

					<div className="flex flex-col">
						<Link to={"/about"}>CV</Link>
						<Link to={"/about"}>LinkedIn</Link>
						<Link to={"/about"}>Twitter/X</Link>
					</div>
				</div>
			</Button>
		</section>
	);
}

export default Footer;
