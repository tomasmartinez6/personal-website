import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FlashCard({ card, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-bg/90 backdrop-blur-sm" />

        {/* Card container */}
        <motion.div
          className="relative z-10 w-full max-w-lg"
          style={{ perspective: 1000 }}
          onClick={(e) => e.stopPropagation()}
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: 90, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Image */}
          <div className="relative aspect-video w-full overflow-hidden border border-white/10">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentNode.style.background = 'linear-gradient(135deg, #2d6a4f 0%, #0d0d0d 100%)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
          </div>

          {/* Text */}
          <div className="bg-bg border border-white/10 border-t-0 p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h2 className="font-display text-2xl text-accent leading-tight">{card.title}</h2>
              <button
                onClick={onClose}
                className="flex-shrink-0 font-body text-xs tracking-widest uppercase text-offwhite/40 hover:text-offwhite transition-colors border border-white/10 hover:border-white/30 px-3 py-1.5"
              >
                Close
              </button>
            </div>
            <p className="font-body text-offwhite/70 text-sm leading-relaxed">{card.detail}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
