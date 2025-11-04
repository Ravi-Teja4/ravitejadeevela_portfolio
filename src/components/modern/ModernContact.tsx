import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Calendar,
  ExternalLink,
  Send
} from 'lucide-react';

const ModernContact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "deevelaraviteja@gmail.com",
      href: "mailto:deevelaraviteja@gmail.com"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "https://github.com/ravitejadeevela",
      href: "https://github.com/ravitejadeevela"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/ravitejadeevela",
      href: "https://www.linkedin.com/in/ravitejadeevela"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 6303275377",
      href: "tel:+916303275377"
    }
  ];

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#00008B' }}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next cloud project? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Glassmorphism Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden" style={{ backgroundColor: '#00008B' }}>
              <CardHeader className="pb-6" style={{ backgroundColor: '#00008B' }}>
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="p-3 rounded-2xl"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Send className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white">Get In Touch</h3>
                </div>
                <p className="text-white">
                  Based in India and available for remote or on-site work worldwide.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6 p-8">
                {contactInfo.map((contact, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.a 
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 transition-all duration-250 group no-underline hover:underline"
                      whileHover={{ x: 4 }}
                    >
                      <div className="text-white group-hover:text-[#4DA3FF] transition-colors duration-250">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-white group-hover:text-[#4DA3FF] transition-colors duration-250">
                          {contact.value}
                        </div>
                      </div>
                    </motion.a>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.03, y: -4 }}>
                <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden" style={{ backgroundColor: '#00008B' }}>
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      className="inline-flex p-4 rounded-2xl mb-4"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                      whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Calendar className="h-8 w-8 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-2">Schedule a Call</h4>
                    <p className="text-sm text-white mb-6">
                      Let's discuss your cloud infrastructure needs
                    </p>
                    <Button 
                      className="bg-white text-black hover:bg-gray-100 transition-all duration-300 rounded-lg px-6"
                      onClick={() => window.open('mailto:deevelaraviteja@gmail.com?subject=Schedule%20a%20Call')}
                    >
                      Schedule Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.03, y: -4 }}>
                <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden" style={{ backgroundColor: '#00008B' }}>
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      className="inline-flex p-4 rounded-2xl mb-4"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                      whileHover={{ rotate: [0, 5, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Github className="h-8 w-8 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-2">Collaborate</h4>
                    <p className="text-sm text-white mb-6">
                      Open to cloud and DevOps projects
                    </p>
                    <Button 
                      className="bg-white text-black hover:bg-gray-100 transition-all duration-300 rounded-lg px-6"
                      onClick={() => window.open('https://github.com/Ravi-Teja4', '_blank')}
                    >
                      View GitHub
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Location Badge */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="max-w-2xl mx-auto p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#00008B' }}>
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">Location & Availability</h3>
            </div>
            <p className="text-white mb-2">
              <strong className="text-white">Based in India</strong> • Available for remote work globally
            </p>
            <p className="text-sm text-white">
              Open to full-time opportunities, freelance projects, and consulting engagements
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernContact;