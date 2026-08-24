import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Experience</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">Professional experience building real-world products.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Timeline */}
          <div className="relative pl-8 border-l-2 border-orange-500/30">
            {/* Experience Item */}
            <div className="relative pb-2">
              {/* Dot */}
              <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-orange-500 border-4 border-[#0a0a0c] shadow-[0_0_10px_rgba(255,107,53,0.4)]" />

              <div className="glass-panel p-8 rounded-2xl ml-4 group hover:border-orange-500/20 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">Full Stack Developer Intern</h3>
                    <p className="text-orange-400 font-medium">CodingJr, Varanasi (Remote)</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 shrink-0">
                    <Calendar className="w-4 h-4" />
                    <span>Feb 2026 – Apr 2026</span>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-400 font-light text-sm leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1 shrink-0">▸</span>
                    <span>Developed and shipped multiple full-stack features for an ed-tech platform using React.js, Node.js, and Express.js</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1 shrink-0">▸</span>
                    <span>Built and integrated REST APIs to support core product workflows</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1 shrink-0">▸</span>
                    <span>Improved frontend UI components for better usability and performance</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 mt-1 shrink-0">▸</span>
                    <span>Collaborated with the development team to debug issues, review code, and ship features in an Agile workflow</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
