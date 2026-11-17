import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StudioTitle, StudioCard, StudioPegs } from './studio/StudioPrimitives'

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'All Toolkit' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & Data' },
    { id: 'tools', label: 'DevOps & Mobile' },
  ]

  const skillsData = [
    // Frontend
    { name: 'React.js', category: 'frontend', level: 'Production Core', exp: '3+ yrs', glyph: '⚛', color: '#2aa198' },
    { name: 'Next.js', category: 'frontend', level: 'Full-Stack Core', exp: '2+ yrs', glyph: '▲', color: '#ffd23f' },
    { name: 'TypeScript', category: 'frontend', level: 'Type-Safe Standards', exp: '2+ yrs', glyph: 'TS', color: '#2aa198' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'Design Systems', exp: '3+ yrs', glyph: '≈', color: '#ff5d73' },
    { name: 'HTML5 / CSS3', category: 'frontend', level: 'Semantic Standards', exp: '4+ yrs', glyph: '</>', color: '#ffd23f' },
    { name: 'Framer Motion', category: 'frontend', level: 'Fluid Animations', exp: '2+ yrs', glyph: '✦', color: '#ffd8a8' },

    // Backend
    { name: 'PHP', category: 'backend', level: 'Server-Side Core', exp: '3+ yrs', glyph: '🐘', color: '#ffd23f' },
    { name: 'Laravel', category: 'backend', level: 'Enterprise MVC', exp: '2+ yrs', glyph: '◆', color: '#ff5d73' },
    { name: 'Node.js', category: 'backend', level: 'Async APIs', exp: '2+ yrs', glyph: '⬢', color: '#2aa198' },
    { name: 'Express.js', category: 'backend', level: 'REST Endpoints', exp: '2+ yrs', glyph: '⚡', color: '#8791a8' },
    { name: 'MySQL', category: 'backend', level: 'Relational Schemas', exp: '3+ yrs', glyph: '🐬', color: '#2aa198' },
    { name: 'MongoDB', category: 'backend', level: 'Document Store', exp: '2+ yrs', glyph: '🍃', color: '#ffd23f' },

    // Tools & Mobile
    { name: 'Git & GitHub', category: 'tools', level: 'Branching & CI/CD', exp: '3+ yrs', glyph: '⎇', color: '#ff5d73' },
    { name: 'Bitbucket', category: 'tools', level: 'Version Control', exp: '2+ yrs', glyph: 'Bucket', color: '#2aa198' },
    { name: 'Capacitor', category: 'tools', level: 'Hybrid Native iOS/Android', exp: '1+ yrs', glyph: '📱', color: '#ffd23f' },
    { name: 'Postman', category: 'tools', level: 'API Testing & Mocks', exp: '3+ yrs', glyph: '🚀', color: '#ffd8a8' },
    { name: 'Vercel', category: 'tools', level: 'Edge Deployment', exp: '2+ yrs', glyph: '▲', color: '#f3ecdf' },
    { name: 'Figma', category: 'tools', level: 'UI/UX Specs to Code', exp: '2+ yrs', glyph: '❖', color: '#ff5d73' },
  ]

  const filteredSkills = activeFilter === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeFilter)

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative text-center">
      <div className="max-w-6xl mx-auto">
        <StudioPegs />

        <StudioTitle
          kicker="Production Instruments"
          title="Technologies"
          connector="in"
          name="The Toolkit"
        />

        <p className="max-w-2xl mx-auto text-sm sm:text-base font-mono text-[#8791a8] mt-2 mb-10">
          // Every tool is dialed in for high performance, reliable deployment, and intuitive developer experience.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#2aa198]/30 text-[#ffd8a8] border border-[#f2c14e] font-bold shadow-lg shadow-[#2aa198]/20'
                    : 'bg-[#0f1424]/90 text-[#8791a8] hover:text-[#f3ecdf] border border-[#8791a8]/30'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Specimen Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-left">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative rounded-xl bg-[#0f1424]/95 border border-[#8791a8]/25 p-4 sm:p-5 flex flex-col justify-between hover:border-[#ffd23f]/70 hover:shadow-[0_0_20px_rgba(255,210,63,0.15)] transition-all group"
              >
                {/* Registration marker */}
                <span className="absolute top-1.5 right-1.5 text-[9px] font-mono text-[#8791a8]/50">
                  #{String(index + 1).padStart(2, '0')}
                </span>

                <div>
                  <div className="text-xl sm:text-2xl mb-2 font-mono text-[#ffd8a8]">
                    {skill.glyph}
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-[#f3ecdf] group-hover:text-[#ffd23f] transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-[11px] font-mono text-[#8791a8] mt-1 line-clamp-1">
                    {skill.level}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-[#8791a8]/20 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#8791a8]">{skill.exp}</span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
