import Button from "./../shared/Button";

function Home() {
	return (
		<main
			id="#home"
			className="lg:pl-40 w-full h-[80svh] text-xl"
		>
			<div className="flex flex-col gap-8">
				<h1 className="tracking-widest leading-tight lg:text-[80px] md:text-[63px] sm:text-[40px] lg:w-3/4">
					Full-Stack Developer
				</h1>
				{/* <h1>Developer</h1> */}
				<p className="lg:w-1/2 w-3/4">
					Hi, I’m Safiyah , I develop beautiful and efficient websites and web
					apps. When i&apos;m not coding, i explore psychology and indulge in
					culinary adventures.
				</p>
				<a
					href="mailto:safiyahmasud@gmail.com"
					className="block w-fit mt-4 mb-6"
				>
					<Button>Get in touch</Button>
				</a>
			</div>
		</main>
	);
}

export default Home;
