import React from 'react'
import { motion } from 'framer-motion'
import { Layout, Database, Zap, Sparkles } from 'lucide-react'
import { StudioTitle, StudioCard, StudioScriptText, StudioPegs } from './studio/StudioPrimitives'
import { MagnetizeButton } from './ui/magnetize-button'

export function AboutSection() {
  const pillars = [
    {
      title: 'Frontend Inking & Motion',
      scene: 'PIPELINE // SCENE 02A',
      color: '#ffd23f',
      description:
        'Crafting component-driven web interfaces in React 19 & Next.js. I prioritize fluid typography, micro-interactions, and 60fps animations that breathe life into modern web apps without sacrificing performance.',
      tech: ['React 19', 'Next.js 14/16', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Resilient Backend Architecture',
      scene: 'PIPELINE // SCENE 02B',
      color: '#ff5d73',
      description:
        'Architecting robust RESTful API servers in Laravel and Node.js. Experienced in role-based authorization, JWT security, third-party payment workflows (Stripe), and high-throughput MySQL/MongoDB databases.',
      tech: ['PHP / Laravel', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'Hybrid Mobile & Production Delivery',
      scene: 'PIPELINE // SCENE 02C',
      color: '#2aa198',
      description:
        'Packaging web architectures into cross-platform iOS & Android apps via Capacitor. Committed to clean code, modular folder structures, version control workflows, and maintainable documentation.',
      tech: ['Capacitor', 'Vercel', 'Git / GitHub', 'Bitbucket', 'Postman'],
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative text-center">
      <div className="max-w-6xl mx-auto">
        <StudioPegs />

        {/* Section Title */}
        <StudioTitle
          kicker="Engineering Discipline"
          title="Architecture"
          connector="and"
          name="Core Pillars"
        />

        <p className="max-w-2xl mx-auto text-sm sm:text-base font-mono text-[#8791a8] mt-2 mb-14">
          // Every line of code is treated like an animator's drawing on twos: purposeful, rhythmic, and built to endure.
        </p>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <StudioCard sceneTag={pillar.scene} frameTag="PRODUCTION" className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: pillar.color }} />
                    <h3 className="font-bold text-lg sm:text-xl text-[#f3ecdf] tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#8791a8] leading-relaxed mb-6 font-mono">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#8791a8]/20 flex flex-wrap gap-1.5">
                  {pillar.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#161c32] text-[#ffd8a8] border border-[#8791a8]/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </StudioCard>
            </motion.div>
          ))}
        </div>

        {/* Studio Philosophy Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14"
        >
          <StudioCard sceneTag="STUDIO NOTE" frameTag="COLLABORATION">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#ffd23f] uppercase tracking-widest block">
                  Available for High-Impact Releases
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-[#f3ecdf]">
                  Ready to architect, ship, and scale your product.
                </h4>
                <p className="text-xs sm:text-sm text-[#8791a8] max-w-2xl font-mono">
                  From enterprise Laravel backends to fluid React interfaces, I bring uncompromising care to every interface interaction and database query.
                </p>
              </div>

              <MagnetizeButton
                onClick={() => {
                  const el = document.querySelector('#projects')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                particleCount={12}
                attractRadius={40}
                particleClassName="bg-[#ffd23f]"
                className="h-auto py-3 px-6 bg-gradient-to-r from-[#2aa198] to-[#16786f] text-[#f3ecdf] font-mono text-xs uppercase tracking-wider font-semibold border-[#f2c14e]/70 shadow-lg hover:scale-105 transition-transform whitespace-nowrap rounded-xl"
              >
                <span>Inspect Works &rarr;</span>
              </MagnetizeButton>
            </div>
          </StudioCard>
        </motion.div>
      </div>
    </section>
  )
}
