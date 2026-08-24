import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Wrench, Brain, Shield } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C++', 'Python', 'JavaScript', 'SQL'],
    icon: <Code2 className="w-8 h-8 text-orange-400" />
  },
  {
    title: 'Web & Frameworks',
    skills: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS'],
    icon: <Globe className="w-8 h-8 text-orange-400" />
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL'],
    icon: <Database className="w-8 h-8 text-orange-400" />
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Render'],
    icon: <Wrench className="w-8 h-8 text-orange-400" />
  },
  {
    title: 'Core Concepts',
    skills: ['Data Structures & Algorithms', 'REST APIs'],
    icon: <Brain className="w-8 h-8 text-orange-400" />
  },
  {
    title: 'Auth & Security',
    skills: ['Authentication', 'Authorization', 'JWT', 'RBAC'],
    icon: <Shield className="w-8 h-8 text-orange-400" />
  }
];

export function Services() {
  return (
    <section id="skills" className="py-24 px-4 bg-[#0f0f11] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Skills</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">Technologies and tools I work with to build scalable solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
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
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-orange-300 transition-colors">
                {category.title}
              </h3>
              <div className="flex gap-2 flex-wrap">
                {category.skills.map((skill) => (
                  <span key={skill} className="text-sm px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
