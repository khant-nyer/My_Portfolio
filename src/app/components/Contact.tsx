import { motion } from "motion/react";
import {Mail, MapPin, Phone} from "lucide-react";
import developerImage from "../../../public/resource/software-developer.jpg";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-1.5 mb-6">
              <Mail className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-zinc-300 uppercase tracking-wider">Get in Touch</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Let's Build Something <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Together</span>
            </h2>
            
            <p className="text-lg text-zinc-400 mb-10 max-w-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through my contact info below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-zinc-950 border border-zinc-800 rounded-xl">
                <div className="p-3 bg-zinc-900 rounded-lg">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-400">Email Me At</h4>
                  <a href="mailto:weixing.william@gmail.com" className="text-lg font-medium text-white hover:text-emerald-400 transition-colors">weixing.william@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-zinc-950 border border-zinc-800 rounded-xl">
                <div className="p-3 bg-zinc-900 rounded-lg">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-400">Location</h4>
                  <p className="text-lg font-medium text-white">Bangkok, Thailand</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-zinc-950 border border-zinc-800 rounded-xl">
                <div className="p-3 bg-zinc-900 rounded-lg">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-400">Call Me At</h4>
                  <p className="text-lg font-medium text-white">+66 0922994316</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-950 p-2 rounded-2xl border border-zinc-800 shadow-2xl shadow-black/50 relative overflow-hidden"
          >
            <div className="relative z-10 h-full min-h-[520px] rounded-xl overflow-hidden border border-zinc-800">
              <img
                src={developerImage}
                alt="Workspace setup"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
