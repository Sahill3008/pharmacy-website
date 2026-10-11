import React from 'react';
import { Phone, SlidersHorizontal, Menu, X } from 'lucide-react';

interface NavbarProps {
  storeName: string;
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  onOpenConfig: () => void;
  scrollToSection: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    targetId: string
  ) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  storeName,
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  onOpenConfig,
  scrollToSection
}) => {
  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300">
      <div className="max-w-fit mx-auto pointer-events-auto">
        {/* Compact Fitted Floating Glass Capsule */}
        <div className="rounded-full bg-white/85 backdrop-blur-xl border border-white/90 shadow-[0_8px_30px_rgba(16,59,43,0.08)] py-1.5 px-3 sm:px-4 flex items-center gap-3 sm:gap-5 transition-all duration-300 hover:bg-white/95 hover:shadow-[0_12px_36px_rgba(16,59,43,0.12)]">
          {/* Brand Logo & Name */}
          <a
            href="#top"
            onClick={(e) => scrollToSection(e, 'top')}
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E8B57] rounded-full py-0.5 pr-1 transition-opacity hover:opacity-90"
          >
            <img
              src="/logo.png"
              alt="VSB Pharmacy Logo"
              className="h-7 sm:h-8 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-extrabold text-xs sm:text-sm tracking-tight text-[#103B2B] leading-none">
                {storeName}
              </span>
              <span className="text-[10px] text-[#2E8B57] font-semibold tracking-wide mt-0.5">
                Kharadi
              </span>
            </div>
          </a>

          {/* Hairline Divider */}
          <div className="hidden md:block w-px h-5 bg-[#B7D8C0]/80" />

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1"
          >
            {[
              { id: 'about', label: 'About' },
              { id: 'categories', label: 'Categories' },
              { id: 'pharmacist', label: 'Our Pharmacist' },
              { id: 'delivery', label: 'Home Delivery' },
              { id: 'location', label: 'Location' }
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#103B2B] text-white shadow-xs'
                      : 'text-[#174D35]/85 hover:text-[#103B2B] hover:bg-[#EAF5EE]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Hairline Divider */}
          <div className="hidden sm:block w-px h-5 bg-[#B7D8C0]/80" />

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenConfig}
              title="Store Information"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#174D35] bg-[#EAF5EE]/90 hover:bg-[#B7D8C0]/40 border border-[#B7D8C0]/70 transition-all cursor-pointer"
            >
              <SlidersHorizontal className="w-3 h-3 text-[#2E8B57]" />
              <span>Store Info</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#2E8B57] hover:bg-[#174D35] text-white shadow-xs transition-all cursor-pointer"
            >
              <Phone className="w-3 h-3" />
              <span>Contact</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden p-1.5 rounded-full text-[#103B2B] hover:bg-[#EAF5EE] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Responsive Mobile Menu: Compact Floating Glass Card */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation-menu"
            aria-label="Mobile Navigation"
            className="mt-2.5 w-72 max-w-[calc(100vw-2rem)] mx-auto rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/90 shadow-[0_16px_40px_rgba(16,59,43,0.12)] p-3 space-y-1"
          >
            {[
              { id: 'about', label: 'About Us' },
              { id: 'categories', label: 'Categories' },
              { id: 'pharmacist', label: 'Our Pharmacist' },
              { id: 'delivery', label: 'Home Delivery' },
              { id: 'location', label: 'Location & Hours' },
              { id: 'contact', label: 'Contact Us' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="block px-3.5 py-2 rounded-2xl text-xs font-semibold text-[#103B2B] hover:bg-[#EAF5EE] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#EAF5EE] flex gap-2">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold bg-[#2E8B57] text-white hover:bg-[#174D35] transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>Call Store</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConfig();
                }}
                className="px-3 py-2 rounded-full text-xs font-semibold bg-[#EAF5EE] text-[#174D35] border border-[#B7D8C0]"
              >
                Store Info
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
