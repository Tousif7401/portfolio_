import { motion } from 'framer-motion';
import { ArrowDown, FileText, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient Orbs */}
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"
      />

      {/* Content */}
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Status Badge */}
        <motion.div variants={fadeUpVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUpVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-gradient glow-text">Alex Chen</span>
        </motion.h1>

        {/* Role */}
        <motion.div variants={fadeUpVariants} className="mb-6">
          <p className="text-xl md:text-2xl text-muted-foreground font-mono">
            <span className="text-primary">&lt;</span>
            Full-Stack Developer
            <span className="text-primary"> /&gt;</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUpVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft performant web experiences with clean code and pixel-perfect design.
          Specializing in React, TypeScript, and modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-8 py-6 text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group gradient-border bg-background/50 backdrop-blur-sm border-0 font-semibold px-8 py-6 text-lg hover:bg-secondary/50 transition-all duration-300"
          >
            <FileText className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUpVariants}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Twitter, href: '#', label: 'Twitter' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="p-3 rounded-full glass hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover-glow"
            >
              <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;