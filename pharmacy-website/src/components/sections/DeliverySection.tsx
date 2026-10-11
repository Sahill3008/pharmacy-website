import React from 'react';
import { Truck, MessageCircle, Copy, Check } from 'lucide-react';
import type { InquiryFulfillmentType } from '../../types/pharmacy';
import { RevealSection } from '../common/RevealSection';

interface DeliverySectionProps {
  inquiryCategory: string;
  setInquiryCategory: (cat: string) => void;
  inquiryFulfillment: InquiryFulfillmentType;
  setInquiryFulfillment: (fulfillment: InquiryFulfillmentType) => void;
  inquiryNote: string;
  setInquiryNote: (note: string) => void;
  copiedMessage: boolean;
  copyInquiryToClipboard: () => void;
  whatsappHref: string;
  hasConfiguredWhatsApp: boolean;
  scrollToSection: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    targetId: string
  ) => void;
}

export const DeliverySection: React.FC<DeliverySectionProps> = ({
  inquiryCategory,
  setInquiryCategory,
  inquiryFulfillment,
  setInquiryFulfillment,
  inquiryNote,
  setInquiryNote,
  copiedMessage,
  copyInquiryToClipboard,
  whatsappHref,
  hasConfiguredWhatsApp,
  scrollToSection
}) => {
  return (
    <section
      id="delivery"
      className="scroll-mt-20 py-16 sm:py-24 bg-white border-b border-[#B7D8C0]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2E8B57]">
                  04 / Home Delivery
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#174D35] tracking-[-0.03em]">
                  Simple neighborhood delivery when{' '}
                  <span className="font-serif italic font-normal text-[#2E8B57]">
                    stepping out
                  </span>{' '}
                  isn&apos;t convenient.
                </h2>
              </div>

              <p className="text-base text-[#174D35]/90 leading-relaxed">
                Whether you are caring for an unwell child at home, managing
                monthly refills for senior family members, or simply unable to
                visit the store in person, you can reach us directly by phone or
                WhatsApp to arrange home delivery.
              </p>

              {/* Practical 3-Step Process */}
              <ol className="space-y-4 pt-2">
                {[
                  {
                    step: '01',
                    title: 'Share Your Prescription or List',
                    description:
                      'Send a clear photo of your doctor’s prescription or list of wellness items via WhatsApp, or call the store directly.'
                  },
                  {
                    step: '02',
                    title: 'Pharmacist Verification & Confirmation',
                    description:
                      'We check item availability, verify prescription requirements, and confirm the total amount and delivery window with you.'
                  },
                  {
                    step: '03',
                    title: 'Carefully Packed Doorstep Drop',
                    description:
                      'Your medicines and essentials are packed cleanly and delivered to your address.'
                  }
                ].map((item) => (
                  <li
                    key={item.step}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#EAF5EE]/70 border border-[#B7D8C0]/70"
                  >
                    <span className="w-8 h-8 rounded-xl bg-[#174D35] text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-[#103B2B]">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#174D35]/85 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="text-xs text-[#174D35]/75 bg-[#EAF5EE] px-4 py-3 rounded-xl border border-[#B7D8C0]/60">
                <strong className="font-semibold text-[#103B2B]">
                  Note on Delivery Coverage &amp; Timings:
                </strong>{' '}
                Delivery availability, neighborhood coverage radius, and
                dispatch timings are confirmed directly when you contact the
                store. Prescription medicines require a valid doctor&apos;s
                prescription.
              </p>
            </div>

            {/* Right Column: Interactive WhatsApp / Phone Inquiry Preparation Panel */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-[#EAF5EE] border border-[#B7D8C0] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#2E8B57]">
                      Quick Order &amp; Inquiry Helper
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#103B2B] mt-1">
                      Prepare a message for the pharmacy
                    </h3>
                    <p className="text-xs sm:text-sm text-[#174D35]/80 mt-1">
                      Format your request in seconds to send via WhatsApp or
                      discuss over a quick phone call.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-white text-[#2E8B57] border border-[#B7D8C0]">
                    <Truck className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="inquiry-type"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#174D35] mb-2"
                    >
                      How can we help?
                    </label>
                    <div
                      id="inquiry-type"
                      className="grid grid-cols-1 sm:grid-cols-3 gap-2"
                    >
                      {(
                        [
                          'Home Delivery Inquiry',
                          'In-Store Pickup Check',
                          'Pharmacist Guidance'
                        ] as const
                      ).map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setInquiryFulfillment(mode)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-medium border text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8B57] cursor-pointer ${
                            inquiryFulfillment === mode
                              ? 'bg-[#174D35] text-white border-[#174D35]'
                              : 'bg-white text-[#103B2B] border-[#B7D8C0] hover:bg-white/80'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-category-select"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#174D35] mb-2"
                    >
                      Primary Category
                    </label>
                    <select
                      id="inquiry-category-select"
                      value={inquiryCategory}
                      onChange={(e) => setInquiryCategory(e.target.value)}
                      className="w-full rounded-xl bg-white border border-[#B7D8C0] px-3.5 py-2.5 text-sm text-[#103B2B] focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                    >
                      <option value="Prescription Medicines">
                        Prescription Medicines
                      </option>
                      <option value="Veterinary Medicines">
                        Veterinary Medicines (Pets &amp; Animals)
                      </option>
                      <option value="Wellness & Healthcare Products">
                        Wellness &amp; Healthcare Products
                      </option>
                      <option value="Personal Care & Cosmetics">
                        Personal Care &amp; Cosmetics
                      </option>
                      <option value="Pharmacist Advice & Support">
                        Pharmacist Advice &amp; Support
                      </option>
                      <option value="General Prescription Refill">
                        General Prescription Refill
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-notes"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#174D35] mb-2"
                    >
                      Optional Notes (e.g. Medicine names or locality)
                    </label>
                    <textarea
                      id="inquiry-notes"
                      rows={3}
                      value={inquiryNote}
                      onChange={(e) => setInquiryNote(e.target.value)}
                      placeholder="Example: Need to check availability for regular monthly prescription and share photo on WhatsApp..."
                      className="w-full rounded-xl bg-white border border-[#B7D8C0] p-3 text-sm text-[#103B2B] placeholder:text-[#174D35]/50 focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                    />
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappHref}
                    target={hasConfiguredWhatsApp ? '_blank' : undefined}
                    rel={
                      hasConfiguredWhatsApp ? 'noopener noreferrer' : undefined
                    }
                    onClick={(e) => {
                      if (!hasConfiguredWhatsApp) {
                        scrollToSection(e, 'contact');
                      }
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#2E8B57] hover:bg-[#174D35] text-white text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8B57]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>
                      {hasConfiguredWhatsApp
                        ? 'Send via WhatsApp'
                        : 'View WhatsApp Contact'}
                    </span>
                  </a>

                  <button
                    type="button"
                    onClick={copyInquiryToClipboard}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white hover:bg-[#B7D8C0]/30 text-[#103B2B] border border-[#B7D8C0] text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8B57] cursor-pointer"
                  >
                    {copiedMessage ? (
                      <>
                        <Check className="w-4 h-4 text-[#2E8B57]" />
                        <span>Copied Text</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#174D35]" />
                        <span>Copy Message</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
