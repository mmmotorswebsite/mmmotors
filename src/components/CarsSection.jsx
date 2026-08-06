import { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { CARS } from '../data/cars'
import VehicleCard from './VehicleCard'

const grid = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.04 },
  },
}

const card = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2 } },
}

const tabs = [
  { id: 'all', label: 'All Vehicles' },
  { id: 'suv', label: 'Suv & Protocol' },
  { id: 'exotics', label: 'Exotics / Supercars' },
  { id: 'sedans', label: 'Sedans' },
]

export default function CarsSection({ searchQuery, onSearch, selectedCategory, onSelectCategory }) {
  
  const filtered = useMemo(() => {
    let list = CARS

    // Filter by category tab
    if (selectedCategory === 'suv') {
      list = CARS.filter(
        (c) =>
          c.category === 'suv' ||
          c.category === 'limousine' ||
          c.category === 'pickup'
      )
    } else if (selectedCategory === 'exotics') {
      list = CARS.filter((c) => c.category === 'ultra-luxury')
    } else if (selectedCategory === 'sedans') {
      list = CARS.filter(
        (c) =>
          c.category === 'sedan' ||
          c.category === 'economy' ||
          c.category === 'van'
      )
    }

    // Filter by text search query
    const q = searchQuery.trim().toLowerCase()
    if (q) {
      list = list.filter((c) => c.name.toLowerCase().includes(q))
    }

    return list
  }, [searchQuery, selectedCategory])

  return (
    <section
      id="cars"
      className="scroll-mt-28 bg-[#0D0F12] section-pad md:scroll-mt-32 border-t border-white/5"
      aria-labelledby="cars-heading"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="section-heading">Exclusive Rental Fleet</p>
          <h2
            id="cars-heading"
            className="mt-3 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl font-display"
          >
            All Vehicles
          </h2>
          <div className="ornament-divider mt-5">
            <span className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37]/75" />
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400">
            Browse our complete nationwide collection of executive sedans, protocol SUVs, exotic supercars, and stretch limousines.
          </p>
        </motion.div>

        {/* Category Filter Bar */}
        <div className="mt-12 flex flex-col items-center gap-6 border-b border-white/10 pb-6 lg:flex-row lg:justify-between lg:items-center">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => {
              const active = selectedCategory === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onSelectCategory(tab.id)}
                  className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition ${
                    active
                      ? 'bg-[#D4AF37] text-[#0D0F12] shadow-[0_4px_12px_rgba(212,175,55,0.25)]'
                      : 'border border-white/10 bg-white/5 text-neutral-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Search bar inside header */}
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 pl-10 pr-9 py-2 text-xs text-white placeholder:text-neutral-500 outline-none transition focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/35"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => onSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-neutral-400 hover:bg-white/10 hover:text-white"
                aria-label="Clear search"
              >
                <X className="h-3 w-3" />
              </button>
            ) : null}
          </div>
        </div>

        {/* Results Info */}
        {searchQuery || selectedCategory !== 'all' ? (
          <div className="mt-6 text-center lg:text-left">
            <span className="text-xs text-neutral-400 uppercase tracking-wider">
              Showing {filtered.length} matching vehicle{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        ) : null}

        {/* Responsive Grid */}
        <motion.ul
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((car, index) => (
              <motion.li
                key={car.id}
                layout
                variants={card}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <VehicleCard car={car} index={index} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {/* Empty state */}
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 text-center text-neutral-400"
          >
            <p className="text-sm">No vehicles found matching your search options.</p>
            <button
              type="button"
              onClick={() => {
                onSearch('')
                onSelectCategory('all')
              }}
              className="mt-4 rounded-[4px] border border-[#D4AF37] px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] transition hover:bg-[#D4AF37]/10"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}
