import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { PharmacistInfo } from '../../types/pharmacy';
import { RevealSection } from '../common/RevealSection';

interface PharmacistSectionProps {
  pharmacist: PharmacistInfo;
}

export const PharmacistSection: React.FC<PharmacistSectionProps> = ({
  pharmacist
}) => {
  return (
    <section
      id="pharmacist"
      className="scroll-mt-20 py-16 sm:py-24 bg-[#174D35] text-[#EAF5EE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Portrait & Verified Experience Badge */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#B7D8C0]/30 bg-[#103B2B] aspect-[4/5]">
                <img
                  src={pharmacist.photoUrl}
                  alt="Experienced pharmacist at the counter"
                  className="w-full h-full object-cover object-center opacity-90"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://placehold.co/800x1000/103B2B/EAF5EE?text=Pharmacist+Portrait';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#103B2B] via-transparent to-transparent" />

                {/* Experience Callout */}
                <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-[#103B2B]/85 backdrop-blur-md border border-[#B7D8C0]/30">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#2E8B57] text-white flex items-center justify-center font-semibold text-xl shrink-0">
                      {pharmacist.experienceYears}Y
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {pharmacist.name}
                      </p>
                      <p className="text-xs text-[#B7D8C0] mt-0.5">
                        {pharmacist.qualificationPlaceholder}
                      </p>
                      <p className="text-[11px] text-[#EAF5EE]/70 mt-0.5">
                        {pharmacist.registrationPlaceholder}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Credibility & Value of Pharmacist Guidance */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B7D8C0]">
                  03 / Our Pharmacist
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-[-0.03em] leading-tight">
                  Eight years of practical dispensing experience—because{' '}
                  <span className="font-serif italic font-normal text-[#B7D8C0]">
                    how you take a medicine
                  </span>{' '}
                  matters as much as the prescription itself.
                </h2>
              </div>

              <blockquote className="p-6 rounded-2xl bg-[#103B2B]/70 border-l-4 border-[#2E8B57] text-[#EAF5EE]/95 text-base sm:text-lg lg:text-xl font-serif italic leading-relaxed">
                &ldquo;{pharmacist.statement}&rdquo;
              </blockquote>

              <div className="space-y-4 text-sm sm:text-base text-[#EAF5EE]/85 leading-relaxed">
                <p>
                  When a doctor writes a prescription, the visit at the clinic
                  is often brief. By the time you reach home, practical
                  questions arise: Can two tablets be taken together in the
                  morning? What happens if a child spits out a dose of syrup?
                  How should insulin or eye drops be stored during warmer months
                  in India?
                </p>
                <p>
                  Having a pharmacist with{' '}
                  <strong className="text-white font-medium">
                    {pharmacist.experienceYears} years of hands-on
                    experience
                  </strong>{' '}
                  means you have a knowledgeable professional right in your
                  neighborhood to help interpret prescription schedules, check
                  potential overlaps, and guide you toward safe, sensible self-care.
                </p>
              </div>

              {/* Key Pharmacist Responsibilities */}
              <div className="pt-4 border-t border-[#B7D8C0]/25 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Prescription Review & Clarity',
                    desc: 'Helping families understand morning, afternoon, and bedtime dosing clearly.'
                  },
                  {
                    title: 'Pediatric & Senior Dosing Care',
                    desc: 'Extra attention to concentration strengths for children and multi-drug routines for elders.'
                  },
                  {
                    title: 'Temperature & Storage Discipline',
                    desc: 'Maintaining reliable refrigeration and dry storage so potency is never compromised.'
                  },
                  {
                    title: 'Honest Supplement Advice',
                    desc: 'Helping you choose only what is relevant and verified, without pushy upselling.'
                  }
                ].map((point) => (
                  <div key={point.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B7D8C0] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {point.title}
                      </h3>
                      <p className="text-xs text-[#EAF5EE]/75 mt-1 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
