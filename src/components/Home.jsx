import Button from "./../shared/Button";

function Home() {
	return (
		<main
			id="#home"
			className="pl-40 w-full h-[80svh] text-xl"
		>
			<div className="flex flex-col gap-6">
				<h1 className="tracking-widest leading-tight text-[80px] w-3/4">
					Full-Stack Developer
				</h1>
				{/* <h1>Developer</h1> */}
				<p className="w-1/2">
					Hi, I’m Safiyah , I develop beautiful and efficient websites and web
					apps. When i&apos;m not coding, i explore psychology and indulge in
					culinary adventures.
				</p>
				<a
					href="mailto:safiyahmasud@gmail.com"
					className="block w-fit mb-6"
				>
					<Button>Get in touch</Button>
				</a>
			</div>
		</main>
	);
}

export default Home;
