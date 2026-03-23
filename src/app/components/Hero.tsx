import { useState, type CSSProperties, type ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight, Code2, Database, FileCode2, TerminalSquare } from "lucide-react";

function AnimatedHeroIcon({
  children,
  className,
  delay,
}: {
  children: ReactNode;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      className={className}
      style={{ "--draw-delay": `${delay * 0.3}s` } as CSSProperties}
      whileHover={{ scale: 1.12, y: -4 }}
      whileTap={{ scale: 0.96 }}
      transition={{
        duration: 0.35,
        delay: delay * 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}

function HeroIconRow({ className }: { className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className={className}
    >
      <AnimatedHeroIcon className="text-blue-400" delay={0}>
        <Code2 className="hero-line-draw-icon w-10 h-10" />
      </AnimatedHeroIcon>
      <AnimatedHeroIcon className="text-emerald-400" delay={1}>
        <TerminalSquare className="hero-line-draw-icon w-10 h-10" />
      </AnimatedHeroIcon>
      <AnimatedHeroIcon className="text-yellow-400" delay={2}>
        <Database className="hero-line-draw-icon w-10 h-10" />
      </AnimatedHeroIcon>
      <AnimatedHeroIcon className="text-cyan-400" delay={3}>
        <FileCode2 className="hero-line-draw-icon w-10 h-10" />
      </AnimatedHeroIcon>
    </motion.div>
  );
}

export function Hero() {
  const [showLearnMore, setShowLearnMore] = useState(false);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <style>{`
        .hero-line-draw-icon > * {
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
          animation-name: heroLineDraw;
          animation-duration: 1.5s;
          animation-timing-function: ease-in-out;
          animation-fill-mode: forwards;
          animation-delay: calc(var(--draw-delay, 0s) + 0.2s);
        }

        .hero-line-draw-icon:hover > * {
          animation-name: heroLineRedraw;
          animation-duration: 0.9s;
          animation-timing-function: ease-in-out;
          animation-fill-mode: both;
        }

        @keyframes heroLineDraw {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes heroLineRedraw {
          from {
            stroke-dashoffset: 120;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>

      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />

        {/* Abstract grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-full px-4 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-medium text-zinc-300">Available for new opportunities</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
        >
          Hi, I'm <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Khant Nyer Maung</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto"
        >
          A Junior Java Full-Stack Developer passionate about building robust, scalable web applications and delivering exceptional user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-6"
        >
          <button
            onClick={() => setShowLearnMore((previous) => !previous)}
            className="inline-flex items-center rounded-lg border border-zinc-700 bg-zinc-900/60 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:bg-zinc-800"
          >
            {showLearnMore ? "Show less" : "Learn more"}
          </button>
        </motion.div>

        {showLearnMore && (
          <>
            <HeroIconRow className="hero-icons mt-10 flex items-center justify-center space-x-6 opacity-100 transition-all duration-300 md:space-x-12" />
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto pt-10"
            >
              I completed my System Analysis studies at NUS-ISS in 2022, after which I faced significant challenges returning to my career — both due to the ongoing civil conflict in Myanmar following the 2021 military coup, and the need to care for my family member through multiple surgeries. Despite these circumstances, I remained committed to my professional path, and I'm now fully focused on resuming my journey as a software engineer — bringing a solid analytical foundation, resilience, and a genuine drive to contribute and grow.
            </motion.p>
          </>
        )}


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <button onClick={scrollToProjects} className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 group">
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-100 rounded-lg font-medium transition-colors text-center">
            Contact Me
          </a>
        </motion.div>

        {/* Floating tech icons */}
        <HeroIconRow className="hero-icons mt-20 flex items-center justify-center space-x-6 opacity-100 transition-all duration-300 md:space-x-12" />
      </div>
    </section>
  );
}
