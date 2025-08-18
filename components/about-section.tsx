"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Target } from "lucide-react";
import { personalInfo, goals } from "@/data/portfolio-data";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-accent">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about technology and innovation, I&apos;m on a journey
              to create meaningful digital experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Personal Info */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-lg">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>{personalInfo.location}</span>
                </div>

                <div className="flex items-center gap-3 text-lg">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <span>BTech IT with Business Informatics</span>
                </div>

                <div className="flex items-center gap-3 text-lg">
                  <Target className="w-5 h-5 text-accent" />
                  <span>Minor in Entrepreneurship</span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-card rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  My Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a student at IIIT Allahabad, I&apos;m combining technical
                  expertise with business acumen to build innovative solutions.
                  My passion lies in creating web applications that not only
                  solve problems but also provide exceptional user experiences.
                  I believe in the power of technology to transform ideas into
                  reality and am constantly exploring new ways to push the
                  boundaries of what&apos;s possible.
                </p>
              </div>
            </div>

            {/* Right Column - Goals & Ambitions */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">
                Goals & <span className="text-accent">Ambitions</span>
              </h3>
              <div className="space-y-4">
                {goals.map((goal, index) => (
                  <Card
                    key={index}
                    className="group hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                  >
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                        {goal.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {goal.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
