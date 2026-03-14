import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Section from './components/Section'
import { sections } from './data/sections'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-offwhite">
      <NavBar />
      <Hero />
      {sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
      <footer className="border-t border-white/5 py-8 px-6 text-center">
        <p className="font-body text-xs tracking-widest uppercase text-offwhite/20">
          Tomas Martinez Stone · Built with curiosity
        </p>
      </footer>
    </div>
  )
}
