import { useState, useEffect } from 'react'
import { sections } from '../data/sections'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/95 backdrop-blur border-b border-ink/15' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-forest text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
        >
          TMS
        </button>
        <div className="flex items-center gap-8">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="font-body text-xs tracking-widest uppercase text-ink/70 hover:text-forest transition-colors duration-200"
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
