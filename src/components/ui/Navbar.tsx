'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Magnetic from './Magnetic';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 md:px-10 flex items-center justify-between">
        <Magnetic>
          <Link href="/" className="text-2xl font-black tracking-tighter text-foreground group flex">
            {"LUMINA".split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                whileHover={{ 
                  y: -5,
                  color: "var(--color-primary)",
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                {char}
              </motion.span>
            ))}
          </Link>
        </Magnetic>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Magnetic key={link.name}>
              <Link
                href={link.href}
                className="px-5 py-2 text-sm font-bold text-foreground/70 hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <motion.div
                  className="absolute bottom-0 left-5 right-5 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                />
              </Link>
            </Magnetic>
          ))}
          <div className="ml-4 pl-4 border-l border-border">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
