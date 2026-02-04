import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import TechStack from '@/components/portfolio/TechStack';
import Projects from '@/components/portfolio/Projects';
import Experience from '@/components/portfolio/Experience';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;