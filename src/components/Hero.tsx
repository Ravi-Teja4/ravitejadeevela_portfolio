import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/ravi-teja-new-photo.jpg';

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Deevela Ravi Teja';
  const typingSpeed = 150; // milliseconds per character

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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <p className="text-white/90 text-lg font-medium mb-2">
                👋 Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 min-h-[1.2em]">
                {displayedName}
                <span className="animate-pulse">|</span>
              </h1>
              <p className="text-2xl sm:text-3xl text-white/90 font-semibold mb-6">
                AWS Cloud & Linux Enthusiast
              </p>
              <p className="text-lg text-white/80 max-w-2xl mx-auto lg:mx-0">
                Building scalable, secure, and cloud-native solutions with AWS. 
                Passionate about Infrastructure as Code, serverless architectures, 
                and cloud security best practices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300 font-semibold"
              >
                Get In Touch
              </Button>
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent transition-all duration-300 font-semibold"
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://linkedin.com/in/ravi-teja-deevela-a7b883259"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Ravi-Teja4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:deevelaraviteja@gmail.com"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 text-white"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-large">
                <img
                  src={profileImage}
                  alt="Deevela Ravi Teja"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/80 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 text-white/60 hover:text-white transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;