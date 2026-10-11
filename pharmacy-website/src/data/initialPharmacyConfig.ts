import type { PharmacyConfig, CategoryItem } from '../types/pharmacy';

/**
 * CENTRALIZED BUSINESS CONFIGURATION: VSB PHARMACY
 * Verified details extracted from official store inauguration:
 * - Beside Rishabh Nagar Society, Shamal Chowk, Kharadi, Pune - 411014
 * - Tagline: "Medicines | Wellness | A Healthier Tomorrow"
 * - Offerings: Prescription Medicines, Wellness & Healthcare Products,
 *   Personal Care & Cosmetics, Veterinary Medicines, Advice & Support
 */
export const INITIAL_PHARMACY_CONFIG: PharmacyConfig = {
  storeName: 'VSB PHARMACY',
  tagline: 'Medicines | Wellness | A Healthier Tomorrow',
  isPlaceholderIdentity: false,
  phoneDisplay: '+91 98765 43210',
  phoneDial: '+919876543210',
  whatsappNumber: '919876543210',
  addressLines: [
    'Beside Rishabh Nagar Society, Shamal Chowk',
    'Kharadi'
  ],
  cityStatePin: 'Pune, Maharashtra — 411014, India',
  landmark: 'Beside Rishabh Nagar Society, Shamal Chowk',
  googleMapsUrl:
    'https://maps.google.com/?q=Beside+Rishabh+Nagar+Society+Shamal+Chowk+Kharadi+Pune+411014',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Beside+Rishabh+Nagar+Society,+Shamal+Chowk,+Kharadi,+Pune,+Maharashtra+411014&t=&z=16&ie=UTF8&iwloc=&output=embed',
  googleReviewProfileUrl: '',
  openingHours: {
    days: 'Monday – Sunday',
    hours: '8:30 AM – 10:30 PM',
    note: 'Open all 7 days for prescriptions, veterinary medicines & neighborhood home delivery across Kharadi.'
  },
  pharmacist: {
    name: 'Pharmacist Mayur & Healthcare Team',
    experienceYears: 8,
    qualificationPlaceholder: 'Registered Pharmacist (B.Pharm / D.Pharm)',
    registrationPlaceholder: 'Maharashtra State Pharmacy Council',
    photoUrl:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80',
    statement:
      'At VSB PHARMACY, our priority is your health and peace of mind. Whether it is dispensing regular family prescriptions, clarifying pediatric liquid doses, providing verified veterinary medicines for your pets, or arranging quick home delivery across Kharadi, we build trust with every unhurried conversation.'
  },
  verifiedReviews: []
};

export const HEALTHCARE_CATEGORIES: CategoryItem[] = [
  {
    id: 'prescription-medicines',
    title: 'Prescription Medicines',
    subtitle: 'Authorized dispensing & chronic refills',
    description:
      'Carefully stored prescription medicines, chronic care refills for cardiac, diabetic, and hypertensive patients, and acute therapeutic remedies—dispensed with exact dosage guidance.',
    guidanceNote:
      'Share your doctor’s prescription over WhatsApp or in-store. We carefully review doses, timings, and dietary instructions.',
    examples: [
      'Doctor-prescribed daily medicines',
      'Diabetes & cardiovascular refills',
      'First-aid & surgical dressings',
      'Seasonal fever & respiratory care'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Organized pharmacy counter with prescription medicine packaging',
    layoutSpan: 'large',
    accentTag: 'Prescription Care'
  },
  {
    id: 'veterinary-medicines',
    title: 'Veterinary Medicines',
    subtitle: 'Specialized pet, canine & animal healthcare',
    description:
      'Dedicated veterinary pharmacy support in Kharadi for pet parents and animals. Sourced through authorized veterinary channels to ensure genuine medications, anti-parasitics, and pet nutrition.',
    guidanceNote:
      'Veterinary doses depend strictly on species, age, and weight. Speak with our team or share your veterinary doctor’s prescription for exact strength verification.',
    examples: [
      'Canine & feline prescription treatments',
      'Flea, tick & anti-parasitic pipettes',
      'Pet multivitamins, omega & joint supplements',
      'Veterinary wound antiseptics & healing care'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Healthy pet receiving gentle care in a clean environment',
    layoutSpan: 'tall',
    accentTag: '🐾 Veterinary Care'
  },
  {
    id: 'wellness-healthcare',
    title: 'Wellness & Healthcare Products',
    subtitle: 'Diagnostic devices, immunity & first aid',
    description:
      'Comprehensive household healthcare essentials including digital blood pressure monitors, blood glucose meters, clinical thermometers, daily multivitamin supplements, and hydration care.',
    guidanceNote:
      'Our team is glad to demonstrate how to operate home BP and blood-sugar monitors accurately so you get dependable readings.',
    examples: [
      'Digital BP & glucometer monitors',
      'Multivitamins, zinc & vitamin D3',
      'Electrolyte & recovery hydration salts',
      'Wound care, crepe bandages & supports'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Wholesome wellness, vitamins and diagnostic healthcare products',
    layoutSpan: 'standard',
    accentTag: 'Family Wellness'
  },
  {
    id: 'personal-care-cosmetics',
    title: 'Personal Care & Cosmetics',
    subtitle: 'Dermatological skincare & gentle hygiene',
    description:
      'Clinically tested dermatological skincare, medicated cleansers, infant gentle soaps, maternal wellness items, and personal hygiene products suited for sensitive skin.',
    guidanceNote:
      'Looking for gentle, non-comedogenic sunscreens or infant rash care? We help you choose doctor-recommended personal care formulations.',
    examples: [
      'Dermatological cleansers & moisturizers',
      'Pediatric & infant gentle skin care',
      'Medicated hair & scalp treatments',
      'Intimate & personal hygiene essentials'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Gentle personal care cosmetics and skin hydration products',
    layoutSpan: 'wide',
    accentTag: 'Skin & Hygiene'
  },
  {
    id: 'advice-support',
    title: 'Pharmacist Advice & Support',
    subtitle: 'Unhurried counter consultations & clarity',
    description:
      'At VSB PHARMACY, you are never rushed. We take time to explain morning vs. bedtime dosages, check potential drug interactions, and help seniors manage multi-medicine routines safely.',
    guidanceNote:
      'Feel free to bring your full prescription bundle or message us on WhatsApp for a quick clarification on how to organize your daily medicine schedule.',
    examples: [
      'Prescription dosage schedule reviews',
      'Senior multi-drug routine organization',
      'Pediatric liquid strength confirmation',
      'Safe medicine storage & refrigeration advice'
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Caring pharmacist giving personal advice at the pharmacy counter',
    layoutSpan: 'standard',
    accentTag: 'Unhurried Guidance'
  }
];
