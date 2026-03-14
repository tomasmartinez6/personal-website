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
        <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" />

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
          <div className="relative aspect-video w-full overflow-hidden border border-ink/15">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentNode.style.background = 'linear-gradient(135deg, #2d6a4f 0%, #1e3120 100%)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>

          {/* Text */}
          <div className="bg-bg border border-ink/15 border-t-0 p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h2 className="font-display text-2xl text-forest leading-tight">{card.title}</h2>
              <button
                onClick={onClose}
                className="flex-shrink-0 font-body text-xs tracking-widest uppercase text-ink/50 hover:text-ink transition-colors border border-ink/20 hover:border-ink/40 px-3 py-1.5"
              >
                Close
              </button>
            </div>
            <p className="font-body text-ink/70 text-sm leading-relaxed">{card.detail}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
