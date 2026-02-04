import { motion } from 'framer-motion';
import { ArrowDown, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AuroraBackground } from '@/components/ui/aurora-background';
import GradientText from '@/components/GradientText';
import { MagneticText } from '@/components/ui/morphing-cursor';
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations';

const Hero = () => {
  return (
    <AuroraBackground>
      {/* Content */}
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          {/* Status Badge with dark theme */}
          <motion.div variants={fadeUpVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600/10 border border-green-600/20 text-sm font-mono text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name with animated gradient effect */}
          <motion.div
            variants={fadeUpVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 font-playfair text-center"
          >
            <div className="text-white mb-4">Hi, I'm</div>
            <MagneticText
              text="Mohammed Tousif"
              className="inline-block text-4xl md:text-6xl lg:text-7xl whitespace-nowrap"
            />
          </motion.div>

          {/* Role with purple accent */}
          <motion.div variants={fadeUpVariants} className="mb-8">
            <GradientText className="text-2xl md:text-3xl font-semibold">
              &lt;Full-Stack Developer/&gt;
            </GradientText>
          </motion.div>

          {/* Hover hint - removed since no hover effect */}

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-playfair"
          >
            I craft performant web experiences with clean code and pixel-perfect design.
            Specializing in NextJs, React, TypeScript, and  web technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-primary backdrop-blur-md border border-purple-500/30 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:shadow-purple-600/25 transition-all duration-300"
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
              className="group bg-slate-800/50 backdrop-blur-md border-2 border-slate-700 text-white font-semibold px-8 py-6 text-lg hover:bg-slate-700/50 hover:border-purple-600/30 transition-all duration-300"
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
              { icon: Github, href: 'https://github.com/Tousif7401', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/mohammed-tousif-342306171/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:Tousif.cse.rymec@gmail.com', label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full bg-slate-800/50 border border-slate-700 text-gray-400 hover:text-purple-400 hover:border-purple-600/30 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;