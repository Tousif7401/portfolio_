import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { MagicCard } from '@/components/ui/magic-card';
import { fadeUpVariants, slideInLeftVariants, staggerContainerVariants } from '@/lib/animations';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      type: 'work',
      title: 'Full-Stack Developer',
      company: 'ZYPTR',
      period: '2025 - Present',
      description: 'Developed responsive websites and e-commerce solutions for clients across various industries. Collaborated with designers on UX improvements.',
      skills: ['JavaScript', 'TailwindCSS', 'React', 'Node.js', 'Express.js', 'MySQL', 'Git','sequelize ORM','RestAPI'],
    },
    {
      type: 'education',
      title: 'B.E. Computer Science',
      company: 'RYMEC, Ballari',
      period: '2023 - 2025',
      description: 'Graduated with honors. Focused on software engineering and human-computer interaction. Led the university coding club.',
      skills: ['Web Development','Algorithms', 'Database Systems','Data Structures', 'Cloud Computing', 'Mobile App Development'],
    },
    {
      type: 'education',
      title: 'Diploma in Electronics and Communications',
      company: 'Government Polytechnic Ballari',
      period: '2018 - 2020',
      description: 'Gained a solid foundation in electronics and communication principles, including circuit design, signal processing, and communication systems. Developed hands-on skills through practical labs and projects, laying the groundwork for advanced studies and professional growth.',
      skills: ['Analog Communication', 'Radars', 'Digital Communication','Microprocessors','Medical Electronics' ],
    },
  ];

  const achievements = [
    { icon: Award, title: 'Innovation, Development & Entrepreneurship Competitions – Active participant (only for selected candidates)', year: '2024' },
    { icon: Award, title: 'Smart India Hackathon 2023 – Grand Finalist', year: '2023' },
    { icon: Award, title: 'Hackathon Winner - RYMEC', year: '2022' },
    { icon: Award, title: 'One-Day Web Design Winner - RYMEC', year: '2022' },

  ];

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Experience &{' '}
            <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <motion.div
            ref={ref}
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="lg:col-span-2 relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={slideInLeftVariants}
                  className="relative pl-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background" />
                  </div>

                  {/* Content Card */}
                  <MagicCard className="p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-purple-500/20">
                        {exp.type === 'work' ? (
                          <Briefcase className="w-4 h-4 text-purple-400" />
                        ) : (
                          <GraduationCap className="w-4 h-4 text-purple-400" />
                        )}
                      </div>
                      <span className="text-sm font-mono text-gray-400">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-1 text-white">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-mono rounded-full bg-slate-800 text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </MagicCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold flex items-center gap-3">
              <Award className="w-5 h-5 text-primary" />
              Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                <MagicCard className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <achievement.icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-white">{achievement.title}</p>
                      <p className="text-xs text-gray-400">{achievement.year}</p>
                    </div>
                  </div>
                </MagicCard>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="p-6 rounded-2xl glass mt-8">
              <h4 className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">
                Quick Stats
              </h4>
              <div className="space-y-4">
                {[
                  { label: 'Lines of Code', value: '500K+' },
                  { label: 'Project Collaborations', value: '10+' },
                  { label: 'Community Engagement', value: '10+' },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span className="font-mono font-bold text-primary">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] -z-10" />
    </section>
  );
};

export default Experience;