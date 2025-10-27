import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ModernFooter = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Cloud className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Ravi Teja</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              AWS Cloud & DevOps Enthusiast building scalable, secure, and automated cloud solutions.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: "https://linkedin.com/in/ravi-teja-deevela", label: "LinkedIn" },
                { Icon: Github, href: "https://github.com/Ravi-Teja4", label: "GitHub" },
                { Icon: Mail, href: "mailto:deevelaraviteja@gmail.com", label: "Email" }
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-xl bg-white shadow-soft hover:shadow-medium border border-border/50 text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Core Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Terraform', 'Docker', 'Kubernetes', 'Linux', 'Python', 'CI/CD'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Resume</h4>
              <Button 
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-xl"
                onClick={() => window.open('https://red-tani-80.tiiny.site', '_blank')}
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-border/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Deevela Ravi Teja. Built with 
            <Heart className="h-4 w-4 text-red-500 inline-block animate-pulse" />
            and 
            <Cloud className="h-4 w-4 text-primary inline-block" />
            cloud technologies.
          </p>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full shadow-lg hover:shadow-glow transition-all duration-300 z-50 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </footer>
  );
};

export default ModernFooter;