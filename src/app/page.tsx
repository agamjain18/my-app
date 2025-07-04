"use client"
import { ThemeProvider } from "../../components/theme-provider"
import Header from "../../components/header"
import Hero from "../../components/hero"
import About from "../../components/about"
import Skills from "../../components/skills"
import Projects from "../../components/projects"
import ExperienceSection from "../../components/experience-section"
import Contact from "../../components/contact"
import Footer from "../../components/footer"



export default function Portfolio() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <ExperienceSection />
          <Projects /> {/* Projects component now handles its own data */}
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
