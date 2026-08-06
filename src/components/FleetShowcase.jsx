import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { PREMIUM_SELECTION } from '../data/cars'
import VehicleCard from './VehicleCard'

export default function FleetShowcase() {
  return (
    <section
      id="fleet-showcase"
      className="relative scroll-mt-28 overflow-hidden bg-dark-elevated section-pad md:scroll-mt-32"
      aria-labelledby="fleet-showcase-heading"
    >
      {/* Ambient cyan particles */}
      <div
        aria-hidden
        className="cyan-particles pointer-events-none absolute inset-0 opacity-30"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="section-heading">Featured inventory</p>
            <h2
              id="fleet-showcase-heading"
              className="mt-3 text-3xl font-bold uppercase tracking-tight sm:text-4xl"
            >
              <span className="headline-gradient-glow">Premium Selection</span>
            </h2>
            <div className="mt-4 h-px w-20 bg-gradient-to-r from-cyan/80 to-transparent" />
          </div>
          <motion.a
            href="#cars"
            whileHover={{ x: 3 }}
            className="btn-outline-premium"
          >
            View all vehicles
            <HiArrowRight />
          </motion.a>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PREMIUM_SELECTION.map((car, index) => (
            <VehicleCard key={car.id} car={car} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}