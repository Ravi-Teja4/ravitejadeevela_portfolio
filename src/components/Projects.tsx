import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Utility Health Medicare",
      period: "Jun – Aug 2025",
      description: "Designed and deployed a cloud-based infrastructure to support healthcare analytics and reporting systems for population-based health variables. Implemented secure front-end API access and scalable back-end processing.",
      highlights: [
        "Used EC2 instances for back-end health logic processing",
        "Implemented ALB + WAF to secure the front-end API access",
        "Designed infrastructure for healthcare analytics and reporting",
        "Managed population-based health variables processing"
      ],
      techStack: ["AWS VPC", "S3", "EC2", "Route 53", "WAF", "CloudWatch", "Terraform", "Linux"],
      type: "Cloud Infrastructure",
      status: "Completed"
    },
    {
      title: "3-Tier Architecture",
      period: "Apr – May 2025",
      description: "Designed and implemented scalable 3-tier architectures using AWS services ensuring security, scalability, and high availability across all tiers with efficient traffic distribution.",
      highlights: [
        "Designed scalable 3-tier architectures using AWS services",
        "Ensured security, scalability, and high availability across all tiers",
        "Utilized load balancers (ELB) for efficient traffic distribution",
        "Configured Auto Scaling to dynamically adjust resources based on traffic demands"
      ],
      techStack: ["AWS EC2", "RDS", "ELB", "Auto Scaling", "Linux"],
      type: "Architecture Design",
      status: "Completed"
    },
    {
      title: "Serverless Web Application",
      period: "Apr – Jun 2025",
      description: "Deployed a fully serverless web application using AWS services, reducing operational costs by leveraging pay-per-use pricing model and implementing security best practices.",
      highlights: [
        "Reduced operational costs by leveraging AWS's pay-per-use pricing model",
        "Integrated IAM roles and policies following least privilege principle",
        "Integrated AWS Secrets Manager for secure environment variable management",
        "Optimized Lambda performance by minimizing cold start times"
      ],
      techStack: ["AWS Lambda", "API Gateway", "DynamoDB", "IAM", "Secrets Manager", "Python"],
      type: "Serverless Application",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Cloud Infrastructure':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Architecture Design':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Serverless Application':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Showcasing real-world applications of cloud technologies and infrastructure solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="shadow-medium hover:shadow-large transition-all duration-300 border-0 flex flex-col animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge 
                      variant="outline" 
                      className={`border ${getTypeColor(project.type)}`}
                    >
                      {project.type}
                    </Badge>
                    <Badge 
                      variant="outline" 
                      className={`border ${getStatusColor(project.status)}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardTitle className="text-xl text-foreground mb-3">
                  {project.title}
                </CardTitle>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.period}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <h4 className="font-semibold text-foreground mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
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

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="max-w-2xl mx-auto shadow-medium border-0 bg-gradient-primary text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Interested in My Work?
              </h3>
              <p className="text-white/90 mb-6">
                Let's discuss how I can help build scalable cloud solutions for your next project.
              </p>
              <Button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300 font-semibold"
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;