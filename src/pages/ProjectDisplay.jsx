import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import { BsArrowLeft } from "react-icons/bs";

const DISPLAY_NAMES = {
	booktalk: "BookTalk",
	getalead: "GetALead",
	tyler: "Tyler Burrow",
	hotdesk: "HotDesk",
	homer: "Homer",
};

const ACCENT_COLORS = {
	booktalk: "#63b3ed",
	getalead: "#bdff68",
	tyler: "#e066ff",
	hotdesk: "#9492f0",
	homer: "#ffa726",
};

function ProjectDisplay() {
	const { name } = useParams();
	const [project, setProject] = useState(null);
	const pageRef = useRef(null);

	useEffect(() => {
		fetch("/data/projects.json")
			.then((r) => r.json())
			.then((data) => setProject(data.find((p) => p.name === name)))
			.catch(console.error);
	}, [name]);

	useEffect(() => {
		if (!project || !pageRef.current) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(
				".pd-reveal",
				{ y: 30, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, stagger: 0.09, ease: "power3.out" }
			);
		}, pageRef);
		return () => ctx.revert();
	}, [project]);

	if (!project) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<span className="text-xs tracking-[0.3em] uppercase font-grotesque" style={{ color: "var(--text-faint)" }}>
					Loading...
				</span>
			</div>
		);
	}

	const displayName = DISPLAY_NAMES[project.name] || project.name;
	const accent = ACCENT_COLORS[project.name] || "#bdff68";
	const hasMockups = project.mockup && project.mockup.length > 0;

	return (
		<main ref={pageRef} id="top" className="px-8 md:px-6 sm:px-5 pt-28 pb-24">

			{/* Back */}
			<Link
				to="/"
				className="pd-reveal inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-grotesque mb-14 sm:mb-10 transition-all duration-300 hover:gap-4"
				style={{ color: "var(--text-muted)" }}
			>
				<BsArrowLeft size={11} /> Back to Work
			</Link>

			{/* Header */}
			<div className="pd-reveal mb-14 sm:mb-10">
				<div className="flex items-center gap-3 mb-5 flex-wrap">
					<span className="text-xs tracking-widest uppercase font-grotesque" style={{ color: accent }}>{project.type}</span>
					<span style={{ color: "var(--text-faint)" }}>—</span>
					<span className="text-xs tracking-widest uppercase font-grotesque" style={{ color: "var(--text-muted)" }}>{project.year}</span>
					<span style={{ color: "var(--text-faint)" }}>—</span>
					<span className="text-xs tracking-widest uppercase font-grotesque" style={{ color: "var(--text-muted)" }}>{project.role}</span>
				</div>
				<div className="flex items-end justify-between sm:flex-col sm:items-start sm:gap-7">
					<h1 className="text-[clamp(36px,6vw,80px)] leading-[1.0] tracking-tight">
						{displayName}
					</h1>
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-shrink-0 flex items-center gap-2 text-xs tracking-[0.25em] uppercase px-7 py-3 rounded-full font-grotesque transition-all duration-300 hover:gap-4"
						style={{ border: `1px solid ${accent}`, color: accent }}
					>
						{project.isGithub ? "View on GitHub" : "View Live"} ↗
					</a>
				</div>
			</div>

			{/* Hero: mockup or gradient */}
			<div className={`pd-reveal ${project.gradient} rounded-2xl mb-14 sm:mb-10 overflow-hidden`}>
				{hasMockups ? (
					<img
						src={project.mockup[project.mockup.length > 1 ? 1 : 0]}
						alt={`${displayName} preview`}
						className="w-full object-cover max-h-[520px]"
					/>
				) : (
					<div className="flex items-center justify-center h-64 sm:h-44">
						<span
							className="text-[clamp(60px,12vw,120px)] font-michroma"
							style={{ color: accent, opacity: 0.15 }}
						>
							{displayName.charAt(0)}
						</span>
					</div>
				)}
			</div>

			{/* Content grid */}
			<div className="grid grid-cols-3 sm:grid-cols-1 gap-12 sm:gap-8 mb-14">
				{[
					{ label: "Overview", text: project.previewP },
					{ label: "Problem", text: project.problem },
					{ label: "Solution", text: project.solution },
				].map(({ label, text }) => (
					<div key={label} className="pd-reveal">
						<span
							className="text-[11px] tracking-[0.3em] uppercase font-grotesque block mb-3"
							style={{ color: accent }}
						>
							{label}
						</span>
						<p className="text-base font-grotesque leading-relaxed" style={{ color: "var(--text-secondary)" }}>
							{text}
						</p>
					</div>
				))}
			</div>

			{/* Second mockup */}
			{hasMockups && project.mockup.length > 2 && (
				<div className="pd-reveal mb-14">
					<img
						src={project.mockup[2]}
						alt={`${displayName} detail`}
						className="w-full object-cover rounded-xl max-h-[600px]"
					/>
				</div>
			)}

			{/* Features */}
			<div className="pd-reveal mb-14">
				<span
					className="text-xs tracking-[0.3em] uppercase font-grotesque block mb-8 sm:mb-6"
					style={{ color: accent }}
				>
					Key Features
				</span>
				<div className="grid grid-cols-2 sm:grid-cols-1 gap-5">
					{project.features.map((f, i) => (
						<div key={i} className="flex gap-4">
							<span
								className="text-[11px] font-grotesque pt-0.5 flex-shrink-0 tabular-nums"
								style={{ color: accent, opacity: 0.7 }}
							>
								{String(i + 1).padStart(2, "0")}
							</span>
							<p className="text-base font-grotesque leading-relaxed" style={{ color: "var(--text-secondary)" }}>
								{f.list}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Tech stack */}
			<div className="pd-reveal mb-14">
				<span
					className="text-xs tracking-[0.3em] uppercase font-grotesque block mb-6"
					style={{ color: accent }}
				>
					Tech Stack
				</span>
				<div className="flex flex-wrap gap-x-8 gap-y-2">
					{project.stack.map((s) => (
						<span key={s.name} className="text-base font-grotesque" style={{ color: "var(--text-secondary)" }}>
							{s.name}
						</span>
					))}
				</div>
			</div>

			{/* Outro */}
			<div
				className="pd-reveal pt-12"
				style={{ borderTop: "1px solid var(--text-faint)" }}
			>
				<p className="text-lg sm:text-base font-grotesque leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
					{project.outro}
				</p>
			</div>
		</main>
	);
}

export default ProjectDisplay;
