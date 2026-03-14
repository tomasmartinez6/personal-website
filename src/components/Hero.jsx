import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/caracas-bg.jpg)' }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/40 to-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-bg/20" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12">
        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-accent/50 shadow-2xl shadow-accent/10">
            <img
              src="/images/headshot.jpg"
              alt="Tomas Martinez Stone"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentNode.style.background = 'linear-gradient(135deg, #2d6a4f 0%, #0d0d0d 100%)'
              }}
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col gap-4 max-w-xl"
        >
          <p className="font-body text-accent text-xs tracking-widest uppercase">
            Caracas → The World
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-offwhite leading-none tracking-tight">
            Tomas<br />Martinez Stone
          </h1>
          <p className="font-serif italic text-offwhite/70 text-xl">
            Builder. Explorer. Venezuelan at heart.
          </p>
          <p className="font-body text-offwhite/50 text-sm leading-relaxed max-w-md">
            I build software products and chase mountains. Born in Caracas, shaped by cities across
            four continents, and always looking for the next trail or the next hard problem to solve.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="#homes"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('homes')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="font-body text-xs tracking-widest uppercase border border-accent text-accent px-5 py-2.5 hover:bg-accent hover:text-bg transition-all duration-200"
            >
              Explore
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="font-body text-xs tracking-widest uppercase text-offwhite/30">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-offwhite/30 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
