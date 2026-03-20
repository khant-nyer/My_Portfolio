import { motion } from "motion/react";
import { Mail, Send, MapPin } from "lucide-react";
import React, { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using the form or through my contact info below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-zinc-950 border border-zinc-800 rounded-xl">
                <div className="p-3 bg-zinc-900 rounded-lg">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-400">Email Me At</h4>
                  <a href="mailto:hello@example.com" className="text-lg font-medium text-white hover:text-emerald-400 transition-colors">hello@johndoe.dev</a>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-zinc-950 border border-zinc-800 rounded-xl">
                <div className="p-3 bg-zinc-900 rounded-lg">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-400">Location</h4>
                  <p className="text-lg font-medium text-white">San Francisco, CA (Remote)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 shadow-2xl shadow-black/50 relative overflow-hidden"
          >
            {/* Form decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-300">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors text-white placeholder-zinc-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors text-white placeholder-zinc-500"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors text-white placeholder-zinc-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-70 disabled:hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 group"
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2">
                    <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></span>
                    <span>Sending...</span>
                  </span>
                ) : submitted ? (
                  <span className="flex items-center space-x-2">
                    <span>Message Sent!</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
