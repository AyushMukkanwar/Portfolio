"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="relative inline-block">
              <img
                src={personalInfo.imageUrl || "/placeholder.svg"}
                alt={personalInfo.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-accent/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent" />
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-accent font-semibold mb-4">
              {personalInfo.title}
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-2">
              {personalInfo.subtitle}
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <Button
              variant="outline"
              size="lg"
              className="group hover:border-accent hover:bg-accent/10 transition-all duration-300 bg-transparent"
              asChild
            >
              <a href={personalInfo.github} target="_blank">
                <Github className="w-5 h-5 mr-2 group-hover:text-accent transition-colors" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group hover:border-accent hover:bg-accent/10 transition-all duration-300 bg-transparent"
              asChild
            >
              <a href={personalInfo.linkedin} target="_blank">
                <Linkedin className="w-5 h-5 mr-2 group-hover:text-accent transition-colors" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group hover:border-accent hover:bg-accent/10 transition-all duration-300 bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:text-accent transition-colors" />
              Contact
            </Button>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`transition-all duration-1000 delay-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce hover:text-accent transition-colors duration-300"
              aria-label="Scroll to next section"
            >
              <ChevronDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
