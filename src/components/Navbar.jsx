import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = [
    {
      name: 'About',
      href: '#hero',
    },
    {
      name: 'Skills',
      href: '#skills',
    },
    {
      name: 'Projects',
      href: '#projects',
    },
    {
      name: 'Experience',
      href: '#experience',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ]
  const handleClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  return (
    <motion.nav
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border-b border-gray-200/50 dark:border-slate-800/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            DA
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                whileHover={{
                  scale: 1.05,
                }}
                className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-slate-800/50"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-slate-800/50 px-4 py-2 rounded-lg transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
