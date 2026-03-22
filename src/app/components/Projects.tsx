import { motion } from "motion/react";
import { ExternalLink, MonitorSmartphone } from "lucide-react"
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    title: "Personal Loan Finder",
    description: "A full-stack web application for finding personal loan.",
    image: "https://personalloanfinder.co/wp-content/uploads/2025/11/asian-women-discover_best-LML-in-SG.png",
    tags: ["React", "Tailwind", "TypeScript", "Node.js", "Next.js", "AWS"],
    liveUrl: "https://personalloanfinder.co/",
    githubUrl: "https://github.com"
  },
  {
    title: "Cooking App",
    description: "This is my personal project. A cooking app for those who cannot cook.",
    image: "https://i.fbcd.co/products/resized/resized-750-500/chef-hat-line-converted-01-d64572f96eb833f8a822a06e674aebc361e216b8ef2b9445606f19d2d36fa953.jpg",
    tags: ["React", "TypeScript", "Node.js", "Java", "Spring Boot", "PostgreSQL", "AWS Cognito", "Render"],
    liveUrl: "https://cookingapp-frontend.onrender.com",
    githubUrl: "https://github.com/khant-nyer/CookingApp.git"
  },

];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-1.5 mb-6"
          >
            <MonitorSmartphone className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-zinc-300 uppercase tracking-wider">Featured Work</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Recent <span className="text-cyan-400">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            A selection of my recent full-stack applications, built to solve real-world problems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group flex flex-col bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 opacity-60" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex-grow p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-zinc-800 text-zinc-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-zinc-800 mt-auto">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-sm font-medium text-white hover:text-emerald-400 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors ml-auto">
                    <GitHubIcon className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
