import React from 'react'
import { motion } from 'framer-motion'
import { CiMail } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6"

export function FooterContact() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-slate-900 py-12 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
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
        >
          {/* Heading */}
          <h3 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">
            Let's build something great together
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            {/* Email Icon */}
         <motion.a
  href="mailto:daniyalarif2004@gmail.com" 
  className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg hover:scale-110 transition duration-300 group"
  whileHover={{
    scale: 1.1,
  }}
  whileTap={{
    scale: 0.95,
  }}
>
              <CiMail 
                size={22} 
                className="text-gray-700 dark:text-gray-300 group-hover:text-neon-indigo transition-colors duration-300"
              />
            </motion.a>

            {/* GitHub Icon */}
            <motion.a
              href="https://github.com/Danu-18"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg hover:scale-110 transition duration-300 group"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <FaGithub 
                size={22} 
                className="text-gray-700 dark:text-gray-300 group-hover:text-black transition-colors duration-300"
              />
            </motion.a>

            {/* LinkedIn Icon */}
            <motion.a
              href="https://www.linkedin.com/in/daniyal-arif-dev/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg hover:scale-110 transition duration-300 group"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <FaLinkedinIn 
                size={22} 
                className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors duration-300"
              />
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            © {new Date().getFullYear()} Daniyal Arif. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
