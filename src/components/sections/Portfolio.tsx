'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from '../ui/Magnetic';
import TextReveal from '../ui/TextReveal';

/**
 * Portfolio Section
 * 
 * Showcases a responsive grid of projects with interactive hover states.
 * Includes category filtering and advanced motion effects.
 */

const categories = ["All", "Web", "Design", "Branding"];

const projects = [
  {
    title: 'Modern E-commerce',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    category: 'Web',
    tag: 'Next.js / Tailwind'
  },
  {
    title: 'Creative Agency Portal',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
    category: 'Design',
    tag: 'UI/UX Research'
  },
  {
    title: 'Brand Identity System',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    category: 'Branding',
    tag: 'Visual Strategy'
  },
  {
    title: 'Mobile Banking App',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    category: 'Design',
    tag: 'App Design'
  },
  {
    title: 'SaaS Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    category: 'Web',
    tag: 'React / Dashboard'
  },
  {
    title: 'NFT Marketplace',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop',
    category: 'Branding',
    tag: 'Blockchain UI'
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
};

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <motion.section
      id="portfolio"
      className="py-24 bg-background relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              Selected <span className="text-primary">Works</span>
            </h2>
            <TextReveal
              text="We bring ideas to life through high-quality design and development."
              className="text-lg text-muted-foreground max-w-md"
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeCategory === cat 
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20" 
                    : "bg-secondary/50 text-foreground/60 border-border hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative overflow-hidden rounded-3xl bg-muted aspect-4/3 cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-primary text-xs font-bold uppercase tracking-widest">{project.tag}</span>
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-white text-2xl font-black tracking-tight">{project.title}</h3>
                  </motion.div>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none z-20 group-hover:border-primary/30 transition-colors duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to action */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 flex justify-center"
        >
          <Magnetic>
            <button className="px-12 py-5 rounded-full bg-foreground text-background font-black hover:scale-105 transition-transform flex items-center gap-3 group">
              View All Projects
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </Magnetic>
        </motion.div>
      </div>
    </motion.section>
  );
}
