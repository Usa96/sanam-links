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
  id: 'website' | 'linkedin' | 'instagram'
  label: string
  href: string
}

export const tagline = 'Leading Responsible Investing in Frontier Markets'

// Newest first. Copy a block to add an event.
export const events: EventItem[] = [
  {
    title: 'Breast Cancer Awareness',
    tag: 'Awareness Month',
    month: 'OCT',
    year: '2026',
    href: 'https://www.qrcodechimp.page/page/rvkljyr9inf0?v=chk1779607365',
  },
]

export const links: LinkItem[] = [
  { id: 'website', label: 'Website', href: 'https://www.sanam.com' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/sanamksc' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/sanam-holding-company/' },]
