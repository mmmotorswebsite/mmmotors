import { AnimatePresence, motion } from 'framer-motion'
import { SITE } from '../constants/site'

export default function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[60] grid place-items-center bg-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44"
              aria-busy="true"
              aria-label={`Loading ${SITE.name} site`}
            >
              <img
                src="/logo.webp"
                alt={`${SITE.name} — loading`}
                className="h-full w-full object-contain"
              />
            </motion.div>
            <div className="h-[2px] w-32 overflow-hidden rounded-full bg-white/10">
              <motion.span
                className="block h-full w-[45%] rounded-full bg-cyan"
                initial={{ x: '-140%' }}
                animate={{ x: '140%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
