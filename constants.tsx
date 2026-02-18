
import { Property, PropertyStatus, PropertyType, Testimonial } from './types.ts';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern 3 Bedroom Apartment – Bole',
    location: 'Bole, Addis Ababa',
    price: 45000,
    currency: 'ETB',
    status: PropertyStatus.FOR_RENT,
    type: PropertyType.APARTMENT,
    bedrooms: 3,
    bathrooms: 2,
    area: 140,
    description: 'Exquisite modern apartment located in the heart of Bole. Featuring high-end finishes, 24/7 security, and breathtaking city views.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: '2',
    title: 'Luxury Villa – CMC',
    location: 'CMC, Addis Ababa',
    price: 18000000,
    currency: 'ETB',
    status: PropertyStatus.FOR_SALE,
    type: PropertyType.VILLA,
    bedrooms: 5,
    bathrooms: 4,
    area: 500,
    description: 'A masterpiece of architectural design in the prestigious CMC neighborhood. Features a private garden, spacious patio, and modern amenities.',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: '3',
    title: 'Premium Office Space – Kazanchis',
    location: 'Kazanchis, Addis Ababa',
    price: 120000,
    currency: 'ETB',
    status: PropertyStatus.FOR_RENT,
    type: PropertyType.COMMERCIAL,
    bedrooms: 0,
    bathrooms: 2,
    area: 250,
    description: 'Strategic commercial location in the bustling Kazanchis district. Perfect for corporate headquarters or upscale showrooms.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: '4',
    title: 'Elegant Family House – Ayat',
    location: 'Ayat, Addis Ababa',
    price: 9500000,
    currency: 'ETB',
    status: PropertyStatus.FOR_SALE,
    type: PropertyType.FAMILY_HOUSE,
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    description: 'Perfect family home in the quiet residential area of Ayat. Close to schools, supermarkets, and parks.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: '5',
    title: 'Contemporary Studio – Old Airport',
    location: 'Old Airport, Addis Ababa',
    price: 25000,
    currency: 'ETB',
    status: PropertyStatus.FOR_RENT,
    type: PropertyType.APARTMENT,
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    description: 'Minimalist studio apartment perfect for expats or single professionals. Includes gym access and parking.',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    id: '6',
    title: 'Grand Mansion – Summit',
    location: 'Summit, Addis Ababa',
    price: 25000000,
    currency: 'ETB',
    status: PropertyStatus.FOR_SALE,
    type: PropertyType.VILLA,
    bedrooms: 7,
    bathrooms: 6,
    area: 800,
    description: 'Palatial estate with extensive landscaping, modern kitchen, and staff quarters. The pinnacle of Addis luxury.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
    featured: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Abebe T.',
    role: 'Homeowner',
    content: 'Professional and fast service. Found my apartment in Bole within a week! The team at Dellala_adiss knows the market better than anyone.',
    avatar: 'https://i.pravatar.cc/150?u=abebe'
  },
  {
    id: '2',
    name: 'Selamawit K.',
    role: 'Expat Tenant',
    content: 'Moving to Addis was stressful, but Dellala_adiss made finding a home the easiest part. Transparent pricing and no hidden fees.',
    avatar: 'https://i.pravatar.cc/150?u=selam'
  },
  {
    id: '3',
    name: 'Dawit H.',
    role: 'Business Owner',
    content: 'Needed a commercial space in Kazanchis. They handled the negotiations perfectly and secured a great deal for my new office.',
    avatar: 'https://i.pravatar.cc/150?u=dawit'
  }
];

export const LOCATIONS = [
  'Bole',
  'CMC',
  'Kazanchis',
  'Ayat',
  'Old Airport',
  'Summit',
  'Sarbet',
  'Megenagna'
];
