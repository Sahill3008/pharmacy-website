import React from 'react';
import { MapPin, Clock, ArrowUpRight, ExternalLink, Navigation } from 'lucide-react';
import type { PharmacyConfig } from '../../types/pharmacy';
import { RevealSection } from '../common/RevealSection';

interface LocationSectionProps {
  config: PharmacyConfig;
  onOpenConfig: () => void;
  scrollToSection: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    targetId: string
  ) => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  config,
  onOpenConfig,
  scrollToSection
}) => {
  // Construct reliable embed search query for Google Maps
  const mapSearchQuery = encodeURIComponent(
    `${config.storeName}, ${config.landmark || config.addressLines.join(', ')}, ${config.cityStatePin}`
  );

  const embedUrl =
    config.googleMapsEmbedUrl ||
    `https://maps.google.com/maps?q=${mapSearchQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section
      id="location"
      className="scroll-mt-20 py-16 sm:py-24 bg-white border-b border-[#B7D8C0]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Address & Opening Hours Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2E8B57]">
                  06 / Store Location &amp; Hours
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#174D35] tracking-tight">
                  Visit the pharmacy{' '}
                  <span className="font-serif italic font-normal text-[#2E8B57]">
                    in person
                  </span>
                  .
                </h2>
                <p className="text-sm sm:text-base text-[#174D35]/85">
                  Convenient street-level location at Shamal Chowk, Kharadi for
                  doctor prescriptions, veterinary pet medications, blood
                  pressure monitoring, and face-to-face pharmacist consultations.
                </p>
              </div>

              <div className="space-y-6">
                {/* Store Address Block */}
                <div className="p-6 rounded-2xl bg-[#EAF5EE]/70 border border-[#B7D8C0] space-y-3">
                  <div className="flex items-center gap-2.5 text-[#2E8B57]">
                    <MapPin className="w-5 h-5 shrink-0" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#103B2B]">
                      Store Address
                    </h3>
                  </div>
                  <address className="not-italic text-base text-[#103B2B] space-y-1 pl-7">
                    <p className="font-semibold text-lg text-[#103B2B]">
                      {config.storeName}
                    </p>
                    {config.addressLines.map((line, i) => (
                      <p key={i} className="text-[#174D35]">
                        {line}
                      </p>
                    ))}
                    <p className="text-[#174D35] font-medium">{config.cityStatePin}</p>
                    <p className="text-xs text-[#2E8B57] pt-1.5 font-semibold flex items-center gap-1.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2E8B57]" />
                      Landmark: {config.landmark}
                    </p>
                  </address>
                </div>

                {/* Opening Hours Block */}
                <div className="p-6 rounded-2xl bg-[#EAF5EE]/70 border border-[#B7D8C0] space-y-3">
                  <div className="flex items-center gap-2.5 text-[#2E8B57]">
                    <Clock className="w-5 h-5 shrink-0" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#103B2B]">
                      Opening Hours
                    </h3>
                  </div>
                  <div className="pl-7 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm sm:text-base">
                      <span className="font-medium text-[#174D35]">
                        {config.openingHours.days}
                      </span>
                      <span className="font-bold text-[#103B2B]">
                        {config.openingHours.hours}
                      </span>
                    </div>
                    <p className="text-xs text-[#174D35]/80">
                      {config.openingHours.note}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={config.googleMapsUrl}
                  target={
                    config.googleMapsUrl !== '#location' ? '_blank' : undefined
                  }
                  rel={
                    config.googleMapsUrl !== '#location'
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  onClick={(e) => {
                    if (config.googleMapsUrl === '#location') {
                      e.preventDefault();
                      onOpenConfig();
                    }
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#174D35] hover:bg-[#103B2B] text-white text-sm font-medium transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8B57]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>
                    {config.googleMapsUrl !== '#location'
                      ? 'Open Directions in Google Maps'
                      : 'Configure Google Maps Link'}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#EAF5EE] hover:bg-[#B7D8C0]/50 text-[#103B2B] text-sm font-medium transition-colors"
                >
                  <span>Quick WhatsApp Query</span>
                </a>
              </div>
            </div>

            {/* Right Column: Live Interactive Google Map with Landmark Badges */}
            <div className="lg:col-span-7">
              <div className="h-full min-h-[460px] sm:min-h-[540px] rounded-3xl bg-[#103B2B] text-[#EAF5EE] border border-[#B7D8C0] overflow-hidden relative shadow-lg flex flex-col justify-between">
                {/* Floating Top Status Capsule */}
                <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between gap-2 pointer-events-none">
                  <div className="pointer-events-auto px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#103B2B]/90 backdrop-blur-md border border-[#B7D8C0]/50 text-white shadow-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2E8B57] animate-pulse" />
                    <span className="font-semibold text-white">Interactive Google Map</span>
                    <span className="text-[#B7D8C0] hidden sm:inline">• Shamal Chowk, Kharadi</span>
                  </div>

                  <a
                    href={config.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto px-3.5 py-1.5 rounded-full text-xs font-medium bg-white hover:bg-slate-100 text-[#103B2B] shadow-md flex items-center gap-1.5 transition-colors"
                  >
                    <span>Full Map</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#2E8B57]" />
                  </a>
                </div>

                {/* Embedded Live Google Map */}
                <div className="relative w-full h-full min-h-[460px] sm:min-h-[540px] bg-[#EAF5EE]">
                  <iframe
                    title={`${config.storeName} Google Map Location`}
                    src={embedUrl}
                    className="w-full h-full min-h-[460px] sm:min-h-[540px] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                {/* Floating Bottom Store Identity Card */}
                <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
                  <div className="pointer-events-auto p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#B7D8C0] shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-xl bg-white border border-[#B7D8C0] p-1 flex items-center justify-center shrink-0 shadow-xs">
                        <img
                          src="/logo.png"
                          alt={config.storeName}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-[#103B2B]">
                            {config.storeName}
                          </h4>
                          <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md bg-[#EAF5EE] text-[#2E8B57]">
                            Kharadi Storefront
                          </span>
                        </div>
                        <p className="text-xs text-[#174D35]/85 line-clamp-1">
                          {config.landmark} • {config.cityStatePin}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={config.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#174D35] hover:bg-[#103B2B] text-white text-xs font-semibold shadow-xs transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>Get Directions</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
