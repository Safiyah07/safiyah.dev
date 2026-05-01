import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Preloader({ onComplete }) {
	const overlayRef = useRef(null);
	const counterRef = useRef(null);
	const progressRef = useRef(null);
	const labelRef = useRef(null);

	useEffect(() => {
		const counter = { val: 0 };

		const tl = gsap.timeline();

		tl.to(counter, {
			val: 100,
			duration: 2.8,
			ease: "power2.inOut",
			onUpdate() {
				const v = Math.round(counter.val);
				if (counterRef.current) counterRef.current.textContent = v;
				if (progressRef.current)
					progressRef.current.style.transform = `scaleX(${v / 100})`;
			},
		})
			.to(
				labelRef.current,
				{ opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
				"-=1"
			)
			.to(overlayRef.current, {
				yPercent: -100,
				duration: 1.2,
				ease: "power4.inOut",
				delay: 0.3,
				onComplete,
			});

		return () => tl.kill();
	}, [onComplete]);

	return (
		<div
			ref={overlayRef}
			className="fixed inset-0 z-[9999] bg-dark flex flex-col items-center justify-center overflow-hidden select-none"
		>
			<span className="absolute top-8 left-8 text-xs tracking-[0.3em] text-white/40 uppercase font-grotesque">
				safiyah.dev
			</span>

			<div
				ref={counterRef}
				className="text-[clamp(80px,20vw,180px)] leading-none text-white/90 font-michroma tabular-nums"
			>
				0
			</div>

			<span
				ref={labelRef}
				className="mt-6 text-xs tracking-[0.4em] text-white/40 uppercase font-grotesque"
				style={{ opacity: 0, transform: "translateY(12px)" }}
			>
				Loading portfolio
			</span>

			<div className="absolute bottom-0 left-0 w-full h-px bg-white/10">
				<div
					ref={progressRef}
					className="h-full bg-green origin-left"
					style={{ transform: "scaleX(0)" }}
				/>
			</div>
		</div>
	);
}

export default Preloader;
