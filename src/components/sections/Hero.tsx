'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Magnetic from '@/components/ui/Magnetic';
import TextReveal from '@/components/ui/TextReveal';
import { useRef } from 'react';

/**
 * Hero Section
 * 
 * High-impact landing area with animated background elements and primary CTAs.
 * Designed to capture user attention and communicate agency value immediately.
 */

const headingWords = ["We", "Design", "Digital", "Experiences", "That", "Matter"];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--color-primary),transparent_50%),radial-gradient(ellipse_at_bottom_left,var(--color-primary),transparent_50%)] opacity-20" />
      
      <motion.div style={{ opacity }} className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
          >
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Innovating the Future
            </span>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-x-4 max-w-4xl overflow-hidden">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className={`text-4xl md:text-6xl lg:text-7xl font-black tracking-tight ${
                  word === "Experiences" ? "text-primary" : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </div>
          
          <TextReveal
            text="Lumina is a full-service design agency that helps brands grow through creative design, modern technology, and strategic thinking."
            className="text-lg md:text-xl text-muted-foreground max-w-2xl justify-center"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 pt-4 items-center"
          >
            <Magnetic>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform group shadow-lg shadow-primary/20"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-secondary text-secondary-foreground font-bold hover:scale-105 transition-transform border border-border"
              >
                Get Started
              </Link>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Parallax Decorations */}
      <motion.div
        style={{ y: y1 }}
        animate={{
          rotate: [0, 45, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[15%] -left-[10%] w-75 h-75 bg-primary/15 rounded-full blur-[100px] -z-10"
      />
      <motion.div
        style={{ y: y2 }}
        animate={{
          rotate: [0, -45, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[10%] -right-[15%] w-112.5 h-112.5 bg-primary/10 rounded-full blur-[120px] -z-10"
      />
    </section>
  );
}
