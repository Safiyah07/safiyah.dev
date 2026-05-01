import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowDownCircle, BsLinkedin } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

function Papers() {
  const [papers, setPapers] = useState([]);
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/data/papers.json")
      .then((r) => r.json())
      .then(setPapers)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!papers.length || !pageRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".paper-row",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".paper-list",
            start: "top 80%",
          },
        }
      );
    }, pageRef);
    return () => ctx.revert();
  }, [papers]);

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });

  return (
    <main
      ref={pageRef}
      id="top"
      className="px-8 md:px-6 sm:px-5 pt-32 pb-24"
    >
      {/* Header */}
      <section className="mb-20 sm:mb-14">
        <span className="text-xs tracking-[0.3em] uppercase opacity-35 font-grotesque block mb-8">
          Writings
        </span>
        <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-tight mb-6">
          White Papers
        </h1>
        <p className="text-lg sm:text-base opacity-50 leading-relaxed font-grotesque max-w-xl">
          Research, perspectives, and analyses on technology, software
          development, and what comes next — originally published on LinkedIn.
        </p>
      </section>

      {/* Empty state */}
      {papers.length === 0 ? (
        <div className="border-t border-current border-opacity-[0.08] py-24 text-center">
          <p className="text-xs tracking-[0.3em] uppercase opacity-25 font-grotesque">
            Papers coming soon
          </p>
        </div>
      ) : (
        <div className="paper-list">
          {papers.map((paper) => (
            <div
              key={paper.id}
              className="paper-row border-t border-current border-opacity-[0.08] py-10 sm:py-7"
            >
              <div className="flex items-start justify-between gap-10 sm:flex-col sm:gap-5">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="text-xs tracking-widest uppercase opacity-30 font-grotesque">
                      {formatDate(paper.date)}
                    </span>
                    {paper.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-full border border-current border-opacity-[0.15] opacity-40 font-grotesque"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl sm:text-lg font-michroma mb-3 leading-snug">
                    {paper.title}
                  </h3>
                  <p className="text-sm opacity-50 font-grotesque leading-relaxed max-w-xl">
                    {paper.description}
                  </p>
                </div>
                <div className="flex gap-3 flex-shrink-0 sm:flex-row">
                  {paper.linkedinUrl && (
                    <a
                      href={paper.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase border border-current border-opacity-25 px-4 py-2.5 rounded-full opacity-55 hover:opacity-100 transition-all duration-300 font-grotesque"
                    >
                      <BsLinkedin size={11} /> Read
                    </a>
                  )}
                  {paper.pdfFile && (
                    <a
                      href={paper.pdfFile}
                      download
                      className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase border border-green/40 text-green px-4 py-2.5 rounded-full opacity-65 hover:opacity-100 hover:bg-green hover:text-dark hover:border-green transition-all duration-300 font-grotesque"
                    >
                      <BsArrowDownCircle size={11} /> PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-current border-opacity-[0.08]" />
        </div>
      )}
    </main>
  );
}

export default Papers;
