import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageSquare, Menu, X } from 'lucide-react'
import { SITE, whatsappHref } from '../constants/site'

const links = [
  { href: '#fleet-showcase', label: 'Luxury Fleet' },
  { href: '#packages', label: 'Wedding Packages' },
  { href: '#cars', label: 'All Vehicles' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-[#0D0F12]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex flex-col justify-center py-3.5"
        aria-label="Primary navigation"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:grid lg:grid-cols-[1.2fr_2fr_1.2fr] lg:px-8">
          
          {/* Left: Brand Logo & contact pill */}
          <div className="flex items-center gap-4">
            <a
              href="#home"
              className="flex items-center gap-2"
              onClick={() => setOpen(false)}
              aria-label={`${SITE.name} — home`}
            >
              <span className="relative flex h-10 w-auto shrink-0 items-center justify-center sm:h-11">
                <img
                  src="/logo.webp"
                  alt={`${SITE.name} logo`}
                  className="h-full w-auto object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.25)] brightness-105"
                />
              </span>
              <span className="hidden xs:block text-sm font-semibold tracking-wider text-white font-display">
                MM MOTORS
              </span>
            </a>

            {/* Quick contact pill */}
            <div className="hidden xl:flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
              <Phone className="h-3 w-3 text-[#D4AF37]" />
              <span className="font-medium">{SITE.phoneDisplay}</span>
            </div>
          </div>

          {/* Center: Nav links with smooth underlines (Desktop only) */}
          <div className="hidden lg:flex items-center justify-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white transition group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right: Book Now CTA + direct WhatsApp shortcut + Mobile hamburger */}
          <div className="flex items-center justify-end gap-3.5">
            {/* Direct WhatsApp chat button */}
            <motion.a
              href={whatsappHref(`Hi ${SITE.name}, I would like to chat regarding a luxury car rental request.`)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-[#25D366] hover:text-[#0D0F12]"
              title="Quick Chat via WhatsApp"
            >
              <MessageSquare className="h-4 w-4" />
            </motion.a>

            {/* Premium Gold "Book Now" Button */}
            <div className="hidden lg:flex">
              <motion.a
                href={whatsappHref(`Hi ${SITE.name}, I would like to book a car.`)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-[4px] bg-[#D4AF37] px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#0D0F12] transition hover:bg-[#E5C158] shadow-[0_4px_12px_rgba(212,175,55,0.25)] border-none"
              >
                Book Now
              </motion.a>
            </div>

            {/* Mobile Nav Toggle */}
            <motion.button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-neutral-300 hover:text-[#D4AF37] lg:hidden transition"
              whileTap={{ scale: 0.96 }}
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {open ? (
            <motion.div
              id="mobile-nav-drawer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[65px] z-40 bg-[#0D0F12]/95 backdrop-blur-md lg:hidden"
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="mx-auto flex flex-col gap-2 p-6 border-b border-white/10 bg-[#14171C] text-left shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {links.map((link, idx) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 * idx }}
                    className="rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wider text-neutral-300 hover:bg-white/5 hover:text-[#D4AF37] transition"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 block w-full rounded-[4px] bg-[#D4AF37] py-3 text-center text-xs font-bold uppercase tracking-wider text-[#0D0F12] transition hover:bg-[#E5C158]"
                  onClick={() => setOpen(false)}
                >
                  Book Now
                </motion.a>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
