import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { RevealSection } from '../common/RevealSection';

interface HeroSectionProps {
  experienceYears: number;
  scrollToSection: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    targetId: string
  ) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  experienceYears,
  scrollToSection
}) => {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 lg:pb-28 border-b border-[#B7D8C0]/60">
      {/* Subtle architectural background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#B7D8C0_0%,_transparent_55%)] opacity-45"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Messaging */}
          <RevealSection className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Single Architectural Eyebrow */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#2E8B57] uppercase">
              <span className="w-6 h-[1.5px] bg-[#2E8B57]" />
              <span>{experienceYears}+ Years of Pharmacist-Led Care &bull; Kharadi</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-semibold text-[#103B2B] tracking-[-0.04em] leading-[1.1]">
              We don&apos;t just dispense medicines.{' '}
              <span className="font-serif italic font-normal tracking-normal text-[#174D35] block sm:inline">
                We build trust.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#174D35]/90 leading-relaxed max-w-2xl">
              Thoughtful, unhurried pharmacy care for your household in Kharadi—bringing
              together{' '}
              <strong className="font-medium text-[#103B2B]">
                prescription medicines
              </strong>
              ,{' '}
              <strong className="font-medium text-[#103B2B]">
                veterinary healthcare for pets
              </strong>
              ,{' '}
              <strong className="font-medium text-[#103B2B]">
                personal care &amp; cosmetics
              </strong>
              , and{' '}
              <strong className="font-medium text-[#103B2B]">
                diagnostic wellness products
              </strong>
              , backed by attentive pharmacist guidance and prompt doorstep delivery.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-1">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#2E8B57] hover:bg-[#174D35] text-white font-medium text-sm sm:text-base shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2E8B57]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect for Prescriptions &amp; Care</span>
              </a>

              <a
                href="#categories"
                onClick={(e) => scrollToSection(e, 'categories')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/85 hover:bg-white text-[#103B2B] border border-[#B7D8C0] font-medium text-sm sm:text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8B57]"
              >
                <span>Explore Healthcare &amp; Pet Categories</span>
                <ArrowUpRight className="w-4 h-4 text-[#2E8B57]" />
              </a>
            </div>

            {/* Architectural Trust Ledger with Hairline Dividers */}
            <div className="pt-6 border-t border-[#B7D8C0]/70 grid grid-cols-3 divide-x divide-[#B7D8C0]/80">
              <div className="pr-4 sm:pr-6">
                <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#103B2B] leading-none tracking-tight">
                  08<span className="text-[#2E8B57] text-lg sm:text-xl font-sans not-italic">+</span>
                  <span className="text-xs sm:text-sm font-sans not-italic text-[#174D35]/80 ml-1 font-medium">Yrs</span>
                </p>
                <p className="mt-1.5 text-[11px] sm:text-xs uppercase tracking-wider text-[#174D35] font-semibold">
                  Dispensing Experience
                </p>
                <p className="mt-0.5 text-[11px] text-[#174D35]/70 hidden sm:block">
                  Unhurried dosage clarity &amp; counseling
                </p>
              </div>

              <div className="px-4 sm:px-6">
                <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#103B2B] leading-none tracking-tight">
                  100<span className="text-[#2E8B57] text-lg sm:text-xl font-sans not-italic">%</span>
                </p>
                <p className="mt-1.5 text-[11px] sm:text-xs uppercase tracking-wider text-[#174D35] font-semibold">
                  Verified Sourcing
                </p>
                <p className="mt-0.5 text-[11px] text-[#174D35]/70 hidden sm:block">
                  Direct authorized channels &amp; cold-chain
                </p>
              </div>

              <div className="pl-4 sm:pl-6">
                <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#103B2B] leading-none tracking-tight">
                  Direct
                </p>
                <p className="mt-1.5 text-[11px] sm:text-xs uppercase tracking-wider text-[#174D35] font-semibold">
                  Kharadi Delivery
                </p>
                <p className="mt-0.5 text-[11px] text-[#174D35]/70 hidden sm:block">
                  Doorstep WhatsApp &amp; phone orders
                </p>
              </div>
            </div>
          </RevealSection>

          {/* Right Column: Composed Visual Panel with Selective Glassmorphism */}
          <RevealSection delayMs={120} className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-[#B7D8C0] bg-[#174D35] aspect-[4/5] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1100&q=80"
                  alt="Clean modern pharmacy shelf and clinical preparation"
                  className="w-full h-full object-cover object-center opacity-95 transition-transform duration-700 hover:scale-[1.02]"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src =
                      'https://placehold.co/800x1000/174D35/EAF5EE?text=VSB+PHARMACY';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#103B2B]/80 via-[#103B2B]/20 to-transparent" />

                {/* Selective Glassmorphism Overlay Panel */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 shadow-sm text-[#103B2B]">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#2E8B57]">
                        VSB PHARMACY — Kharadi
                      </span>
                      <p className="mt-1 text-sm sm:text-base font-semibold text-[#103B2B]">
                        Medicines, Wellness &amp; Veterinary Care Under One Roof.
                      </p>
                    </div>
                    <div className="p-1.5 rounded-xl bg-white border border-[#B7D8C0] shrink-0 shadow-xs flex items-center justify-center">
                      <img
                        src="/logo.png"
                        alt="VSB Pharmacy Logo"
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#B7D8C0]/60 flex flex-wrap gap-1.5">
                    {[
                      'Prescriptions',
                      '🐾 Veterinary Care',
                      'Wellness Products',
                      'Personal Care',
                      'Home Delivery'
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EAF5EE] text-[#174D35]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};
