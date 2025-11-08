import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import profileImage from '@/assets/ravi-teja-latest-photo.jpg';
import awsIcon from '@/assets/aws-cloud-icon.jpg';
import devopsIcon from '@/assets/devops-infinity-icon.png';

const ModernHero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Deevela Ravi Teja';
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Removed animated background elements for clean dark theme */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground mb-6 min-h-[1.2em]">
                <span className="text-white">
                  {displayedName}
                </span>
                <span className="animate-pulse text-accent ml-1">|</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-2xl lg:text-3xl text-white font-bold mb-4">
                AWS Cloud & DevOps Enthusiast
              </p>
              <p className="text-lg text-white max-w-2xl leading-relaxed">
                Building scalable, secure, and automated cloud solutions using AWS, Terraform, Docker, and Linux.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground font-bold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 group"
                  onClick={() => scrollToSection('projects')}
                >
                  Explore My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 py-6 text-lg rounded-xl transition-all duration-300"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
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
                  className="p-4 rounded-2xl bg-card shadow-medium hover:shadow-glow border-2 border-border text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Main image container */}
                <div className="relative w-full h-full bg-card rounded-[3rem] overflow-hidden shadow-large border-4 border-border">
                  <img
                    src={profileImage}
                    alt="Deevela Ravi Teja - Cloud & DevOps Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating icon badges */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white rounded-[14px] p-2 shadow-medium border-[3px] border-primary"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img src={awsIcon} alt="AWS" className="w-12 h-12 object-contain" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white rounded-[14px] p-2 shadow-medium border-[3px] border-primary"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <img src={devopsIcon} alt="DevOps" className="w-12 h-12 object-contain" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <ChevronDown className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernHero;
