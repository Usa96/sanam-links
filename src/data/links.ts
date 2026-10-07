// ─────────────────────────────────────────────────────────────
// Edit content here. Everything on the page renders from this file.
// ─────────────────────────────────────────────────────────────

export type EventItem = {
  title: string
  tag: string // small line under the title
  month: string // e.g. 'OCT'
  year: string // e.g. '2026'
  href: string
}

export type LinkItem = {
  id: 'website' | 'linkedin' | 'instagram' | 'x'
  label: string
  href: string
}

export const tagline = 'Building value across four platforms.'

export const platforms = [
  { mark: 'ED', name: 'Education' },
  { mark: 'HC', name: 'Healthcare' },
  { mark: 'IN', name: 'Industrial' },
  { mark: 'RE', name: 'Real Estate' },
]

// Newest first. Copy a block to add an event.
export const events: EventItem[] = [
  {
    title: 'Breast Cancer Awareness',
    tag: 'Awareness Month',
    month: 'OCT',
    year: '2026',
    href: 'https://www.instagram.com/sanamksc', // TODO: swap for the event post / form
  },
]

export const links: LinkItem[] = [
  { id: 'website', label: 'Website', href: 'https://www.sanam.com' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/sanam-holding-company/' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/sanamksc' },
  { id: 'x', label: 'X', href: 'https://x.com/Sanamksc' },
]
