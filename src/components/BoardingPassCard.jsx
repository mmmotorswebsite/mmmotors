import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'
import { SITE, whatsappHref } from '../constants/site'

const Barcode = ({ className = '' }) => (
  <div className={`flex items-center gap-[2px] h-8 ${className}`} aria-hidden="true">
    {[1, 3, 1, 2, 4, 1, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2].map((w, i) => (
      <div
        key={i}
        className="h-full bg-current"
        style={{ width: `${w}px` }}
      />
    ))}
  </div>
)

export default function BoardingPassCard({
  carName = 'Mercedes-Maybach S680',
  category = 'ULTRA LUXURY',
  pricePerDay = 100000,
  routeString = 'GJT ⇄ LHE ⇄ ISB',
  badge = 'EXECUTIVE CLASS',
  seat = '01/VIP',
  theme = 'light', // 'light' or 'dark'
  notchBg = 'bg-ivory-warm',
  image = '', // Optional image path for grid cards
  layout = 'horizontal', // 'horizontal' or 'vertical'
  className = '',
}) {
  const isLight = theme === 'light'
  
  // Format price
  const formattedPrice = `PKR ${pricePerDay.toLocaleString('en-PK', { maximumFractionDigits: 0 })}`

  // WhatsApp click handler
  const bookingMessage = `Hi ${SITE.name}, I would like to book the ${carName} (${category}) at ${formattedPrice}/day. Please confirm availability.`

  if (layout === 'vertical') {
    return (
      <div
        className={`relative flex flex-col rounded-[24px] border transition-all duration-300 shadow-md ${
          isLight
            ? 'bg-white border-emerald-deep/10 text-emerald-deep'
            : 'bg-emerald-deep border-white/10 text-ivory-warm'
        } ${className}`}
      >
        {/* 1. IMAGE CAP */}
        {image && (
          <div className="relative aspect-[16/11] overflow-hidden rounded-t-[24px] bg-neutral-100">
            <img
              src={image}
              alt={carName}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/60 via-transparent to-transparent" />
            <span className="absolute left-3 top-3 rounded-md bg-emerald-deep/80 px-2.5 py-1 text-[9px] font-bold font-mono tracking-widest text-ivory-warm backdrop-blur-sm ring-1 ring-white/10">
              {category.toUpperCase()}
            </span>
          </div>
        )}

        {/* 2. BODY CONTENT */}
        <div className="p-5 flex flex-col justify-between gap-4">
          <div>
            <span className={`inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.2em] font-mono ${
              isLight ? 'text-brass-accent' : 'text-amber-200'
            }`}>
              <HiOutlineSparkles className="text-xs" />
              {badge}
            </span>
            <h3 className="font-display text-lg font-bold mt-0.5 leading-snug tracking-tight">
              {carName}
            </h3>
          </div>

          {/* Route details */}
          <div className="grid grid-cols-3 items-center gap-1 border-t border-dashed border-current/10 pt-3 text-[11px] font-mono">
            <div className="text-left">
              <span className="block text-[8px] uppercase opacity-60">Origin</span>
              <span className="font-semibold text-xs tracking-tight">PUNJAB</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className={`text-[10px] font-bold ${isLight ? 'text-brass-accent' : 'text-amber-200'}`}>➔</span>
              <span className="text-[7px] uppercase tracking-widest opacity-40">ROUTE</span>
            </div>
            <div className="text-right">
              <span className="block text-[8px] uppercase opacity-60">Dest</span>
              <span className="font-semibold text-xs tracking-tight">NATIONWIDE</span>
            </div>
          </div>
        </div>

        {/* 3. PERFORATION SPLIT */}
        <div className="relative flex items-center justify-center py-1" aria-hidden="true">
          <div className={`w-full border-t border-dashed ${
            isLight ? 'border-emerald-deep/15' : 'border-white/15'
          }`} />
          <div className={`absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border ${notchBg} ${
            isLight ? 'border-emerald-deep/10' : 'border-white/10'
          }`} />
          <div className={`absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border ${notchBg} ${
            isLight ? 'border-emerald-deep/10' : 'border-white/10'
          }`} />
        </div>

        {/* 4. TICKET STUB (BOTTOM) */}
        <div className={`p-5 flex flex-col justify-between gap-4 rounded-b-[24px] ${
          isLight ? 'bg-neutral-50/50' : 'bg-emerald-deep/50'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <span className="block text-[8px] uppercase tracking-wider opacity-60 font-mono">Fare</span>
              <div className="font-mono">
                <span className="text-base font-bold tracking-tight">{formattedPrice}</span>
                <span className="text-[9px] opacity-65">/day</span>
              </div>
            </div>
            <Barcode className={isLight ? 'text-emerald-deep/30' : 'text-ivory-warm/20'} />
          </div>

          <motion.a
            href={whatsappHref(bookingMessage)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className={`flex w-full items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-semibold uppercase tracking-wider transition ${
              isLight
                ? 'bg-emerald-deep text-white hover:bg-emerald-deep/90 shadow-md'
                : 'bg-brass-accent text-emerald-deep hover:bg-brass-accent/90 shadow-md shadow-brass-accent/10'
            }`}
          >
            <FaWhatsapp className="text-sm" />
            Book Ticket
          </motion.a>
        </div>
      </div>
    )
  }

  // DEFAULT HORIZONTAL LAYOUT
  return (
    <div
      className={`relative flex flex-col rounded-[24px] border transition-all duration-300 shadow-md ${
        isLight
          ? 'bg-white border-emerald-deep/10 text-emerald-deep'
          : 'bg-emerald-deep border-white/10 text-ivory-warm'
      } lg:flex-row ${className}`}
    >
      {/* 1. MAIN BOARDING PASS BODY */}
      <div className="flex-1 p-6 flex flex-col justify-between gap-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <span className={`inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.25em] font-mono ${
              isLight ? 'text-brass-accent' : 'text-amber-200'
            }`}>
              <HiOutlineSparkles className="text-xs" />
              {badge}
            </span>
            <h3 className="font-display text-2xl font-bold mt-1 tracking-tight">
              {carName}
            </h3>
          </div>
          <span className={`rounded-md px-2.5 py-1 text-[10px] font-bold font-mono tracking-wider ${
            isLight ? 'bg-emerald-deep/5 text-emerald-deep' : 'bg-white/10 text-white'
          }`}>
            {category.toUpperCase()}
          </span>
        </div>

        {/* Route / Service itinerary details */}
        <div className="grid grid-cols-3 items-center gap-2 border-t border-dashed border-current/10 pt-4">
          <div className="text-left">
            <span className="block text-[9px] uppercase tracking-wider opacity-60 font-mono">Origin</span>
            <span className="text-sm font-semibold tracking-wide font-mono">PUNJAB</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className={`text-[10px] font-bold font-mono ${isLight ? 'text-brass-accent' : 'text-amber-200'}`}>➔</span>
            <span className="text-[9px] uppercase tracking-widest opacity-40 font-mono">Service</span>
          </div>
          <div className="text-right">
            <span className="block text-[9px] uppercase tracking-wider opacity-60 font-mono">Dest</span>
            <span className="text-sm font-semibold tracking-wide font-mono">NATIONWIDE</span>
          </div>
        </div>

        {/* Boarding details block */}
        <div className="grid grid-cols-2 gap-4 border-t border-current/10 pt-4 text-xs font-mono">
          <div>
            <span className="block text-[9px] uppercase tracking-wider opacity-60">Boarding Gate</span>
            <span className="font-semibold text-sm">WHATSAPP</span>
          </div>
          <div>
            <span className="block text-[9px] uppercase tracking-wider opacity-60">Seat Allocation</span>
            <span className="font-semibold text-sm">{seat}</span>
          </div>
        </div>
      </div>

      {/* 2. RESPONSIVE SEPARATOR & NOTCHES */}
      <div className="relative flex items-center justify-center py-2 lg:py-0 lg:px-2" aria-hidden="true">
        {/* Dashed line */}
        <div className={`w-full border-t border-dashed lg:w-px lg:h-full lg:border-l lg:border-t-0 ${
          isLight ? 'border-emerald-deep/15' : 'border-white/15'
        }`} />
        
        {/* Notches for mobile (punches on left/right margins) */}
        <div className={`absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border lg:hidden ${notchBg} ${
          isLight ? 'border-emerald-deep/10' : 'border-white/10'
        }`} />
        <div className={`absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border lg:hidden ${notchBg} ${
          isLight ? 'border-emerald-deep/10' : 'border-white/10'
        }`} />

        {/* Notches for desktop (punches on top/bottom margins) */}
        <div className={`hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border ${notchBg} ${
          isLight ? 'border-emerald-deep/10' : 'border-white/10'
        }`} />
        <div className={`hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-5 h-5 rounded-full border ${notchBg} ${
          isLight ? 'border-emerald-deep/10' : 'border-white/10'
        }`} />
      </div>

      {/* 3. TICKET STUB */}
      <div className={`p-6 flex flex-col justify-between gap-4 lg:w-56 shrink-0 rounded-b-[24px] lg:rounded-b-none lg:rounded-r-[24px] ${
        isLight ? 'bg-neutral-50/50' : 'bg-emerald-deep/50'
      }`}>
        <div>
          <span className="block text-[9px] uppercase tracking-wider opacity-60 font-mono">Itinerary Fare</span>
          <div className="mt-1 font-mono">
            <span className="text-xl font-bold tracking-tight">{formattedPrice}</span>
            <span className="text-[10px] opacity-65"> / day</span>
          </div>
        </div>

        {/* Barcode & Booking Link */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Barcode className={isLight ? 'text-emerald-deep/40' : 'text-ivory-warm/30'} />
            <span className="text-[9px] font-mono opacity-50 uppercase tracking-widest leading-none rotate-90 origin-right translate-x-2">
              {SITE.shortName.toUpperCase()}
            </span>
          </div>

          <motion.a
            href={whatsappHref(bookingMessage)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className={`flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold uppercase tracking-wider transition ${
              isLight
                ? 'bg-emerald-deep text-white hover:bg-emerald-deep/90 shadow-md'
                : 'bg-brass-accent text-emerald-deep hover:bg-brass-accent/90 shadow-md shadow-brass-accent/10'
            }`}
          >
            <FaWhatsapp className="text-sm" />
            Book Now
          </motion.a>
        </div>
      </div>
    </div>
  )
}
