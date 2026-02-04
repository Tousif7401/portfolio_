import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MagicCard } from '@/components/ui/magic-card';
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
        { name: 'Redux', color: 'from-red-400 to-red-600' },

      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', color: 'from-green-400 to-green-600' },
        { name: 'Express.js', color: 'from-pink-400 to-pink-600' },
        { name: 'Sequelize ORM', color: 'from-blue-400 to-indigo-500' },
        { name: 'MySQL', color: 'from-orange-400 to-blue-500' },
        { name: 'PostgreSQL', color: 'from-blue-400 to-indigo-500' },
        { name: 'SendGrid', color: 'from-green-400 to-lime-500' },
        { name: 'Swagger API', color: 'from-green-400 to-teal-500' },
        { name: 'REST API', color: 'from-purple-400 to-pink-500' },
        { name: 'JWT Auth', color: 'from-yellow-400 to-orange-500' },
        { name: 'OAuth', color: 'from-red-400 to-pink-500' },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', color: 'from-orange-400 to-red-500' },
        { name: 'Docker', color: 'from-blue-400 to-cyan-500' },
        { name: 'Postman', color: 'from-orange-400 to-yellow-500' },
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
                    className="group relative"
                  >
                    <MagicCard className="p-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`} />
                        <span className="font-medium text-white">
                          {skill.name}
                        </span>
                      </div>
                    </MagicCard>
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