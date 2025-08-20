import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Youtube, Instagram, ExternalLink } from 'lucide-react';
import AOS from 'aos';

const ModernContentCreation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section id="content-creation" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Content Creation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights about AWS, DevOps, and cloud technologies
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* YouTube Card */}
          <div 
            data-aos="zoom-in" 
            data-aos-delay="200"
            className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Youtube className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground text-center mb-4">
              YouTube Channel
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              DevOps tutorials, AWS guides, and cloud architecture insights
            </p>
            <div className="text-center">
              <Button
                asChild
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                <a
                  href="http://www.youtube.com/@ravitejadeevela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Visit Channel
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Instagram Card */}
          <div 
            data-aos="zoom-in" 
            data-aos-delay="400"
            className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground text-center mb-4">
              Instagram
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              Daily DevOps tips, behind-the-scenes content, and tech insights
            </p>
            <div className="text-center">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                <a
                  href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbklyS2N1VU16b0xreWc1a1d4U3FpRDVBbzZWd3xBQ3Jtc0tuVmxFcnRaMHF1Q0V1VEtKVjktTEhvTzVuVXBQUkNOMGh6OVk0a2RZb053X2ctWDEtWlVVZldRcHZuZExvU2I3YjhobFNxNElvYXZHMlNnMlREYVFra3RrRFRsSFA1WEdONll3bFYzLU1tdnJXM3ItSQ&q=https%3A%2F%2Fwww.instagram.com%2Fdevops_with_ravi%3Figsh%3DYm13MGs4OGM2Y3E3%26utm_source%3Dig_contact_invite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Follow Me
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div data-aos="fade-up" data-aos-delay="600" className="text-center mt-12">
          <p className="text-muted-foreground">
            Join my community of cloud enthusiasts and stay updated with the latest in DevOps!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModernContentCreation;