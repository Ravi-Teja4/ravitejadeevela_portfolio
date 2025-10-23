import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cloud, 
  Database, 
  Shield, 
  Code, 
  Server, 
  Cpu,
  Lock,
  Terminal,
  GitBranch,
  Monitor
} from 'lucide-react';

const ModernSkills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms & Services",
      icon: <Cloud className="h-8 w-8" />,
      skills: ["EC2", "S3", "RDS", "Lambda", "CloudFront", "CloudWatch", "Route 53", "IAM", "Auto Scaling", "ALB", "CloudTrail", "Elastic Beanstalk", "EBS", "VPC"],
      color: "bg-primary",
      delay: 0
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-8 w-8" />,
      skills: ["Git", "GitHub"],
      color: "bg-accent",
      delay: 100
    },
    {
      title: "CI/CD",
      icon: <Code className="h-8 w-8" />,
      skills: ["GitHub Actions"],
      color: "bg-primary",
      delay: 200
    },
    {
      title: "Containers & Orchestration",
      icon: <Server className="h-8 w-8" />,
      skills: ["Docker", "Kubernetes"],
      color: "bg-accent",
      delay: 300
    },
    {
      title: "Application Servers",
      icon: <Server className="h-8 w-8" />,
      skills: ["Apache Tomcat", "Nginx"],
      color: "bg-primary",
      delay: 400
    },
    {
      title: "Monitoring & Observability",
      icon: <Monitor className="h-8 w-8" />,
      skills: ["AWS CloudWatch", "Prometheus", "Grafana"],
      color: "bg-accent",
      delay: 500
    },
    {
      title: "Infrastructure as Code (IaC)",
      icon: <Code className="h-8 w-8" />,
      skills: ["Terraform"],
      color: "bg-primary",
      delay: 600
    },
    {
      title: "Databases",
      icon: <Database className="h-8 w-8" />,
      skills: ["SQL", "Amazon DynamoDB"],
      color: "bg-accent",
      delay: 700
    },
    {
      title: "Security",
      icon: <Shield className="h-8 w-8" />,
      skills: ["Web Application Firewall (WAF)", "ACL", "Security Groups", "IAM Policies"],
      color: "bg-primary",
      delay: 800
    },
    {
      title: "Scripting",
      icon: <Terminal className="h-8 w-8" />,
      skills: ["Python"],
      color: "bg-accent",
      delay: 900
    },
    {
      title: "Operating Systems",
      icon: <Monitor className="h-8 w-8" />,
      skills: ["Linux", "Windows"],
      color: "bg-primary",
      delay: 1000
    }
  ];

  const certifications = [
    { name: "AWS Solutions Architect", status: "In Progress", color: "bg-blue-500" }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Expertise across cloud platforms, infrastructure automation, and modern development practices
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              data-aos="fade-up"
              data-aos-delay={category.delay}
              className="group hover:shadow-2xl transition-all duration-500 border border-border/50 bg-card overflow-hidden relative"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl text-primary-foreground ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:scale-105"
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Certifications */}
        <div data-aos="fade-up" data-aos-delay="1000" className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">Certifications & Learning Path</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ${cert.color}`}></div>
                    <span className="font-medium text-foreground">{cert.name}</span>
                  </div>
                  <Badge 
                    variant={cert.status === "In Progress" ? "default" : "secondary"}
                    className={cert.status === "In Progress" ? "bg-primary" : ""}
                  >
                    {cert.status}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSkills;