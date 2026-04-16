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
      title: 'E-Commerce Platform with Real-Time Inventory',
      description:
        'Built a full-stack e-commerce solution with Next.js frontend and Laravel backend. Features include real-time inventory tracking, Stripe payment integration, admin dashboard with analytics, and responsive product catalog with advanced filtering.',
      tech: ['Next.js', 'Laravel', 'MySQL', 'Stripe API', 'Tailwind CSS'],
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=450&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Social Media Dashboard with Analytics',
      description:
        'Developed a comprehensive social media management platform using MERN stack. Integrated multiple social APIs for post scheduling, engagement tracking, and detailed analytics visualization with interactive charts and real-time updates.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Chart.js'],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Mobile-First Task Management App',
      description:
        'Created a cross-platform task management application using React and Capacitor. Features drag-and-drop task organization, team collaboration tools, push notifications, and offline-first architecture with data synchronization.',
      tech: [
        'React.js',
        'Capacitor',
        'TypeScript',
        'Firebase',
        'Framer Motion',
      ],
      image:
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=450&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'AI-Powered Content Management System',
      description:
        'Engineered a modern CMS with AI-assisted content generation and SEO optimization. Built with PHP/Laravel backend, React frontend, and integrated OpenAI API for smart content suggestions and automated meta tag generation.',
      tech: ['Laravel', 'React.js', 'PostgreSQL', 'OpenAI API', 'Redis'],
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
      github: '#',
      demo: '#',
    },
  ]
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
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
                        className="w-full h-full object-cover"
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
                      className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg flex items-center gap-2 transition-all duration-300"
                    >
                      <FaGithub size={20} className="text-white" />
                      View GitHub Repo
                    </motion.a>

                    <motion.a
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      href={project.demo}
                      className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 flex items-center gap-2 transition-all duration-300"
                    >
                      <PlayCircle size={20} />
                      Watch Video Demo
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
