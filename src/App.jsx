import React from 'react'
import { Navbar } from './components/Navbar.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { SkillsSection } from './components/SkillsSection.jsx'
import { ProjectsSection } from './components/ProjectSection.jsx'
import { ExperienceSection } from './components/ExperienceSection.jsx'
import { FooterContact } from './components/FooterContact.jsx'
import { ThemeProvider } from './components/ThemeProvider.jsx'
import './App.css'

function App() {
  return (
    <main className="w-full overflow-x-hidden bg-white dark:bg-slate-950">
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="container-center">
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
        </main>
        <ExperienceSection />
        <FooterContact />
      </div>
    </ThemeProvider>
    </main>
  )
}

export default App
