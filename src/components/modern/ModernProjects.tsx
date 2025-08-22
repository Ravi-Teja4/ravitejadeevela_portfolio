import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Cloud, Database, Shield, Code } from 'lucide-react';

const ModernProjects = () => {
  const projects = [
    {
      title: "Utility Health Medicare",
      description: "Designed and implemented a comprehensive cloud-based healthcare analytics infrastructure using AWS services. Built scalable architecture with automated deployment pipelines.",
      technologies: ["AWS EC2", "S3", "WAF", "Route 53", "Terraform", "CloudWatch", "RDS"],
      features: [
        "Automated infrastructure deployment",
        "Real-time health analytics dashboard", 
        "Secure patient data management",
        "Cost-optimized cloud architecture"
      ],
      icon: <Database className="h-8 w-8" />,
      gradient: "from-blue-500 to-blue-600",
      delay: 0,
      link: null
    },
    {
      title: "AWS Serverless Web Application",
      description: "Built a fully serverless web application using AWS Lambda, API Gateway, and DynamoDB. Implemented secure authentication and automated CI/CD pipeline.",
      technologies: ["Lambda", "API Gateway", "DynamoDB", "IAM", "Secrets Manager", "Python"],
      features: [
        "Serverless architecture design",
        "Automated deployment pipeline",
        "Secure API authentication", 
        "Real-time data processing"
      ],
      icon: <Code className="h-8 w-8" />,
      gradient: "from-green-500 to-green-600",
      delay: 200,
      link: "https://github.com/Ravi-Teja4/AWS-Serverless-Project"
    },
    {
      title: "3-Tier Architecture on AWS",
      description: "Implemented a scalable 3-tier architecture with load balancing, auto-scaling, and high availability across multiple AZs. Focused on security and performance optimization.",
      technologies: ["ELB", "Auto Scaling", "VPC", "Security Groups", "CloudFormation", "RDS Multi-AZ"],
      features: [
        "High availability design",
        "Auto-scaling implementation",
        "Security best practices",
        "Performance optimization"
      ],
      icon: <Cloud className="h-8 w-8" />,
      gradient: "from-purple-500 to-purple-600",
      delay: 400,
      link: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-world cloud solutions showcasing expertise in AWS architecture, automation, and security
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              data-aos="fade-up"
              data-aos-delay={project.delay}
              className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white relative"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="relative z-10 pt-0">
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex pt-4 border-t border-border/50">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => project.link && window.open(project.link, '_blank')}
                    disabled={!project.link}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects CTA */}
        <div data-aos="fade-up" data-aos-delay="600" className="text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">More Projects Coming Soon</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Currently working on advanced cloud security implementations and multi-cloud orchestration projects.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 py-3"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </Card>
        </div>

        {/* Project Stats */}
        <div data-aos="fade-up" data-aos-delay="800" className="mt-16 grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-t-4 border-t-primary">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Cloud Projects</div>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-t-4 border-t-accent">
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-sm text-muted-foreground">AWS Services Used</div>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-t-4 border-t-primary">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Infrastructure as Code</div>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-t-4 border-t-accent">
            <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Achieved</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModernProjects;