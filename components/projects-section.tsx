"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star } from "lucide-react"
import { projects } from "@/data/portfolio-data"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating technical skills and creative problem-solving.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10 overflow-hidden ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent/90 text-accent-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="group/btn hover:border-accent hover:bg-accent/10 bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:text-accent transition-colors" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <>
              <div
                className={`text-center mb-12 transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              >
                <h3 className="text-2xl font-bold mb-4">
                  Other <span className="text-accent">Projects</span>
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {otherProjects.map((project, index) => (
                  <Card
                    key={project.id}
                    className={`group hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent/10 ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${(index + featuredProjects.length) * 200}ms` }}
                  >
                    <CardHeader>
                      <h4 className="text-lg font-semibold group-hover:text-accent transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="group/btn hover:border-accent hover:bg-accent/10 bg-transparent"
                          >
                            <Github className="w-4 h-4 mr-2 group-hover/btn:text-accent transition-colors" />
                            Code
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
