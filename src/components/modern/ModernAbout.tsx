import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const ModernAbout = () => {
  const education = [
    {
      degree: "B.Tech – Electronics and Communication Engineering",
      institution: "S.R.K Institute of Technology",
      period: "2021–2025",
      grade: "8.0 CGPA",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: "Intermediate – M.P.C",
      institution: "Vijaya Kranthi Junior College", 
      period: "2019–2021",
      grade: "7.6 CGPA",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      degree: "SSC",
      institution: "S.S.Z.P.O.H School",
      period: "2018–2019", 
      grade: "9.4 CGPA",
      icon: <Award className="h-6 w-6" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header - Pop-down animation */}
        <div data-aos="fade-down" className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Text - Left-slide animation */}
          <div data-aos="fade-right" data-aos-delay="200" className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-[1.8] font-normal">
                I'm an enthusiastic and detail-oriented AWS Cloud & DevOps enthusiast with hands-on experience gained through academic projects, a professional internship, and freelance work.
              </p>
              <p className="text-lg text-foreground/80 leading-[1.8] font-normal">
                I specialize in AWS services such as EC2, S3, RDS, Lambda, CloudFront, Route 53, and AWS Machine Learning tools like Rekognition, Comprehend, Textract, Lex, and Transcribe.
              </p>
              <p className="text-lg text-foreground/80 leading-[1.8] font-normal">
                Skilled in Infrastructure as Code (IaC) using Terraform, CI/CD automation with GitHub Actions, containerization with Docker and Kubernetes, and serverless deployments.
              </p>
              <p className="text-lg text-foreground/80 leading-[1.8] font-normal">
                I'm passionate about automation, cloud security, and observability, with a strong foundation in Linux administration and database management.
              </p>
            </div>

          </div>

          {/* Education Timeline - Right-slide animation */}
          <div data-aos="fade-left" data-aos-delay="400" className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground mb-10 tracking-tight">Education Timeline</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
              
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  data-aos="fade-left" 
                  data-aos-delay={600 + index * 200}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md z-10"></div>
                  
                  {/* Education card */}
                  <Card className="ml-16 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-l-4 border-l-primary rounded-xl bg-card shadow-soft">
                    <CardContent className="p-7">
                      <div className="flex items-start gap-5">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                          {edu.icon}
                        </div>
                        <div className="flex-1 space-y-2">
                          <h4 className="font-semibold text-foreground text-lg leading-tight">
                            {edu.degree}
                          </h4>
                          <p className="text-primary font-medium text-base">
                            {edu.institution}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-1">
                            <span className="font-normal">{edu.period}</span>
                            <span className="text-accent font-medium">{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;