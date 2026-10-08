import { motion } from 'framer-motion'
import { ChevronRight, Globe, Instagram, Linkedin } from 'lucide-react'
import type { LinkItem } from '../data/links'

const icon = {
  website: { Icon: Globe, tile: 'bg-onyx' },
  linkedin: { Icon: Linkedin, tile: 'bg-charcoal' },
  instagram: { Icon: Instagram, tile: 'bg-stone' },}

export default function LinkCard({ l, i }: { l: LinkItem; i: number }) {
  const { Icon, tile } = icon[l.id]
  return (
    <motion.a
      href={l.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + i * 0.06 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="flex min-h-[64px] items-center gap-4 rounded-2xl border border-line bg-white px-[18px] py-3.5 outline-none transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
    >
      <span className={`${tile} flex h-10 w-10 flex-none items-center justify-center rounded-xl text-ivory`}>
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className="flex-1 text-[15px] font-bold">{l.label}</span>
      <ChevronRight className="h-[18px] w-[18px] flex-none text-stone" aria-hidden />
    </motion.a>
  )
}
