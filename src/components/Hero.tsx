import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Phoenix } from './Phoenix';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--color-brand-dark)]">
      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.4} color="#f8f6ff" />
          <directionalLight position={[4, 6, 5]} intensity={0.75} color="#fff4e8" />
          <Environment preset="city" />
          <Suspense fallback={null}>
            <Phoenix />
          </Suspense>
          {/* We do not want users to drag around if we just want mouse follow, but subtle OrbitControls with disabled zoom can be okay. For now, rely on useThree mouse rotation. */}
        </Canvas>
      </div>

      {/* Hero UI Overlay Layer */}
      <div className="z-10 text-center pointer-events-none px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl font-light text-orange-400 tracking-widest uppercase mb-4"
        >
          Hi, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white"
        >
          Prakhar <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Bisen</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-3xl font-light text-gray-300 max-w-2xl mx-auto"
        >
          Full Stack Developer · AI Enthusiast · Problem Solver
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 pointer-events-auto flex gap-4 justify-center"
        >
          <a href="#about" className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-500 rounded-full text-white font-medium transition-colors border border-orange-400/30 shadow-[0_0_15px_rgba(255,107,53,0.3)]">
            Explore My Work
          </a>
          <a href="#contact" className="inline-block px-8 py-4 bg-transparent hover:bg-white/5 rounded-full text-white font-medium transition-colors border border-white/20">
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-orange-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
