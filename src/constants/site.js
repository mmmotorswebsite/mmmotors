export const SITE = {
  name: 'MM Motors and Rent a Car',
  shortName: 'MM Motors',
  tagline: "Pakistan's Trusted Luxury & Executive Car Rental Service",
  heroHeading: 'Premium Luxury Car Rental Services Across Pakistan',
  // TODO: confirm this is the correct WhatsApp number to use for bookings
  whatsappDigits: '923404270451',
  phoneDisplay: '+92 340 4270451',
  // TODO: replace with the real MM Motors business email
  email: 'info@mmmotors.pk',
  // TODO: replace with the real MM Motors office / pickup address
  addressLine: 'Punjab, Pakistan',
  mapEmbedQuery: 'MM+MOTORS+AND+RENT+A+CAR',
  // TODO: replace with the real domain once purchased/hosted
  url: 'https://mmmotors.pk',
  // TODO: confirm the cities you actually serve
  cities: ['Lahore', 'Islamabad', 'Rawalpindi', 'Karachi'],
}

export const SEO = {
  title:
    'MM Motors and Rent a Car | Luxury Car Rental Pakistan — VIP, Wedding & Executive Transport',
  description:
    'Rent luxury cars across Pakistan with MM Motors and Rent a Car. Prado, Land Cruiser, Mercedes, BMW, Bentley, limousines & wedding fleets. Book instantly via WhatsApp.',
  keywords: [
    'luxury car rental Pakistan',
    'rent luxury cars in Pakistan',
    'wedding car rental Pakistan',
    'VIP car rental services',
    'executive transport Pakistan',
    'Prado rental Pakistan',
    'limousine rental Pakistan',
    'luxury vehicle hire Pakistan',
    'car rental Lahore',
    'car rental Islamabad',
    'car rental Rawalpindi',
    'car rental Karachi',
    'Mercedes rental Pakistan',
    'Bentley rental Pakistan',
    'MM Motors',
    'MM Motors and Rent a Car',
  ].join(', '),
  // TODO: upload a real hero/OG share image once the domain is live
  ogImage: 'https://mmmotors.pk/car%20pic.jpeg',
}

export const whatsappHref = (
  body = `Hi ${SITE.name}, I would like to book a car.`,
) =>
  `https://wa.me/${SITE.whatsappDigits}?text=${encodeURIComponent(body)}`

export const SOCIAL = {
  // TODO: add real MM Motors social links — leave as '#' until ready
  instagram: '#',
  facebook: '#',
  tiktok: '#',
}
