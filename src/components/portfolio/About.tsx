import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Layers, Zap, Coffee } from 'lucide-react';
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Code2, value: '5+', label: 'Years Experience' },
    { icon: Layers, value: '50+', label: 'Projects Completed' },
    { icon: Zap, value: '99%', label: 'Client Satisfaction' },
    { icon: Coffee, value: '∞', label: 'Cups of Coffee' },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Text */}
          <div className="space-y-8">
            <motion.div variants={fadeUpVariants}>
              <span className="text-primary font-mono text-sm tracking-wider uppercase">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Turning complex problems into{' '}
                <span className="text-gradient">elegant solutions</span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUpVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm a passionate full-stack developer based in San Francisco, with a deep 
              love for creating exceptional digital experiences. My journey in tech started 
              5 years ago, and since then, I've had the privilege of working with startups, 
              agencies, and enterprise companies.
            </motion.p>

            <motion.p
              variants={fadeUpVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I specialize in building scalable web applications using modern technologies 
              like React, Next.js, Node.js, and TypeScript. I believe in writing clean, 
              maintainable code and creating intuitive user interfaces that make a real impact.
            </motion.p>

            <motion.div variants={fadeUpVariants}>
              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented'].map(
                  (trait) => (
                    <span
                      key={trait}
                      className="px-4 py-2 rounded-full glass text-sm font-medium text-muted-foreground"
                    >
                      {trait}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <motion.div
            variants={staggerContainerVariants}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUpVariants}
                className="group p-6 rounded-2xl glass hover-glow transition-all duration-300 hover:border-primary/30"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
    </section>
  );
};

export default About;