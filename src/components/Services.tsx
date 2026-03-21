import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorPlay, Infinity as Infinite, Blocks } from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and performant web applications using modern frameworks.',
    icon: <Code2 className="w-8 h-8 text-orange-400" />
  },
  {
    title: '3D Web Experiences',
    description: 'Crafting immersive 3D scenes with WebGL and React Three Fiber to wow your users.',
    icon: <MonitorPlay className="w-8 h-8 text-orange-400" />
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces with a focus on deep aesthetics and micro-interactions.',
    icon: <Infinite className="w-8 h-8 text-orange-400" />
  },
  {
    title: 'Web3 Integration',
    description: 'Connecting robust blockchain backends with sleek frontend DApps.',
    icon: <Blocks className="w-8 h-8 text-orange-400" />
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-[#0f0f11] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">Delivering state-of-the-art solutions tailored to elevate your brand.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="mb-6 bg-white/5 p-4 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
