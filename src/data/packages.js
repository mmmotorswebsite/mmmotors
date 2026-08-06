import {
  ELITE_BARAT_PACKAGE_IMAGE,
  EXECUTIVE_BARAT_PACKAGE_IMAGE ,
  PREMIUM_BARAT_PACKAGE_IMAGE ,
  ROYAL_BARAT_PACKAGE_IMAGE ,
} from '../constants/carImages'

export const PACKAGES = [
  {
    id: 'package-1',
    name: 'Royal Barat Package',
    cars: [
      { count: 1, name: 'Mercedes Maybach' },
      { count: 1, name: 'Audi A6' },
      { count: 10, name: 'Honda Civic' },
    ],
    price: 200000,
    priceDisplay: '200k',
    fuelDecoration: 'With fuel and decoration',
    features: [
      '1x Mercedes Maybach (Groom Car)',
      '1x Audi A6 (VIP Guests)',
      '10x Honda Civics (Barat Convoy)',
      'Fuel & Flower Decoration Included'
    ],
    image: ROYAL_BARAT_PACKAGE_IMAGE,
    alt: 'Royal Barat Wedding Package with Maybach, Audi A6 and Honda Civics',
  },
  {
    id: 'package-2',
    name: 'Executive Barat Package',
    cars: [
      { count: 1, name: 'Mercedes Maybach' },
      { count: 1, name: 'Range Rover' },
      { count: 1, name: 'Prado TXL' },
      { count: 1, name: 'Revo Hilux' },
    ],
    price: 205000,
    priceDisplay: '205k',
    fuelDecoration: 'Without fuel',
    features: [
      '1x Mercedes Maybach (VIP Carriage)',
      '1x Range Rover (Executive Escort)',
      '1x Prado TXL (Protocol Guard)',
      '1x Toyota Revo Hilux (Utility Support)'
    ],
    image: EXECUTIVE_BARAT_PACKAGE_IMAGE,
    alt: 'Elite Executive Convoy package with Maybach, Range Rover, Prado, and Revo Hilux',
  },
  {
    id: 'package-3',
    name: 'elite barat package',
    cars: [
      { count: 1, name: 'Mercedes Maybach' },
      { count: 2, name: 'Range Rover Vogue' },
    ],
    price: 270000,
    priceDisplay: '270k',
    fuelDecoration: 'With fuel',
    features: [
      '1x Mercedes Maybach (Royal Carriage)',
      '2x Range Rover Vogue (VVIP Escorts)',
      'Fuel Cost Included'
    ],
    image: ELITE_BARAT_PACKAGE_IMAGE,
    alt: 'Royal Vogue Groom Entry package with Maybach and Range Rover Vogue escorts',
  },
  {
    id: 'package-4',
    name: 'Premium barat package',
    cars: [
      { count: 1, name: 'Range Rover' },
      { count: 10, name: 'Prado TXL' },
    ],
    price: 300000,
    priceDisplay: '300k',
    fuelDecoration: 'With fuel and decoration',
    features: [
      '1x Range Rover Vogue (VIP Lead)',
      '10x Toyota Prado TXL (Heavy SUV Protocol)',
      'Fuel Cost Included',
      'Flower Decoration on Lead Vehicle'
    ],
    image: PREMIUM_BARAT_PACKAGE_IMAGE,
    alt: 'Premium SUV Convoy package with Range Rover and Toyota Prado TXL protocol',
  },
]
