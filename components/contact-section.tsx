"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form under development, please try later.");
    console.log("Form submitted:", formData);
    // You can integrate with your preferred form handling service
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s collaborate on your next project or discuss exciting
              opportunities in tech and entrepreneurship.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">
                    Let&apos;s Connect
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    I&apos;m always open to discussing new opportunities,
                    innovative projects, or just having a conversation about
                    technology and entrepreneurship. Feel free to reach out!
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        {personalInfo.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-colors">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group hover:border-accent hover:bg-accent/10 transition-all duration-300 bg-transparent"
                  >
                    <Github className="w-5 h-5 mr-2 group-hover:text-accent transition-colors" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group hover:border-accent hover:bg-accent/10 transition-all duration-300 bg-transparent"
                  >
                    <Linkedin className="w-5 h-5 mr-2 group-hover:text-accent transition-colors" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <Card className="border-border/50 hover:border-accent/50 transition-colors duration-300">
                <CardHeader>
                  <h3 className="text-xl font-semibold">Send a Message</h3>
                  <p className="text-muted-foreground text-sm">
                    Fill out the form below and I&apos;ll get back to you as
                    soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="focus:ring-accent focus:border-accent"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="focus:ring-accent focus:border-accent"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hello!"
                        rows={5}
                        className="focus:ring-accent focus:border-accent resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
