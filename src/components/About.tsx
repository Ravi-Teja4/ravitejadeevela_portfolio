import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const About = () => {
  const [educationRef, educationInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const education = [
    {
      degree: "B.Tech – Electronics and Communication Engineering",
      institution: "S.R.K Institute of Technology",
      period: "2021–2025",
      grade: "CGPA: 8.0",
      icon: "🎓",
      animation: "animate-slide-in-left"
    },
    {
      degree: "Intermediate – M.P.C",
      institution: "Vijaya Kranthi Junior College",
      period: "2019–2021",
      grade: "CGPA: 7.6",
      icon: "📚",
      animation: "animate-slide-in-right"
    },
    {
      degree: "SSC",
      institution: "S.S.Z.P.O.H School",
      period: "2018–2019",
      grade: "CGPA: 9.4",
      icon: "🏫",
      animation: "animate-fade-in"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="animate-slide-in">
            <Card className="shadow-medium border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Professional Summary
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Enthusiastic and detail-oriented AWS Cloud & Linux enthusiast with hands-on experience 
                  through academic projects, a professional internship, and freelance work. Proficient in 
                  AWS services including EC2, S3, RDS, Lambda, CloudFront, Route 53, and AWS Machine Learning 
                  services such as Rekognition, Comprehend, Textract, Lex, and Transcribe.
                </p>
                <br />
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Skilled in Infrastructure as Code (IaC) using Terraform, serverless application deployment, 
                  cloud security best practices, and database management. Passionate about building scalable, 
                  secure, and cost-effective cloud solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div ref={educationRef} className="relative">
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-foreground">
                Education
              </h3>
            </div>

            <div className="relative">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`
                    absolute w-full transition-all duration-1000 ease-out
                    ${!educationInView 
                      ? 'transform translate-y-0 opacity-70' 
                      : `${index === 0 ? 'transform translate-y-0' : index === 1 ? 'transform translate-y-24' : 'transform translate-y-48'}`
                    }
                    ${educationInView 
                      ? `${edu.animation} delay-${index * 200}` 
                      : ''
                    }
                  `}
                  style={{
                    zIndex: 3 - index,
                    animationDelay: educationInView ? `${index * 300}ms` : '0ms'
                  }}
                >
                  <Card className="shadow-soft border-l-4 border-l-primary hover:shadow-medium transition-all duration-300 bg-card/95 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="text-2xl mr-4 mt-1">
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground text-lg mb-2">
                            {edu.degree}
                          </h4>
                          <p className="text-primary font-medium mb-2">
                            {edu.institution}
                          </p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {edu.period}
                            </div>
                            <span className="font-medium text-primary">
                              {edu.grade}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
              {/* Spacer to maintain proper height */}
              <div className="h-[480px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;