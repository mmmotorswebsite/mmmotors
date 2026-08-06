import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { whatsappHref } from '../constants/site'

export default function WhatsAppFloat() {
  return (
    <div className="pointer-events-none fixed bottom-6 right-5 z-50 md:bottom-8 md:right-8">
      <div className="pointer-events-auto group relative inline-flex flex-col items-end gap-3">
        <motion.a
          href={whatsappHref()}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat With Us"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-cyan text-[26px] text-[#17130a] shadow-[0_0_24px_-4px_rgba(205,163,73,0.6)] ring-2 ring-cyan/30"
        >
          <FaWhatsapp aria-hidden />
          <span className="pointer-events-none absolute -top-11 right-2 hidden whitespace-nowrap rounded-full bg-dark-card px-3 py-1 text-[11px] font-medium text-cyan opacity-0 shadow-lg ring-1 ring-cyan/20 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 sm:block sm:translate-y-1">
            Chat With Us
          </span>
        </motion.a>
      </div>
    </div>
  )
}
