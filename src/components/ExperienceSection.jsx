import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, GraduationCap, Building2 } from 'lucide-react'
import { StudioTitle, StudioCard, StudioPegs } from './studio/StudioPrimitives'

export function ExperienceSection() {
  const [filter, setFilter] = useState('all')

  const experiences = [
    {
      id: 'karmuqabla',
      type: 'work',
      title: 'Full-Stack Developer',
      organization: 'KarMuqabla',
      period: '2024 - Present',
      status: 'CURRENT PRODUCTION ROLE',
      description:
        'Architecting and scaling web and cross-platform mobile apps with React, Next.js, and Laravel. Leading the development of real-time gamified learning features, REST API endpoints, and Capacitor mobile wrappers.',
      responsibilities: [
        'Implemented real-time leaderboards and gamified scoring systems',
        'Designed secure RESTful API endpoints in Laravel with role-based authentication',
        'Bridged web code into iOS/Android hybrid apps using Capacitor',
      ],
      skills: ['React', 'Next.js', 'Laravel', 'Capacitor', 'MySQL', 'REST APIs'],
    },
    {
      id: 'vibrant',
      type: 'work',
      title: 'MERN Stack Developer',
      organization: 'Vibrant Company',
      period: '2023 - 2024',
      status: 'PRODUCTION DEPLOYED',
      description:
        'Engineered responsive web applications leveraging React frontend architecture and Node.js/Express backends. Administered MongoDB databases, API integrations, and cloud deployment pipelines.',
      responsibilities: [
        'Built full-stack CRUD architectures with JWT authentication',
        'Optimized client-side rendering times and Core Web Vitals',
        'Managed cloud deployment and automated continuous integration',
      ],
      skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Deployment'],
    },
    {
      id: 'upwork',
      type: 'work',
      title: 'Freelance PHP Developer',
      organization: 'Upwork',
      period: '2023 - 2023',
      status: 'GLOBAL CLIENT DELIVERY',
      description:
        'Delivered custom PHP web solutions and database systems for international clients. Implemented secure payment gateways with Stripe API and optimized complex MySQL query structures.',
      responsibilities: [
        'Integrated Stripe checkout sessions, webhooks, and subscription models',
        'Normalized relational schemas in MySQL for high-efficiency transactions',
        'Maintained 100% on-time delivery across freelance project contracts',
      ],
      skills: ['PHP', 'MySQL', 'Stripe API', 'Database Design', 'JavaScript'],
    },
    {
      id: 'bolton',
      type: 'education',
      title: 'BSc (Hons) in Computing',
      organization: 'University of Bolton',
      period: 'May 2026 - Expected 2027',
      status: 'UNDERGRADUATE DEGREE',
      description:
        'Advanced computer science curriculum focusing on software architecture, distributed web technologies, algorithmic problem solving, and modern engineering paradigms.',
      responsibilities: [
        'In-depth study of distributed systems, concurrency, and web protocols',
        'Modern software engineering methodologies and agile delivery',
      ],
      skills: ['Software Engineering', 'Web Technologies', 'Computer Science'],
    },
    {
      id: 'aptech',
      type: 'education',
      title: 'Diploma in Software Engineering',
      organization: 'Aptech',
      period: '2022 - 2025',
      status: 'GRADUATED WITH DISTINCTION',
      description:
        'Intensive multi-year software engineering program completed with top academic honors (Distinction). Comprehensive grounding in programming fundamentals, OOP principles, and database management systems.',
      responsibilities: [
        'Awarded Distinction for outstanding software project implementations',
        'Core mastery in object-oriented programming, data structures, and SDLC',
      ],
      skills: ['Data Structures', 'OOP', 'SQL & RDBMS', 'Software Lifecycle'],
    },
  ]

  const filteredItems = filter === 'all'
    ? experiences
    : experiences.filter((item) => item.type === filter)

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative text-center">
      <div className="max-w-5xl mx-auto">
        <StudioPegs />

        <StudioTitle
          kicker="Production Journey"
          title="Milestones"
          connector="of"
          name="Experience & Honors"
        />

        <p className="max-w-2xl mx-auto text-sm sm:text-base font-mono text-[#8791a8] mt-2 mb-10">
          // Professional production roles, international client engagements, and academic distinctions.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {[
            { id: 'all', label: 'All Milestones' },
            { id: 'work', label: 'Professional Work' },
            { id: 'education', label: 'Academic Honors' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                filter === tab.id
                  ? 'bg-[#2aa198]/30 text-[#ffd8a8] border border-[#f2c14e] font-bold shadow-lg shadow-[#2aa198]/20'
                  : 'bg-[#0f1424]/90 text-[#8791a8] hover:text-[#f3ecdf] border border-[#8791a8]/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Axis */}
        <div className="relative">
          {/* Vertical gold construction line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-[#ffd23f]/50 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            <AnimatePresence>
              {filteredItems.map((item, index) => {
                const isWork = item.type === 'work'
                const isEven = index % 2 === 0
                const Icon = isWork ? Briefcase : GraduationCap

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row text-left`}
                  >
                    {/* Node marker */}
                    <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-20">
                      <div className="w-11 h-11 rounded-full bg-[#0f1424] border-2 border-[#ffd23f] shadow-[0_0_15px_rgba(255,210,63,0.3)] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#ffd8a8]" />
                      </div>
                    </div>

                    {/* Card container */}
                    <div
                      className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                        isEven ? 'md:pr-12' : 'md:pl-12'
                      }`}
                    >
                      <StudioCard
                        sceneTag={item.period}
                        frameTag={item.status}
                        className="p-6 sm:p-7"
                      >
                        <h3 className="text-xl sm:text-2xl font-bold text-[#f3ecdf] mb-1">
                          {item.title}
                        </h3>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#ffd23f] mb-3">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{item.organization}</span>
                        </div>

                        <p className="text-xs sm:text-sm text-[#8791a8] font-mono leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Responsibilities list */}
                        <div className="space-y-1.5 mb-4 font-mono text-xs text-[#f3ecdf]/90">
                          {item.responsibilities.map((r, ri) => (
                            <div key={ri} className="flex items-start gap-2">
                              <span className="text-[#ffd23f]">›</span>
                              <span>{r}</span>
                            </div>
                          ))}
                        </div>

                        {/* Skills chips */}
                        {item.skills.length > 0 && (
                          <div className="pt-3 border-t border-[#8791a8]/20 flex flex-wrap gap-1.5">
                            {item.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#161c32] text-[#ffd8a8] border border-[#8791a8]/30"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </StudioCard>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
