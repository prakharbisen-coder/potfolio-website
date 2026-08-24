import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Heart } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Activities</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">My academic journey and extracurricular involvement.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 rounded-2xl group hover:border-orange-500/20 transition-colors"
          >
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 shrink-0 group-hover:bg-orange-500/20 transition-colors">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-300 transition-colors">B.Tech in Computer Science & Engineering</h3>
                <p className="text-orange-400 font-medium mb-2">Oriental Institute of Science and Technology, Bhopal</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    2023 – 2027
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    CGPA: 7.9
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-6 rounded-2xl group"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-orange-300 transition-colors">Event Coordinator</h3>
                  <p className="text-sm text-orange-400/80 font-medium mb-1">DEBUG — OIST Tech Club</p>
                  <p className="text-sm text-gray-400 font-light">Organized technical workshops, coding events, and student engagement activities.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-6 rounded-2xl group"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-orange-300 transition-colors">Volunteer</h3>
                  <p className="text-sm text-orange-400/80 font-medium mb-1">National Service Scheme (NSS)</p>
                  <p className="text-sm text-gray-400 font-light">Community service and social outreach initiatives.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
