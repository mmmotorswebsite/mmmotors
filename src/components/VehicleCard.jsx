import { motion } from 'framer-motion'
import { Users, Settings, Tag, MessageSquare } from 'lucide-react'
import { SITE, whatsappHref } from '../constants/site'
import { formatPkr } from '../data/cars'

export default function VehicleCard({ car, index = 0 }) {
  // Dynamically derive transmission and seating values for details accuracy
  let transmission = 'Automatic'
  let seating = '5 Seats'
  
  if (car.category === 'ultra-luxury') {
    transmission = 'Tiptronic Auto'
    seating = car.id.includes('i8') || car.id.includes('urus') ? '4 Seats' : '5 Seats'
  } else if (car.category === 'suv' || car.category === 'pickup') {
    seating = '7 Seats'
  } else if (car.category === 'limousine') {
    seating = '12 Seats'
  } else if (car.category === 'van') {
    seating = '15 Seats'
  }

  const categoryLabel = car.category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const bookingMessage = `Hi ${SITE.name}, I would like to book the ${car.name} for rental. Please confirm availability and terms.`
  const detailsMessage = `Hi ${SITE.name}, I would like details/specifications for the ${car.name} rental.`

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.05, 0.25),
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#1E2229]/60 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/30 shadow-lg"
    >
      {/* Frame image panel */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
        <img
          src={car.image}
          alt={car.alt}
          loading="lazy"
          decoding="async"
          width={680}
          height={425}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Soft dark graphite vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14171C]/90 via-transparent to-black/20" />
        
        {/* Floating Category tag */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded bg-[#0D0F12]/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#E5C158] backdrop-blur-sm border border-[#D4AF37]/20">
          <Tag className="h-3 w-3 text-[#D4AF37]" />
          {categoryLabel}
        </span>
      </div>

      {/* Content panel */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="text-[17px] font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition">
            {car.name}
          </h3>

          {/* Pricing Highlighted in Gold */}
          <p className="mt-1.5 text-sm font-semibold text-[#D4AF37]">
            {formatPkr(car.pricePerDay)}
            <span className="text-xs font-normal text-neutral-400"> / day</span>
          </p>

          {/* Dynamic Specifications list */}
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/5 pt-4">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <Settings className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>{transmission}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <Users className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>{seating}</span>
            </div>
          </div>
        </div>

        {/* Action Button Grid */}
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <motion.a
            href={whatsappHref(detailsMessage)}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            className="rounded-[4px] border border-white/20 bg-white/5 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white transition hover:border-white hover:bg-white/10 flex items-center justify-center gap-1.5"
          >
            Details
          </motion.a>
          
          <motion.a
            href={whatsappHref(bookingMessage)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-[4px] bg-[#D4AF37] py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[#0D0F12] transition hover:bg-[#E5C158] flex items-center justify-center gap-1 border-none shadow-[0_4px_12px_rgba(212,175,55,0.15)]"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Book
          </motion.a>
        </div>
      </div>
    </motion.article>
  )
}
