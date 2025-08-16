import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Cloud Infrastructure Engineer",
      company: "UH Medicare, Hyderabad",
      period: "Jun 2025 – Aug 2025",
      type: "Freelance",
      location: "Hyderabad",
      responsibilities: [
        "Automated AWS infrastructure deployment using Terraform",
        "Configured CloudWatch metrics, alarms, and logging for enhanced monitoring",
        "Implemented cost optimization strategies reducing operational expenses by 25%",
        "Designed and deployed scalable healthcare analytics infrastructure",
        "Managed multi-environment deployments with Infrastructure as Code"
      ],
      technologies: ["AWS", "Terraform", "CloudWatch", "EC2", "S3", "RDS"]
    },
    {
      title: "Cloud Intern",
      company: "CodTech IT Solutions",
      period: "Jan 2025 – Mar 2025",
      type: "Internship",
      location: "Remote",
      responsibilities: [
        "Set up CloudWatch alerts to reduce response time by 20%",
        "Managed AWS infrastructure including EC2, S3, RDS, Lambda, and VPC",
        "Provisioned enterprise-scale deployments with Auto Scaling and RDS Multi-AZ",
        "Implemented secure VPC configurations with proper subnetting",
        "Collaborated with development teams on cloud-native application deployment"
      ],
      technologies: ["AWS", "EC2", "S3", "RDS", "Lambda", "VPC", "Auto Scaling", "CloudWatch"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="shadow-medium hover:shadow-large transition-all duration-300 border-0 animate-slide-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl sm:text-2xl text-foreground mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center text-primary font-semibold text-lg mb-3">
                      <Briefcase className="w-5 h-5 mr-2" />
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                      <Badge variant="secondary" className="bg-gradient-primary text-white">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;