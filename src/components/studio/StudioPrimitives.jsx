import React, { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  ATP_SCRIPT,
  ATP_SANS,
  atpDecode,
  atpLayout,
  atpNib,
  atpPath,
  atpSupported,
} from '@/components/ui/animator-title-preloader'

// Cached fonts
const SCRIPT_FONT = { cache: null }
const getScriptFont = () => SCRIPT_FONT.cache || (SCRIPT_FONT.cache = atpDecode(ATP_SCRIPT))

const SCRIPT_OPTS = { jitter: 0.3, condense: 0.86, tracking: 0.3, space: 9, capGap: 2 }

// Global SVG Filter & Pattern Definitions from the Loader
export function StudioBoilDefs() {
  return (
    <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true" focusable="false">
      <defs>
        {/* Boil filter for hand-drawn strokes */}
        <filter id="studio-boil" x="-10%" y="-30%" width="120%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="2" result="n">
            <animate attributeName="seed" values="2;5;8" dur="0.375s" calcMode="discrete" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="n" scale="1.8" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* Boil filter for rough construction lines */}
        <filter id="studio-boil-px" x="-5%" y="-20%" width="110%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="3" result="n">
            <animate attributeName="seed" values="3;6;9" dur="0.375s" calcMode="discrete" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* Film grain noise filter */}
        <filter id="studio-grain-filter" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="n" />
          <feColorMatrix in="n" type="saturate" values="0" />
        </filter>

        {/* Sweater & Hand pattern from the loader */}
        <pattern id="studio-swirl" width="124" height="124" patternUnits="userSpaceOnUse" patternTransform="rotate(-6)">
          <path
            d="M30 34 M30 34 C30 28 35 24 40 24 C48 24 52 32 52 40 C52 50 42 56 32 56 M92 92 C92 86 96 82 101 82 C108 82 112 88 112 94 C112 102 104 108 96 108"
            fill="none"
            stroke="#f2c14e"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.5"
          />
          <circle cx="70" cy="18" r="2.8" fill="#06222a" opacity="0.6" />
          <circle cx="8" cy="64" r="2.2" fill="#06222a" opacity="0.5" />
          <circle cx="60" cy="108" r="1.8" fill="#06222a" opacity="0.55" />
          <circle cx="112" cy="58" r="2.4" fill="#06222a" opacity="0.5" />
          <circle cx="48" cy="80" r="1.4" fill="#06222a" opacity="0.5" />
        </pattern>

        {/* Title gradient: dusk warm butter to crisp white */}
        <linearGradient id="studio-word-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffd8a8" />
          <stop offset="55%" stopColor="#fff0dc" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>

        {/* Sweater sleeve gradient */}
        <linearGradient id="studio-sleeve-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2aa198" />
          <stop offset="50%" stopColor="#16786f" />
          <stop offset="100%" stopColor="#0b4a4a" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// Boiling Film Grain Layer
export function StudioGrain() {
  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(120% 90% at 50% 46%, transparent 45%, rgba(5,8,18,0.75) 100%)',
        }}
      />
      {/* Animated noise grain */}
      <svg
        className="absolute -left-[60px] -top-[60px] w-[calc(100%+120px)] h-[calc(100%+120px)] opacity-[0.09] mix-blend-screen pointer-events-none animate-[atp-grain_0.5s_steps(1)_infinite]"
        aria-hidden="true"
      >
        <rect width="100%" height="100%" filter="url(#studio-grain-filter)" />
      </svg>
    </div>
  )
}

// Animation Studio Registration Pegs [===] (o) [===]
export function StudioPegs() {
  return (
    <div className="flex items-center justify-center gap-10 sm:gap-16 py-3 pointer-events-none select-none opacity-40">
      <span className="w-8 sm:w-10 h-2 sm:h-2.5 rounded-full bg-slate-900 border border-slate-700/60 shadow-inner" />
      <span className="w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-slate-900 border border-slate-700/60 shadow-inner" />
      <span className="w-8 sm:w-10 h-2 sm:h-2.5 rounded-full bg-slate-900 border border-slate-700/60 shadow-inner" />
    </div>
  )
}

// Hanging Plumb-Bob Trinket
export function StudioTrinket({ className = '' }) {
  return (
    <svg className={`w-4 h-9 text-[#8791a8] ${className}`} viewBox="0 0 30 70" aria-hidden="true">
      <g filter="url(#studio-boil)" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 1 L15 16" />
        <circle cx="15" cy="21" r="4.4" />
        <path d="M15 27 C22 31 26 37 25 44 C24 52 19 57 15 63 C11 57 6 52 5 44 C4 37 8 31 15 27 Z" />
        <path d="M11 41 C13 38 17 38 19 41" opacity=".7" />
        <circle cx="15" cy="49" r="1.6" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}

// The Spectacled Mascot that tracks cursor and blinks
export function StudioMascot({ size = 70, className = '' }) {
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 })
  const [isWinking, setIsWinking] = useState(false)

  useEffect(() => {
    const handlePointer = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = ((e.clientX - cx) / cx) * 3.5
      const dy = ((e.clientY - cy) / cy) * 2.5
      setPupilOffset({ x: dx, y: dy })
    }
    window.addEventListener('pointermove', handlePointer)
    return () => window.removeEventListener('pointermove', handlePointer)
  }, [])

  return (
    <div
      className={`inline-block cursor-pointer select-none transition-transform hover:scale-110 active:scale-95 ${className}`}
      onClick={() => {
        setIsWinking(true)
        setTimeout(() => setIsWinking(false), 900)
      }}
      title="Click me to wink!"
    >
      <svg
        width={size}
        height={(size * 84) / 120}
        viewBox="0 0 120 84"
        className="text-[#8791a8] hover:text-[#f3ecdf] transition-colors overflow-visible"
        aria-hidden="true"
      >
        <g filter="url(#studio-boil)" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="44" cy="12" r="2.4" fill="currentColor" stroke="none" />
          <circle cx="60" cy="10" r="5" fill="currentColor" stroke="none" />
          <circle cx="76" cy="12" r="2.4" fill="currentColor" stroke="none" />
          <path d="M58 52 C58 40 44 36 34 40 C22 45 22 62 34 65 C46 68 56 62 58 52 C60 62 70 68 82 65 C94 62 98 45 86 40 C76 36 62 40 62 52" />
          <path d="M22 46 C14 44 9 47 6 52 M98 46 C106 44 111 47 114 52" />
          {/* Left Eye */}
          <circle
            cx={40 + pupilOffset.x}
            cy={53 + pupilOffset.y}
            r="4.6"
            fill="currentColor"
            stroke="none"
          />
          {/* Right Eye (Winks on click or idle) */}
          {isWinking ? (
            <path d="M71 54 Q80 59 89 54" strokeWidth="3.8" />
          ) : (
            <circle
              cx={80 + pupilOffset.x}
              cy={53 + pupilOffset.y}
              r="4.6"
              fill="currentColor"
              stroke="none"
            />
          )}
        </g>
      </svg>
    </div>
  )
}

// Broad-Nib Hershey Script Text using exact loader font
export function StudioScriptText({
  text,
  flourish = false,
  className = '',
  seed = 42,
  size = '1.8rem',
  color = '#f3ecdf',
}) {
  const laid = useMemo(() => {
    return atpLayout(text, getScriptFont(), { seed, ...SCRIPT_OPTS })
  }, [text, seed])

  if (!atpSupported(text)) {
    return (
      <span
        className={`font-serif italic tracking-wide ${className}`}
        style={{ fontSize: size, color }}
      >
        {text}
      </span>
    )
  }

  const strokes = laid.strokes.slice()
  const lengths = laid.lengths.slice()
  let y1 = laid.y1

  if (flourish && strokes.length) {
    const a = laid.x0 - 2
    const b = laid.x1 + 6
    const w = b - a
    const by = laid.y1 + 3
    const pts = []
    for (let i = 0; i <= 48; i++) {
      const t = i / 48
      const x = a + w * t - Math.sin(t * Math.PI * 2) * w * 0.03
      const y = by + Math.sin(t * Math.PI) * 2.4 - Math.max(0, Math.sin((t - 0.78) * Math.PI * 4.5)) * 5 * (t > 0.78 ? 1 : 0)
      pts.push(x, y)
    }
    strokes.push(pts)
    lengths.push(w * 1.1)
    y1 = by + 3.5
  }

  const pad = 4
  const vx = laid.x0 - pad
  const vy = Math.min(laid.y0, -2) - pad
  const vw = laid.x1 - laid.x0 + pad * 2 + (flourish ? 8 : 0)
  const vh = Math.max(y1, 30) - vy + pad

  const nib = 1.35
  const angle = (-38 * Math.PI) / 180
  const nx = Math.cos(angle) * nib
  const ny = Math.sin(angle) * nib

  return (
    <svg
      className={`inline-block overflow-visible align-middle ${className}`}
      viewBox={`${vx} ${vy} ${vw} ${vh}`}
      style={{
        height: size,
        width: `${(vw / 21) * 0.75}em`,
        color,
      }}
      aria-label={text}
    >
      <g filter="url(#studio-boil)">
        <path d={strokes.map((s) => atpNib(s, nx, ny)).join('')} fill="currentColor" />
        <path
          d={strokes.map(atpPath).join('')}
          fill="none"
          stroke="currentColor"
          strokeWidth={nib * 0.55}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

// The Signature Studio Title Component (Kicker + Bold Word with Rough Lines & Ghost Print)
export function StudioTitle({
  kicker = '',
  title,
  connector = '',
  name = '',
  flourish = true,
  align = 'center',
}) {
  const isCenter = align === 'center'

  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} relative my-4`}>
      {/* Hand-lettered Kicker with Hanging Trinkets */}
      {kicker && (
        <div className="flex items-center gap-3 sm:gap-4 mb-1">
          <StudioTrinket className="animate-[atp-swing_2.6s_ease-in-out_infinite]" />
          <StudioScriptText text={kicker} size="1.6rem" color="#f3ecdf" />
          <StudioTrinket className="animate-[atp-swing_2.6s_ease-in-out_infinite_1.3s]" />
        </div>
      )}

      {/* Bold Inked & Painted Word with Blue-Pencil Rough Construction Lines */}
      <div className="relative inline-block my-1 select-none">
        {/* Horizontal construction pencil lines */}
        <div className="absolute top-[28%] -left-6 -right-6 h-[1.5px] bg-[#ffd23f]/40 pointer-events-none" />
        <div className="absolute bottom-[22%] -left-8 -right-8 h-[1.5px] bg-[#ffd23f]/50 pointer-events-none" />

        {/* Ghost misregistered print layer (offset pink/coral shadow) */}
        <span
          className="absolute left-[3px] top-[2px] font-black tracking-tight text-3xl sm:text-5xl md:text-6xl text-[#ff5d73]/60 select-none pointer-events-none"
          aria-hidden="true"
        >
          {title}
        </span>

        {/* Rough pencil sketch pass */}
        <span
          className="absolute -left-[2px] -top-[1.5px] font-black tracking-tight text-3xl sm:text-5xl md:text-6xl text-[#ffd23f]/80 select-none pointer-events-none"
          aria-hidden="true"
        >
          {title}
        </span>

        {/* Main inked outline and painted gradient fill */}
        <span className="relative z-10 font-black tracking-tight text-3xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffd8a8] via-[#fff0dc] to-white drop-shadow-[0_2px_12px_rgba(255,216,168,0.25)]">
          {title}
        </span>
      </div>

      {/* Connector ("of") and Name/Subtitle */}
      {(connector || name) && (
        <div className="flex flex-col items-center mt-0.5">
          {connector && (
            <StudioScriptText text={connector} size="1.1rem" color="#8791a8" className="mb-0.5" />
          )}
          {name && (
            <StudioScriptText text={name} size="1.8rem" color="#f3ecdf" flourish={flourish} />
          )}
        </div>
      )}
    </div>
  )
}

// Studio Artisan Card with Sweater Borders & Hand-Drawn Registration Markers
export function StudioCard({
  children,
  className = '',
  sceneTag = '',
  frameTag = '',
  hoverEffect = true,
}) {
  return (
    <div
      className={`relative rounded-2xl bg-[#0f1424]/90 border border-[#8791a8]/25 shadow-2xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 ${
        hoverEffect ? 'hover:border-[#ffd23f]/60 hover:shadow-[0_0_35px_rgba(42,161,152,0.2)] hover:-translate-y-1' : ''
      } ${className}`}
    >
      {/* Hand-drawn corner registration markers */}
      <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#ffd23f]/60 pointer-events-none" />
      <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#ffd23f]/60 pointer-events-none" />
      <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#ffd23f]/60 pointer-events-none" />
      <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#ffd23f]/60 pointer-events-none" />

      {/* Top Slate Label if provided */}
      {(sceneTag || frameTag) && (
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#8791a8]/20 font-mono text-[10px] tracking-widest text-[#8791a8] uppercase">
          {sceneTag && <span>{sceneTag}</span>}
          {frameTag && <span className="text-[#f3ecdf]">{frameTag}</span>}
        </div>
      )}

      {children}
    </div>
  )
}

// Studio Action Button with Golden Cuff & Ink Stroke Styling
export function StudioButton({
  children,
  onClick,
  href,
  download,
  target,
  rel,
  variant = 'primary',
  className = '',
}) {
  const isPrimary = variant === 'primary'

  const baseClasses = `relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all duration-200 select-none group cursor-pointer ${
    isPrimary
      ? 'bg-gradient-to-r from-[#2aa198] via-[#16786f] to-[#0b4a4a] text-[#f3ecdf] border border-[#f2c14e]/70 shadow-[0_4px_16px_rgba(42,161,152,0.35)] hover:shadow-[0_6px_24px_rgba(242,193,78,0.3)] hover:scale-[1.03] active:scale-[0.98]'
      : 'bg-[#0f1424]/90 text-[#f3ecdf] border border-[#8791a8]/50 hover:border-[#ffd23f] hover:bg-[#161c32] shadow-md hover:scale-[1.03] active:scale-[0.98]'
  } ${className}`

  if (href) {
    return (
      <a href={href} download={download} target={target} rel={rel} className={baseClasses}>
        {/* Golden cuff accent dot */}
        <span className="w-1.5 h-1.5 rounded-full bg-[#f2c14e] group-hover:scale-125 transition-transform" />
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      <span className="w-1.5 h-1.5 rounded-full bg-[#f2c14e] group-hover:scale-125 transition-transform" />
      {children}
    </button>
  )
}
