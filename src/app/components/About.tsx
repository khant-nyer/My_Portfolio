import { motion } from "motion/react";
import { CheckCircle2, UserCircle, GraduationCap, Briefcase } from "lucide-react";

export function About() {
  return (
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
              {/* Text Content */}
              <div>
              <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-1.5 mb-6">
                <UserCircle className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-zinc-300 uppercase tracking-wider">About Me</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Transforming Ideas Into <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Digital Reality</span>
              </h2>

              <p className="text-lg text-zinc-400 mb-6">
                I'm a junior full-stack developer with a strong foundation in modern web technologies. I recently transitioned into tech, bringing a fresh perspective and an insatiable curiosity for solving complex problems.
              </p>

              <p className="text-lg text-zinc-400 mb-8">
                My journey started with front-end development, obsessing over pixel-perfect designs, and quickly expanded into back-end architecture to understand how systems communicate and scale.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Clean & Maintainable Code",
                  "Responsive UI/UX Design",
                  "RESTful API Development",
                  "Agile Methodologies",
                  "Database Management",
                  "Continuous Learning"
                ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-zinc-300">{item}</span>
                    </div>
                ))}
              </div>
              </div>

              {/* Image/Visual */}
              <div className="relative h-full min-h-[420px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-3xl transform -rotate-6" />
                <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-black/50 h-full">
                  <img
                      src="https://images.unsplash.com/photo-1717659487323-7783a99bcf61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbiUyMHlvdW5nfGVufDF8fHx8MTc3Mzk3OTUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="John Doe Developer"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-700 p-4 rounded-xl shadow-lg flex items-center space-x-4">
                      <div className="bg-emerald-500/20 p-3 rounded-lg">
                        <span className="text-2xl font-bold text-emerald-400">1+</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Years of Experience</p>
                        <p className="text-sm text-zinc-400">Continuous coding & learning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12 border-t border-zinc-800 pt-8">
                {/* Experience */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                    <Briefcase className="w-6 h-6 text-cyan-400" />
                    <span>Experience</span>
                  </h3>
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-zinc-800">
                      <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[7px] top-1.5 ring-4 ring-zinc-950" />
                      <h4 className="text-lg font-semibold text-white">Junior Web Developer</h4>
                      <p className="text-cyan-400 mb-2">Tech Startup Inc. • 2024 - Present</p>
                      <p className="text-zinc-400">Developing and maintaining responsive web applications using React and Node.js. Collaborating with cross-functional teams to implement new UI/UX features.</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-zinc-800">
                      <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[7px] top-1.5 ring-4 ring-zinc-950" />
                      <h4 className="text-lg font-semibold text-white">Software Engineering Intern</h4>
                      <p className="text-cyan-400 mb-2">Digital Agency • Summer 2023</p>
                      <p className="text-zinc-400">Assisted in building RESTful APIs and creating reusable frontend components for multiple client projects.</p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                    <GraduationCap className="w-6 h-6 text-emerald-400" />
                    <span>Education</span>
                  </h3>
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-zinc-800">
                      <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1.5 ring-4 ring-zinc-950" />
                      <h4 className="text-lg font-semibold text-white">Full-Stack Web Development Bootcamp</h4>
                      <p className="text-emerald-400 mb-2">Tech Academy • 2023 - 2024</p>
                      <p className="text-zinc-400">Intensive 6-month program focusing on modern MERN stack development, software engineering principles, and agile methodologies.</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-zinc-800">
                      <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[7px] top-1.5 ring-4 ring-zinc-950" />
                      <h4 className="text-lg font-semibold text-white">Bachelor of Science in Information Technology</h4>
                      <p className="text-emerald-400 mb-2">State University • 2019 - 2023</p>
                      <p className="text-zinc-400">Foundation in computer science principles, database design, and systems analysis.</p>
                    </div>
                  </div>
                </div>
              </div>
          </motion.div>
        </div>
      </section>
  );
}
