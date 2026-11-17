import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Copy, Check, Terminal, Sparkles, Layers, Cpu } from 'lucide-react'
import {
  StudioPegs,
  StudioTrinket,
  StudioScriptText,
  StudioTitle,
  StudioMascot,
  StudioButton,
  StudioCard,
} from './studio/StudioPrimitives'

export function HeroSection() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('pipeline')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('daniyalarif2004@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  const handleScrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const tabsContent = {
    pipeline: `// SCENE 01 — PRODUCTION PIPELINE
const pipeline = {
  director: "Daniyal Arif",
  role: "Full-Stack Software Engineer",
  architecture: "Component-driven React 19 • Next.js 16",
  backendEngines: "PHP / Laravel 8+ • Node.js REST APIs",
  mobileDeployment: "Capacitor Cross-Platform Hybrid Apps",
  status: "Ready for high-impact production releases"
};`,
    specs: `// TECHNICAL SPECIFICATIONS
const specs = {
  frontendMotion: "Framer Motion 60fps • Hershey Script Inking",
  dataStores: "MySQL Relational Schemas • MongoDB Clusters",
  security: "JWT Authentication • RBAC Access Controls",
  standards: "Clean architecture, modular separation & zero-fluff"
};`,
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      
      {/* Top Animation Studio Pegs */}
      <div className="pt-2">
        <StudioPegs />
      </div>

      {/* Main Studio Centerpiece */}
      <div className="max-w-5xl mx-auto w-full my-auto py-6">
        
        {/* Animated Hand-Lettered Kicker with Swinging Trinkets */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-2"
        >
          <StudioTrinket className="animate-[atp-swing_2.6s_ease-in-out_infinite]" />
          <StudioScriptText text="A Full-Stack" size="2rem" color="#f3ecdf" />
          <StudioTrinket className="animate-[atp-swing_2.6s_ease-in-out_infinite_1.3s]" />
        </motion.div>

        {/* The Signature Studio Title Card (Inked, Painted, Rough Lines & Ghost Print) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative inline-block my-2"
        >
          {/* Hand-drawn yellow construction lines passing through */}
          <div className="absolute top-[32%] -left-12 -right-12 h-[1.5px] bg-[#ffd23f]/50 pointer-events-none" />
          <div className="absolute bottom-[24%] -left-14 -right-14 h-[1.5px] bg-[#ffd23f]/60 pointer-events-none" />

          {/* Misregistered offset pink ghost layer */}
          <span
            className="absolute left-[4px] top-[3px] font-black tracking-tight text-5xl sm:text-7xl md:text-8xl text-[#ff5d73]/60 select-none pointer-events-none"
            aria-hidden="true"
          >
            Portfolio
          </span>

          {/* Yellow rough pencil lines */}
          <span
            className="absolute -left-[3px] -top-[2px] font-black tracking-tight text-5xl sm:text-7xl md:text-8xl text-[#ffd23f]/75 select-none pointer-events-none"
            aria-hidden="true"
          >
            Portfolio
          </span>

          {/* Foreground Bold Word with Warm Butter Cream Gradient Fill */}
          <h1 className="relative z-10 font-black tracking-tight text-5xl sm:text-7xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffd8a8] via-[#fff0dc] to-white drop-shadow-[0_4px_24px_rgba(255,216,168,0.25)]">
            Portfolio
          </h1>
        </motion.div>

        {/* Connector and Flourish Name */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center mt-1 mb-6"
        >
          <StudioScriptText text="of" size="1.2rem" color="#8791a8" className="mb-0.5" />
          <StudioScriptText text="Daniyal Arif" size="2.4rem" color="#f3ecdf" flourish={true} />
        </motion.div>

        {/* Mascot Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="my-3 flex justify-center"
        >
          <StudioMascot size={74} />
        </motion.div>

        {/* Bio Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-base sm:text-lg text-[#f3ecdf]/90 font-mono max-w-2xl mx-auto leading-relaxed mt-4"
        >
          A Full-Stack Software Engineer building scalable, high-performance web and mobile systems in{' '}
          <span className="text-[#ffd23f] font-semibold underline decoration-[#ffd23f]/40 underline-offset-4">React.js, Next.js</span>, and{' '}
          <span className="text-[#2aa198] font-semibold underline decoration-[#2aa198]/40 underline-offset-4">PHP/Laravel</span>.
        </motion.p>

        {/* Action Button Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <StudioButton onClick={() => handleScrollTo('#projects')} variant="primary">
            <span>Explore Works</span>
            <ArrowDown className="w-4 h-4 text-[#ffd23f]" />
          </StudioButton>

          <StudioButton
            href="/DANIYAL ARIF - Resume.pdf"
            download="DANIYAL ARIF - Resume.pdf"
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            <Download className="w-4 h-4 text-[#ffd23f]" />
            <span>Download Resume</span>
          </StudioButton>

          <StudioButton onClick={handleCopyEmail} variant="secondary">
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#8791a8]" />
                <span>Copy Email</span>
              </>
            )}
          </StudioButton>
        </motion.div>

        {/* Interactive Studio Terminal Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="max-w-2xl mx-auto mt-12 text-left"
        >
          <StudioCard sceneTag="SC. 01 — DANIYAL ARIF" frameTag="IDE // SPEC SHEET">
            {/* Tab switchers */}
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#8791a8]/20 font-mono text-xs">
              <button
                onClick={() => setActiveTab('pipeline')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeTab === 'pipeline'
                    ? 'bg-[#2aa198]/30 text-[#ffd8a8] border border-[#f2c14e]/60 font-bold'
                    : 'text-[#8791a8] hover:text-[#f3ecdf]'
                }`}
              >
                pipeline.config.ts
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-3 py-1 rounded transition-colors ${
                  activeTab === 'specs'
                    ? 'bg-[#2aa198]/30 text-[#ffd8a8] border border-[#f2c14e]/60 font-bold'
                    : 'text-[#8791a8] hover:text-[#f3ecdf]'
                }`}
              >
                specifications.ts
              </button>
            </div>

            <pre className="font-mono text-xs sm:text-sm text-[#ffd8a8] leading-relaxed overflow-x-auto p-2 bg-[#080c14]/70 rounded-lg border border-[#8791a8]/20">
              <code>{tabsContent[activeTab]}</code>
            </pre>
          </StudioCard>
        </motion.div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="pb-4">
        <button
          onClick={() => handleScrollTo('#about')}
          className="inline-flex flex-col items-center gap-1.5 text-[#8791a8] hover:text-[#ffd23f] transition-colors font-mono text-[10px] tracking-widest uppercase group"
        >
          <span>Scroll To Next Scene</span>
          <div className="w-4 h-7 rounded-full border border-[#8791a8]/40 flex justify-center pt-1 group-hover:border-[#ffd23f]">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-[#ffd23f]"
            />
          </div>
        </button>
      </div>
    </section>
  )
}
