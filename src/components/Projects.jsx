import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DISPLAY_NAMES = {
  booktalk: "BookTalk",
  getalead: "GetALead",
  tyler: "Tyler Burrow",
  hotdesk: "HotDesk",
  homer: "Homer",
};

const ACCENT_COLORS = {
  booktalk: "#ffa726",
  getalead: "#bdff68",
  // tyler: "#e066ff",
  tyler: "#CD7F32",
  hotdesk: "#9492f0",
  homer: "#63b3ed",
};

function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const listRef = useRef(null);
  const previewRef = useRef(null);
  const previewImgRef = useRef(null);
  const previewGradRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const previewX = useRef(0);
  const previewY = useRef(0);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((r) => r.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!projects.length || !listRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".project-row").forEach((row, i) => {
        gsap.fromTo(
          row,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              toggleActions: "play none none none",
            },
            delay: i * 0.06,
          }
        );
      });
    }, listRef);
    return () => ctx.revert();
  }, [projects]);

  /* Smooth-follow preview */
  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    const loop = () => {
      previewX.current += (mousePos.current.x - previewX.current) * 0.1;
      previewY.current += (mousePos.current.y - previewY.current) * 0.1;
      if (previewRef.current) {
        gsap.set(previewRef.current, {
          x: previewX.current + 24,
          y: previewY.current - 110,
        });
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const showPreview = (project) => {
    setActiveIndex(project.id);
    if (previewGradRef.current) {
      previewGradRef.current.className = `absolute inset-0 ${project.gradient}`;
    }
    const hasMockup = project.mockup && project.mockup.length > 0;
    if (previewImgRef.current) {
      previewImgRef.current.style.display = hasMockup ? "block" : "none";
      if (hasMockup)
        previewImgRef.current.src =
          project.mockup[project.mockup.length > 1 ? 1 : 0];
    }
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const hidePreview = () => {
    setActiveIndex(null);
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.9,
      rotate: -2,
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <section className="px-8 md:px-6 sm:px-5 pb-32 sm:pb-20 relative">
      {/* Floating image preview (desktop only) */}
      <div
        ref={previewRef}
        className="project-preview fixed top-0 left-0 sm:hidden md:hidden pointer-events-none"
        style={{ opacity: 0 }}
      >
        <div
          ref={previewGradRef}
          className="absolute inset-0 booktalk"
        />
        <img
          ref={previewImgRef}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ display: "none" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {activeIndex && (
            <span className="text-6xl font-michroma opacity-10">
              {
                (DISPLAY_NAMES[
                  projects.find((p) => p.id === activeIndex)?.name
                ] || "")[0]
              }
            </span>
          )}
        </div>
      </div>

      {/* Section label */}
      <div className="mb-14 sm:mb-10">
        <span
          className="text-xs tracking-[0.3em] uppercase font-grotesque"
          style={{ color: "var(--text-muted)" }}
        >
          Selected Work
        </span>
      </div>

      {/* Project list */}
      <div ref={listRef} onMouseLeave={hidePreview}>
        {projects.map((project, i) => {
          const accent = ACCENT_COLORS[project.name] || "#bdff68";
          const isActive = activeIndex === project.id;
          return (
            <Link
              to={`/project/${project.name}`}
              key={project.id}
              className="project-row group block py-8 sm:py-6 relative overflow-hidden"
              style={{
                borderTop: "1px solid var(--text-faint)",
                borderTopOpacity: 0.3,
              }}
              onMouseEnter={() => showPreview(project)}
            >
              {/* Hover fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, ${accent}12 0%, transparent 60%)`,
                }}
              />

              <div className="relative flex items-start justify-between gap-6 sm:gap-3">
                <div className="flex items-start lg:py-20 gap-6 sm:gap-4 flex-1 min-w-0">
                  {/* Number */}
                  <span
                    className="text-xs font-grotesque pt-2 flex-shrink-0 tabular-nums transition-all duration-300"
                    style={{
                      color: isActive ? accent : "var(--text-faint)",
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Name + desc */}
                  <div className="min-w-0">
                    <h3
                      className="text-[clamp(20px,3vw,32px)] font-michroma mb-2 transition-all duration-400 ease-out"
                      style={{
                        color: isActive ? accent : "var(--text-body)",
                        transform: isActive
                          ? "translateX(8px)"
                          : "translateX(0)",
                      }}
                    >
                      {DISPLAY_NAMES[project.name] || project.name}
                    </h3>
                    <p
                      className="text-sm font-grotesque leading-relaxed max-w-lg sm:max-w-xs line-clamp-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {project.previewP}
                    </p>

                    {/* Tech stack — inline text */}
                    <p
                      className="text-xs font-grotesque mt-3 tracking-wide"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {project.stack.slice(0, 4).map((s, si) => (
                        <span key={s.name}>
                          {s.name}
                          {si < Math.min(project.stack.length, 4) - 1 && (
                            <span style={{ color: accent, margin: "0 6px" }}>
                              ·
                            </span>
                          )}
                        </span>
                      ))}
                      {project.isGithub && (
                        <span
                          className="ml-3 px-2 py-0.5 rounded text-[10px] tracking-widest uppercase"
                          style={{
                            border: `1px solid ${accent}60`,
                            color: accent,
                          }}
                        >
                          GitHub
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Meta + arrow */}
                <div className="flex-shrink-0 flex flex-col items-end gap-1.5">
                  <span
                    className="text-xs font-grotesque tracking-widest uppercase sm:hidden"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.type}
                  </span>
                  <span
                    className="text-xs font-grotesque tabular-nums sm:hidden"
                    style={{ color: "var(--text-faint)" }}
                  >
                    {project.year}
                  </span>
                  <span
                    className="text-xl mt-1 transition-all duration-300"
                    style={{
                      color: isActive ? accent : "var(--text-muted)",
                      transform: isActive
                        ? "translate(4px, -4px)"
                        : "translate(0,0)",
                    }}
                  >
                    ↗
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
        <div
          style={{ borderTop: "1px solid var(--text-faint)", opacity: 0.3 }}
        />
      </div>
    </section>
  );
}

export default Projects;
