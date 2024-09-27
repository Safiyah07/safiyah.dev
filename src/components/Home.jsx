import Button from "./../shared/Button";

function Home() {
	return (
		<section
			id="#home"
			className="lg:pl-40 w-full h-[80svh] text-xl"
		>
			<div className="flex flex-col gap-8">
				<h1 className="tracking-widest leading-tight text-[80px] md:text-[60px] sm:text-[40px] lg:w-3/4">
					Full-Stack Developer
				</h1>
				{/* <h1>Developer</h1> */}
				<p className="lg:w-1/2 max-md:w-1/2 md:w-3/4 sm:w-4/5">
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
		</section>
	);
}

export default Home;
