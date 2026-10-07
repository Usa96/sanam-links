import { useState } from 'react'
import { motion } from 'framer-motion'
import { platforms } from '../data/links'

const tones = [
  'bg-charcoal text-ivory',
  'bg-stone text-ivory',
  'bg-sand text-onyx',
  'bg-ivory text-onyx',
]

export default function PlatformTiles() {
  const [active, setActive] = useState(0)

  return (
    <div className="grid grid-cols-4 gap-2" role="group" aria-label="Our platforms">
      {platforms.map((p, i) => (
        <motion.button
          key={p.mark}
          type="button"
          aria-pressed={active === i}
          onClick={() => setActive(i)}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: active === i ? -4 : 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 420, damping: 18, delay: 0.05 + i * 0.07 }}
          whileTap={{ scale: 0.94 }}
          className={`${tones[i]} flex min-h-[64px] flex-col items-center justify-center gap-1 rounded-[14px] border-2 px-1 py-3 outline-none focus-visible:ring-2 focus-visible:ring-sand ${
            active === i ? 'border-ivory' : 'border-transparent'
          }`}
        >
          <span className="font-display text-lg font-extrabold">{p.mark}</span>
          <span className="text-[10px] tracking-wide">{p.name}</span>
        </motion.button>
      ))}
    </div>
  )
}
