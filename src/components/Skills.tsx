import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Cloud, 
  Server, 
  Database, 
  Shield, 
  Code, 
  Monitor,
  Cpu,
  HardDrive,
  Network,
  Brain,
  FileText,
  MessageSquare
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms & Services",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS EC2", "S3", "RDS", "Lambda", "CloudFront", "CloudWatch", "Route 53", "IAM", "Auto Scaling", "ALB", "CloudTrail", "Elastic Beanstalk", "EBS", "VPC"],
      color: "bg-blue-100 text-blue-700 border-blue-200"
    },
    {
      title: "Machine Learning Services",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Rekognition", "Comprehend", "Textract", "Lex", "Transcribe"],
      color: "bg-purple-100 text-purple-700 border-purple-200"
    },
    {
      title: "Infrastructure as Code",
      icon: <FileText className="w-6 h-6" />,
      skills: ["Terraform"],
      color: "bg-orange-100 text-orange-700 border-orange-200"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL", "DynamoDB", "RDS Multi-AZ"],
      color: "bg-green-100 text-green-700 border-green-200"
    },
    {
      title: "Security",
      icon: <Shield className="w-6 h-6" />,
      skills: ["WAF", "ACL", "Security Groups", "IAM Policies"],
      color: "bg-red-100 text-red-700 border-red-200"
    },
    {
      title: "Scripting & Programming",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python"],
      color: "bg-yellow-100 text-yellow-700 border-yellow-200"
    },
    {
      title: "Operating Systems",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Linux", "Windows"],
      color: "bg-gray-100 text-gray-700 border-gray-200"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Comprehensive expertise in cloud technologies, infrastructure automation, and modern development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="shadow-medium hover:shadow-large transition-all duration-300 border-0 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-3 text-white">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 ${category.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center shadow-soft border-0 animate-fade-in">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Cloud Architecture</h3>
              <p className="text-muted-foreground">Designing scalable and secure cloud solutions</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft border-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <HardDrive className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Infrastructure as Code</h3>
              <p className="text-muted-foreground">Automated deployment and infrastructure management</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft border-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Cloud Security</h3>
              <p className="text-muted-foreground">Implementing security best practices and compliance</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;