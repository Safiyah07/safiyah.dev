import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { LoadedContext } from "../context/LoadedContext";

function HomeHero() {
  const loaded = useContext(LoadedContext);
  const heroRef = useRef(null);

  useEffect(() => {
    if (!loaded) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-word",
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1.2,
          stagger: 0.08,
          ease: "power4.out",
          delay: 0.1,
        }
      );
      gsap.fromTo(
        ".hero-sub",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [loaded]);

  return (
    <section
      ref={heroRef}
      className="min-h-svh flex flex-col justify-center px-8 md:px-6 sm:px-5 pt-24 pb-20 relative"
    >
      {/* Top label row */}
      <div className="hero-sub flex items-center justify-between mb-14 sm:mb-10">
        <span
          className="text-sm font-medium tracking-[0.2em] uppercase font-grotesque"
          style={{ color: "var(--text-muted)" }}
        >
          Full-Stack Developer
        </span>
        <div className="flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse"
            style={{ background: "var(--green)" }}
          />
          <span
            className="text-sm font-medium tracking-[0.2em] uppercase font-grotesque"
            style={{ color: "var(--green)" }}
          >
            Available for work
          </span>
        </div>
      </div>

      {/* Display heading */}
      <div className="mb-14 sm:mb-10">
        <div className="clip-text">
          <h1 className="hero-word text-[clamp(56px,11vw,150px)] leading-[0.9] tracking-tight">
            Full-Stack
          </h1>
        </div>
        <div className="clip-text">
          <h1
            className="hero-word text-[clamp(56px,11vw,150px)] leading-[0.9] tracking-tight"
            style={{ WebkitTextStroke: "1px currentColor" }}
          >
            Developer
          </h1>
        </div>
      </div>

      {/* Divider */}
      <div
        className="hero-sub w-full h-px mb-14 sm:mb-10"
        style={{ background: "var(--text-faint)", opacity: 0.4 }}
      />

      {/* Sub row */}
      <div className="flex items-end justify-between gap-10 sm:flex-col sm:items-start sm:gap-8">
        <p
          className="hero-sub text-2xl sm:text-xl font-grotesque leading-relaxed max-w-md"
          style={{ color: "var(--text-secondary)" }}
        >
          Hi, I&apos;m Safiyah 👋, I build digital products that are as
          performant as they are beautiful.
        </p>
        <a
          href="#contact"
          className="hero-sub flex-shrink-0 inline-flex items-center gap-3 text-sm font-medium tracking-[0.2em] uppercase px-7 py-3.5 rounded-full font-grotesque transition-all duration-300 hover:gap-5"
          style={{
            border: "1px solid var(--green)",
            color: "var(--green)",
          }}
        >
          Get in touch <span>↗</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="hero-sub absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span
          className="text-xs font-medium tracking-[0.25em] uppercase font-grotesque"
          style={{ color: "var(--text-faint)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-10 animate-pulse"
          style={{ background: "var(--text-faint)" }}
        />
      </div>
    </section>
  );
}

export default HomeHero;
