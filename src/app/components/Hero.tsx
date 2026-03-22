import { Children, isValidElement, type ReactElement, type SVGProps } from "react";
import { motion } from "motion/react";
import { ArrowRight, Code2, Database, FileCode2, TerminalSquare, type LucideIcon } from "lucide-react";

const draw = {
  hidden: {
    pathLength: 0,
    fillOpacity: 0,
    strokeOpacity: 1,
  },
  visible: (custom: { i: number }) => ({
    pathLength: 1,
    fillOpacity: 0,
    strokeOpacity: 1,
    transition: {
      pathLength: {
        delay: custom.i * 0.3,
        duration: 1.5,
        ease: "easeInOut",
      },
      fillOpacity: {
        delay: 2.2,
        duration: 0.8,
        ease: "easeOut",
      },
      strokeOpacity: {
        delay: 2.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }),
};

const motionElements = {
  path: motion.path,
  line: motion.line,
  polyline: motion.polyline,
  polygon: motion.polygon,
  rect: motion.rect,
  circle: motion.circle,
  ellipse: motion.ellipse,
};

function DrawnIcon({ Icon, className, index }: { Icon: LucideIcon; className: string; index: number }) {
  const icon = (
    <Icon
      className={className}
      size={40}
      strokeWidth={2}
      absoluteStrokeWidth
    />
  ) as ReactElement<SVGProps<SVGSVGElement>>;

  const animatedChildren = Children.map(icon.props.children, (child, childIndex) => {
    if (!isValidElement(child) || typeof child.type !== "string") return child;

    const MotionElement = motionElements[child.type as keyof typeof motionElements];

    if (!MotionElement) return child;

    return (
      <MotionElement
        {...child.props}
        variants={draw}
        custom={{ i: index + childIndex * 0.12 }}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    );
  });

  return (
    <motion.svg
      viewBox={icon.props.viewBox}
      className={icon.props.className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.6 }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {animatedChildren}
    </motion.svg>
  );
}

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
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
          A Junior Full-Stack Developer passionate about building robust, scalable web applications and delivering exceptional user experiences.
        </motion.p>

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 flex justify-center items-center space-x-6 md:space-x-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <DrawnIcon Icon={Code2} className="w-10 h-10 text-blue-400" index={0} />
          <DrawnIcon Icon={TerminalSquare} className="w-10 h-10 text-emerald-400" index={1} />
          <DrawnIcon Icon={Database} className="w-10 h-10 text-yellow-400" index={2} />
          <DrawnIcon Icon={FileCode2} className="w-10 h-10 text-cyan-400" index={3} />
        </motion.div>
      </div>
    </section>
  );
}
