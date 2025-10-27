import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ModernExperience = () => {
  const experiences = [
    {
      title: "Freelance Cloud Infrastructure Engineer",
      company: "UH Medicare",
      period: "Jun 2025 – Aug 2025",
      location: "Hyderabad",
      type: "Freelance",
      responsibilities: [
        "Automated AWS infrastructure deployment using Terraform",
        "Configured CloudWatch metrics, alarms, and logging",
        "Reduced operational expenses by 25%"
      ],
      technologies: ["AWS", "Terraform", "CloudWatch", "Infrastructure as Code"]
    },
    {
      title: "Cloud Intern",
      company: "CodTech IT Solutions",
      period: "Jan 2025 – Mar 2025",
      location: "Remote",
      type: "Internship",
      responsibilities: [
        "Set up CloudWatch alerts, managed EC2, Lambda, VPC",
        "Provisioned Auto Scaling and secure VPC subnets",
        "Implemented cloud security best practices"
      ],
      technologies: ["AWS", "EC2", "Lambda", "VPC", "Auto Scaling"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience in cloud infrastructure, automation, and DevOps practices
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? 'lg:pr-1/2 lg:text-right' : 'lg:pl-1/2 lg:ml-auto'
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Timeline dot - centered */}
              <motion.div 
                className="hidden lg:block absolute top-8 left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10 transform -translate-x-1/2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.2, ease: "easeOut" }}
              />

              {/* Experience Card */}
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                style={{ willChange: 'transform' }}
              >
                <Card className={`relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group ${
                  index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                }`}>
                {/* Card gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {exp.type}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-primary mb-3">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 pt-0">
                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="font-medium text-foreground mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Summary */}
        <motion.div 
          className="mt-16 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div 
            whileHover={{ 
              scale: 1.03, 
              y: -4,
              transition: { duration: 0.3, ease: "easeOut" } 
            }}
            style={{ willChange: 'transform' }}
          >
            <Card className="text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-primary">
              <div className="text-3xl font-bold text-primary mb-2">25%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </Card>
          </motion.div>
          <motion.div 
            whileHover={{ 
              scale: 1.03, 
              y: -4,
              transition: { duration: 0.3, ease: "easeOut" } 
            }}
            style={{ willChange: 'transform' }}
          >
            <Card className="text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-primary">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">AWS Services</div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernExperience;