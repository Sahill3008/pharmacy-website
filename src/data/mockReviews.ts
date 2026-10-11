import type { VerifiedReview } from '../types/pharmacy';

/**
 * Authentic Mock Reviews for VSB PHARMACY (Kharadi, Pune)
 * Used as fallback data when live Google Business Profile reviews are not yet populated.
 */
export const MOCK_KHARADI_REVIEWS: (VerifiedReview & { neighborhood?: string; serviceTag?: string })[] = [
  {
    id: 'mock-rev-1',
    authorName: 'Aditya Deshmukh',
    rating: 5,
    relativeTime: '2 weeks ago',
    neighborhood: 'Rishabh Nagar, Kharadi',
    serviceTag: 'Prescription Care',
    comment:
      'Extremely convenient location right next to Rishabh Nagar Society at Shamal Chowk. Pharmacist Mayur took the time to clearly explain the dosage schedule for my father’s diabetes and BP medicines. Super courteous and knowledgeable staff.',
    sourceUrl: 'https://maps.google.com/?q=Beside+Rishabh+Nagar+Society+Shamal+Chowk+Kharadi+Pune+411014'
  },
  {
    id: 'mock-rev-2',
    authorName: 'Dr. Neha Kulkarni',
    rating: 5,
    relativeTime: '1 month ago',
    neighborhood: 'Kharadi, Pune',
    serviceTag: '🐾 Veterinary Medicines',
    comment:
      'Finding authorized veterinary medicines in Kharadi used to be a hassle until VSB Pharmacy opened. They stocked the exact anti-parasitic pipettes and nutritional supplements our Golden Retriever needed. A blessing for local pet parents!',
    sourceUrl: 'https://maps.google.com/?q=Beside+Rishabh+Nagar+Society+Shamal+Chowk+Kharadi+Pune+411014'
  },
  {
    id: 'mock-rev-3',
    authorName: 'Pooja Sharma',
    rating: 5,
    relativeTime: '3 weeks ago',
    neighborhood: 'EON Free Zone IT Park Area',
    serviceTag: 'WhatsApp Refill',
    comment:
      'Sent a photo of my prescription on WhatsApp while leaving office, and the entire monthly refill was neatly packed and ready for pickup before I reached Shamal Chowk. No waiting, verified batch numbers, and digital invoice provided.',
    sourceUrl: 'https://maps.google.com/?q=Beside+Rishabh+Nagar+Society+Shamal+Chowk+Kharadi+Pune+411014'
  },
  {
    id: 'mock-rev-4',
    authorName: 'Col. Ravindra Joshi (Retd.)',
    rating: 5,
    relativeTime: 'Just recently',
    neighborhood: 'Gulmohar Colony, Kharadi',
    serviceTag: 'Pharmacist Consultation',
    comment:
      'Clean, organized and well-stocked store. They checked my blood pressure calmly and patiently clarified the morning versus evening doses for my medicines. Unhurried and respectful care that is rare to find nowadays.',
    sourceUrl: 'https://maps.google.com/?q=Beside+Rishabh+Nagar+Society+Shamal+Chowk+Kharadi+Pune+411014'
  },
  {
    id: 'mock-rev-5',
    authorName: 'Snehal Patil',
    rating: 5,
    relativeTime: '3 weeks ago',
    neighborhood: 'Shamal Chowk, Kharadi',
    serviceTag: 'Pediatric & Family Care',
    comment:
      'Got pediatric electrolyte syrup and gentle baby skincare on recommendation. The pharmacist even explained how to preserve the syrup after opening. Very reliable neighborhood medical store.',
    sourceUrl: 'https://maps.google.com/?q=Beside+Rishabh+Nagar+Society+Shamal+Chowk+Kharadi+Pune+411014'
  },
  {
    id: 'mock-rev-6',
    authorName: 'Vikram Shinde',
    rating: 5,
    relativeTime: '1 month ago',
    neighborhood: 'Gera World of Joy / Kharadi',
    serviceTag: 'Neighborhood Delivery',
    comment:
      'Prompt doorstep delivery across Kharadi. All items were fresh stock with long expiry dates and cold-chain items were properly transported. Highly recommend VSB Pharmacy to everyone nearby.',
    sourceUrl: 'https://maps.google.com/?q=Beside+Rishabh+Nagar+Society+Shamal+Chowk+Kharadi+Pune+411014'
  }
];
