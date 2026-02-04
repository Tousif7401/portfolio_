import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold font-mono text-gradient">
              &lt;AC /&gt;
            </span>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by Alex Chen
            </p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;