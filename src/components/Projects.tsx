import React from 'react';
import { motion } from 'framer-motion';
import { Github, Eye, Camera, Zap, Landmark, Frame } from 'lucide-react';

const projects = [
  {
    title: 'Real-Time Missing Person Detection',
    category: 'AI / Computer Vision',
    description: 'Real-time surveillance system using YOLOv8 and CNN-based facial recognition to detect missing individuals across multiple CCTV streams. Features automated face matching, alert generation, and backend REST APIs. Published as a research paper in IJSRTM.',
    tech: ['YOLOv8', 'Python', 'OpenCV', 'REST API'],
    github: '[github link]',
    gradient: 'from-red-600/40 to-orange-500/20',
    icon: <Camera className="w-12 h-12 text-orange-400/60" />,
  },
  {
    title: 'PowerGrid Predict Flow',
    category: 'Machine Learning',
    description: 'ML-based platform for electricity demand forecasting and material planning in power distribution systems. Built REST APIs, inventory tracking modules, and predictive analytics workflows for resource optimization.',
    tech: ['Python', 'ML', 'REST API', 'Node.js'],
    github: '[github link]',
    gradient: 'from-yellow-600/40 to-amber-500/20',
    icon: <Zap className="w-12 h-12 text-orange-400/60" />,
  },
  {
    title: 'Have-In-Sikkim',
    category: 'Full-Stack / Heritage',
    description: 'Heritage preservation platform with secure authentication, role-based access control, and an AI-powered chatbot. Integrated OpenCV-based image analysis to monitor structural deterioration of monastery infrastructure.',
    tech: ['React.js', 'Node.js', 'OpenCV', 'MongoDB'],
    github: '[github link]',
    gradient: 'from-emerald-600/40 to-teal-500/20',
    icon: <Landmark className="w-12 h-12 text-orange-400/60" />,
  },
  {
    title: 'AI Exhibit Monitoring System',
    category: 'AI / Real-Time',
    description: 'Real-time monitoring platform for galleries and museums using YOLOv8 and OpenCV to detect damage and misplaced exhibits. Features React frontend, Express backend, Streamlit dashboard with multi-camera support.',
    tech: ['YOLOv8', 'React.js', 'Express.js', 'Streamlit'],
    github: '[github link]',
    gradient: 'from-purple-600/40 to-indigo-500/20',
    icon: <Frame className="w-12 h-12 text-orange-400/60" />,
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
            <p className="text-gray-400 max-w-2xl font-light">Projects that pushed my limits — from AI surveillance to heritage preservation.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 bg-gradient-to-br ${project.gradient} bg-[#111]`}>
                {/* Gradient background with icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

                {/* Hover overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/50 backdrop-blur-sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-white border-white/20 hover:text-black rounded-full transition-colors text-white flex items-center gap-2">
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                </div>
              </div>

              <div className="px-2">
                <p className="text-xs text-orange-500 mb-2 font-mono tracking-widest uppercase">{project.category}</p>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap items-center">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-400">
                      {t}
                    </span>
                  ))}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="ml-auto text-orange-400 hover:text-orange-300 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
