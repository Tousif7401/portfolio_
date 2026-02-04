import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MagicCard } from '@/components/ui/magic-card';
import { fadeUpVariants, staggerSlowContainerVariants } from '@/lib/animations';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Clynicare: Innovative Health-Tech Platform',
      description: 'A cutting-edge health-tech platform that streamlines medical services with secure user authentication and real-time appointment scheduling, enhancing both patient and provider experiences.',
      image: '/Clynicare.png',
      tags: ['NextJs', 'TypeScript', 'Node.js', 'ExpressJS', 'MongoDB', 'TailwindCSS'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'JEEL:Email Relibility Platform',
      description: 'A robust email reliability platform for B2B SaaS companies that ensures seamless failover and proactive monitoring, preventing infrastructure disasters.',
      image: '/Jeel.png',
      tags: ['Next.Js', 'RestAPI', 'TailwindCSS', 'Node.js', 'ExpressJS'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'Microfinance Platform',
      description: 'A robust microfinance platform designed to facilitate secure and efficient financial services, featuring role-based access control for personalized user permissions and streamlined financial management across multiple user tiers.',
      image: 'MicroFinance.png',
      tags: ['React.Js', 'RestAPI', 'MaterialUI', 'Node.js', 'ExpressJS','SwaggerAPI','RestAPI','SendGrid'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'Military Asset Management System',
      description: 'A robust platform designed to manage and track military assets across multiple bases, featuring role-based access control for enhanced security and coordination.',
      image: '/MAMS.png',
      tags: ['React.js','Node.js', 'ExpressJs', 'MySQL', 'TailwindCSS'],
      github: '#',
      live: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured{' '}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my expertise and passion for building great software
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerSlowContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUpVariants}
              className={`group relative ${project.featured ? 'md:col-span-1' : ''}`}
            >
              <MagicCard className="relative overflow-hidden">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80" />
                  
                  {/* Quick Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm hover:bg-purple-500/20 transition-colors"
                      aria-label="View GitHub"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 rounded-full bg-slate-800/50 backdrop-blur-sm hover:bg-purple-500/20 transition-colors"
                      aria-label="View Live"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-slate-800 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-black text-white border-black font-semibold px-8 hover:bg-gray-800"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

export default Projects;