import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { EventItem } from '../data/links'

export default function EventCard({ e, i }: { e: EventItem; i: number }) {
  return (
    <motion.a
      href={e.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + i * 0.06 }}
      whileTap={{ scale: 0.98 }}
      className="flex min-h-[64px] items-center gap-4 rounded-2xl bg-onyx p-[18px] text-ivory outline-none transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-sand"
    >
      <div className="flex h-14 w-[52px] flex-none flex-col items-center justify-center rounded-xl bg-charcoal">
        <span className="text-[10px] tracking-widest text-sand">{e.month}</span>
        <span className="font-display text-base font-extrabold">{e.year}</span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        <span className="font-display text-base font-bold">{e.title}</span>
        <span className="inline-flex items-center gap-1.5 text-xs text-sand">
          <i className="h-2 w-2 rounded-full bg-ribbon" aria-hidden />
          {e.tag}
        </span>
      </div>
      <ArrowUpRight className="h-5 w-5 flex-none text-sand" aria-hidden />
    </motion.a>
  )
}
