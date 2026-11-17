import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check, Monitor } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { SiBitbucket } from 'react-icons/si'
import { StudioTitle, StudioCard, StudioButton, StudioPegs } from './studio/StudioPrimitives'

export function ProjectsSection() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 'karmuqabla',
      title: 'KarMuqabla Educational Platform',
      category: 'mobile',
      tagline: 'Web + Mobile Hybrid Gamified Learning Engine',
      description:
        'A comprehensive, production-level educational gaming platform combining web and native mobile experiences. Features robust role-based access control, gamified learning with real-time leaderboards, and extensive content management tools.',
      highlights: [
        'Hybrid native cross-platform deployment via Capacitor',
        'Laravel REST API backend with normalized MySQL schemas',
        'Redux global state management for real-time leaderboard sync',
      ],
      tech: ['Next.js 14', 'Laravel 8', 'Capacitor', 'Redux', 'MySQL', 'Tailwind CSS'],
      image: '/Karmuqbla.png',
      urlDisplay: 'karmuqabla.com',
      github: 'https://bitbucket.org/karmuqabla/karmuqbala-react-web/src/master/',
      isBitbucket: true,
      reel: '01 / 04',
      badge: 'PRODUCTION HYBRID',
    },
    {
      id: 'edunex',
      title: 'EduNex-AI Analytics Platform',
      category: 'ai',
      tagline: 'Predictive Student Intelligence & ML FastAPI Microservice',
      description:
        'An advanced educational analytics platform leveraging machine learning to predict student performance and analyze attendance patterns. Features a modern React frontend, Node.js authentication, and a Python FastAPI server for ML model processing.',
      highlights: [
        'Dedicated Python FastAPI service running ML inference models',
        'Node.js & Express authentication gateway with JWT tokens',
        'Dynamic data visualizers & predictive risk indicators',
      ],
      tech: ['React.js', 'Node.js', 'Python (FastAPI)', 'MongoDB', 'Machine Learning', 'Express'],
      image: '/EduNex.png',
      urlDisplay: 'edunex-analytics.ai',
      github: 'https://github.com/Darakhshan08/Edupredict',
      isBitbucket: false,
      reel: '02 / 04',
      badge: 'ML & FULL-STACK',
    },
    {
      id: 'bridgelogic',
      title: 'BridgeLogic Systems',
      category: 'web',
      tagline: 'High-Performance Next.js Agency & Motion Showcase',
      description:
        'A modern digital agency website showcasing professional web development services. Built with a sophisticated Next.js architecture, featuring an elegant dark-themed interface, smooth Framer Motion animations, and static hosting optimization.',
      highlights: [
        'React 19 & Next.js 16 high-performance static page generation',
        'Framer Motion choreographed reveal transitions',
        'Accessible, modern design system optimized for SEO & Core Web Vitals',
      ],
      tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '/Bridelogistics.png',
      urlDisplay: 'bridgelogicsystems.com',
      github: 'https://github.com/Danu-18/BridgeLogicSystems',
      isBitbucket: false,
      reel: '03 / 04',
      badge: 'DESIGN SYSTEM & NEXT.JS',
    },
    {
      id: 'eventsphere',
      title: 'EventSphere Management',
      category: 'web',
      tagline: 'Exhibition Management & Real-Time Booth Allocation Platform',
      description:
        'A comprehensive full-stack exhibition and event management platform. Streamlines the organization, booking, and execution of professional expos with secure role-based access control, real-time booth allocation, and JWT authentication.',
      highlights: [
        'Interactive real-time floor plan & booth reservation system',
        'Role-based access control (Organizers, Exhibitors, Attendees)',
        'RESTful API architecture built on Express.js and MongoDB',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      image: '/Eventsphere-Management.png',
      urlDisplay: 'eventsphere.app',
      github: 'https://github.com/Darakhshan08/EventSphere_Management',
      isBitbucket: false,
      reel: '04 / 04',
      badge: 'ENTERPRISE SAAS',
    },
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative text-center">
      <div className="max-w-7xl mx-auto">
        <StudioPegs />

        <StudioTitle
          kicker="Production Showcase"
          title="Works"
          connector="and"
          name="Selected Reels"
        />

        <p className="max-w-2xl mx-auto text-sm sm:text-base font-mono text-[#8791a8] mt-2 mb-10">
          // Production-grade web applications, full-stack backends, and hybrid mobile deployments.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {[
            { id: 'all', label: 'All Reels' },
            { id: 'mobile', label: 'Web & Mobile Hybrid' },
            { id: 'ai', label: 'AI & Analytics' },
            { id: 'web', label: 'Web & SaaS' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                filter === btn.id
                  ? 'bg-[#2aa198]/30 text-[#ffd8a8] border border-[#f2c14e] font-bold shadow-lg shadow-[#2aa198]/20'
                  : 'bg-[#0f1424]/90 text-[#8791a8] hover:text-[#f3ecdf] border border-[#8791a8]/30'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-16 lg:space-y-24 text-left">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <StudioCard
                    sceneTag={`REEL ${project.reel}`}
                    frameTag={project.badge}
                    className="p-6 sm:p-8 lg:p-10"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      
                      {/* Left: Monitor Frame */}
                      <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="relative rounded-2xl overflow-hidden bg-[#080c14] border border-[#8791a8]/40 shadow-2xl group">
                          {/* Monitor chrome bar */}
                          <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f1424] border-b border-[#8791a8]/25 text-xs font-mono">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5d73]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#ffd23f]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#2aa198]" />
                            </div>
                            <div className="text-[11px] text-[#8791a8] px-3 py-0.5 rounded bg-[#080c14] border border-[#8791a8]/20">
                              https://{project.urlDisplay}
                            </div>
                            <div className="w-8" />
                          </div>

                          {/* Image display */}
                          <div className="relative aspect-video bg-[#080c14] flex items-center justify-center p-2">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Right: Detailed Production Info */}
                      <div className={`lg:col-span-5 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <span className="text-xs font-mono text-[#ffd23f] uppercase tracking-wider block">
                          {project.tagline}
                        </span>

                        <h3 className="text-2xl sm:text-3xl font-bold text-[#f3ecdf] tracking-tight">
                          {project.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#8791a8] font-mono leading-relaxed">
                          {project.description}
                        </p>

                        {/* Architecture Checklist */}
                        <div className="space-y-2 pt-1 font-mono text-xs">
                          {project.highlights.map((h, hi) => (
                            <div key={hi} className="flex items-start gap-2 text-[#f3ecdf]">
                              <span className="text-[#ffd23f] font-bold">✓</span>
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#161c32] text-[#ffd8a8] border border-[#8791a8]/30"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Action Link */}
                        <div className="pt-3">
                          <StudioButton
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="primary"
                          >
                            {project.isBitbucket ? (
                              <SiBitbucket className="w-4 h-4 text-[#ffd8a8]" />
                            ) : (
                              <FaGithub className="w-4 h-4 text-[#ffd8a8]" />
                            )}
                            <span>{project.isBitbucket ? 'View Bitbucket' : 'View GitHub Repo'}</span>
                            <ArrowUpRight className="w-4 h-4 text-[#ffd23f]" />
                          </StudioButton>
                        </div>
                      </div>
                    </div>
                  </StudioCard>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
