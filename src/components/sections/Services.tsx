'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Layout, Code, Palette, Rocket } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import TextReveal from '../ui/TextReveal';

/**
 * Services Section
 * 
 * Displays core agency offerings in a responsive grid.
 * Uses Framer Motion for scroll-triggered entry animations and advanced 3D tilt effects.
 */

const services = [
  {
    title: 'UI/UX Design',
    description: 'We create beautiful and intuitive interfaces that provide exceptional user experiences.',
    icon: Palette,
  },
  {
    title: 'Web Development',
    description: 'Our developers build fast, secure, and scalable websites and web applications.',
    icon: Code,
  },
  {
    title: 'Branding',
    description: 'We help brands define their identity and stand out in a crowded market.',
    icon: Layout,
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic campaigns to help you reach your audience and achieve your goals.',
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function ServiceCard({ title, description, icon: Icon }: { title: string, description: string, icon: LucideIcon }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // Dynamic shadow that shifts with tilt
  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]);
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]);
  const shadow = useTransform(
    [shadowX, shadowY],
    ([sx, sy]) => `${sx}px ${sy}px 40px rgba(0,0,0,0.15)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={itemVariants}
      className="perspective-1000 h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          boxShadow: shadow,
          transformStyle: "preserve-3d",
        }}
        className="p-8 h-full rounded-2xl bg-background border border-border hover:border-primary/50 cursor-pointer relative group"
      >
        <div 
          style={{
            transform: "translateZ(60px)",
            transformStyle: "preserve-3d",
          }}
          className="relative z-10"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        
        {/* Gloss effect */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20" />
        
        {/* Card back highlight */}
        <div 
          style={{ transform: "translateZ(-1px)" }}
          className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" 
        />
      </motion.div>
    </motion.div>
  );
}

export function Services() {
  return (
    <motion.section
      id="services"
      className="py-24 bg-muted/30"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ perspective: "1000px" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Our <span className="text-primary">Services</span>
          </motion.h2>
          <TextReveal
            text="We offer a wide range of services to help your business grow and thrive in the digital age."
            className="text-lg text-muted-foreground max-w-2xl mx-auto justify-center"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
