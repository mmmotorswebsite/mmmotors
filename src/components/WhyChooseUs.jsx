import { motion } from 'framer-motion'
import { FaAward, FaShieldAlt, FaTools } from 'react-icons/fa'
import { SITE } from '../constants/site'

const FEATURES = [
  {
    title: 'Premium Quality',
    body: 'Late-model luxury vehicles maintained to showroom standards before every rental.',
    icon: FaAward,
  },
  {
    title: 'Trusted Deals',
    body: 'Transparent PKR day-rates with no hidden charges — book confidently via WhatsApp.',
    icon: FaShieldAlt,
  },
  {
    title: 'Expert Services',
    body: 'Professional chauffeurs, wedding convoys, and 24/7 concierge support nationwide.',
    icon: FaTools,
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative scroll-mt-28 bg-dark section-pad md:scroll-mt-32"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2
            id="why-heading"
            className="text-3xl font-bold uppercase tracking-tight text-cyan sm:text-4xl"
          >
            Why {SITE.shortName}?
          </h2>
          <div className="ornament-divider mt-5">
            <span className="h-1.5 w-1.5 rotate-45 bg-cyan/70" />
          </div>
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-14 grid gap-8 sm:grid-cols-3"
        >
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.li
                key={feature.title}
                variants={reveal}
                className="text-center"
              >
                <p className="font-display text-sm italic tracking-wide text-cyan/70">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <div className="mx-auto mt-3 inline-flex h-14 w-14 items-center justify-center rounded-full border border-cyan/30 text-cyan">
                  <Icon className="text-2xl" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-bold uppercase tracking-wide text-ivory-warm">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.body}
                </p>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
