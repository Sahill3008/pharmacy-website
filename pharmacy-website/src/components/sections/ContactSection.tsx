import React from 'react';
import { Phone, MessageCircle, SlidersHorizontal } from 'lucide-react';
import { RevealSection } from '../common/RevealSection';

interface ContactSectionProps {
  phoneDisplay: string;
  hasConfiguredPhone: boolean;
  phoneHref: string;
  whatsappNumber: string;
  hasConfiguredWhatsApp: boolean;
  whatsappHref: string;
  onOpenConfig: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  phoneDisplay,
  hasConfiguredPhone,
  phoneHref,
  whatsappNumber,
  hasConfiguredWhatsApp,
  whatsappHref,
  onOpenConfig
}) => {
  return (
    <section
      id="contact"
      className="scroll-mt-20 py-16 sm:py-24 bg-[#EAF5EE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="rounded-3xl bg-[#103B2B] text-[#EAF5EE] p-6 sm:p-10 lg:p-14 border border-[#174D35] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B7D8C0]">
                  07 / Contact Us
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                  Speak directly with the pharmacy.
                </h2>
                <p className="text-sm sm:text-base text-[#EAF5EE]/85 leading-relaxed max-w-xl">
                  Whether you want to check if a medicine is in stock, send a
                  photo of a prescription for home delivery, or ask a question
                  about dosage, reach out by phone or WhatsApp.
                </p>
              </div>

              {/* Direct Mobile-Friendly Action Cards */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Card */}
                <div className="p-6 rounded-2xl bg-[#174D35] border border-[#B7D8C0]/25 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-[#2E8B57] text-white flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#B7D8C0] font-medium">
                        Direct Store Phone
                      </span>
                      <p className="text-base sm:text-lg font-semibold text-white mt-1 break-words">
                        {phoneDisplay}
                      </p>
                    </div>
                    <p className="text-xs text-[#EAF5EE]/75 leading-relaxed">
                      Best for immediate stock checks and speaking directly with
                      the pharmacist during store hours.
                    </p>
                  </div>

                  {hasConfiguredPhone ? (
                    <a
                      href={phoneHref}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-[#103B2B] font-semibold text-sm hover:bg-[#EAF5EE] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#2E8B57]" />
                      <span>Call Pharmacy Now</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={onOpenConfig}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 transition-colors cursor-pointer"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span>Set Verified Phone Number</span>
                    </button>
                  )}
                </div>

                {/* WhatsApp Card */}
                <div className="p-6 rounded-2xl bg-[#174D35] border border-[#B7D8C0]/25 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-[#2E8B57] text-white flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#B7D8C0] font-medium">
                            WhatsApp Prescriptions
                      </span>
                      <p className="text-base sm:text-lg font-semibold text-white mt-1 break-words">
                        {hasConfiguredWhatsApp
                          ? `+${whatsappNumber}`
                          : '[WhatsApp Number Pending]'}
                      </p>
                    </div>
                    <p className="text-xs text-[#EAF5EE]/75 leading-relaxed">
                      Share a clear photo of your prescription or product list
                      for home delivery or quick counter pickup.
                    </p>
                  </div>

                  {hasConfiguredWhatsApp ? (
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#2E8B57] text-white font-semibold text-sm hover:bg-[#257347] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={onOpenConfig}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 transition-colors cursor-pointer"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span>Set Verified WhatsApp</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
