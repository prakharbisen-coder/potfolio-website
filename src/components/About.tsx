import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-[#0a0a0c] relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
            About Me
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed font-light">
            I'm a Computer Science & Engineering undergraduate with hands-on experience in full-stack development and AI-driven projects. I love building scalable, real-world technology solutions — from ed-tech platforms to real-time surveillance systems.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed font-light">
            Skilled in problem-solving, database management, and collaborative development through research work and national-level hackathons. Currently pursuing my B.Tech at Oriental Institute of Science and Technology, Bhopal.
          </p>

          <div className="pt-4 flex gap-4">
            <div className="p-4 border border-white/10 rounded-xl bg-white/5 w-1/3 text-center">
              <h3 className="text-3xl font-bold text-orange-500">4+</h3>
              <p className="text-sm text-gray-500 mt-1">Projects Shipped</p>
            </div>
            <div className="p-4 border border-white/10 rounded-xl bg-white/5 w-1/3 text-center">
              <h3 className="text-3xl font-bold text-orange-500">3+</h3>
              <p className="text-sm text-gray-500 mt-1">Hackathon Wins</p>
            </div>
            <div className="p-4 border border-white/10 rounded-xl bg-white/5 w-1/3 text-center">
              <h3 className="text-3xl font-bold text-orange-500">1</h3>
              <p className="text-sm text-gray-500 mt-1">Research Paper</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="relative aspect-square max-w-md mx-auto rounded-full p-1 bg-gradient-to-br from-orange-500 to-red-800">
            <div className="w-full h-full rounded-full bg-[#111] border-[4px] border-[#0a0a0c] flex items-center justify-center overflow-hidden">
              {/* Placeholder Image / Avatar */}
              <div className="w-full h-full bg-gradient-to-t from-gray-900 to-[#1a1a1e] relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold text-xl tracking-[0.2em] opacity-30">
                  PB
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
