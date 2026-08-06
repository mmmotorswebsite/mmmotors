import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Car, Sliders, Search } from 'lucide-react'
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
  const [vehicleType, setVehicleType] = useState('all')
  const [packageType, setPackageType] = useState('daily')
  const [rentalDate, setRentalDate] = useState('')

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    
    // Pass vehicle type filter and package selections to listings
    if (onSearch) {
      onSearch('', vehicleType)
    }

    // Scroll to vehicles catalog smoothly
    const carsSection = document.getElementById('cars')
    if (carsSection) {
      carsSection.scrollIntoView({ behavior: 'smooth' })
    }
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-[94svh] flex flex-col justify-center pb-28 pt-24 md:pb-36 md:pt-32 overflow-hidden bg-[#0D0F12]"
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F12] via-[#0D0F12]/80 to-transparent" />
        
        {/* Fine gold micro particles */}
        <div className="cyan-particles absolute inset-0 opacity-25" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl space-y-6 text-left"
        >
          {/* Gold Badge */}
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/5 px-4.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#E5C158] backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
            Pakistan&apos;s Premier Luxury Fleet
          </motion.span>

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            variants={item}
            className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[4rem] font-display"
          >
            EXPLORE YOUR <br />
            <span className="text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.15)]">DREAM DRIVE</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            className="max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base"
          >
            Reserve Premium Vehicles &amp; Unmatched Wedding Convoy Deals Nationwide. Experience VIP treatment with our high-end fleet and professional protocol setups.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 pt-3"
          >
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
            
            <motion.a
              href={whatsappHref(
                `Hi ${SITE.name}, I would like to inquire about wedding/VIP convoy rates. Please guide me.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-[4px] border border-white/20 bg-black/40 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Request Convoy Protocol
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Embedded Quick Reservation Widget */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-16 w-full max-w-7xl px-5 sm:px-6 lg:px-8 relative z-20"
      >
        <form
          onSubmit={handleSearchSubmit}
          className="rounded-xl border border-white/10 bg-[#1E2229]/80 p-5 backdrop-blur-md shadow-2xl grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-end"
        >
          {/* Vehicle Type selection */}
          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-400">
              <Car className="h-3.5 w-3.5 text-[#D4AF37]" />
              Vehicle Type
            </label>
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full rounded-[4px] border border-white/10 bg-[#0D0F12] px-3.5 py-2.5 text-xs font-medium text-white outline-none transition focus:border-[#D4AF37]"
            >
              <option value="all">All Vehicles</option>
              <option value="suv">SUV &amp; Protocol</option>
              <option value="ultra-luxury">Exotics &amp; Supercars</option>
              <option value="sedan">Executive Sedans</option>
              <option value="limousine">VIP Limousines</option>
            </select>
          </div>

          {/* Rental Date picker */}
          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-400">
              <Calendar className="h-3.5 w-3.5 text-[#D4AF37]" />
              Rental Date
            </label>
            <input
              type="date"
              value={rentalDate}
              onChange={(e) => setRentalDate(e.target.value)}
              className="w-full rounded-[4px] border border-white/10 bg-[#0D0F12] px-3.5 py-2.5 text-xs font-medium text-white outline-none transition focus:border-[#D4AF37] color-scheme-dark"
            />
          </div>

          {/* Service/Package selection */}
          <div className="space-y-2">
            <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-400">
              <Sliders className="h-3.5 w-3.5 text-[#D4AF37]" />
              Package / Convoy
            </label>
            <select
              value={packageType}
              onChange={(e) => setPackageType(e.target.value)}
              className="w-full rounded-[4px] border border-white/10 bg-[#0D0F12] px-3.5 py-2.5 text-xs font-medium text-white outline-none transition focus:border-[#D4AF37]"
            >
              <option value="daily">Daily Rental (No Package)</option>
              <option value="barat">Royal Barat Package</option>
              <option value="mehndi">Mehndi Executive Convoy</option>
              <option value="vogue">Royal Vogue Groom Entry</option>
              <option value="suv-convoy">Premium SUV Convoy</option>
            </select>
          </div>

          {/* Submit Search button */}
          <div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full rounded-[4px] bg-[#D4AF37] py-3 text-xs font-bold uppercase tracking-wider text-[#0D0F12] transition hover:bg-[#E5C158] flex items-center justify-center gap-2 border-none shadow-[0_4px_12px_rgba(212,175,55,0.2)]"
            >
              <Search className="h-3.5 w-3.5" />
              Search Fleet
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  )
}
