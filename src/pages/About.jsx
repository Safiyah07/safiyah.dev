import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import chat from "../assets/chat.svg";

gsap.registerPlugin(ScrollTrigger);

const frontend = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
];
const backend = ["Node.js", "Express.js", "Prisma ORM", "Java (Basics)"];
const databases = [
  "PostgreSQL",
  "MongoDB",
  "MySQL2",
  "Contentful",
  "Firebase",
  "Supabase",
];
const tools = ["Figma", "Photopea", "Swagger", "Cloudinary", "Fly.io"];

const STACK_GROUPS = [
  { title: "Frontend · 4 years", items: frontend, accent: "#bdff68" },
  { title: "Backend · 2 years", items: backend, accent: "#e066ff" },
  { title: "Database & CMS", items: databases, accent: "#63b3ed" },
  { title: "Tools & Platforms", items: tools, accent: "#ffa726" },
];

const experience = [
  {
    company: "Pixels Solutions Ltd",
    period: "2025 — 2026",
    role: "Software Developer",
    points: [
      "Built scalable backend infrastructure for an edtech platform — user authentication, data management, and API development",
      "Developed full-stack features for an enterprise administrative management system: React components with API integration (frontend) and RESTful APIs with optimised database architecture (backend)",
      "Engineered high-performance backend systems for an engineering platform, focusing on scalability and data processing efficiency",
      "Architected database integration strategies to synchronise data between disparate systems",
      "Collaborated in agile workflows — technical planning, code reviews, and documentation",
    ],
  },
  {
    company: "Freelance",
    period: "2023 — Present",
    role: "Software Developer",
    points: [
      "Delivered full-stack web solutions for diverse clients, specialising in responsive design and modern web technologies",
      "Built citizen engagement platform for AEDC/Water-Board using Next.js and Contentful CMS",
      "Developed MERN stack nanny matching application with location-based search and special needs profiles",
      "Created custom responsive websites, translating designs into pixel-perfect, mobile-first applications",
      "Consistently delivered on time while maintaining direct client communication throughout the development lifecycle",
    ],
  },
];

function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!pageRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-section").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      id="top"
      className="px-8 md:px-6 sm:px-5 pt-32 pb-24 max-w-4xl"
    >
      {/* Intro */}
      <section className="reveal-section mb-24 sm:mb-16">
        <span
          className="text-xs tracking-[0.3em] uppercase font-grotesque block mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          About
        </span>
        <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-tight mb-10">
          Safiyah Amedu
        </h1>
        <div
          className="space-y-5 text-xl sm:text-lg font-grotesque leading-relaxed max-w-2xl"
          style={{ color: "var(--text-secondary)" }}
        >
          <p>
            Experienced in designing and developing scalable databases that
            efficiently handle growing data and user demands. Skilled in
            building robust APIs using modern architectures like REST, optimised
            for high performance and availability.
          </p>
          <p>
            Proficient in developing dynamic and responsive websites with clean,
            maintainable code that enhances user experience. Adept at consuming
            APIs to integrate diverse functionalities seamlessly into
            applications.
          </p>
        </div>
        <img
          src={chat}
          alt=""
          className="self-end float-end block w-24"
        />
      </section>

      {/* What makes me stand out */}
      <section className="reveal-section mb-24 sm:mb-16">
        <div
          className="rounded-2xl p-10 sm:p-7"
          style={{
            background: "linear-gradient(135deg, #bdff6812 0%, #e066ff08 100%)",
            border: "1px solid #bdff6825",
          }}
        >
          <span
            className="text-xs tracking-[0.3em] uppercase font-grotesque block mb-6"
            style={{ color: "#bdff68" }}
          >
            What makes me stand out
          </span>
          <p
            className="text-xl sm:text-lg font-grotesque leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            I combine AI integration, UI clarity with backend depth. Whether
            it&apos;s scaling a database, structuring an API, or converting HTML
            into reusable React components, I build systems that are fast,
            maintainable, and easy to extend. I&apos;m quick to understand
            problems, quicker to solve them, and always focused on real user
            impact.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="reveal-section mb-24 sm:mb-16">
        <span
          className="text-xs tracking-[0.3em] uppercase font-grotesque block mb-12 sm:mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          Experience
        </span>
        <div className="space-y-14 sm:space-y-10">
          {experience.map((job) => (
            <div key={job.company}>
              <div className="flex items-start justify-between sm:flex-col sm:gap-1 mb-5">
                <div>
                  <h3
                    className="text-base font-grotesque tracking-wide"
                    style={{ color: "var(--text-body)" }}
                  >
                    {job.company}
                  </h3>
                  <p
                    className="text-sm font-grotesque mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {job.role}
                  </p>
                </div>
                <span
                  className="text-xs font-grotesque tracking-widest flex-shrink-0 mt-1"
                  style={{ color: "#bdff68" }}
                >
                  {job.period}
                </span>
              </div>
              <ul className="space-y-2">
                {job.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-base font-grotesque leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      style={{ color: "#bdff6880" }}
                      className="flex-shrink-0 mt-1"
                    >
                      —
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* What I do */}
      <section className="reveal-section mb-24 sm:mb-16">
        <span
          className="text-xs tracking-[0.3em] uppercase font-grotesque block mb-12 sm:mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          What I do
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-12 sm:gap-8">
          <div>
            <h3
              className="text-sm tracking-widest uppercase mb-5 font-grotesque border-b pb-3"
              style={{ color: "var(--text-body)", borderColor: "#bdff6840" }}
            >
              Frontend Development
            </h3>
            <ul
              className="space-y-3 text-base font-grotesque leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              <li>Build responsive and interactive UIs</li>
              <li>Develop dynamic web applications</li>
              <li>Implement design systems with precision</li>
              <li>Style with Tailwind CSS and Bootstrap</li>
            </ul>
          </div>
          <div>
            <h3
              className="text-sm tracking-widest uppercase mb-5 font-grotesque border-b pb-3"
              style={{ color: "var(--text-body)", borderColor: "#e066ff40" }}
            >
              Backend Development
            </h3>
            <ul
              className="space-y-3 text-base font-grotesque leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              <li>Build robust REST APIs with Node &amp; Express</li>
              <li>Design and manage databases</li>
              <li>Integrate headless CMS platforms</li>
              <li>Write clean, documented, scalable code</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="reveal-section mb-24 sm:mb-16">
        <span
          className="text-xs tracking-[0.3em] uppercase font-grotesque block mb-12 sm:mb-8"
          style={{ color: "var(--text-muted)" }}
        >
          Tech Stack
        </span>
        {STACK_GROUPS.map(({ title, items, accent }) => (
          <div
            key={title}
            className="mb-10"
          >
            <span
              className="text-[11px] tracking-[0.3em] uppercase font-grotesque block mb-4"
              style={{ color: accent }}
            >
              {title}
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-base font-grotesque"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Beyond code */}
      <section className="reveal-section">
        <span
          className="text-xs tracking-[0.3em] uppercase font-grotesque block mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          Beyond Code
        </span>
        <p
          className="text-xl sm:text-lg font-grotesque leading-relaxed max-w-xl"
          style={{ color: "var(--text-secondary)" }}
        >
          When I&apos;m not building, you&apos;ll find me deep in a psychology
          book, watching medical procedures on YouTube, debating the best
          yogurt-to-granola ratio, or eating freshly baked bread. And i recently
          developed an interest in sales, who knows, maybe I&apos;ll be closing
          deals next.
        </p>
      </section>
    </main>
  );
}

export default About;
