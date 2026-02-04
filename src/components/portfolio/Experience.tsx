import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { fadeUpVariants, slideInLeftVariants, staggerContainerVariants } from '@/lib/animations';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      type: 'work',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      description: 'Leading frontend architecture and mentoring a team of 5 developers. Implemented design system that improved development velocity by 40%.',
      skills: ['React', 'TypeScript', 'GraphQL'],
    },
    {
      type: 'work',
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Built and scaled a SaaS platform from 0 to 50K users. Designed RESTful APIs and optimized database queries reducing load times by 60%.',
      skills: ['Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      type: 'work',
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2019 - 2020',
      description: 'Developed responsive websites and e-commerce solutions for clients across various industries. Collaborated with designers on UX improvements.',
      skills: ['JavaScript', 'CSS', 'WordPress'],
    },
    {
      type: 'education',
      title: 'B.S. Computer Science',
      company: 'University of Technology',
      period: '2015 - 2019',
      description: 'Graduated with honors. Focused on software engineering and human-computer interaction. Led the university coding club.',
      skills: ['Algorithms', 'Data Structures', 'HCI'],
    },
  ];

  const achievements = [
    { icon: Award, title: 'AWS Certified Developer', year: '2023' },
    { icon: Award, title: 'Google UX Design Certificate', year: '2022' },
    { icon: Award, title: 'Hackathon Winner - TechFest', year: '2021' },
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
                  <div className="group p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-300 hover-glow">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {exp.type === 'work' ? (
                          <Briefcase className="w-4 h-4 text-primary" />
                        ) : (
                          <GraduationCap className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <span className="text-sm font-mono text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-primary/80 font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-mono rounded-full bg-secondary/50 text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
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
                  className="group p-4 rounded-xl glass hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                      <achievement.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground">{achievement.year}</p>
                    </div>
                  </div>
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
                  { label: 'Open Source Contributions', value: '120+' },
                  { label: 'GitHub Stars', value: '2.5K' },
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