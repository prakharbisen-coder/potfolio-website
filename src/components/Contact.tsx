import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-[#0f0f11] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Connect</span></h2>
          <p className="text-gray-400 font-light mb-12 max-w-md">
            Interested in working together or have a question? 
            Fill out the form and I'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-orange-400 border border-white/10">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-light text-gray-500">Email</p>
                <p className="font-medium">hello@phoenix.dev</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-orange-400 border border-white/10">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-light text-gray-500">Phone</p>
                <p className="font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-orange-400 border border-white/10">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-light text-gray-500">Location</p>
                <p className="font-medium">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <form className="glass-panel p-8 rounded-2xl space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-400 block ml-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-400 block ml-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-gray-400 block ml-1">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                placeholder="How can I help you?"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-medium py-4 rounded-xl transition-colors shadow-[0_0_15px_rgba(255,107,53,0.2)] mt-4"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
