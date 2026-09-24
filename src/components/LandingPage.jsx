import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import CookieBanner from './portal/CookieBanner.jsx';
import FeaturesSection from './FeaturesSection.jsx';
import ServicesSectionNew from './portal/ServicesSectionNew.jsx';
import ServicesSection from './ServicesSection.jsx';
import EventsSection from './portal/EventsSection.jsx';
import NewsSection from './portal/NewsSection.jsx';
import MultimediaSection from './portal/MultimediaSection.jsx';
import MediaLearningSection from './portal/MediaLearningSection.jsx';
import ChurchSchoolSection from './portal/ChurchSchoolSection.jsx';
import ShopSection from './portal/ShopSection.jsx';
import DonationsSection from './portal/DonationsSection.jsx';
import ObjectivesSection from './ObjectivesSection.jsx';
import CtaBanner from './CtaBanner.jsx';
import Footer from './Footer.jsx';
import MobileNav from './MobileNav.jsx';
import LegalModal from './portal/LegalModal.jsx';

export default function LandingPage({
  onSignIn,
  user,
  onSignOut,
  onOpenDashboard,
  onNavigateAbout,
  onNavigateContact,
}) {
  const [legalModalType, setLegalModalType] = useState(null); // 'terms' | 'privacy' | 'cookie-info' | null

  return (
    <div className="landing-page">
      <a className="skip-link" href="#main-nav">
        Skip to navigation
      </a>

      {/* Small Clickable Cookie Banner Badge on bottom-left or right with icon & title */}
      <CookieBanner onOpenPolicy={() => setLegalModalType('cookie-info')} />

      <Navbar
        onSignIn={onSignIn}
        user={user}
        onSignOut={onSignOut}
        onOpenDashboard={onOpenDashboard}
        onNavigateAbout={onNavigateAbout}
        onNavigateContact={onNavigateContact}
      />

      <main id="main-content">
        {/* 1. Sanctuary Hero */}
        <Hero onSignIn={onSignIn} />

        {/* 2. Platform Capabilities (Features) */}
        <FeaturesSection />

        {/* 3. Parish Sacramental & Liturgical Services (Designed like Core Objectives) */}
        <ServicesSectionNew onSignIn={onSignIn} />

        {/* 4. Role Dashboards Preview */}
        <ServicesSection onSignIn={onSignIn} />

        {/* 5. Parish Events & Calendar (Designed like Core Objectives) */}
        <EventsSection onSignIn={onSignIn} />

        {/* 6. Parish News & Bulletins (Designed like Core Objectives) */}
        <NewsSection />

        {/* 7. Sacred Multimedia (Designed like Core Objectives) */}
        <MultimediaSection />

        {/* 8. Media & Learning (Designed like Core Objectives) */}
        <MediaLearningSection />

        {/* 9. Church School: Sunday School and Marriage School & Family Life Center */}
        <ChurchSchoolSection onSignIn={onSignIn} />

        {/* 10. Shop to Help the Church (Designed like Core Objectives) */}
        <ShopSection />

        {/* 10. Donations & Tithes (Designed like Core Objectives) */}
        <DonationsSection onSignIn={onSignIn} />

        {/* 11. Core Spiritual Objectives (11 Pillars) */}
        <ObjectivesSection />

        {/* 12. Together for a Stronger Tomorrow (General Membership CTA) */}
        <CtaBanner onSignIn={onSignIn} />
      </main>

      {/* Footer with Extended Mobile/Tablet Navigation & Legal Modals */}
      <Footer
        onSignIn={onSignIn}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onNavigateAbout={onNavigateAbout}
        onNavigateContact={onNavigateContact}
      />

      {/* Bottom Mobile/Tablet Sticky Navigation Bar with More (...) Dropup */}
      <MobileNav
        onNavigateAbout={onNavigateAbout}
        onNavigateContact={onNavigateContact}
      />

      {/* Legal Policy Modals */}
      <LegalModal
        modalType={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
