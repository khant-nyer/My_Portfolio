import { motion } from "motion/react";
import { Palette, Layers, Blocks, Terminal } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Palette className="w-6 h-6 text-emerald-400" />,
    items: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS"]
  },
  {
    category: "Backend",
    icon: <Terminal className="w-6 h-6 text-cyan-400" />,
    items: ["Java", "C#", "Python", "REST APIs"]
  },
  {
    category: "Database",
    icon: <Layers className="w-6 h-6 text-blue-400" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"]
  },
  {
    category: "Tools & DevOps",
    icon: <Blocks className="w-6 h-6 text-purple-400" />,
    items: ["Git/GitHub", "Docker", "AWS", "Figma"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Technical <span className="text-emerald-400">Arsenal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto"
          >
            A comprehensive list of the technologies, tools, and languages I work with to build robust applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors group"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-zinc-800 transition-colors">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
              </div>
              <ul className="space-y-3">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-emerald-500 transition-colors" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
