import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { heroImage } from '../constants/carImages'
import { SITE, whatsappHref } from '../constants/site'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSearchSubmit = (e) => {
    e.preventDefault()

    // Pass the free-text query to the listings filter
    if (onSearch) {
      onSearch(query, 'all')
    }

    // Scroll to vehicles catalog smoothly
    const carsSection = document.getElementById('cars')
    if (carsSection) {
      carsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative isolate min-h-[94svh] flex flex-col justify-center pb-20 pt-24 md:pb-28 md:pt-28 overflow-hidden bg-[#0D0F12]"
      aria-labelledby="hero-heading"
    >
      {/* Background Image & Overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <img
          src={heroImage}
          alt={`Luxury car rental — ${SITE.name} Pakistan`}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[center_35%] brightness-[0.45] contrast-[1.05]"
          width={2200}
          height={1400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-[#0D0F12]/40 to-black/70" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Fine gold micro particles */}
        <div className="cyan-particles absolute inset-0 opacity-25" />
      </div>

      {/* Hero Content — centered */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center space-y-4 text-center"
        >
          {/* Brand line */}
          <motion.div variants={item} className="space-y-2">
            <h2 className="text-balance text-4xl font-extrabold leading-none tracking-tight text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.15)] sm:text-5xl lg:text-6xl font-display">
              {SITE.name}
            </h2>
            <p className="text-sm font-medium text-neutral-200 sm:text-base">
              Luxury car rental for different events
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            variants={item}
            className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl font-display"
          >
            EXPLORE YOUR <br />
            <span className="text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.15)]">DREAM DRIVE</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            className="max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base"
          >
            Reserve the Finest Premium Vehicles &amp; Unmatched Wedding Convoy Deals. Experience VIP treatment with our luxury fleet and professional service, perfect for corporate events, weddings, and special occasions.
          </motion.p>

          {/* Quick Search Bar */}
          <motion.form
            variants={item}
            onSubmit={handleSearchSubmit}
            className="mt-2 flex w-full max-w-2xl flex-col gap-3 rounded-xl border border-white/10 bg-[#1E2229]/80 p-2.5 backdrop-blur-md shadow-2xl sm:flex-row sm:items-center"
          >
            <div className="flex flex-1 items-center gap-2.5 rounded-[4px] bg-[#0D0F12] px-4 py-3">
              <Search className="h-4 w-4 shrink-0 text-[#D4AF37]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to search for a car... (e.g. 'Maybach', 'SUV', 'Wedding Car')"
                className="w-full bg-transparent text-xs font-medium text-white placeholder:text-neutral-500 outline-none sm:text-sm"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="shrink-0 rounded-[4px] bg-[#D4AF37] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0D0F12] transition hover:bg-[#E5C158] shadow-[0_4px_12px_rgba(212,175,55,0.2)] border-none"
            >
              Search Vehicles
            </motion.button>
          </motion.form>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-4 pt-2">
            <motion.a
              href={whatsappHref(
                `Hi ${SITE.name}, I would like to book a luxury car. Please share available models.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-[4px] bg-[#D4AF37] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0D0F12] transition hover:bg-[#E5C158] shadow-[0_4px_16px_rgba(212,175,55,0.3)] border-none"
            >
              Book Now
            </motion.a>

            
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}