import { motion } from "motion/react";
import { CheckCircle2, UserCircle, GraduationCap, Briefcase } from "lucide-react";
import graduationPhoto from "/resource/GraduationPhoto.jpg";

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
              <div className="space-y-12 border-t  pt-8">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-1.5 mb-6">
                    <UserCircle className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium text-zinc-300 uppercase tracking-wider">About Me</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Transforming Ideas Into <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Digital Reality</span>
                  </h2>

                  <p className="text-lg text-zinc-400 mb-6">
                    I'm a junior java full-stack developer with a strong foundation in modern web technologies. I recently transitioned into tech, bringing a fresh perspective and an insatiable curiosity for solving complex problems.
                  </p>

                  <p className="text-lg text-zinc-400 mb-8">
                    My journey started with back-end architecture to understand how systems communicate and scale. Quickly expanded into front-end development, obsessing over pixel-perfect designs.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                {/* Experience */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                    <Briefcase className="w-6 h-6 text-cyan-400" />
                    <span>Experience</span>
                  </h3>
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-zinc-800">
                      <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[7px] top-1.5 ring-4 ring-zinc-950" />
                      <h4 className="text-lg font-semibold text-white">Freelance Junior Web Developer</h4>
                      <p className="text-cyan-400 mb-2">WK Consults Pte Ltd • Nov 2025 - Present</p>
                      <p className="text-zinc-400">Engaged as a freelance developer to design and build a Personal Loan Finder web application from the ground up. Took full ownership of the project lifecycle — from initial architecture and UI design through to development, testing, and final delivery — using React.js. The application enables users to browse, compare, and identify suitable personal loan options, delivering a seamless and intuitive experience.</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-zinc-800">
                      <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[7px] top-1.5 ring-4 ring-zinc-950" />
                      <h4 className="text-lg font-semibold text-white">Software Engineering Intern</h4>
                      <p className="text-cyan-400 mb-2">Total eBiz Solutions • September 2021 – January 2022</p>
                      <p className="text-zinc-400">This internship at Total eBiz Solutions provided valuable hands-on experience in both business analysis and software development. Working across dual roles strengthened my ability to bridge the gap between client needs and technical solutions, while developing practical skills in requirements gathering, documentation, UAT, and .NET system development — laying a solid foundation for a career in IT.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* First Image/Visual: Intro + Skills + Experience */}
              <div className="relative h-full pt-40 min-h-[680px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-3xl transform -rotate-6" />
                <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-black/50 h-full">
                  <img
                      src="https://images.unsplash.com/photo-1717659487323-7783a99bcf61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBlcnNvbiUyMHlvdW5nfGVufDF8fHx8MTc3Mzk3OTUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Developer portrait"
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch mt-12">
                {/* Education */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                    <GraduationCap className="w-6 h-6 text-emerald-400" />
                    <span>Education</span>
                  </h3>
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-zinc-800">
                      <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1.5 ring-4 ring-zinc-950" />
                      <h4 className="text-lg font-semibold text-white">Systems Analysis</h4>
                      <p className="text-emerald-400 mb-2">Institute of Systems Science, National University of Singapore • 2021 - 2022</p>
                      <p className="text-zinc-400">A leading technology institute under the National University of Singapore,
                        NUS-ISS specialises in applied IT education and professional development.
                        Completed the Systems Analysis programme, gaining hands-on experience in
                        software engineering, systems design, and agile methodologies.</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-zinc-800">
                      <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[7px] top-1.5 ring-4 ring-zinc-950" />
                      <h4 className="text-lg font-semibold text-white">Bachelor of Engineering (Mechanical)</h4>
                      <p className="text-emerald-400 mb-2">Technological University • 2012 - 2018</p>
                      <p className="text-zinc-400">A public university under Myanmar's Ministry of Science and Technology,
                        offering engineering programmes across multiple disciplines. Graduated with
                        a Bachelor of Engineering in Mechanical Engineering, building a strong
                        analytical and problem-solving foundation.</p>
                    </div>
                  </div>
                </div>

                {/* Second Image/Visual: Education */}
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-3xl transform rotate-6" />
                  <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-black/50 h-full">
                    <img
                        src={graduationPhoto}
                        alt="Education setting"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent" />
                  </div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}
