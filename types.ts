
export enum PropertyStatus {
  FOR_RENT = 'For Rent',
  FOR_SALE = 'For Sale'
}

export enum PropertyType {
  APARTMENT = 'Apartment',
  VILLA = 'Villa',
  COMMERCIAL = 'Commercial',
  FAMILY_HOUSE = 'Family House'
}

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  currency: string;
  status: PropertyStatus;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqm
  description: string;
  imageUrl: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FilterState {
  status: 'All' | PropertyStatus;
  type: 'All' | PropertyType;
  minPrice: number;
  maxPrice: number;
  location: string;
  bedrooms: string;
}
