import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
export function HeroSection() {
  const handleViewWork = () => {
    const projectsSection = document.querySelector('#projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-indigo/15 dark:bg-neon-indigo/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/15 dark:bg-neon-purple/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-400/15 dark:bg-cyan-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl sm:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-center px-4"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-neon-indigo via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Daniyal Arif
            </span>
          </motion.h1>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-center px-4"
          >
            A Full-Stack Software Engineer building scalable web apps
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
            className="text-lg sm:text-xl text-slate-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Specializing in React.js, Next.js, and PHP/Laravel with a strong
            focus on clean UI/UX and REST API integrations
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-4 sm:mt-6 px-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={handleViewWork}
              className="px-8 py-4 bg-gradient-to-r from-neon-indigo via-neon-purple to-neon-cyan text-white font-semibold rounded-lg shadow-lg hover:shadow-neon-indigo/50 transition-all duration-300 flex items-center gap-2"
            >
              View My Work
              <ArrowDown size={20} />
            </motion.button>

            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href="/DANIYAL ARIF - Resume.pdf"
              download="DANIYAL ARIF - Resume.pdf"
              target="_blank"
              className="px-8 py-4 border-2 border-neon-purple text-neon-cyan font-semibold rounded-lg hover:bg-neon-purple/10 transition-all duration-300 flex items-center gap-2"
            >
              Download Resume
              <Download size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="w-6 h-10 border-2 border-slate-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
