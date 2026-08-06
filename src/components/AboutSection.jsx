import { motion } from 'framer-motion'
import { aboutImage } from '../constants/carImages'
import { SITE } from '../constants/site'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-28 bg-dark-elevated section-pad md:scroll-mt-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-heading">About {SITE.shortName}</p>
          <h2
            id="about-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-ivory-warm sm:text-4xl"
          >
            Pakistan&apos;s trusted partner for luxury &amp; executive ground
            transport
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Rooted in Gujrat with nationwide reach, {SITE.name} delivers
            late-model sedans, SUVs, ultra-luxury exotics, and limousine convoys
            for weddings, corporate travel, and VIP events across{' '}
            {SITE.cities.join(', ')}.
          </p>
          <ul className="mt-8 space-y-3.5 text-sm text-ivory-warm/80">
            {[
              '28+ vehicle fleet from economy to Bentley & BMW i8',
              'Wedding convoy & VIP entry coordination on request',
              'Transparent daily rates — book instantly via WhatsApp',
              'Professional chauffeurs & 24/7 concierge support',
            ].map((point) => (
              <li key={point} className="flex items-start gap-3.5">
                <span className="mt-2 h-1.5 w-1.5 flex-none rotate-45 bg-cyan" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl border border-border"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-dark/70 via-transparent to-transparent" />
          {/* Gold corner brackets */}
          <span aria-hidden className="pointer-events-none absolute left-4 top-4 z-20 h-8 w-8 border-l border-t border-cyan/60" />
          <span aria-hidden className="pointer-events-none absolute right-4 top-4 z-20 h-8 w-8 border-r border-t border-cyan/60" />
          <img
            src={aboutImage}
            alt="Mercedes-Maybach executive sedan luxury car rental Pakistan"
            className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:min-h-[460px] lg:aspect-auto"
            loading="lazy"
            decoding="async"
            width={1200}
            height={900}
          />
          <div className="absolute inset-x-6 bottom-6 z-20 rounded-xl border border-border bg-dark-card/90 p-5 text-left backdrop-blur-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan">
              Nationwide service
            </p>
            <p className="mt-2 text-sm font-medium text-ivory-warm">
              {SITE.cities.join(' · ')} — one premium standard everywhere.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
