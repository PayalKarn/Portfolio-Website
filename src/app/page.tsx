"use client";

import Image from "next/image";
import Navbar from "./Component/Navbar";
import { useState } from "react";

const projects = [
  {
    title: "WatchPal : A Video Sharing Platform",
    description:
      "WatchPal is a video engagement platform that helps creators increase watch hours through user interaction and smart dashboard features.",
    tech: "React.js · Node.js · MongoDB · Bootstrap · Express · REST API's",
    github: "https://github.com/PayalKarn/pro-watch",
    liveDemo: "https://pro-watch-frontend.onrender.com/",
  },
  {
    title: "Waggy : E-commerce for Pet Products",
    description:
      "Feature-rich store with product filters, cart, and secure checkout for smooth shopping experience.",
    tech: "React.Js ·Node.js ·REST APIs · Express.Js· MongoDb · Stripe",
    github: "https://github.com/PayalKarn/Waggy-Pet",
    liveDemo: "https://waggy-pfh0.onrender.com",
  },
  {
    title: "Medilab – Comprehensive Healthcare Management System",
    description:
      "Medilab is a system that simplifies patient management, appointments, and medical records, making healthcare services faster and more efficient.",
    tech: "React.Js ·Node.js ·REST APIs · Express.Js· MongoDb",
    github: "https://github.com/PayalKarn/Medi-Lab",
    liveDemo: "https://medilab-xkiy.onrender.com/",
  },
  {
    title: "Face Recognition Attendance",
    description:
      "Attendance system using face recognition to automate check-in and improve accuracy.",
    tech: "Python · OpenCV · SQL",
    github:
      "https://github.com/PayalKarn/Face-Recognization-Attendance-System-Software",
    liveDemo: null,
  },
];

const allSkills = [
  { name: "ReactJS", color: "61DAFB" },
  { name: "HTML5", color: "E34F26" },
  { name: "CSS3", color: "1572B6" },
  { name: "BOOTSTRAP", color: "7952B3" },
  { name: "Tailwind", color: "38BDF8" },
  { name: "NodeJS", color: "339933" },
  { name: "Express", color: "ffffff" },
  { name: "MongoDB", color: "47A248" },
  { name: "JavaScript", color: "F7DF1E" },
  { name: "REST APIs", color: "00D4AA" },
  { name: "Supabase", color: "3ECBFE" },
  { name: "Netlify", color: "00C7B7" },
  { name: "Vercel", color: "ffffff" },
  { name: "Render", color: "46E3B2" },
  { name: "VS Code", color: "007ACC" },
  { name: "Postman", color: "FF6C37" },
  { name: "GIT", color: "F05032" },
  { name: "GitHub", color: "ffffff" },
  { name: "Python", color: "3776AB" },
  { name: "MVC", color: "6C757D" },
  { name: "JWT", color: "3B82F6" },
];

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully! ");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setStatus("");
        }, 3000);
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="space-y-8 pb-10">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
          Contact
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto">
          Open to opportunities, collaborations, or just a quick chat about web
          development.
        </p>
      </div>

      {/* Centered form + Social */}
      <div className="max-w-xl mx-auto space-y-8">
        {/* Social + Email row */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 justify-center flex-wrap">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/payal-karn/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/80 border-2 border-slate-700 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 hover:text-sky-300 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 backdrop-blur-sm"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/PayalKarn/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/80 border-2 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-400 hover:shadow-lg hover:shadow-slate-500/20 transition-all duration-300 backdrop-blur-sm"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.058-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.176 2.873.171 3.177.768.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@preciseengineer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/80 border-2 border-slate-700 text-red-500 hover:bg-red-500/10 hover:border-red-400 hover:text-red-400 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 backdrop-blur-sm"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a2.986 2.986 0 0 0-2.1-2.115C19.546 3.545 12 3.545 12 3.545s-7.546 0-9.398.526A2.986 2.986 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.986 2.986 0 0 0 2.1 2.115c1.852.526 9.398.526 9.398.526s7.546 0 9.398-.526a2.986 2.986 0 0 0 2.1-2.115C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:payalkarnacode@gmail.com"
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/80 border-2 border-slate-700 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 hover:text-sky-300 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 backdrop-blur-sm"
              aria-label="Email"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Functional Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-7"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
            />
            <input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
            />
          </div>
          <textarea
            rows={4}
            placeholder="Your message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30 resize-vertical"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 hover:shadow-sky-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <div
              className={`text-sm p-3 rounded-xl text-center ${
                status.includes("successfully")
                  ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-300"
                  : "bg-red-500/20 border border-red-500/50 text-red-300"
              }`}
            >
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <div className="mx-auto max-w-6xl px-4 py-16 space-y-24">
          {/* ABOUT */}
          <section
            id="about"
            className="flex min-h-[80vh] flex-col gap-12 lg:flex-row lg:items-center lg:justify-between bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 rounded-3xl px-6 py-10 md:px-10"
          >
            <div className="space-y-6 lg:max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
                Welcome
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-50">
                Hi, I'm <span className="text-sky-400">Payal</span>
                <br />
                <span className="text-slate-200">
                  Aspiring Full-Stack Developer
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                I enjoy the challenge of creating things from scratch, and that
                drive pushes me to turn ideas into clean, practical web
                experiences while constantly improving my problem-solving
                skills.
              </p>

              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <a
                  href="https://drive.google.com/file/d/1wOZ-EZEpdoJAxAz3WOFqi26-RCBLtN4-/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm md:text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 hover:shadow-sky-500/50 transition"
                >
                  Resume
                </a>
              </div>
            </div>

            {/*<div className="flex w-full justify-center lg:w-auto lg:flex-shrink-0">
              <div className="relative h-60 w-60 md:h-72 md:w-72 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-4 shadow-[0_0_80px_-30px_rgba(56,189,248,0.9)]">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/15 via-transparent to-purple-600/20" />
                <div className="relative flex h-full items-center justify-center">
                  <div className="h-44 w-44 md:h-52 md:w-52 overflow-hidden rounded-3xl border border-slate-700 bg-slate-900">
                    <Image
                      src="/payal-Photoroom.png"
                      alt="Payal"
                      width={208}
                      height={208}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>*/}
          </section>

          {/* PROJECTS */}
          <section id="projects" className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
                Projects
              </h2>
              <p className="text-sm md:text-base text-slate-400 max-w-2xl">
                A few projects that reflect my passion for real-world web
                applications and clean, maintainable code.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group relative rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-7 hover:border-sky-500/70 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/20"
                >
                  <h3 className="text-xl font-semibold text-slate-50 group-hover:text-sky-400 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <p className="text-xs font-medium uppercase text-slate-500 tracking-wide mb-5">
                    {project.tech}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-xs md:text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 hover:shadow-sky-500/50 transition"
                      >
                        🚀 Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-xs md:text-sm font-semibold text-slate-100 shadow-lg hover:bg-slate-700 hover:shadow-slate-600/40 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* MORE PROJECTS */}
          <section id="more-projects" className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-50">
                  More Projects
                </h2>
                <p className="text-sm md:text-base text-slate-400">
                  Explore more hands‑on projects, experiments, and practice
                  builds that reflect daily problem‑solving and learning.
                </p>
              </div>

              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm md:text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 hover:shadow-sky-500/50 transition"
              >
                View all projects
                <span className="text-lg">↗</span>
              </a>
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="space-y-10">
            <div className="space-y-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
                Skills & Technologies
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
                Tech Stack
              </h2>
              <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
                Technologies used across frontend, backend, databases, tools and
                dev workflow.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
              {allSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 md:px-5 md:py-5 hover:border-sky-500/70 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20"
                >
                  <span
                    className="w-2 h-2 rounded-full mr-2"
                    style={{ backgroundColor: `#${skill.color}` }}
                  />
                  <span className="text-xs md:text-sm font-medium text-slate-200 group-hover:text-sky-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* CAREER */}
          <section id="career" className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
                Career
              </h2>
              <p className="text-sm md:text-base text-slate-400 max-w-xl">
                My professional journey so far.
              </p>
            </div>

            <div className="relative pl-6 md:pl-10">
              <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-slate-700" />
              <div className="space-y-6">
                <div className="relative flex gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-sky-400 border-2 border-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-sky-400">2025</p>
                    <h2 className="md:text-xl text-slate-700/50 font-bold">
                      A2IT InternEdge
                    </h2>
                    <h3 className="text-lg md:text-xl font-semibold text-slate-50">
                      Full-Stack Developer
                    </h3>
                  </div>
                </div>

                <div className="relative flex gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-emerald-400 border-2 border-slate-950 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-emerald-400">
                      2025
                    </p>
                    <h2 className="md:text-xl text-slate-700/50 font-bold">
                      Hexamind Technology
                    </h2>
                    <h3 className="text-lg md:text-xl font-semibold text-slate-50">
                      Software Developer
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RESUME */}
          <section id="resume" className="space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
                Resume
              </h2>
              <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto">
                View or download my resume with complete details.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-50">
                  Payal
                </h3>
                <p className="text-sm md:text-base text-slate-400">
                  Full-Stack(MERN) Developer
                </p>
              </div>
              <a
                href="https://drive.google.com/file/d/1wOZ-EZEpdoJAxAz3WOFqi26-RCBLtN4-/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm md:text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:bg-sky-400 hover:shadow-sky-500/50 transition"
              >
                Resume
              </a>
            </div>
          </section>

          {/* CONTACT FORM - FUNCTIONAL */}
          <ContactForm />

          {/* ------------------footer------------------------- */}
          <footer className="border-t border-slate-800/60 bg-slate-950/95 mt-10">
            <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left text */}
              <p className="text-xs md:text-sm text-slate-500 flex items-center gap-1">
                Made with
                <span className="text-red-500">♥</span>
                by{" "}
                <span className="font-medium text-slate-300">Payal Karn</span>
              </p>

              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-4">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/payal-karn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/80 border-2 border-slate-700 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 hover:text-sky-300 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 backdrop-blur-sm"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/PayalKarn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/80 border-2 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-400 hover:shadow-lg hover:shadow-slate-500/20 transition-all duration-300 backdrop-blur-sm"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.058-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.176 2.873.171 3.177.768.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@preciseengineer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/80 border-2 border-slate-700 text-red-500 hover:bg-red-500/10 hover:border-red-400 hover:text-red-400 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 backdrop-blur-sm"
                    aria-label="YouTube"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.498 6.186a2.986 2.986 0 0 0-2.1-2.115C19.546 3.545 12 3.545 12 3.545s-7.546 0-9.398.526A2.986 2.986 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.986 2.986 0 0 0 2.1 2.115c1.852.526 9.398.526 9.398.526s7.546 0 9.398-.526a2.986 2.986 0 0 0 2.1-2.115C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:payalkarnacode@gmail.com"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/80 border-2 border-slate-700 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 hover:text-sky-300 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 backdrop-blur-sm"
                    aria-label="Email"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
