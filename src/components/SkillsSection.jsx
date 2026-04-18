import React, { useRef, Children } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Database, Box } from 'lucide-react'
export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'HTML5/CSS3',
      ],
      color: 'from-neon-indigo to-neon-purple',
    },
    {
      title: 'Backend & DB',
      icon: Database,
      skills: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'MySQL', 'MongoDB'],
      color: 'from-neon-purple to-neon-cyan',
    },
   {
    title: 'Tools & Platforms', // Slightly upgraded title
    icon: Box,
    skills: [
      'Git / GitHub', 
      'Bitbucket', 
      'Postman', 
      'Vercel', // Replaces generic "Web Deployment"
      'Figma'
    ],
    color: 'from-neon-cyan to-neon-indigo',
  },
  ]
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }
  return (
    <section
      id="skills"
      className="section-padding"
    >
      <div>
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
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-indigo to-neon-cyan bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card p-6 hover:border-neon-purple/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={
                        isInView
                          ? {
                              opacity: 1,
                              scale: 1,
                            }
                          : {}
                      }
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.3,
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)',
                      }}
                      className="px-4 py-2 bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-300 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 hover:text-slate-900 dark:hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
