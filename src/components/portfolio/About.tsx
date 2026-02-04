import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Layers, Zap, Coffee } from 'lucide-react';
import { MagicCard } from '@/components/ui/magic-card';
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Code2, value: 'Grand Finalist', label: 'SIH 2023' },
    { icon: Layers, value: '10+', label: 'Projects Completed' },
    { icon: Zap, value: 'Team-Oriented', label: 'Mindset' },
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
              I’m a passionate full-stack developer based in Ballari and open to relocation. 
              With extensive experience in dynamic, high-pressure startup environments,
              I've honed my ability to deliver robust and scalable web solutions. As a Smart India Hackathon grand
              finalist and the creator of Clynicare, an innovative medical services platform, I specialize in modern technologies such as React, Next.js, Node.js, and TypeScript. My approach centers on writing clean,
              maintainable code and crafting intuitive user experiences that drive real impact.
            </motion.p>

            <motion.p
              variants={fadeUpVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              In my journey, I've cultivated a strong foundation in web development, blending hands-on startup experience with innovative project work. This combination enables me to tackle complex challenges and deliver elegant, user-centric web applications.
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
              >
                <MagicCard className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </MagicCard>
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