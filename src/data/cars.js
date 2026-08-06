import {
  DEFAULT_CAR_IMAGE,
  AUDI_A6_IMAGE,
  BENTLEY_IMAGE,
  BMW_I8_BLACK_IMAGE,
  BMW_I8_YELLOW_IMAGE,
  BMW_7_SERIES_IMAGE,
  BMW_740LI_IMAGE,
  MERCEDES_G_WAGON_BRABUS_IMAGE,
  MERCEDES_C_CLASS_IMAGE,
  MERCEDES_CABRIOLET_IMAGE,
  MERCEDES_MAYBACH_S_CLASS_IMAGE,
  PORSCHE_TAYCAN_IMAGE,
  RANGE_ROVER_VOGUE_IMAGE,
  TOYOTA_FORTUNER_LEGENDER_IMAGE,
  TOYOTA_LC300_BLACK_IMAGE,
  TOYOTA_LC300_WHITE_IMAGE,
  TOYOTA_PRADO_TXL_IMAGE,
  TOYOTA_REVO_IMAGE,
  TOYOTA_GRANDE_IMAGE,
  TOYOTA_ALTIS_GLI_XLI_IMAGE,
  HONDA_CIVIC_X_IMAGE,
} from '../constants/carImages'

/** @typedef {'ultra-luxury' | 'suv' | 'sedan' | 'economy' | 'limousine' | 'pickup' | 'van'} CarCategory */

/**
 * @typedef {Object} Car
 * @property {string} id
 * @property {string} name
 * @property {CarCategory} category
 * @property {number} pricePerDay
 * @property {string} image
 * @property {string} alt
 * @property {string} [note]
 * @property {boolean} [featured]
 */

/** @type {Car[]} */
export const CARS = [
  {
    id: 'mercedes-g-brabus',
    name: 'Mercedes G Wagon Brabus',
    category: 'ultra-luxury',
    pricePerDay: 150000,
    image: MERCEDES_G_WAGON_BRABUS_IMAGE,
    alt: 'Mercedes-Benz G-Class W463 luxury SUV — Brabus style rental Pakistan',
    featured: true,
  },
  {
    id: 'range-rover-vogue',
    name: 'Range Rover Vogue',
    category: 'ultra-luxury',
    pricePerDay: 90000,
    image: RANGE_ROVER_VOGUE_IMAGE,
    alt: '2018 Range Rover Vogue SDV6 Autobiography luxury SUV rental Pakistan',
    featured: true,
  },
  {
    id: 'mercedes-maybach',
    name: 'Mercedes Maybach S Class',
    category: 'ultra-luxury',
    pricePerDay: 90000,
    image: MERCEDES_MAYBACH_S_CLASS_IMAGE,
    alt: 'Mercedes-Maybach S680 4MATIC ultra luxury sedan rental Pakistan',
    featured: true,
  },
  {
    id: 'bentley-flying-spur',
    name: 'Bentley',
    category: 'ultra-luxury',
    pricePerDay: 270000,
    image: BENTLEY_IMAGE,
    alt: '2020 Bentley Flying Spur First Edition luxury sedan rental Pakistan',
    featured: true,
  },
  {
    id: 'bmw-7-series',
    name: 'BMW 7 Series',
    category: 'ultra-luxury',
    pricePerDay: 150000,
    image: BMW_7_SERIES_IMAGE,
    alt: '2022 BMW 740i xDrive G11 executive sedan rental Pakistan',
    featured: true,
  },
  {
    id: 'bmw-i8-black',
    name: 'BMW i8 (Black)',
    category: 'ultra-luxury',
    pricePerDay: 220000,
    image: BMW_I8_BLACK_IMAGE,
    alt: 'BMW i8 I12 coupe hybrid sports car — black rental Pakistan',
    featured: true,
  },
  {
    id: 'bmw-i8-yellow',
    name: 'BMW i8 (Yellow)',
    category: 'ultra-luxury',
    pricePerDay: 250000,
    image: BMW_I8_YELLOW_IMAGE,
    alt: 'BMW i8 I12 coupe hybrid sports car — yellow rental Pakistan',
  },
  {
    id: 'porsche-taycan',
    name: 'Porsche Taycan',
    category: 'ultra-luxury',
    pricePerDay: 200000,
    image: PORSCHE_TAYCAN_IMAGE,
    alt: 'Porsche Taycan 4S electric luxury sedan rental Pakistan',
    featured: true,
  },
  
  
 
  {
    id: 'bmw-740li',
    name: 'BMW 740Li',
    category: 'ultra-luxury',
    pricePerDay: 140000,
    image: BMW_740LI_IMAGE,
    alt: 'BMW 740Li G12 long-wheelbase executive sedan rental Pakistan',
  },

  
  {
    id: 'mercedes-c-class',
    name: 'Mercedes C Class',
    category: 'ultra-luxury',
    pricePerDay: 70000,
    image: MERCEDES_C_CLASS_IMAGE,
    alt: 'Mercedes-Benz C-Class W205 performance sedan rental Pakistan',
  },
  {
    id: 'mercedes-cabriolet',
    name: 'Mercedes Cabriolet',
    category: 'ultra-luxury',
    pricePerDay: 100000,
    image: MERCEDES_CABRIOLET_IMAGE,
    alt: 'Mercedes-Benz Cabriolet convertible luxury car rental Pakistan',
  },
  {
    id: 'toyota-lc300-black',
    name: 'Toyota LC300 (Black)',
    category: 'suv',
    pricePerDay: 40000,
    image: TOYOTA_LC300_BLACK_IMAGE,
    alt: '2022 Toyota Land Cruiser 300 GR Sport SUV — black rental Pakistan',
  },
  {
    id: 'toyota-lc300-white',
    name: 'Toyota LC300 (White)',
    category: 'suv',
    pricePerDay: 40000,
    image: TOYOTA_LC300_WHITE_IMAGE,
    alt: '2022 Toyota Land Cruiser 300 GR Sport SUV — white rental Pakistan',
  },
  {
    id: 'audi-a6',
    name: 'Audi A6',
    category: 'sedan',
    pricePerDay: 40000,
    image: AUDI_A6_IMAGE,
    alt: 'Audi A6 C8 50 TDI quattro executive sedan rental Pakistan',
  },
  {
    id: 'toyota-prado-txl',
    name: 'Toyota Prado TXL',
    category: 'suv',
    pricePerDay: 18000,
    image: TOYOTA_PRADO_TXL_IMAGE,
    alt: 'Toyota Land Cruiser Prado TXL wagon rental Pakistan',
    featured: true,
  },
  {
    id: 'toyota-fortuner-legender',
    name: 'Toyota Fortuner Legender',
    category: 'suv',
    pricePerDay: 16000,
    image: TOYOTA_FORTUNER_LEGENDER_IMAGE,
    alt: 'Toyota Fortuner Legender SUV rental Pakistan',
  },
  {
    id: 'toyota-revo',
    name: 'Toyota Revo',
    category: 'pickup',
    pricePerDay: 14000,
    image: TOYOTA_REVO_IMAGE,
    alt: '2018 Toyota Hilux Revo pickup truck rental Pakistan',
  },
  {
    id: 'honda-civic-x',
    name: 'Honda Civic X',
    category: 'sedan',
    pricePerDay: 7000,
    image: HONDA_CIVIC_X_IMAGE,
    alt: '2016 Honda Civic X tenth generation sedan rental Pakistan',
  },
  {
    id: 'toyota-grande',
    name: 'Toyota Grande',
    category: 'sedan',
    pricePerDay: 7000,
    image: TOYOTA_GRANDE_IMAGE,
    alt: '2019 Toyota Corolla Altis Grande sedan rental Pakistan',
  },
  {
    id: 'toyota-altis-gli-xli',
    name: 'Toyota Altis / GLI / XLI',
    category: 'sedan',
    pricePerDay: 5000,
    image: TOYOTA_ALTIS_GLI_XLI_IMAGE,
    alt: 'Toyota Corolla Altis GLI XLI sedan rental Pakistan',
  },
]

export const CATEGORIES = [
  { id: 'all', label: 'All Fleet' },
  { id: 'ultra-luxury', label: 'Ultra Luxury' },
  { id: 'suv', label: 'SUV' },
  { id: 'sedan', label: 'Sedan' },
  { id: 'pickup', label: 'Pickup' },
]

export const FEATURED_CARS = CARS.filter((c) => c.featured)

/** Curated 6-car premium grid */
export const PREMIUM_SELECTION_IDS = [
  'bentley-flying-spur',
  'bmw-i8-black',
  'porsche-taycan',
  'mercedes-g-brabus',
  'mercedes-maybach',
  'range-rover-vogue',
]

export const PREMIUM_SELECTION = PREMIUM_SELECTION_IDS.map((id) =>
  CARS.find((c) => c.id === id),
).filter(Boolean)

export const formatPkr = (n) =>
  `PKR ${n.toLocaleString('en-PK', { maximumFractionDigits: 0 })}`