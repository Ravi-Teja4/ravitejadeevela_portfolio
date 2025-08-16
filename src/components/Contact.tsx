import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "deevelaraviteja@gmail.com",
      href: "mailto:deevelaraviteja@gmail.com",
      color: "text-red-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 6303275377",
      href: "tel:+916303275377",
      color: "text-green-600"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "ravi-teja-deevela",
      href: "https://linkedin.com/in/ravi-teja-deevela-a7b883259",
      color: "text-blue-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "Ravi-Teja4",
      href: "https://github.com/Ravi-Teja4",
      color: "text-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Ready to build something amazing together? I'm always excited to discuss new opportunities 
            and collaborate on innovative cloud solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="animate-slide-in">
            <Card className="shadow-medium border-0 bg-gradient-primary text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Send className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">
                    Get In Touch
                  </h3>
                </div>
                <p className="text-white/90 mb-8 leading-relaxed">
                  I'm currently open to new opportunities in cloud engineering, DevOps, and infrastructure roles. 
                  Whether you have a project in mind or just want to connect, I'd love to hear from you.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="text-white/80 text-sm">{contact.label}</p>
                        <p className="text-white font-medium">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-white/90">Based in India</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Available for remote work and on-site opportunities
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="animate-scale-in">
            <div className="space-y-6">
              <Card className="shadow-soft border-0 hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-foreground">Send Email</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    The fastest way to reach me for project discussions or opportunities.
                  </p>
                  <Button 
                    onClick={() => window.location.href = 'mailto:deevelaraviteja@gmail.com'}
                    className="w-full"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-0 hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-foreground">Connect on LinkedIn</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Let's connect professionally and stay updated on my latest projects.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://linkedin.com/in/ravi-teja-deevela-a7b883259', '_blank')}
                    className="w-full"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-0 hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                      <Github className="w-5 h-5 text-gray-600" />
                    </div>
                    <h4 className="font-semibold text-foreground">View GitHub</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Explore my code repositories and open-source contributions.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://github.com/Ravi-Teja4', '_blank')}
                    className="w-full"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View GitHub Profile
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border animate-fade-in">
          <p className="text-muted-foreground">
            © 2025 Deevela Ravi Teja. Built with passion for cloud technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;