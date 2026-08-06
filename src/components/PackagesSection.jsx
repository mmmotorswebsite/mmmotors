import { motion } from 'framer-motion'
import { HiCheck, HiOutlineShoppingBag } from 'react-icons/hi'
import { SITE, whatsappHref } from '../constants/site'
import { PACKAGES } from '../data/packages'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function PackagesSection() {
  return (
    <section
      id="packages"
      className="relative scroll-mt-28 bg-dark section-pad md:scroll-mt-32"
      aria-labelledby="packages-heading"
    >
      {/* Ambient particles background */}
      <div
        aria-hidden
        className="cyan-particles pointer-events-none absolute inset-0 opacity-[0.25]"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="section-heading">Curated Event Convoys</p>
          <h2
            id="packages-heading"
            className="mt-3 text-3xl font-bold uppercase tracking-tight text-ivory-warm sm:text-4xl"
          >
            Wedding &amp; VIP Packages
          </h2>
          <div className="ornament-divider mt-5">
            <span className="h-1.5 w-1.5 rotate-45 bg-cyan/70" />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Premium multi-vehicle luxury convoys styled and coordinated for
            weddings, high-level protocols, and VIP guest transport.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PACKAGES.map((pkg) => {
            // Build the WhatsApp message tailored to this package
            const carsString = pkg.cars
              .map((c) => `${c.count}x ${c.name}`)
              .join(', ')
            const bookingMessage = `Hi ${SITE.name}, I would like to book the "${pkg.name}" (${carsString}) for ${pkg.priceDisplay} (${pkg.fuelDecoration}). Please check availability for my dates.`

            return (
              <motion.article
                key={pkg.id}
                variants={item}
                whileHover={{ y: -6 }}
                className="vehicle-card flex flex-col justify-between group h-full"
              >
                <div>
                  {/* Package Image banner */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.alt}
                      loading="lazy"
                      decoding="async"
                      width={480}
                      height={300}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
                    
                    {/* Badge showing price and fuel status */}
                    <div className="absolute right-3 top-3 rounded bg-dark-card/90 px-2.5 py-1 text-right backdrop-blur border border-cyan/30 shadow-lg">
                      <p className="text-xs font-bold text-cyan leading-none">
                        PKR {pkg.priceDisplay}
                      </p>
                      <p className="mt-0.5 text-[8.5px] font-medium text-neutral-400 leading-none">
                        {pkg.fuelDecoration}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold uppercase tracking-wide text-ivory-warm">
                      {pkg.name}
                    </h3>
                    
                    <div className="mt-4 h-px w-10 bg-cyan/40" />

                    {/* Features breakdown */}
                    <ul className="mt-5 space-y-2.5 text-xs text-muted">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <HiCheck className="mt-0.5 shrink-0 text-cyan text-sm" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking Button */}
                <div className="p-5 pt-0">
                  <motion.a
                    href={whatsappHref(bookingMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-book-card inline-flex items-center gap-2"
                  >
                    <HiOutlineShoppingBag className="text-sm" />
                    Book Package
                  </motion.a>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
