import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react'
import { StudioScriptText } from './studio/StudioPrimitives'

export function Navbar({ onReplayIntro, activeSection = 'hero' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: 'Scene 01 // Hero', href: '#hero', section: 'hero' },
    { name: 'Scene 02 // Ethos', href: '#about', section: 'about' },
    { name: 'Scene 03 // Toolkit', href: '#skills', section: 'skills' },
    { name: 'Scene 04 // Works', href: '#projects', section: 'projects' },
    { name: 'Scene 05 // Milestones', href: '#experience', section: 'experience' },
    { name: 'Scene 06 // Connect', href: '#contact', section: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-4 sm:px-8 transition-all duration-300 ${
      scrolled ? 'bg-[#0f1424]/95 shadow-2xl backdrop-blur-xl' : ''
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Artisan Monogram Seal */}
        <motion.a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-3 py-1.5 rounded-xl bg-[#0f1424]/90 border border-[#8791a8]/30 shadow-2xl backdrop-blur-md group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2aa198] to-[#16786f] border border-[#f2c14e]/60 flex items-center justify-center text-[#ffd8a8] font-mono font-bold text-xs tracking-wider shadow-md group-hover:rotate-6 transition-transform">
            DA
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-mono font-bold text-[#f3ecdf] tracking-wider uppercase leading-none">
              Daniyal Arif
            </span>
            <span className="text-[10px] font-mono text-[#8791a8] tracking-widest uppercase mt-0.5">
              Production Studio
            </span>
          </div>
        </motion.a>

        {/* Center Studio Navigation */}
        <nav className="hidden lg:flex items-center p-1.5 rounded-full bg-[#0f1424]/90 border border-[#8791a8]/30 backdrop-blur-xl shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-1.5 text-xs font-mono uppercase tracking-widest transition-all rounded-full ${
                  isActive
                    ? 'text-[#f3ecdf] font-bold'
                    : 'text-[#8791a8] hover:text-[#f3ecdf]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavSlate"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2aa198]/40 to-[#16786f]/40 border border-[#ffd23f]/80"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            )
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Status Indicator */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0f1424]/90 border border-[#8791a8]/30 text-[10px] font-mono text-[#8791a8] uppercase tracking-wider backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#ffd23f] animate-pulse" />
            <span>Open to Work</span>
          </div>

          {/* Replay Studio Loader Button */}
          {onReplayIntro && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onReplayIntro}
              title="Replay Studio Title Preloader"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2aa198]/20 border border-[#f2c14e]/60 text-[#ffd8a8] text-xs font-mono uppercase tracking-wider hover:bg-[#2aa198]/30 transition-colors shadow-md backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ffd23f]" />
              <span>Intro Reel</span>
            </motion.button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl lg:hidden bg-[#0f1424]/90 border border-[#8791a8]/40 text-[#f3ecdf] shadow-md"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-3 p-4 rounded-2xl bg-[#0f1424]/98 border border-[#8791a8]/40 shadow-2xl backdrop-blur-2xl max-w-sm mx-auto"
          >
            <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-wider">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 rounded-lg text-[#f3ecdf] hover:bg-[#161c32] hover:text-[#ffd23f] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8791a8]" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
