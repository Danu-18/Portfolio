import React, { useState, useEffect } from 'react'

export function StudioHUD({ activeSection = 'hero' }) {
  const [frame, setFrame] = useState(1)
  const [stage, setStage] = useState('FINAL')

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, currentScroll / maxScroll)) : 0

      // Map scroll progress to 240 frames (e.g., a 10-second reel at 24fps)
      const currentFrame = Math.round(progress * 240) + 1
      setFrame(currentFrame)

      if (progress < 0.25) setStage('ROUGH')
      else if (progress < 0.5) setStage('INK')
      else if (progress < 0.75) setStage('PAINT')
      else setStage('FINAL')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const paddedFrame = String(frame).padStart(4, '0')

  const sectionLabels = {
    hero: 'SC. 01 — DANIYAL ARIF',
    about: 'SC. 02 — ARCHITECTURE',
    skills: 'SC. 03 — STUDIO TOOLKIT',
    projects: 'SC. 04 — SELECTED REELS',
    experience: 'SC. 05 — PRODUCTION MILESTONES',
    contact: 'SC. 06 — DIRECT CONNECT',
  }

  const currentSlate = sectionLabels[activeSection] || 'SC. 01 — DANIYAL ARIF'

  return (
    <div className="fixed inset-0 pointer-events-none z-40 p-4 sm:p-6 lg:p-8 flex flex-col justify-between font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#8791a8] select-none">
      {/* Top HUD Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 bg-[#0f1424]/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#8791a8]/20">
          <span className="w-2 h-2 rounded-full bg-[#ffd23f] animate-pulse" />
          <span className="text-[#f3ecdf] font-semibold">{currentSlate}</span>
        </div>

        <div className="flex items-center gap-2 bg-[#0f1424]/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#8791a8]/20">
          <span>SHOWCASE · 2026</span>
        </div>
      </div>

      {/* Bottom HUD Row */}
      <div className="flex items-center justify-between">
        {/* Pipeline Stage Indicators */}
        <div className="flex items-center gap-3 sm:gap-4 bg-[#0f1424]/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#8791a8]/20">
          {['ROUGH', 'INK', 'PAINT', 'FINAL'].map((st) => {
            const isCurrent = stage === st
            return (
              <span
                key={st}
                className={`flex items-center gap-1.5 transition-colors ${
                  isCurrent ? 'text-[#ffd23f] font-bold' : 'text-[#8791a8]/60'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isCurrent ? 'bg-[#ffd23f]' : 'bg-[#8791a8]/40'
                  }`}
                />
                <span className="hidden sm:inline">{st}</span>
              </span>
            )
          })}
        </div>

        {/* Live Scroll Frame Counter */}
        <div className="bg-[#0f1424]/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-[#8791a8]/20 tabular-nums">
          FR <b className="text-[#f3ecdf]">{paddedFrame}</b> / 0240
        </div>
      </div>
    </div>
  )
}
