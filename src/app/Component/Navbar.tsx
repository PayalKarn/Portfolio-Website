"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "projects",
        "skills",
        "career",
        "resume",
        "contact",
      ];
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (
          el &&
          el.offsetTop <= scrollPosition &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Career", id: "career" },
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/95 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <button
            onClick={() => scrollToSection("about")}
            className="text-2xl font-bold text-sky-400 hover:text-sky-300 transition"
          >
            PayalKarn
          </button>

          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all ${
                    activeSection === link.id
                      ? "text-sky-400 border-b-2 border-sky-400"
                      : "text-slate-300 hover:text-sky-400"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen((p) => !p)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-slate-300" />
            ) : (
              <Menu className="w-6 h-6 text-slate-300" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden">
            <ul className="border-t border-slate-800 py-3 space-y-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition ${
                      activeSection === link.id
                        ? "text-sky-400 bg-sky-500/10"
                        : "text-slate-300 hover:text-sky-400 hover:bg-slate-800/60"
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
