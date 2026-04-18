import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GitBranch, PlayCircle, ExternalLink } from 'lucide-react'
import { FaGithub } from "react-icons/fa"
export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  const projects = [
  {
    title: 'KarMuqabla Educational Platform',
    description: 'A comprehensive, production-level educational gaming platform combining web and native mobile experiences. Features robust role-based access control, gamified learning with real-time leaderboards, and extensive content management tools.',
    tech: ['Next.js 14', 'Laravel 8', 'Capacitor', 'Redux', 'MySQL'],
    image: '/Karmuqbla.png',
    github: 'https://bitbucket.org/karmuqabla/karmuqbala-react-web/src/master/',
    demo: '#',
  },
  {
    title: 'EduNex-AI Analytics Platform',
    description: 'An advanced educational analytics platform leveraging machine learning to predict student performance and analyze attendance patterns. Features a modern React frontend, Node.js authentication, and a Python FastAPI server for ML model processing.',
    tech: ['React.js', 'Node.js', 'Python (FastAPI)', 'MongoDB', 'Machine Learning'],
    image: '/EduNex.png',
    github: 'https://github.com/Darakhshan08/Edupredict',
    demo: '#',
  },
  {
    title: 'BridgeLogic Systems',
    description: 'A modern digital agency website showcasing professional web development services. Built with a sophisticated Next.js architecture, featuring an elegant dark-themed interface, smooth Framer Motion animations, and static hosting optimization.',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/Bridelogistics.png',
    github: 'https://github.com/Danu-18/BridgeLogicSystems',
    demo: '#',
  },
  {
    title: 'EventSphere Management',
    description: 'A comprehensive full-stack exhibition and event management platform. Streamlines the organization, booking, and execution of professional expos with secure role-based access control, real-time booth allocation, and JWT authentication.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    image: '/Eventsphere-Management.png',
    github: 'https://github.com/Darakhshan08/EventSphere_Management',
    demo: '#',
  },
]
  return (
    <section
      id="projects"
className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:bg-none transition-colors duration-300"    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg">
            Showcasing complex development work with modern tech stacks
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => {
            const projectRef = useRef(null)
            const projectInView = useInView(projectRef, {
              once: true,
              margin: '-100px',
            })
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={project.title}
                ref={projectRef}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={
                  projectInView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white dark:bg-transparent rounded-2xl p-6 shadow-md dark:shadow-none hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-purple-500/10 transition-all duration-300`}
              >
                {/* Image/Video Placeholder */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="w-full lg:w-1/2"
                >
                  <div className="gradient-border">
<div className="gradient-border-inner bg-white dark:bg-slate-800 aspect-video overflow-hidden">
  <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <motion.h3
                    initial={{
                      opacity: 0,
                      x: isEven ? 20 : -20,
                    }}
                    animate={
                      projectInView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                    }}
                    className="text-3xl font-bold text-slate-900 dark:text-white"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? 20 : -20,
                    }}
                    animate={
                      projectInView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.3,
                    }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-purple-500 dark:text-purple-400 rounded-full text-sm font-medium border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  <motion.p
                    initial={{
                      opacity: 0,
                      x: isEven ? 20 : -20,
                    }}
                    animate={
                      projectInView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.4,
                    }}
                    className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? 20 : -20,
                    }}
                    animate={
                      projectInView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.5,
                    }}
                    className="flex flex-wrap gap-4 pt-4"
                  >
                    <motion.a
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-gradient-to-r from-neon-indigo via-neon-purple to-neon-cyan text-white font-semibold rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-neon-indigo/50"
                    >
                      <FaGithub size={20} className="text-white" />
                      {project.github.includes('bitbucket') ? 'View Bitbucket' : 'View GitHub Repo'}
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
