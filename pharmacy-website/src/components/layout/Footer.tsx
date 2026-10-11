import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import type { PharmacyConfig } from '../../types/pharmacy';

interface FooterProps {
  config: PharmacyConfig;
  onOpenConfig: () => void;
  scrollToSection: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    targetId: string
  ) => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onOpenConfig,
  scrollToSection
}) => {
  return (
    <footer className="bg-[#103B2B] text-[#EAF5EE] border-t border-[#174D35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#174D35]">
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="p-2 rounded-2xl bg-white shadow-sm border border-[#B7D8C0]/30 inline-flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt={`${config.storeName} Logo`}
                  className="h-9 sm:h-11 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white tracking-tight leading-none">
                  {config.storeName}
                </span>
                <span className="text-xs text-[#B7D8C0] mt-1 font-medium">
                  Kharadi, Pune
                </span>
              </div>
            </div>
            <p className="text-sm text-[#B7D8C0] font-medium">
              &ldquo;{config.tagline}&rdquo;
            </p>
            <p className="text-xs text-[#EAF5EE]/70 max-w-sm leading-relaxed">
              Serving Kharadi households with prescription medicines, dedicated veterinary pet care,
              wellness products, and unhurried counter guidance.
            </p>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#B7D8C0]">
              Sections
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'about', label: 'About Us' },
                { id: 'categories', label: 'Healthcare Categories' },
                { id: 'pharmacist', label: 'Our Pharmacist' },
                { id: 'delivery', label: 'Home Delivery' },
                { id: 'reviews', label: 'Customer Reviews' },
                { id: 'location', label: 'Location & Hours' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="text-[#EAF5EE]/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Details Summary */}
          <div className="md:col-span-4 space-y-3 text-sm">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#B7D8C0]">
              Store Information
            </h3>
            <p className="text-[#EAF5EE]/85">
              {config.addressLines.join(', ')}, {config.cityStatePin}
            </p>
            <p className="text-[#EAF5EE]/85">
              <span className="text-[#B7D8C0]">Hours:</span>{' '}
              {config.openingHours.days} ({config.openingHours.hours})
            </p>
            <p className="text-[#EAF5EE]/85">
              <span className="text-[#B7D8C0]">Phone:</span>{' '}
              {config.phoneDisplay}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenConfig}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#B7D8C0] hover:text-white underline underline-offset-4 cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Edit Store Placeholders &amp; Credentials</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#EAF5EE]/65">
          <p>
            &copy; {new Date().getFullYear()} {config.storeName}. All rights
            reserved.
          </p>
          <p className="max-w-xl">
            Information on this website is for general store orientation and does
            not replace professional medical consultation. Prescription medicines
            are dispensed strictly against a valid prescription from a registered
            medical practitioner.
          </p>
        </div>
      </div>
    </footer>
  );
};
