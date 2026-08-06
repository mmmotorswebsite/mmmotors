import { motion } from 'framer-motion'
import { Tag, MessageSquare } from 'lucide-react'
import { SITE, whatsappHref } from '../constants/site'
import { formatPkr } from '../data/cars'

export default function VehicleCard({ car, index = 0 }) {
  const categoryLabel = car.category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const bookingMessage = `Hi ${SITE.name}, I would like to book the ${car.name} for rental. Please confirm availability and terms.`

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
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#1E2229]/60 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/40 hover:shadow-[0_12px_32px_rgba(212,175,55,0.12)] shadow-lg"
    >
      {/* Gold top accent line, animates in on hover */}
      <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] transition-transform duration-500 group-hover:scale-x-100" />

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
        <div className="absolute inset-0 bg-gradient-to-t from-[#14171C]/95 via-[#14171C]/10 to-black/20" />

        {/* Floating Category tag */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded bg-[#0D0F12]/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#E5C158] backdrop-blur-sm border border-[#D4AF37]/20">
          <Tag className="h-3 w-3 text-[#D4AF37]" />
          {categoryLabel}
        </span>

        {/* Price pill anchored bottom-right of the image */}
        <span className="absolute bottom-4 right-4 rounded-[4px] bg-[#0D0F12]/85 px-3 py-1.5 text-sm font-bold text-[#D4AF37] backdrop-blur-sm border border-[#D4AF37]/20">
          {formatPkr(car.pricePerDay)}
          <span className="ml-1 text-[10px] font-medium text-neutral-400">/ day</span>
        </span>
      </div>

      {/* Content panel */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          {/* Title */}
          <h3 className="text-[17px] font-bold tracking-tight text-white transition group-hover:text-[#D4AF37]">
            {car.name}
          </h3>

        </div>

        {/* Action Button */}
        <div className="mt-5">
          <motion.a
            href={whatsappHref(bookingMessage)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.97 }}
            className="flex w-full items-center justify-center gap-1.5 rounded-[4px] border-none bg-[#D4AF37] py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[#0D0F12] shadow-[0_4px_12px_rgba(212,175,55,0.15)] transition hover:bg-[#E5C158]"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Book Now
          </motion.a>
        </div>
      </div>
    </motion.article>
  )
}