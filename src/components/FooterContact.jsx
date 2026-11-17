import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowUp, Copy, Check, Send, Sparkles, MapPin, Clock, Download } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import {
  StudioTitle,
  StudioCard,
  StudioButton,
  StudioPegs,
  StudioMascot,
} from './studio/StudioPrimitives'
import { MagnetizeButton } from './ui/magnetize-button'

export function FooterContact({ onReplayIntro }) {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('daniyalarif2004@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative text-center">
      <div className="max-w-5xl mx-auto">
        <StudioPegs />

        <StudioTitle
          kicker="Let's Collaborate"
          title="Connect"
          connector="on"
          name="The Next Production"
        />

        <p className="max-w-2xl mx-auto text-sm sm:text-base font-mono text-[#8791a8] mt-2 mb-12">
          // Have an ambitious product, engineering role, or contract in mind? Let's bring it to life.
        </p>

        {/* Master Connect Card */}
        <StudioCard sceneTag="SC. 06 — DIRECT CONNECT" frameTag="AVAILABLE NOW" className="p-8 sm:p-12 mb-16">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#f3ecdf]">
              Let's build something <span className="text-[#ffd23f]">extraordinary</span> together.
            </h3>

            <p className="text-xs sm:text-sm text-[#8791a8] font-mono leading-relaxed">
              I am open to full-stack engineering roles, technical contract builds, and ambitious SaaS architectures.
            </p>

            {/* Direct Email Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <MagnetizeButton
                onClick={() => {
                  window.location.href = 'mailto:daniyalarif2004@gmail.com'
                }}
                particleCount={16}
                attractRadius={55}
                particleClassName="bg-[#ffd23f]"
                className="h-auto py-3.5 px-6 bg-gradient-to-r from-[#2aa198] via-[#16786f] to-[#0b4a4a] text-[#f3ecdf] border-[#f2c14e]/70 shadow-[0_4px_16px_rgba(42,161,152,0.35)] hover:shadow-[0_6px_24px_rgba(242,193,78,0.3)] font-mono text-xs sm:text-sm uppercase tracking-wider rounded-xl font-semibold w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-[#ffd8a8] mr-1" />
                <span>daniyalarif2004@gmail.com</span>
                <Send className="w-4 h-4 text-[#ffd23f] ml-1" />
              </MagnetizeButton>

              <StudioButton
                onClick={handleCopyEmail}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#8791a8]" />
                    <span>Copy Email</span>
                  </>
                )}
              </StudioButton>
            </div>

            {/* Timezone & Availability HUD */}
            <div className="pt-6 border-t border-[#8791a8]/20 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-[#8791a8]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ffd23f]" />
                <span>Karachi, PK (UTC+5)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#2aa198]" />
                <span>Available for Global Remote Teams</span>
              </div>
            </div>

            {/* Social Connection Badges */}
            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/Danu-18"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#080c14] border border-[#8791a8]/30 hover:border-[#ffd23f] text-[#f3ecdf] text-xs font-mono flex items-center gap-2 transition-all hover:scale-105"
              >
                <FaGithub className="w-4 h-4 text-[#ffd8a8]" />
                <span>GitHub @Danu-18</span>
              </a>

              <a
                href="https://www.linkedin.com/in/daniyal-arif-dev/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#080c14] border border-[#8791a8]/30 hover:border-[#ffd23f] text-[#f3ecdf] text-xs font-mono flex items-center gap-2 transition-all hover:scale-105"
              >
                <FaLinkedinIn className="w-4 h-4 text-[#2aa198]" />
                <span>LinkedIn @daniyal-arif-dev</span>
              </a>

              <a
                href="/DANIYAL ARIF - Resume.pdf"
                download="DANIYAL ARIF - Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#080c14] border border-[#8791a8]/30 hover:border-[#ffd23f] text-[#f3ecdf] text-xs font-mono flex items-center gap-2 transition-all hover:scale-105"
              >
                <Download className="w-4 h-4 text-[#ffd23f]" />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Mascot wink at footer */}
            <div className="pt-6 flex justify-center">
              <StudioMascot size={64} />
            </div>
          </div>
        </StudioCard>

        {/* Studio Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#8791a8]/20 font-mono text-xs text-[#8791a8]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Daniyal Arif.</span>
            <span>•</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="hover:text-[#ffd23f] transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#ffd23f]" />
                <span>Replay Studio Intro</span>
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#0f1424] border border-[#8791a8]/30 hover:border-[#ffd23f] text-[#f3ecdf] hover:text-[#ffd23f] transition-all flex items-center gap-1"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4 text-[#ffd23f]" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
