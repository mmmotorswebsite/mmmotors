import { SITE, SEO, SOCIAL } from '../constants/site'
import { CARS } from '../data/cars'

export default function StructuredData() {
  const sameAs = Object.values(SOCIAL).filter((url) => url && url !== '#')

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AutoRental',
        '@id': `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/favicon.svg`,
        image: SEO.ogImage,
        description: SEO.description,
        telephone: SITE.phoneDisplay,
        email: SITE.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.addressLine,
          addressRegion: 'Punjab',
          addressCountry: 'PK',
        },
        areaServed: SITE.cities.map((city) => ({
          '@type': 'City',
          name: city,
        })),
        priceRange: 'PKR 3,500 - PKR 250,000',
        ...(sameAs.length ? { sameAs } : {}),
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SEO.description,
        publisher: { '@id': `${SITE.url}/#organization` },
      },
      {
        '@type': 'ItemList',
        name: 'Luxury Car Rental Fleet Pakistan',
        itemListElement: CARS.slice(0, 12).map((car, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Product',
            name: `${car.name} Rental`,
            description: `Rent ${car.name} in Pakistan from ${SITE.name}`,
            image: car.image,
            offers: {
              '@type': 'Offer',
              priceCurrency: 'PKR',
              price: car.pricePerDay,
              availability: 'https://schema.org/InStock',
            },
          },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
