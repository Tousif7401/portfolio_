import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeUpVariants, staggerSlowContainerVariants } from '@/lib/animations';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'DevFlow',
      description: 'A modern project management platform for developer teams with real-time collaboration, sprint planning, and automated workflows.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'CryptoTrack',
      description: 'Real-time cryptocurrency portfolio tracker with advanced analytics, price alerts, and DeFi protocol integrations.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
      tags: ['Next.js', 'Web3.js', 'TailwindCSS', 'Chart.js'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'AI Content Studio',
      description: 'AI-powered content generation platform with multi-modal capabilities for text, images, and code generation.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'EcoTravel',
      description: 'Sustainable travel booking platform that calculates carbon footprint and suggests eco-friendly alternatives.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
      tags: ['Vue.js', 'Express', 'MongoDB', 'MapBox'],
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
              <div className="relative overflow-hidden rounded-2xl glass hover:border-primary/30 transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quick Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      className="p-2 rounded-full glass hover:bg-primary/20 transition-colors"
                      aria-label="View GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 rounded-full glass hover:bg-primary/20 transition-colors"
                      aria-label="View Live"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-secondary/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
            className="gradient-border bg-background/50 border-0 font-semibold px-8 hover:bg-secondary/50"
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