import { Link } from "react-router";
import { Github, Linkedin, Mail } from "lucide-react";

export function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              DevPortfolio
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo("about")} className="text-zinc-300 hover:text-white transition-colors">About</button>
            <button onClick={() => scrollTo("skills")} className="text-zinc-300 hover:text-white transition-colors">Skills</button>
            <button onClick={() => scrollTo("projects")} className="text-zinc-300 hover:text-white transition-colors">Projects</button>
            <button onClick={() => scrollTo("contact")} className="text-zinc-300 hover:text-white transition-colors">Contact</button>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
