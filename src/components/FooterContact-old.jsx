import React from 'react'
import { motion } from 'framer-motion'
import { Mail, GitBranch, ExternalLink } from 'lucide-react'
export function FooterContact() {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'daniyalarif2004@gmail.com',
      color: 'hover:text-neon-indigo',
    },
    {
      name: 'LinkedIn',
      icon: ExternalLink,
      href: 'www.linkedin.com/in/daniyal-arif-dev',
      color: 'hover:text-neon-cyan',
    },
    {
      name: 'GitHub',
      icon: GitBranch,
      href: 'https://github.com/Danu-18',
      color: 'hover:text-neon-purple',
    },
  ]
  return (
    <footer
      id="contact"
      className="relative w-full section-padding bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300"
    >
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-indigo via-neon-purple to-neon-cyan" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Let's build something great together
          </h2>

          <p className="text-slate-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className={`p-4 bg-gray-100 dark:bg-slate-800 rounded-full border border-gray-300 dark:border-slate-700 shadow-sm dark:shadow-none hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-md dark:hover:shadow-none text-slate-600 dark:text-gray-300 transition-all duration-300 ${link.color}`}
                  aria-label={link.name}
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-200 dark:border-slate-800">
            <p className="text-slate-400 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} Daniyal Arif. Built with React &
              Tailwind CSS.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-32 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-32 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>
    </footer>
  )
}
