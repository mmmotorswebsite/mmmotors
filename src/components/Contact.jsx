import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiOutlineLocationMarker, HiPhone } from 'react-icons/hi'
import { SITE, whatsappHref } from '../constants/site'

const phoneDialHref = `tel:+${SITE.whatsappDigits}`

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const text = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      '',
      form.message || 'Looking for guidance on bookings.',
    ].join('\n')
    window.open(whatsappHref(text), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    setForm({ name: '', phone: '', message: '' })
    window.setTimeout(() => setSubmitted(false), 4000)
  }

  const mapSrc = `https://maps.google.com/maps?q=${SITE.mapEmbedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 bg-dark section-pad md:scroll-mt-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="section-heading">Contact</p>
          <h2
            id="contact-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-ivory-warm sm:text-4xl"
          >
            Get in touch
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
            Share your dates, preferred vehicles, and route. We&apos;ll reply on
            WhatsApp with availability and transparent pricing.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-dark-card">
              <iframe
                title={`${SITE.name} location map`}
                src={mapSrc}
                className="h-64 w-full border-0 sm:h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: HiOutlineLocationMarker,
                  label: 'Address',
                  content: SITE.addressLine,
                },
                {
                  icon: HiPhone,
                  label: 'Phone',
                  content: (
                    <a href={phoneDialHref} className="hover:text-cyan">
                      {SITE.phoneDisplay}
                    </a>
                  ),
                },
                {
                  icon: HiMail,
                  label: 'Email',
                  content: (
                    <a href={`mailto:${SITE.email}`} className="hover:text-cyan">
                      {SITE.email}
                    </a>
                  ),
                  span: 2,
                },
              ].map(({ icon: Icon, label, content, span }) => (
                <div
                  key={label}
                  className={`flex gap-3 rounded-xl border border-border bg-dark-card p-4 ${span === 2 ? 'sm:col-span-2' : ''}`}
                >
                  <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                    <Icon className="text-lg" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted">
                      {label}
                    </p>
                    <p className="mt-1 text-sm text-ivory-warm">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-cyan/20 bg-dark-card p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">
              Send a message
            </p>
            <p className="mt-2 text-xl font-bold text-ivory-warm">Reach us on WhatsApp</p>

            <div className="mt-8 space-y-5">
              {[
                { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { name: 'phone', label: 'Phone', type: 'tel', placeholder: '03xx xxxxxxx' },
              ].map(({ name, label, type, placeholder }) => (
                <label key={name} className="block text-sm font-medium text-muted">
                  {label}
                  <input
                    required
                    type={type}
                    name={name}
                    autoComplete={name}
                    value={form[name]}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, [name]: e.target.value }))
                    }
                    className="mt-2 w-full rounded-xl border border-border bg-dark-card px-4 py-3 text-sm text-ivory-warm outline-none transition focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30"
                    placeholder={placeholder}
                  />
                </label>
              ))}
              <label className="block text-sm font-medium text-muted">
                Message
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-dark-card px-4 py-3 text-sm text-ivory-warm outline-none transition focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30"
                  placeholder="Dates, route, vehicles, or special requests."
                />
              </label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 w-full rounded-full bg-cyan py-3 text-sm font-bold uppercase tracking-wide text-[#17130a]"
            >
              Send via WhatsApp
            </motion.button>

            {submitted ? (
              <p className="mt-4 text-center text-xs text-cyan">
                Opening WhatsApp with your message…
              </p>
            ) : (
              <p className="mt-4 text-center text-xs text-muted">
                Submissions open your WhatsApp chat prefilled for quick
                confirmation.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
