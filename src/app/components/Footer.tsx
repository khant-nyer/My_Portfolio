import { Linkedin, Mail } from "lucide-react"
import GitHubIcon from "@mui/icons-material/GitHub";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-12 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          DevPortfolio
        </h3>
        <p className="text-zinc-400 max-w-md mx-auto mb-6">
          Building digital products, brands, and experiences. Let's create something great together.
        </p>
        <div className="flex space-x-6 mb-8">
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:hello@example.com" className="text-zinc-400 hover:text-white transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
