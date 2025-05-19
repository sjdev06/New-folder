"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Download,
  Code,
  Briefcase,
  GraduationCap,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"

export default function Home() {
  const isMobile = useMobile()
  const [activeSection, setActiveSection] = useState("about")
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    hobbies: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current && scrollPosition >= ref.current.offsetTop) {
          setActiveSection(section)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs]
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80">
      {/* Decorative Elements */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-[10%] top-[15%] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute -right-[5%] top-[35%] h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[20%] h-[350px] w-[350px] rounded-full bg-pink-500/10 blur-[100px]" />
      </div>

      {/* Navigation */}
      {!isMobile && (
        <nav className="fixed left-10 top-1/2 z-50 -translate-y-1/2 transform">
          <motion.div
            className="flex flex-col items-start space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {Object.keys(sectionRefs).map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`group flex items-center space-x-2 text-sm font-medium transition-colors ${
                  activeSection === section ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"
                }`}
              >
                <span
                  className={`block h-[2px] w-8 transition-all ${
                    activeSection === section
                      ? "w-12 bg-primary"
                      : "bg-muted-foreground group-hover:w-10 group-hover:bg-foreground/80"
                  }`}
                />
                <span className="capitalize">{section}</span>
              </button>
            ))}
          </motion.div>
        </nav>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05)_0%,rgba(255,255,255,0)_100%)]" />
        </div>

        <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8 h-40 w-40 overflow-hidden rounded-full border-4 border-background bg-gradient-to-br from-primary/20 to-primary/10 p-1 shadow-xl md:h-48 md:w-48"
          >
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl"
          >
            Saket Jha
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 flex items-center justify-center"
          >
            <span className="text-xl text-muted-foreground md:text-2xl">Creative Developer</span>
            <span className="mx-3 h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xl text-muted-foreground md:text-2xl">UI/UX Designer</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild variant="default" className="gap-2 rounded-full">
              <Link href="mailto:saketj.dev@gmail.com">
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2 rounded-full">
              <Link href="#" download>
                <Download className="h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 flex space-x-4"
          >
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full border-border/40 bg-background/50 backdrop-blur-sm"
            >
              <Link href="https://github.com/sjdev06/New-folder" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full border-border/40 bg-background/50 backdrop-blur-sm"
            >
              <Link href="https://www.linkedin.com/in/saketjha06/" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full border-border/40 bg-background/50 backdrop-blur-sm"
            >
              <Link href="https://codechef.com" target="_blank" aria-label="CodeChef">
                <Code className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce"
          >
            <ChevronRight className="h-8 w-8 rotate-90 text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={sectionRefs.about} className="py-20">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-12 flex items-center">
              <h2 className="text-3xl font-bold">About Me</h2>
              <div className="ml-4 h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a passionate Creative Developer and UI/UX Designer with over 5 years of experience crafting digital
                experiences that blend aesthetics with functionality. My approach combines technical expertise with
                creative problem-solving to build products that are not only visually stunning but also intuitive and
                accessible.
              </p>
              <p>
                Currently working at a forward-thinking design studio where I lead cross-functional teams in creating
                innovative digital solutions. I specialize in translating complex requirements into elegant interfaces
                and seamless user experiences.
              </p>
              <p>
                When I'm not designing or coding, you'll find me exploring emerging technologies, contributing to
                open-source projects, or sharing my knowledge through workshops and articles. I'm constantly seeking new
                challenges that push the boundaries of what's possible in digital design and development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={sectionRefs.experience} className="py-20">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-12 flex items-center">
              <h2 className="text-3xl font-bold">Experience</h2>
              <div className="ml-4 h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative space-y-12 pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-primary/80 before:via-primary/50 before:to-primary/5"
            >
              <motion.div variants={fadeIn} className="relative">
                <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-background">
                  <Briefcase className="h-3 w-3 text-primary" />
                </div>
                <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                  <h3 className="text-xl font-semibold">Senior Creative Developer</h3>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    2021 - Present
                  </div>
                </div>
                <p className="mt-1 text-muted-foreground">DesignStudio X</p>
                <ul className="mt-4 list-inside space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-primary" />
                    Led the redesign of a flagship product, increasing user engagement by 40%
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-primary" />
                    Established design systems that improved development efficiency by 30%
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-primary" />
                    Mentored junior designers and developers, fostering a collaborative culture
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeIn} className="relative">
                <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-background">
                  <Briefcase className="h-3 w-3 text-primary" />
                </div>
                <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                  <h3 className="text-xl font-semibold">UI/UX Developer</h3>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    2018 - 2021
                  </div>
                </div>
                <p className="mt-1 text-muted-foreground">InnovateTech</p>
                <ul className="mt-4 list-inside space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-primary" />
                    Designed and developed responsive interfaces for web and mobile applications
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-primary" />
                    Collaborated with product managers to define user requirements and workflows
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-primary" />
                    Conducted user testing and implemented iterative improvements
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={sectionRefs.skills} className="py-20">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-12 flex items-center">
              <h2 className="text-3xl font-bold">Skills</h2>
              <div className="ml-4 h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="mb-4 text-xl font-semibold">Design</h3>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm font-medium">UI/UX Design</span>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/80"
                        initial={{ width: 0 }}
                        whileInView={{ width: "95%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm font-medium">Figma / Adobe XD</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/80"
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm font-medium">Design Systems</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/80"
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="mb-4 text-xl font-semibold">Development</h3>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm font-medium">React / Next.js</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/80"
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm font-medium">TypeScript</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/80"
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 flex justify-between">
                      <span className="text-sm font-medium">CSS / Tailwind</span>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary/80"
                        initial={{ width: 0 }}
                        whileInView={{ width: "95%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
            >
              <h3 className="mb-4 text-xl font-semibold">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "HTML5",
                  "CSS3",
                  "Tailwind CSS",
                  "Figma",
                  "Adobe XD",
                  "Node.js",
                  "GraphQL",
                  "REST APIs",
                  "Git",
                  "Framer Motion",
                  "Three.js",
                  "GSAP",
                  "Storybook",
                  "Jest",
                  "Cypress",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="rounded-full bg-muted px-3 py-1 text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section ref={sectionRefs.education} className="py-20">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-12 flex items-center">
              <h2 className="text-3xl font-bold">Education</h2>
              <div className="ml-4 h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative space-y-12 pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-primary/80 before:via-primary/50 before:to-primary/5"
            >
              <motion.div variants={fadeIn} className="relative">
                <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-background">
                  <GraduationCap className="h-3 w-3 text-primary" />
                </div>
                <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                  <h3 className="text-xl font-semibold">Master of Design</h3>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    2016 - 2018
                  </div>
                </div>
                <div className="mt-1 flex items-center text-muted-foreground">
                  <Link href="https://stanford.edu" target="_blank" className="flex items-center hover:text-foreground">
                    Stanford University
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </div>
                <p className="mt-2 text-muted-foreground">
                  Specialized in Interactive Design with focus on human-computer interaction and user experience.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="relative">
                <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-background">
                  <GraduationCap className="h-3 w-3 text-primary" />
                </div>
                <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                  <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    2012 - 2016
                  </div>
                </div>
                <div className="mt-1 flex items-center text-muted-foreground">
                  <Link href="https://mit.edu" target="_blank" className="flex items-center hover:text-foreground">
                    MIT
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </div>
                <p className="mt-2 text-muted-foreground">
                  Graduated with honors. Focused on web technologies and creative coding.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRefs.projects} className="py-20">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-12 flex items-center">
              <h2 className="text-3xl font-bold">Projects</h2>
              <div className="ml-4 h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-video overflow-hidden rounded-xl bg-muted">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Project thumbnail"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white">Immersive Portfolio</h3>
                  <p className="mt-2 text-white/80">
                    An interactive 3D portfolio experience built with Three.js and React
                  </p>
                  <div className="mt-4 flex space-x-2">
                    <Badge variant="outline" className="border-white/20 text-white">
                      React
                    </Badge>
                    <Badge variant="outline" className="border-white/20 text-white">
                      Three.js
                    </Badge>
                    <Badge variant="outline" className="border-white/20 text-white">
                      GSAP
                    </Badge>
                  </div>
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="mt-4 w-fit rounded-full bg-white text-black hover:bg-white/90"
                  >
                    <Link href="https://github.com" target="_blank">
                      View Project
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="aspect-video overflow-hidden rounded-xl bg-muted">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Project thumbnail"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white">AI-Powered Dashboard</h3>
                  <p className="mt-2 text-white/80">
                    A data visualization dashboard with AI-driven insights and analytics
                  </p>
                  <div className="mt-4 flex space-x-2">
                    <Badge variant="outline" className="border-white/20 text-white">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="border-white/20 text-white">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="border-white/20 text-white">
                      D3.js
                    </Badge>
                  </div>
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="mt-4 w-fit rounded-full bg-white text-black hover:bg-white/90"
                  >
                    <Link href="https://github.com" target="_blank">
                      View Project
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <Button asChild variant="outline" className="rounded-full">
                <Link href="https://github.com" target="_blank">
                  View More Projects
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section ref={sectionRefs.hobbies} className="py-20">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-12 flex items-center">
              <h2 className="text-3xl font-bold">Hobbies & Interests</h2>
              <div className="ml-4 h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {[
                { name: "Photography", icon: "📷", description: "Street and landscape photography" },
                { name: "Travel", icon: "✈️", description: "Exploring new cultures and places" },
                { name: "Music Production", icon: "🎵", description: "Creating electronic music" },
                { name: "Rock Climbing", icon: "🧗", description: "Indoor and outdoor climbing" },
                { name: "Reading", icon: "📚", description: "Science fiction and design books" },
                { name: "Open Source", icon: "💻", description: "Contributing to community projects" },
              ].map((hobby, index) => (
                <motion.div
                  key={hobby.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col items-center rounded-xl bg-muted/50 p-6 text-center transition-colors hover:bg-muted"
                >
                  <div className="mb-4 text-4xl">{hobby.icon}</div>
                  <h3 className="mb-2 text-lg font-medium">{hobby.name}</h3>
                  <p className="text-sm text-muted-foreground">{hobby.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="mt-4 text-muted-foreground">
              Interested in working together? Feel free to reach out through any of the platforms below.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="default" className="gap-2 rounded-full">
                <Link href="mailto:contact@example.com">
                  <Mail className="h-4 w-4" />
                  contact@example.com
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2 rounded-full">
                <Link href="https://github.com" target="_blank">
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2 rounded-full">
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <div className="flex items-center space-x-2">
            <Heart className="h-4 w-4 text-primary" />
            <p className="text-sm text-muted-foreground">Designed & Built with passion by Saket Jha</p>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
