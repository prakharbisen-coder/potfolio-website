import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neon Nexus',
    category: 'Web3 Platform',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    tech: ['React', 'Three.js', 'Ethers'],
  },
  {
    title: 'Aura Analytics',
    category: 'Dashboard UI',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    tech: ['Next.js', 'Tailwind', 'Framer'],
  },
  {
    title: 'Ignite Commerce',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2794&auto=format&fit=crop',
    tech: ['Vite', 'React', 'Stripe'],
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Work</span></h2>
            <p className="text-gray-400 max-w-2xl font-light">A selection of recent projects that pushed my limits.</p>
          </div>
          <button className="hidden md:block pb-2 border-b border-orange-500 text-orange-400 hover:text-orange-300 transition-colors">
            View All Projects
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Hover overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/50 backdrop-blur-sm">
                  <a href="#" className="p-3 bg-white/10 hover:bg-orange-500 rounded-full transition-colors text-white">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-white/10 hover:bg-white border-white/20 hover:text-black rounded-full transition-colors text-white">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="px-2">
                <p className="text-xs text-orange-500 mb-2 font-mono tracking-widest uppercase">{project.category}</p>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
