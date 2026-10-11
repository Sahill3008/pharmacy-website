import React from 'react';
import { RevealSection } from '../common/RevealSection';

interface AboutSectionProps {
  storeName: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ storeName }) => {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-16 sm:py-24 bg-white border-b border-[#B7D8C0]/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Section Label & Heading */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2E8B57]">
                01 / About Us
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#174D35] tracking-[-0.03em] leading-tight">
                A calm, dependable pharmacy built around{' '}
                <span className="font-serif italic font-normal text-[#2E8B57]">
                  conversations
                </span>
                —not rushed transactions.
              </h2>
              <p className="text-sm text-[#174D35]/75 pt-1">
                Operating at{' '}
                <span className="font-medium text-[#103B2B]">
                  {storeName}
                </span>
              </p>
            </div>

            {/* Narrative & Core Values */}
            <div className="lg:col-span-7 space-y-6 text-[#174D35] leading-relaxed">
              <p className="text-base sm:text-lg text-[#103B2B]">
                In many busy medical stores, picking up a prescription feels
                hurried. Packets are handed across a crowded counter with
                little time to ask what a medicine does, whether it should be
                taken before or after food, or how to store it safely at home.
              </p>
              <p className="text-base text-[#174D35]/90">
                We built our pharmacy to offer a calmer experience for
                individuals and families. Whether you are picking up regular
                blood-pressure tablets for a parent, checking the right
                supplement for your training routine, or looking for gentle
                pediatric care at short notice, our focus remains the same:
                authentic products, proper storage, and straightforward guidance
                you can rely on.
              </p>

              {/* 3 Editorial Pillars (Border-separated, avoiding repetitive boxy cards) */}
              <div className="pt-6 border-t border-[#B7D8C0] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#2E8B57]">
                    Authentic Sourcing
                  </span>
                  <h3 className="text-base font-semibold text-[#103B2B]">
                    Authorized Channels Only
                  </h3>
                  <p className="text-sm text-[#174D35]/85 leading-relaxed">
                    Every medicine, infant formula, and nutritional supplement is
                    procured through verified distributors with strict batch and
                    expiry tracking.
                  </p>
                </div>

                <div className="space-y-2 sm:border-l sm:border-[#B7D8C0]/60 sm:pl-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#2E8B57]">
                    Clear Explanations
                  </span>
                  <h3 className="text-base font-semibold text-[#103B2B]">
                    Unhurried Counter Support
                  </h3>
                  <p className="text-sm text-[#174D35]/85 leading-relaxed">
                    We take the time to clarify dosage schedules, storage
                    requirements, and prescription instructions so you leave
                    with confidence.
                  </p>
                </div>

                <div className="space-y-2 sm:border-l sm:border-[#B7D8C0]/60 sm:pl-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#2E8B57]">
                    Practical Access
                  </span>
                  <h3 className="text-base font-semibold text-[#103B2B]">
                    Consistent Family Care
                  </h3>
                  <p className="text-sm text-[#174D35]/85 leading-relaxed">
                    Instead of visiting separate stores for prescriptions, baby
                    care, and nutrition, you can check availability with a
                    single message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
