export interface VerifiedReview {
  id: string;
  authorName: string;
  relativeTime: string;
  rating: number;
  comment: string;
  sourceUrl?: string;
}

export interface OpeningHours {
  days: string;
  hours: string;
  note: string;
}

export interface PharmacistInfo {
  name: string;
  experienceYears: number;
  qualificationPlaceholder: string;
  registrationPlaceholder: string;
  photoUrl: string;
  statement: string;
}

export interface PharmacyConfig {
  storeName: string;
  tagline: string;
  isPlaceholderIdentity: boolean;
  phoneDisplay: string;
  phoneDial: string;
  whatsappNumber: string;
  addressLines: string[];
  cityStatePin: string;
  landmark: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl?: string;
  googleReviewProfileUrl: string;
  openingHours: OpeningHours;
  pharmacist: PharmacistInfo;
  verifiedReviews: VerifiedReview[];
}

export interface CategoryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  guidanceNote: string;
  examples: string[];
  imageUrl: string;
  imageAlt: string;
  layoutSpan: 'large' | 'tall' | 'wide' | 'standard';
  accentTag: string;
}

export type InquiryFulfillmentType =
  | 'Home Delivery Inquiry'
  | 'In-Store Pickup Check'
  | 'Pharmacist Guidance';
