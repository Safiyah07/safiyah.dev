import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Cursor() {
	const dotRef = useRef(null);
	const ringRef = useRef(null);

	useEffect(() => {
		if (window.matchMedia("(pointer: coarse)").matches) return;

		let mx = window.innerWidth / 2;
		let my = window.innerHeight / 2;
		let rx = mx,
			ry = my;
		let raf;

		const onMove = (e) => {
			mx = e.clientX;
			my = e.clientY;
			gsap.set(dotRef.current, { x: mx, y: my });
		};

		const loop = () => {
			rx += (mx - rx) * 0.12;
			ry += (my - ry) * 0.12;
			gsap.set(ringRef.current, { x: rx, y: ry });
			raf = requestAnimationFrame(loop);
		};

		const grow = () => {
			gsap.to(ringRef.current, { scale: 2.5, duration: 0.3, ease: "power2.out" });
			gsap.to(dotRef.current, { opacity: 0, duration: 0.2 });
		};

		const shrink = () => {
			gsap.to(ringRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
			gsap.to(dotRef.current, { opacity: 1, duration: 0.2 });
		};

		document.addEventListener("mousemove", onMove);
		raf = requestAnimationFrame(loop);

		const attachHovers = () => {
			document.querySelectorAll("a, button").forEach((el) => {
				el.removeEventListener("mouseenter", grow);
				el.removeEventListener("mouseleave", shrink);
				el.addEventListener("mouseenter", grow);
				el.addEventListener("mouseleave", shrink);
			});
		};

		attachHovers();
		const observer = new MutationObserver(attachHovers);
		observer.observe(document.body, { childList: true, subtree: true });

		return () => {
			document.removeEventListener("mousemove", onMove);
			cancelAnimationFrame(raf);
			observer.disconnect();
		};
	}, []);

	return (
		<>
			<div
				ref={dotRef}
				className="fixed top-0 left-0 w-2 h-2 rounded-full bg-green pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
			/>
			<div
				ref={ringRef}
				className="fixed top-0 left-0 w-9 h-9 rounded-full border border-green/50 pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2"
			/>
		</>
	);
}

export default Cursor;
