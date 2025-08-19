import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  MessageCircle,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ModernContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "deevelaraviteja@gmail.com",
      href: "mailto:deevelaraviteja@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 6303275377",
      href: "tel:+916303275377",
      color: "text-green-500"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "ravi-teja-deevela",
      href: "https://linkedin.com/in/ravi-teja-deevela",
      color: "text-blue-600"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "Ravi-Teja4",
      href: "https://github.com/Ravi-Teja4",
      color: "text-gray-700"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:deevelaraviteja@gmail.com?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink);
    
    toast({
      title: "Message Prepared!",
      description: "Your email client should open with the message ready to send.",
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next cloud project? Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form - Fade-in + pop-up animation */}
          <div data-aos="fade-up" data-aos-delay="200">
            <Card className="h-full shadow-lg border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Send a Message</h3>
                </div>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:border-primary transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:border-primary transition-colors duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="border-border focus:border-primary transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or how I can help you..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3 transition-all duration-300 hover:shadow-lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Social Links - Left-slide animation */}
          <div data-aos="fade-left" data-aos-delay="400" className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-lg border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-xl text-accent">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
                </div>
                <p className="text-muted-foreground">
                  Based in India and available for remote or on-site work worldwide.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="group">
                    <a 
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-300 group-hover:shadow-md"
                    >
                      <div className={`${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                        {contact.icon}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{contact.label}</div>
                        <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                          {contact.value}
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid gap-4">
              <Card className="shadow-lg border-0 bg-gradient-to-r from-primary/5 to-primary/10 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Schedule a Call</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Let's discuss your cloud infrastructure needs over a quick call.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => window.open('mailto:deevelaraviteja@gmail.com?subject=Schedule%20a%20Call')}
                  >
                    Schedule Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-gradient-to-r from-accent/5 to-accent/10 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 bg-accent/10 rounded-full text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <Github className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Collaborate</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Open to collaborate on interesting cloud and DevOps projects.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    onClick={() => window.open('https://github.com/Ravi-Teja4', '_blank')}
                  >
                    View GitHub
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Location & Availability */}
        <div data-aos="fade-up" data-aos-delay="600" className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <MapPin className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">Location & Availability</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Based in India</strong> • Available for remote work globally
            </p>
            <p className="text-sm text-muted-foreground">
              Open to full-time opportunities, freelance projects, and consulting engagements
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;