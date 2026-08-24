import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, BookOpen, Medal } from 'lucide-react';

const achievements = [
  {
    title: 'Smart India Hackathon 2025',
    detail: 'Runner-Up — National Level',
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: 'TechSprint 2025 Hackathon',
    detail: 'Winner — Organized by GDG',
    icon: <Medal className="w-6 h-6" />,
  },
  {
    title: 'HackJKLU v5.0',
    detail: 'Best AI/ML Project · Domain Prize Winner · Certificate of Appreciation',
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: 'Research Publication',
    detail: '"YOLOv8-FaceEmbedding: Real-Time Missing Person Detection and Recognition" — IJSRTM, Dec 2025',
    icon: <BookOpen className="w-6 h-6" />,
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 bg-[#0f0f11] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Recognition</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">Highlights from hackathons, competitions, and research work.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-6 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex gap-4 items-start relative z-10">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-orange-300 transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
