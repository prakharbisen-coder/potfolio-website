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
            I'm a passionate developer specializing in creating immersive and interactive web experiences. 
            Blending the lines between design and engineering, I build scalable applications with a focus on deep aesthetics and 3D web technologies.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed font-light">
            Like a Phoenix, every project is an opportunity for a rebirth—a fresh start to explore new paradigms, utilize cutting-edge stacks like React Three Fiber, and push the boundaries of modern UI.
          </p>
          
          <div className="pt-4 flex gap-4">
            <div className="p-4 border border-white/10 rounded-xl bg-white/5 w-1/3 text-center">
              <h3 className="text-3xl font-bold text-orange-500">5+</h3>
              <p className="text-sm text-gray-500 mt-1">Years Exp.</p>
            </div>
            <div className="p-4 border border-white/10 rounded-xl bg-white/5 w-1/3 text-center">
              <h3 className="text-3xl font-bold text-orange-500">50+</h3>
              <p className="text-sm text-gray-500 mt-1">Projects</p>
            </div>
            <div className="p-4 border border-white/10 rounded-xl bg-white/5 w-1/3 text-center">
              <h3 className="text-3xl font-bold text-orange-500">100%</h3>
              <p className="text-sm text-gray-500 mt-1">Passion</p>
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
                        AVATAR
                    </div>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
