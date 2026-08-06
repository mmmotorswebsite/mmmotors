import {
  DEFAULT_CAR_IMAGE,
  MERCEDES_G_BRABUS_IMAGE,
  BMW_I8_IMAGE,
  BMW_7_SERIES_IMAGE,
  BENTLEY_IMAGE,
  LAMBORGHINI_URUS_IMAGE,
  GMC_LIMOUSINE_IMAGE,
  LEXUS_LIMOUSINE_IMAGE,
  TUNDRA_LIMOUSINE_IMAGE,
  MERCEDES_AMG_C_IMAGE,
  MERCEDES_MAYBACH_IMAGE,
  PORSCHE_TAYCAN_IMAGE,
  RANGE_ROVER_VOGUE_IMAGE,
  RANGE_ROVER_AUTOBIOGRAPHY_IMAGE,
  RANGE_ROVER_SVR_IMAGE,
  TOYOTA_FORTUNER_IMAGE,
  TOYOTA_TUNDRA_IMAGE,
  TOYOTA_LAND_CRUISER_ZX_IMAGE,
  TOYOTA_LC300_IMAGE,
  TOYOTA_PRADO_TX_IMAGE,
  TOYOTA_REVO_IMAGE,
  TOYOTA_HIACE_HIGH_ROOF_IMAGE,
  TOYOTA_GRANDE_IMAGE,
  TOYOTA_ALTIS_GLI_XLI_IMAGE,
  TOYOTA_YARIS_IMAGE,
  AUDI_A6_IMAGE,
  AUDI_A5_IMAGE,
  HONDA_CIVIC_11_IMAGE,
  HONDA_CIVIC_X_IMAGE,
  HONDA_BRV_IMAGE,
  SUZUKI_ALTO_IMAGE,
  SUZUKI_WAGONR_IMAGE,
  LEXUS_LX570_IMAGE,
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
    id: 'lamborghini-urus',
    name: 'Lamborghini Urus',
    category: 'ultra-luxury',
    pricePerDay: 1000000,
    image: LAMBORGHINI_URUS_IMAGE,
    alt: 'Lamborghini Urus performance luxury SUV rental Pakistan',
    featured: true,
  },
  {
    id: 'bmw-i8',
    name: 'BMW i8',
    category: 'ultra-luxury',
    pricePerDay: 210000,
    image: BMW_I8_IMAGE,
    alt: '2015 BMW i8 I12 coupe hybrid sports car rental Pakistan',
    featured: true,
  },
  {
    id: 'porsche-taycan',
    name: 'Porsche Taycan',
    category: 'ultra-luxury',
    pricePerDay: 230000,
    image: PORSCHE_TAYCAN_IMAGE,
    alt: 'Porsche Taycan 4S electric luxury sedan rental Pakistan',
    featured: true,
  },
  {
    id: 'bentley-flying-spur',
    name: 'Bentley',
    category: 'ultra-luxury',
    pricePerDay: 220000,
    image: BENTLEY_IMAGE,
    alt: '2020 Bentley Flying Spur First Edition luxury sedan rental Pakistan',
    featured: true,
  },
  {
    id: 'mercedes-g-brabus',
    name: 'Mercedes G Wagon Brabus',
    category: 'ultra-luxury',
    pricePerDay: 120000,
    image: MERCEDES_G_BRABUS_IMAGE,
    alt: 'Mercedes-Benz G-Class W463 luxury SUV — Brabus style rental Pakistan',
    featured: true,
  },
  
  
  
  {
    id: 'lexus-limousine',
    name: 'Lexus Limousine',
    category: 'limousine',
    pricePerDay: 160000,
    image: LEXUS_LIMOUSINE_IMAGE,
    alt: 'Stretch limousine wedding and VIP transport rental Pakistan',
    featured: true,
  },
  {
    id: 'gmc-limousine',
    name: 'GMC Limousine',
    category: 'limousine',
    pricePerDay: 180000,
    image: GMC_LIMOUSINE_IMAGE,
    alt: '2015 GMC Yukon Denali luxury SUV limousine rental Pakistan',
    featured: true,
  },
  {
    id: 'tundra-limousine',
    name: 'Tundra Limousine',
    category: 'limousine',
    pricePerDay: 180000,
    image: TUNDRA_LIMOUSINE_IMAGE,
    alt: 'Toyota Tundra based stretch limousine rental Pakistan',
  },
  {
    id: 'bmw-7-series',
    name: 'BMW 7 Series',
    category: 'ultra-luxury',
    pricePerDay: 120000,
    image: BMW_7_SERIES_IMAGE,
    alt: '2022 BMW 740i xDrive G11 executive sedan rental Pakistan',
    featured: true,
  },
  {
    id: 'range-rover-vogue',
    name: 'Range Rover Vogue',
    category: 'ultra-luxury',
    pricePerDay: 100000,
    image: RANGE_ROVER_VOGUE_IMAGE,
    alt: '2018 Range Rover Vogue SDV6 Autobiography luxury SUV rental Pakistan',
    featured: true,
  },
  {
    id: 'range-rover-autobiography',
    name: 'Range Rover Autobiography',
    category: 'ultra-luxury',
    pricePerDay: 100000,
    image: RANGE_ROVER_AUTOBIOGRAPHY_IMAGE,
    alt: 'Range Rover Autobiography luxury SUV rental Pakistan',
    featured: true,
  },
  {
    id: 'range-rover-svr',
    name: 'Range Rover SVR',
    category: 'ultra-luxury',
    pricePerDay: 140000,
    image: RANGE_ROVER_SVR_IMAGE,
    alt: 'Range Rover Sport SVR performance SUV rental Pakistan',
    featured: true,
  },
  {
    id: 'mercedes-maybach',
    name: 'Mercedes Maybach S Class',
    category: 'ultra-luxury',
    pricePerDay: 100000,
    image: MERCEDES_MAYBACH_IMAGE,
    alt: 'Mercedes-Maybach S680 4MATIC ultra luxury sedan rental Pakistan',
    featured: true,
  },
  {
    id: 'mercedes-amg-c',
    name: 'Mercedes AMG C Class',
    category: 'ultra-luxury',
    pricePerDay: 45000,
    image: MERCEDES_AMG_C_IMAGE,
    alt: 'Mercedes-AMG C63 S W205 performance sedan rental Pakistan',
  },
  {
    id: 'Lexus-570',
    name: 'Lexus LX570',
    category: 'suv',
    pricePerDay: 120000,
    image: LEXUS_LX570_IMAGE,
    alt: 'Lexus LX570 full-size luxury SUV rental Pakistan',
  },
  {
    id: 'land-cruiser-zx',
    name: 'Toyota Land Cruiser ZX V8',
    category: 'suv',
    pricePerDay: 30000,
    image: TOYOTA_LAND_CRUISER_ZX_IMAGE,
    alt: '2022 Toyota Land Cruiser 300 ZX GRJ300 V8 SUV rental Pakistan',
  },
  {
    id: 'toyota-lc300',
    name: 'Toyota LC300',
    category: 'suv',
    pricePerDay: 30000,
    image: TOYOTA_LC300_IMAGE,
    alt: '2022 Toyota Land Cruiser 300 GR Sport SUV rental Pakistan',
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
    id: 'audi-a5',
    name: 'Audi A5',
    category: 'sedan',
    pricePerDay: 30000,
    image: AUDI_A5_IMAGE,
    alt: 'Audi A5 Sportback F5 premium sedan rental Pakistan',
  },
  {
    id: 'toyota-tundra',
    name: 'Toyota Tundra',
    category: 'pickup',
    pricePerDay: 20000,
    image: TOYOTA_TUNDRA_IMAGE,
    alt: '2022 Toyota Tundra Limited pickup truck rental Pakistan',
  },
  {
    id: 'toyota-prado-tx',
    name: 'Toyota Prado TX',
    category: 'suv',
    pricePerDay: 17000,
    image: TOYOTA_PRADO_TX_IMAGE,
    alt: '2015 Toyota Land Cruiser Prado TRJ150W TX wagon rental Pakistan',
    featured: true,
  },
  {
    id: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    category: 'suv',
    pricePerDay: 16000,
    image: TOYOTA_FORTUNER_IMAGE,
    alt: '2017-2018 Toyota Fortuner AN160 SUV rental Pakistan',
  },
  {
    id: 'toyota-revo',
    name: 'Toyota Revo',
    category: 'pickup',
    pricePerDay: 15000,
    image: TOYOTA_REVO_IMAGE,
    alt: '2018 Toyota Hilux Revo pickup truck rental Pakistan',
  },
  {
    id: 'hiace-high-roof',
    name: 'Toyota Hiace High Roof',
    category: 'van',
    pricePerDay: 13000,
    note: 'Without fuel',
    image: TOYOTA_HIACE_HIGH_ROOF_IMAGE,
    alt: 'Toyota Hiace Super Grandia high roof van rental Pakistan',
  },
  {
    id: 'honda-civic-11',
    name: 'Honda Civic 11th Gen',
    category: 'sedan',
    pricePerDay: 12000,
    image: HONDA_CIVIC_11_IMAGE,
    alt: '2022 Honda Civic 11th generation sedan rental Pakistan',
  },
  {
    id: 'honda-civic-x',
    name: 'Honda Civic X',
    category: 'sedan',
    pricePerDay: 6000,
    image: HONDA_CIVIC_X_IMAGE,
    alt: '2016 Honda Civic X tenth generation sedan rental Pakistan',
  },
  {
    id: 'honda-BRV',
    name: 'Honda BRV',
    category: 'sedan',
    pricePerDay: 7000,
    image: HONDA_BRV_IMAGE,
    alt: 'Honda BR-V compact SUV rental Pakistan',
  },
  {
    id: 'toyota-grande',
    name: 'Toyota Grande',
    category: 'sedan',
    pricePerDay: 6000,
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
  {
    id: 'toyota-yaris',
    name: 'Toyota Yaris',
    category: 'economy',
    pricePerDay: 4500,
    image: TOYOTA_YARIS_IMAGE,
    alt: '2020 Toyota Yaris sedan rental Pakistan',
  },
  {
    id: 'suzuki-wagonr',
    name: 'Suzuki WagonR',
    category: 'economy',
    pricePerDay: 3500,
    image: SUZUKI_WAGONR_IMAGE,
    alt: 'Maruti Suzuki WagonR 2019 hatchback rental Pakistan',
  },
  {
    id: 'suzuki-alto',
    name: 'Suzuki Alto',
    category: 'economy',
    pricePerDay: 3500,
    image: SUZUKI_ALTO_IMAGE,
    alt: 'Suzuki Alto HA36 660cc hatchback rental Pakistan',
  },
  
]

export const CATEGORIES = [
  { id: 'all', label: 'All Fleet' },
  { id: 'ultra-luxury', label: 'Ultra Luxury' },
  { id: 'limousine', label: 'Limousine' },
  { id: 'suv', label: 'SUV' },
  { id: 'sedan', label: 'Sedan' },
  { id: 'pickup', label: 'Pickup' },
  { id: 'economy', label: 'Economy' },
  { id: 'van', label: 'Van' },
]

export const FEATURED_CARS = CARS.filter((c) => c.featured)

/** Curated 6-car premium grid: Urus, i8, Taycan, Bentley, G-Wagon, Limo */
export const PREMIUM_SELECTION_IDS = [
  'lamborghini-urus',
  'bmw-i8',
  'porsche-taycan',
  'bentley-flying-spur',
  'mercedes-g-brabus',
  'lexus-limousine',
]

export const PREMIUM_SELECTION = PREMIUM_SELECTION_IDS.map((id) =>
  CARS.find((c) => c.id === id),
).filter(Boolean)

export const formatPkr = (n) =>
  `PKR ${n.toLocaleString('en-PK', { maximumFractionDigits: 0 })}`
