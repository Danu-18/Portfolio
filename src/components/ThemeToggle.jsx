import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className="p-2 rounded-full bg-gray-200 dark:bg-slate-800 text-slate-800 dark:text-gray-200 transition-colors duration-300"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
        }}
        transition={{
          duration: 0.5,
          type: 'spring',
          stiffness: 200,
          damping: 10,
        }}
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </motion.div>
    </motion.button>
  )
}
