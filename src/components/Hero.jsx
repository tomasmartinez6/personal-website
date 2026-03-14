import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="w-full pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-ink/20 shadow-lg">
            <img
              src="/images/headshot.jpg"
              alt="Tomas Martinez Stone"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentNode.style.background = 'linear-gradient(135deg, #2d6a4f 0%, #1e3120 100%)'
              }}
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="flex flex-col gap-3 max-w-xl"
        >
          <p className="font-body text-accent text-xs tracking-widest uppercase">
            Caracas → The World
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-ink leading-none tracking-tight">
            Tomas<br />Martinez Stone
          </h1>
          <p className="font-serif italic text-muted text-xl">
            Builder. Explorer. Venezuelan at heart.
          </p>
          <p className="font-body text-ink/60 text-sm leading-relaxed max-w-md">
            I build software products and chase mountains. Born in Caracas, shaped by cities across
            four continents, and always looking for the next trail or the next hard problem to solve.
          </p>
          <div className="flex gap-4 mt-1">
            <a
              href="#homes"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('homes')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="font-body text-xs tracking-widest uppercase border border-accent text-accent px-5 py-2.5 hover:bg-accent hover:text-offwhite transition-all duration-200"
            >
              Explore
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
