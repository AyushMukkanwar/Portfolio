"use client"

import { useEffect, useState } from "react"
import { skills } from "@/data/portfolio-data"
import Image from "next/image"

export function SkillsSection() {
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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-accent">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications and exploring innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent/20 hover:scale-105 cursor-pointer ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative flex flex-col items-center gap-4">
                  <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={skill.logoUrl || "/placeholder.svg"}
                      alt={`${skill.name} logo`}
                      width={48}
                      height={48}
                      className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <span className="text-sm font-medium text-center group-hover:text-accent transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>

                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-xl border border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
