function Home() {
	const nav = [
		{
			name: "home",
		},
		{
			name: "projects",
		},
		{
			name: "about",
		},
	];
	return (
		<main className="py-5 px-10">
			<section className="flex justify-between">
				<h1 className="text-xl font-semibold">Safiyah</h1>
				<ul className="flex gap-4 capitalize">
					{nav.map((item, id) => (
						<li key={id}>{item.name}</li>
					))}
					<li>Get in touch</li>
				</ul>
			</section>
		</main>
	);
}

export default Home;
