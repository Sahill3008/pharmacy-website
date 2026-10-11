import React from 'react';
import { Pill, PawPrint, Activity, Sparkles, HeartHandshake, ChevronRight } from 'lucide-react';
import type { CategoryItem } from '../../types/pharmacy';
import { RevealSection } from '../common/RevealSection';

interface CategoriesSectionProps {
  categories: CategoryItem[];
  onSelectCategory: (category: CategoryItem) => void;
  onInquireCategory: (categoryTitle: string) => void;
  scrollToSection: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    targetId: string
  ) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  categories,
  onSelectCategory,
  onInquireCategory,
  scrollToSection
}) => {
  return (
    <section
      id="categories"
      className="scroll-mt-20 py-16 sm:py-24 bg-[#EAF5EE] border-b border-[#B7D8C0]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <RevealSection className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2E8B57]">
              02 / Healthcare Categories
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#174D35] tracking-[-0.03em]">
              Curated around family, personal wellness, and{' '}
              <span className="font-serif italic font-normal text-[#2E8B57]">
                pet healthcare
              </span>
              .
            </h2>
          </div>
          <p className="text-sm text-[#174D35]/85 max-w-md">
            Serving the Kharadi community with authorized human prescriptions,
            veterinary medicines, everyday wellness devices, and respectful counter advice.
          </p>
        </RevealSection>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 1. Primary Feature Panel: Prescription Medicines (Spans 7 columns on desktop) */}
          {categories[0] && (
            <RevealSection className="lg:col-span-7">
              <article className="group relative h-full rounded-3xl overflow-hidden bg-white border border-[#B7D8C0] shadow-sm flex flex-col justify-between transition-all hover:border-[#2E8B57]">
                <div className="relative h-64 sm:h-80 overflow-hidden bg-[#174D35]">
                  <img
                    src={categories[0].imageUrl}
                    alt={categories[0].imageAlt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://placehold.co/900x600/174D35/EAF5EE?text=Prescription+Medicines';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#103B2B]/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-[#103B2B]">
                    {categories[0].accentTag}
                  </span>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#2E8B57]">
                        {categories[0].subtitle}
                      </span>
                      <Pill className="w-5 h-5 text-[#2E8B57]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#103B2B]">
                      {categories[0].title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#174D35]/90 leading-relaxed">
                      {categories[0].description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EAF5EE] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {categories[0].examples.slice(0, 3).map((ex) => (
                        <span
                          key={ex}
                          className="px-3 py-1 rounded-full text-xs bg-[#EAF5EE] text-[#174D35]"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => onSelectCategory(categories[0])}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2E8B57] hover:text-[#174D35] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8B57] rounded-lg px-2 py-1 cursor-pointer"
                    >
                      <span>View Medicine Guide</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            </RevealSection>
          )}

          {/* 2. Standout Panel: Veterinary Medicines (Spans 5 columns on desktop) */}
          {categories[1] && (
            <RevealSection delayMs={100} className="lg:col-span-5">
              <article className="group relative h-full rounded-3xl overflow-hidden bg-[#174D35] text-[#EAF5EE] border border-[#174D35] shadow-sm flex flex-col justify-between">
                <div className="relative h-60 sm:h-64 overflow-hidden">
                  <img
                    src={categories[1].imageUrl}
                    alt={categories[1].imageAlt}
                    className="w-full h-full object-cover object-center opacity-90 transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://placehold.co/700x600/103B2B/EAF5EE?text=Veterinary+Medicines';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#174D35]/30 to-[#174D35]" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-[#EAF5EE]/90 text-[#103B2B]">
                    {categories[1].accentTag}
                  </span>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#B7D8C0]">
                        {categories[1].subtitle}
                      </span>
                      <PawPrint className="w-5 h-5 text-[#B7D8C0]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {categories[1].title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#EAF5EE]/85 leading-relaxed">
                      {categories[1].description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-[#B7D8C0]/25">
                    <p className="text-xs text-[#B7D8C0] leading-relaxed">
                      {categories[1].guidanceNote}
                    </p>
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => onSelectCategory(categories[1])}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-[#B7D8C0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7D8C0] rounded-lg py-1 cursor-pointer"
                      >
                        <span>Explore Pet Care</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <a
                        href="#delivery"
                        onClick={(e) => {
                          onInquireCategory('Veterinary Medicines');
                          scrollToSection(e, 'delivery');
                        }}
                        className="text-xs font-medium text-[#B7D8C0] underline underline-offset-4 hover:text-white"
                      >
                        Order for Pets
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </RevealSection>
          )}

          {/* 3. Panel: Wellness & Healthcare Products (Spans 4 columns on desktop) */}
          {categories[2] && (
            <RevealSection delayMs={60} className="lg:col-span-4">
              <article className="group h-full rounded-3xl bg-white border border-[#B7D8C0] p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-[#2E8B57] transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#EAF5EE] text-[#174D35]">
                      {categories[2].accentTag}
                    </span>
                    <Activity className="w-5 h-5 text-[#2E8B57]" />
                  </div>

                  <div className="rounded-2xl overflow-hidden h-40 bg-[#EAF5EE]">
                    <img
                      src={categories[2].imageUrl}
                      alt={categories[2].imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://placehold.co/600x400/EAF5EE/174D35?text=Wellness+Products';
                      }}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2E8B57]">
                      {categories[2].subtitle}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#103B2B]">
                      {categories[2].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#174D35]/90 leading-relaxed">
                      {categories[2].description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#EAF5EE] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(categories[2])}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#2E8B57] hover:text-[#174D35] cursor-pointer"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      onInquireCategory('Wellness & Healthcare Products');
                      scrollToSection(e, 'contact');
                    }}
                    className="text-xs text-[#174D35] underline underline-offset-4"
                  >
                    Inquire
                  </a>
                </div>
              </article>
            </RevealSection>
          )}

          {/* 4. Panel: Personal Care & Cosmetics (Spans 4 columns on desktop) */}
          {categories[3] && (
            <RevealSection delayMs={100} className="lg:col-span-4">
              <article className="group h-full rounded-3xl bg-white border border-[#B7D8C0] p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-[#2E8B57] transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#EAF5EE] text-[#174D35]">
                      {categories[3].accentTag}
                    </span>
                    <Sparkles className="w-5 h-5 text-[#2E8B57]" />
                  </div>

                  <div className="rounded-2xl overflow-hidden h-40 bg-[#EAF5EE]">
                    <img
                      src={categories[3].imageUrl}
                      alt={categories[3].imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://placehold.co/600x400/EAF5EE/174D35?text=Personal+Care';
                      }}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2E8B57]">
                      {categories[3].subtitle}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#103B2B]">
                      {categories[3].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#174D35]/90 leading-relaxed">
                      {categories[3].description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#EAF5EE] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(categories[3])}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#2E8B57] hover:text-[#174D35] cursor-pointer"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      onInquireCategory('Personal Care & Cosmetics');
                      scrollToSection(e, 'contact');
                    }}
                    className="text-xs text-[#174D35] underline underline-offset-4"
                  >
                    Inquire
                  </a>
                </div>
              </article>
            </RevealSection>
          )}

          {/* 5. Panel: Pharmacist Advice & Support (Spans 4 columns on desktop) */}
          {categories[4] && (
            <RevealSection delayMs={140} className="lg:col-span-4">
              <article className="group h-full rounded-3xl bg-white border border-[#B7D8C0] p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-[#2E8B57] transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#EAF5EE] text-[#174D35]">
                      {categories[4].accentTag}
                    </span>
                    <HeartHandshake className="w-5 h-5 text-[#2E8B57]" />
                  </div>

                  <div className="rounded-2xl overflow-hidden h-40 bg-[#EAF5EE]">
                    <img
                      src={categories[4].imageUrl}
                      alt={categories[4].imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://placehold.co/600x400/EAF5EE/174D35?text=Advice+Support';
                      }}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2E8B57]">
                      {categories[4].subtitle}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#103B2B]">
                      {categories[4].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#174D35]/90 leading-relaxed">
                      {categories[4].description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#EAF5EE] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(categories[4])}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#2E8B57] hover:text-[#174D35] cursor-pointer"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      onInquireCategory('Pharmacist Advice & Support');
                      scrollToSection(e, 'contact');
                    }}
                    className="text-xs text-[#174D35] underline underline-offset-4"
                  >
                    Ask Pharmacist
                  </a>
                </div>
              </article>
            </RevealSection>
          )}
        </div>
      </div>
    </section>
  );
};
