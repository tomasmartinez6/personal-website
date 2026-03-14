import { motion } from 'framer-motion'
import ImageCard from './ImageCard'

export default function Section({ section }) {
  return (
    <section id={section.id} className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8 flex items-end gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight">
            {section.title}
          </h2>
          <div className="flex-1 h-px bg-ink/15 mb-2" />
          <span className="font-body text-xs tracking-widest text-muted mb-2">
            {section.cards.length} entries
          </span>
        </motion.div>

        {/* Card grid — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {section.cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ImageCard card={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
