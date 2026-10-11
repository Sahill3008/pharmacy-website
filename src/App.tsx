import React, { useState, useEffect } from 'react';
import type { PharmacyConfig, CategoryItem, InquiryFulfillmentType } from './types/pharmacy';
import { INITIAL_PHARMACY_CONFIG, HEALTHCARE_CATEGORIES } from './data/initialPharmacyConfig';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { CategoriesSection } from './components/sections/CategoriesSection';
import { PharmacistSection } from './components/sections/PharmacistSection';
import { DeliverySection } from './components/sections/DeliverySection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { LocationSection } from './components/sections/LocationSection';
import { ContactSection } from './components/sections/ContactSection';
import { CategoryModal } from './components/modals/CategoryModal';
import { ConfigDrawer } from './components/drawers/ConfigDrawer';

export default function App() {
  const [config, setConfig] = useState<PharmacyConfig>(INITIAL_PHARMACY_CONFIG);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('top');
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);
  const [configDrawerOpen, setConfigDrawerOpen] = useState(false);

  // Interactive Inquiry / Home Delivery Composer State
  const [inquiryCategory, setInquiryCategory] = useState<string>(
    'Prescription Medicines'
  );
  const [inquiryFulfillment, setInquiryFulfillment] = useState<InquiryFulfillmentType>(
    'Home Delivery Inquiry'
  );
  const [inquiryNote, setInquiryNote] = useState<string>('');
  const [copiedMessage, setCopiedMessage] = useState(false);

  // Track active section while scrolling for subtle navbar indicator
  useEffect(() => {
    const sectionIds = [
      'about',
      'categories',
      'pharmacist',
      'delivery',
      'reviews',
      'location',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      if (window.scrollY < 200) {
        setActiveSection('top');
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll with fixed navbar offset
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const navbarOffset = 88;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Build structured message for WhatsApp or clipboard
  const composedInquiryText = `Hello, I am reaching out from your website regarding ${inquiryFulfillment} (${inquiryCategory}).${
    inquiryNote.trim() ? `\n\nDetails: ${inquiryNote.trim()}` : ''
  }\n\nPlease let me know availability and next steps.`;

  const copyInquiryToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = composedInquiryText;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    } catch {
      // Fallback ignored if restricted
    }
    document.body.removeChild(textArea);
  };

  const hasConfiguredWhatsApp = Boolean(config.whatsappNumber.trim());
  const hasConfiguredPhone = Boolean(config.phoneDial.trim());

  const whatsappHref = hasConfiguredWhatsApp
    ? `https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        composedInquiryText
      )}`
    : '#contact';

  const phoneHref = hasConfiguredPhone ? `tel:${config.phoneDial}` : '#contact';

  const handleInquireCategoryFromGuide = (categoryTitle: string) => {
    setInquiryCategory(categoryTitle);
    const element = document.getElementById('delivery');
    if (element) {
      const navbarOffset = 88;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-[#EAF5EE] text-[#103B2B] selection:bg-[#B7D8C0] selection:text-[#103B2B] font-sans antialiased"
    >
      <Navbar
        storeName={config.storeName}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onOpenConfig={() => setConfigDrawerOpen(true)}
        scrollToSection={scrollToSection}
      />

      <main>
        <HeroSection
          experienceYears={config.pharmacist.experienceYears}
          scrollToSection={scrollToSection}
        />

        <AboutSection storeName={config.storeName} />

        <CategoriesSection
          categories={HEALTHCARE_CATEGORIES}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onInquireCategory={(catTitle) => setInquiryCategory(catTitle)}
          scrollToSection={scrollToSection}
        />

        <PharmacistSection pharmacist={config.pharmacist} />

        <DeliverySection
          inquiryCategory={inquiryCategory}
          setInquiryCategory={setInquiryCategory}
          inquiryFulfillment={inquiryFulfillment}
          setInquiryFulfillment={setInquiryFulfillment}
          inquiryNote={inquiryNote}
          setInquiryNote={setInquiryNote}
          copiedMessage={copiedMessage}
          copyInquiryToClipboard={copyInquiryToClipboard}
          whatsappHref={whatsappHref}
          hasConfiguredWhatsApp={hasConfiguredWhatsApp}
          scrollToSection={scrollToSection}
        />

        <ReviewsSection
          reviews={config.verifiedReviews}
          googleReviewProfileUrl={config.googleReviewProfileUrl}
          onOpenConfig={() => setConfigDrawerOpen(true)}
        />

        <LocationSection
          config={config}
          onOpenConfig={() => setConfigDrawerOpen(true)}
          scrollToSection={scrollToSection}
        />

        <ContactSection
          phoneDisplay={config.phoneDisplay}
          hasConfiguredPhone={hasConfiguredPhone}
          phoneHref={phoneHref}
          whatsappNumber={config.whatsappNumber}
          hasConfiguredWhatsApp={hasConfiguredWhatsApp}
          whatsappHref={whatsappHref}
          onOpenConfig={() => setConfigDrawerOpen(true)}
        />
      </main>

      <Footer
        config={config}
        onOpenConfig={() => setConfigDrawerOpen(true)}
        scrollToSection={scrollToSection}
      />

      <CategoryModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onInquire={handleInquireCategoryFromGuide}
      />

      <ConfigDrawer
        isOpen={configDrawerOpen}
        onClose={() => setConfigDrawerOpen(false)}
        config={config}
        setConfig={setConfig}
      />
    </div>
  );
}
