import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUpVariants, staggerContainerVariants, staggerFastContainerVariants } from '@/lib/animations';

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', color: 'from-cyan-400 to-blue-500' },
        { name: 'Next.js', color: 'from-gray-400 to-gray-600' },
        { name: 'TypeScript', color: 'from-blue-400 to-blue-600' },
        { name: 'Tailwind CSS', color: 'from-teal-400 to-cyan-500' },
        { name: 'Framer Motion', color: 'from-pink-400 to-purple-500' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', color: 'from-green-400 to-green-600' },
        { name: 'Python', color: 'from-yellow-400 to-blue-500' },
        { name: 'PostgreSQL', color: 'from-blue-400 to-indigo-500' },
        { name: 'MongoDB', color: 'from-green-400 to-lime-500' },
        { name: 'GraphQL', color: 'from-pink-400 to-pink-600' },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', color: 'from-orange-400 to-red-500' },
        { name: 'Docker', color: 'from-blue-400 to-cyan-500' },
        { name: 'AWS', color: 'from-orange-400 to-yellow-500' },
        { name: 'Vercel', color: 'from-gray-400 to-gray-600' },
        { name: 'Figma', color: 'from-purple-400 to-pink-500' },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Technologies I{' '}
            <span className="text-gradient">work with</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            A curated list of technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={staggerFastContainerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-6"
            >
              <motion.h3
                variants={fadeUpVariants}
                className="text-xl font-semibold text-muted-foreground flex items-center gap-3"
              >
                <span className="w-8 h-px bg-gradient-to-r from-primary to-accent" />
                {category.title}
              </motion.h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeUpVariants}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
                      style={{
                        backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      }}
                    />
                    <div className="p-5 rounded-xl glass hover:border-primary/30 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`} />
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-10 blur-sm`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] -z-10" />
    </section>
  );
};

export default TechStack;