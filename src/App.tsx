import { motion } from 'framer-motion'
import EventCard from './components/EventCard'
import LinkCard from './components/LinkCard'
import { events, links, tagline } from './data/links'

const Label = ({ children }: { children: string }) => (
  <h2 className="mt-3 font-display text-xs font-bold tracking-[0.18em] text-charcoal first:mt-0">{children}</h2>
)

export default function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[480px] flex-col bg-ivory font-body text-onyx antialiased">
      <header className="flex flex-col gap-6 rounded-b-[28px] bg-onyx px-6 pb-7 pt-[calc(40px+env(safe-area-inset-top))] text-ivory">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <img src="/sanam_logo_white.svg" alt="" className="h-11 w-auto flex-none" />
          <p className="flex flex-col gap-1 border-l border-ivory/25 pl-4 font-display leading-none">
            <span className="text-[15px] font-bold tracking-tight">SANAM Group Holding Co.</span>
            <span className="text-[12px] font-bold tracking-[0.18em] text-sand">K.P.S.C.</span>
          </p>
        </motion.div>
        <motion.h1
          className="text-balance font-display text-[28px] font-bold leading-[1.15]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {tagline}
        </motion.h1>
      </header>

      <main className="flex flex-col gap-3 px-6 pb-[calc(28px+env(safe-area-inset-bottom))] pt-6">
        {events.length > 0 && <Label>EVENTS</Label>}
        {events.map((e, i) => (
          <EventCard key={e.title} e={e} i={i} />
        ))}

        <Label>FOLLOW US</Label>
        {links.map((l, i) => (
          <LinkCard key={l.id} l={l} i={i} />
        ))}

        <footer className="mt-24 text-center text-xs text-charcoal">© SANAM Group Holding Co. K.P.S.C.</footer>
      </main>
    </div>
  )
}
