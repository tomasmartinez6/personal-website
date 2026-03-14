import { useState } from 'react'
import { motion } from 'framer-motion'
import FlashCard from './FlashCard'

export default function ImageCard({ card }) {
  const [hovered, setHovered] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.div
        className="relative cursor-pointer overflow-hidden aspect-[4/3] bg-ink/10 border border-ink/10"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.25 }}
      >
        {/* Image */}
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.parentNode.style.background = 'linear-gradient(135deg, #2d6a4f 0%, #1e3120 100%)'
          }}
        />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-4 border border-transparent"
          animate={{
            background: hovered
              ? 'linear-gradient(to top, rgba(10,25,12,0.85) 0%, rgba(10,25,12,0.3) 60%, transparent 100%)'
              : 'linear-gradient(to top, rgba(10,25,12,0.2) 0%, transparent 100%)',
            borderColor: hovered ? 'rgba(45,106,79,0.5)' : 'rgba(45,106,79,0)',
          }}
          transition={{ duration: 0.25 }}
        >
          <motion.p
            className="font-display text-white text-sm tracking-wide"
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.2 }}
          >
            {card.title}
          </motion.p>
          <motion.p
            className="font-body text-white/60 text-xs tracking-widest uppercase mt-1"
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            Click to explore →
          </motion.p>
        </motion.div>
      </motion.div>

      {open && <FlashCard card={card} onClose={() => setOpen(false)} />}
    </>
  )
}
