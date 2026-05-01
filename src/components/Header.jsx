import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";
import ThemeContext from "../context/ThemeContext";

const nav = [
	{ name: "Work", link: "/" },
	{ name: "About", link: "/about" },
	{ name: "Papers", link: "/papers" },
];

function Header() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 30);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		setMenuOpen(false);
	}, [location]);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => { document.body.style.overflow = ""; };
	}, [menuOpen]);

	return (
		<>
			<header
				className={`fixed top-0 left-0 right-0 z-50 px-8 sm:px-5 py-5 flex items-center justify-between transition-all duration-500 ${
					scrolled
						? theme === "dark"
							? "bg-dark/90 backdrop-blur-md"
							: "bg-light/90 backdrop-blur-md"
						: "bg-transparent"
				}`}
				style={scrolled ? { borderBottom: "1px solid var(--text-faint)" } : {}}
			>
				<Link to="/" className="font-michroma text-base tracking-widest">
					Safiyah
				</Link>

				{/* Desktop nav */}
				<nav className="hidden lg:flex items-center gap-10">
					{nav.map((item) => (
						<Link
							key={item.name}
							to={item.link}
							className="text-xs tracking-[0.25em] uppercase font-grotesque transition-all duration-300"
							style={{
								color: location.pathname === item.link
									? "#bdff68"
									: "var(--text-muted)",
							}}
						>
							{item.name}
						</Link>
					))}
					<button
						onClick={toggleTheme}
						className="transition-opacity hover:opacity-100"
						style={{ color: "var(--text-muted)" }}
						aria-label="Toggle theme"
					>
						{theme === "dark" ? <BsSun size={14} /> : <BsMoon size={14} />}
					</button>
					<a
						href="#contact"
						className="text-xs tracking-[0.25em] uppercase px-5 py-2 rounded-full font-grotesque transition-all duration-300 hover:bg-green hover:text-dark"
						style={{
							border: "1px solid var(--text-muted)",
							color: "var(--text-secondary)",
						}}
					>
						Get in touch
					</a>
				</nav>

				{/* Mobile controls */}
				<div className="lg:hidden flex items-center gap-5">
					<button
						onClick={toggleTheme}
						style={{ color: "var(--text-muted)" }}
						aria-label="Toggle theme"
					>
						{theme === "dark" ? <BsSun size={14} /> : <BsMoon size={14} />}
					</button>
					<button
						onClick={() => setMenuOpen((v) => !v)}
						className="text-xs tracking-[0.25em] uppercase font-grotesque"
						style={{ color: "var(--text-secondary)" }}
					>
						{menuOpen ? "Close" : "Menu"}
					</button>
				</div>
			</header>

			{/* Mobile overlay */}
			<div
				className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-12 transition-all duration-500 lg:hidden ${
					theme === "dark" ? "bg-dark" : "bg-light"
				} ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
			>
				{nav.map((item) => (
					<Link
						key={item.name}
						to={item.link}
						className="font-michroma text-[clamp(28px,8vw,48px)] tracking-widest hover:opacity-60 transition-opacity"
					>
						{item.name}
					</Link>
				))}
				<a
					href="#contact"
					className="mt-4 text-xs tracking-[0.3em] uppercase px-8 py-3 rounded-full font-grotesque"
					style={{ border: "1px solid #bdff68", color: "#bdff68" }}
				>
					Get in touch
				</a>
			</div>
		</>
	);
}

export default Header;
