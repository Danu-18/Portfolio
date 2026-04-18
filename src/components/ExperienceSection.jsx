import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  const experiences = [
    {
      type: 'work',
      title: 'Full-Stack Developer',
      organization: 'KarMuqabla',
      period: '2024 - Present',
      description:
        'Developed and maintained web and mobile applications using React, Next.js, Laravel, and Capacitor. Led the implementation of real-time features and REST API integrations.',
      skills: ['React', 'Next.js', 'Laravel', 'Capacitor'],
    },
    {
      type: 'work',
      title: 'MERN Stack Developer',
      organization: 'Vibrant Company',
      period: '2023 - 2024',
      description:
        'Built scalable web applications using MongoDB, Express.js, React, and Node.js. Managed deployment pipelines and optimized application performance.',
      skills: ['Node.js', 'MongoDB', 'Web Deployment'],
    },
    {
      type: 'work',
      title: 'Freelance PHP Developer',
      organization: 'Upwork',
      period: '2023 - 2023',
      description:
        'Delivered custom PHP solutions for various clients. Specialized in MySQL database design and Stripe payment gateway integrations.',
      skills: ['PHP', 'MySQL', 'Stripe API'],
    },
    {
    type: 'education',
    title: 'BSc (Hons) in Computing', 
    organization: 'University of Bolton',
    period: 'May 2026 - Expected 2027', 
    description:
      'Currently pursuing. Curriculum focused on advanced computer science fundamentals, software engineering principles, and modern web technologies.',
    skills: ['Software Engineering', 'Web Technologies'], 
  },
    {
      type: 'education',
      title: 'Diploma in Software Engineering',
      organization: 'Aptech',
      period: '2022 - 2025',
      description:
        'Graduated with Distinction. Focused on programming fundamentals, database management, and software development lifecycle.',
      skills: [],
    },
  ]
  return (
    <section
      id="experience"
      className="w-full section-padding bg-gray-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-indigo to-neon-purple bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-indigo via-neon-purple to-neon-cyan transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const itemRef = useRef(null)
              const itemInView = useInView(itemRef, {
                once: true,
                margin: '-50px',
              })
              const isWork = item.type === 'work'
              const Icon = isWork ? Briefcase : GraduationCap
              return (
                <motion.div
                  key={index}
                  ref={itemRef}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50,
                  }}
                  animate={
                    itemInView
                      ? {
                          opacity: 1,
                          x: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    animate={
                      itemInView
                        ? {
                            scale: 1,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + 0.2,
                    }}
                    className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-lg glow-purple">
                      <Icon className="text-white" size={28} />
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
                      }}
                      className="bg-white dark:bg-slate-900/80 backdrop-blur-sm border border-gray-200 dark:border-slate-800 rounded-xl p-6 shadow-md dark:shadow-none hover:border-purple-500/50 dark:hover:border-purple-500/50 hover:shadow-lg dark:hover:shadow-purple-500/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${isWork ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'}`}
                        >
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h3>

                      <p className="text-purple-500 dark:text-purple-400 font-semibold mb-3">
                        {item.organization}
                      </p>

                      <p className="text-slate-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {item.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-gray-300 rounded-full text-sm border border-gray-300 dark:border-slate-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
