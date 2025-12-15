"use client";

import Link from "next/link";

const moreProjects = [
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
  {
    title: "TaskMaster – ToDo Management Application",
    description:
      "TaskMaster is a simple and efficient app to manage tasks, set priorities, and track progress, helping users stay organized and productive",
    tech: "React.Js ·Node.js ·REST APIs · Express.Js· MongoDb",
    github: "https://github.com/PayalKarn/TodoApp", 
    liveDemo: "https://todoapp-frontend-0poh.onrender.com/",
  },
  {
    title: "Radios - Music(Frontend)",
    description:
      "Frontend Learning Website made with pure HTML,CSS and Bootstrap",
    tech: "HTML5 ·CSS3· BootStrap",
    github: "https://github.com/PayalKarn/payal-bootstrap-project",
    liveDemo: "https://payal-bootstrap-project.onrender.com/",
  },
   {
    title: "Knights - Gaming(Frontend)",
    description:
      "Frontend Learning Website made with pure HTML & CSS Fully Responsive",
    tech: "HTML5 ·CSS3",
    github: "https://github.com/PayalKarn/payal-css-project",
    liveDemo: "https://payal-css-project.onrender.com/",
  },
];

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 space-y-10">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-50">
              All Projects
            </h1>
            <p className="text-sm md:text-base text-slate-400 max-w-2xl">
              A collection of main and side projects built while learning and
              experimenting with the MERN stack and related tools.
            </p>
          </div>

          <Link
            href="/"
            className="text-xs md:text-sm text-sky-400 hover:text-sky-300 underline-offset-4 hover:underline"
          >
            ← Back to portfolio
          </Link>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {moreProjects.map((project) => (
            <article
              key={project.title}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-7 hover:border-sky-500/70 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/20"
            >
              <h2 className="text-xl font-semibold text-slate-50 group-hover:text-sky-400 mb-3">
                {project.title}
              </h2>
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
      </div>
    </main>
  );
}
