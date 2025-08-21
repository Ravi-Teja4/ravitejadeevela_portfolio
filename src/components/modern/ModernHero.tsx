
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Mail, Github, Linkedin } from 'lucide-react';
import AOS from 'aos';
import profileImage from '@/assets/ravi-teja-latest-photo.jpg';

const ModernHero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Deevela Ravi Teja';
  const typingSpeed = 150; // milliseconds per character

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });

    // Typing animation
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Fade-in + pop-up animation */}
          <div className="text-center lg:text-left space-y-8">
            <div data-aos="fade-up" data-aos-delay="200">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 min-h-[1.2em] whitespace-nowrap">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {displayedName}
                </span>
                <span className="animate-pulse text-primary">|</span>
              </h1>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="400">
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium mb-2">
                AWS Cloud & Linux Enthusiast
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Building scalable, secure, and automated cloud solutions with AWS & Terraform
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div data-aos="fade-up" data-aos-delay="800" className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://linkedin.com/in/ravi-teja-deevela" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://github.com/Ravi-Teja4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="mailto:deevelaraviteja@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Profile Image - Right-slide animation */}
          <div className="flex justify-center lg:justify-end">
            <div data-aos="fade-left" data-aos-delay="300" className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-accent to-primary rounded-3xl transform -rotate-3 scale-110 opacity-10"></div>
                
                {/* Main image container */}
                <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={profileImage}
                    alt="Deevela Ravi Teja"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div data-aos="fade-up" data-aos-delay="1000" className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6 animate-bounce group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
