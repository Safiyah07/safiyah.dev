import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsMoon, BsSun, BsArrowUp } from "react-icons/bs";
import ThemeContext from "../context/ThemeContext";

// Replace this with your Formspree form ID after signing up at formspree.io
// Create an account → New Form → set email to thedevvteam@gmail.com → copy the ID
const FORMSPREE_ID = "mdabkzgz";

const MARQUEE_TEXT =
  "AVAILABLE FOR WORK — SAFIYAH AMEDU — FULL-STACK DEVELOPER — BASED IN NIGERIA — ";

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const formRef = useRef(null);
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (FORMSPREE_ID === "YOUR_FORM_ID") {
      alert("Contact form not yet configured. See FORMSPREE_ID in Footer.jsx.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus("success");
        setFields({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer
      id="contact"
      className="mt-10"
    >
      {/* Marquee */}
      <div
        className="overflow-hidden py-4"
        style={{
          borderTop: "1px solid var(--text-faint)",
          borderBottom: "1px solid var(--text-faint)",
          opacity: 0.6,
        }}
      >
        <div
          className="marquee-track text-base font-extrabold tracking-[0.18em] font-grotesque"
          style={{ color: "var(--text-muted)" }}
        >
          {MARQUEE_TEXT.repeat(6)}
        </div>
      </div>

      {/* Contact form */}
      <div className="px-8 sm:px-5 pt-20 pb-16 sm:pt-14">
        <div className="flex items-start justify-between sm:flex-col sm:gap-12 gap-20">
          {/* Left: heading */}
          <div className="flex-1">
            <p
              className="text-sm font-medium tracking-[0.2em] uppercase font-grotesque mb-6"
              style={{ color: "var(--text-muted)" }}
            >
              Have a project in mind?
            </p>
            <h2 className="text-[clamp(28px,4.5vw,60px)] leading-[1.1] tracking-tight mb-4">
              Let&apos;s build something
              <br />
              <span style={{ color: "#bdff68" }}>worth talking about.</span>
            </h2>
            <p
              className="text-base font-grotesque mt-6 max-w-xs"
              style={{ color: "var(--text-muted)" }}
            >
              Or reach me directly at{" "}
              <a
                href="mailto:thedevvteam@gmail.com"
                className="underline underline-offset-2"
                style={{ color: "var(--text-secondary)" }}
              >
                thedevvteam@gmail.com
              </a>
            </p>
          </div>

          {/* Right: form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex-1 sm:w-full flex flex-col gap-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={fields.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={fields.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={fields.message}
                onChange={handleChange}
                required
                rows={4}
                className="form-input resize-none"
              />
            </div>
            <div className="flex items-center justify-between sm:flex-col sm:items-start sm:gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="text-sm font-medium tracking-[0.2em] uppercase px-8 py-3.5 rounded-full font-grotesque transition-all duration-300 disabled:opacity-50"
                style={{
                  background: "#bdff68",
                  color: "#0b1215",
                  fontWeight: 600,
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>
              {status === "success" && (
                <span
                  className="text-base font-grotesque"
                  style={{ color: "#bdff68" }}
                >
                  Message sent! I&apos;ll get back to you soon.
                </span>
              )}
              {status === "error" && (
                <span
                  className="text-sm font-grotesque"
                  style={{ color: "#e066ff" }}
                >
                  Something went wrong. Try emailing directly.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="px-8 sm:px-5 py-6 flex items-center justify-between sm:flex-col sm:gap-5"
        style={{ borderTop: "1px solid var(--text-faint)", opacity: 1 }}
      >
        <div className="flex items-center gap-8 sm:gap-5 flex-wrap">
          <Link
            to="https://www.linkedin.com/in/safiyah-amedu-841229370/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium tracking-[0.2em] uppercase font-grotesque transition-opacity hover:opacity-100"
            style={{ color: "var(--text-muted)" }}
          >
            LinkedIn
          </Link>
          <Link
            to="https://drive.google.com/file/d/1fFMCPiLID2FFkKNwP00PM1ljrEMn9FaT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium tracking-[0.2em] uppercase font-grotesque transition-opacity hover:opacity-100"
            style={{ color: "var(--text-muted)" }}
          >
            CV
          </Link>
          <a
            href="tel:+2348147143736"
            className="text-sm font-medium tracking-[0.2em] uppercase font-grotesque transition-opacity hover:opacity-100"
            style={{ color: "var(--text-muted)" }}
          >
            +234 814 714 3736
          </a>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-sm font-medium tracking-[0.2em] uppercase font-grotesque transition-opacity hover:opacity-100"
            style={{ color: "var(--text-muted)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <>
                <BsSun size={12} /> Light
              </>
            ) : (
              <>
                <BsMoon size={12} /> Dark
              </>
            )}
          </button>
          <a
            href="#top"
            className="transition-opacity hover:opacity-100"
            style={{ color: "var(--text-muted)" }}
            aria-label="Back to top"
          >
            <BsArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
