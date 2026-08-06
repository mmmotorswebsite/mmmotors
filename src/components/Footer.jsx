import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { SITE, SOCIAL } from '../constants/site'

const quick = [
  { href: '#home', label: 'Home' },
  { href: '#fleet-showcase', label: 'Luxury Fleet' },
  { href: '#packages', label: 'Wedding Packages' },
  { href: '#cars', label: 'All Cars' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-dark-card px-6 py-16 text-muted">
      {/* Faint watermark logo */}
      <img
        src="/logo.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-72 opacity-[0.04] sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/logo.webp"
            alt={`${SITE.name} logo`}
            className="h-14 w-auto object-contain"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Pakistan&apos;s trusted luxury car rental — executive transport,
            wedding convoys &amp; VIP fleet hire nationwide.
          </p>
          <div className="mt-6 flex gap-4">
            {[
              { Icon: FaInstagram, label: 'Instagram', href: SOCIAL.instagram },
              { Icon: FaFacebookF, label: 'Facebook', href: SOCIAL.facebook },
              { Icon: FaTiktok, label: 'TikTok', href: SOCIAL.tiktok },
            ].map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan/30 text-cyan transition hover:bg-cyan/10"
              >
                <Icon className="text-base" aria-hidden />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Footer quick links"
          className="space-y-3 text-sm"
        >
          <p className="section-heading">Explore</p>
          <ul className="space-y-2 pt-1">
            {quick.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-ivory-warm/80 transition hover:text-cyan"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 text-sm"
        >
          <p className="section-heading">Contact</p>
          <p className="pt-1 text-ivory-warm">{SITE.phoneDisplay}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex text-ivory-warm transition hover:text-cyan"
          >
            {SITE.email}
          </a>
          <p className="pt-1 text-muted">{SITE.addressLine}</p>
        </motion.div>
      </div>

      <div className="ornament-divider relative mx-auto mt-12 max-w-6xl">
        <span className="h-1 w-1 rotate-45 bg-cyan/60" />
      </div>

      <div className="relative mx-auto mt-6 max-w-6xl text-xs text-muted">
        <p className="text-center">
          © 2026 {SITE.name} — All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
