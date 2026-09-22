import React from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import FeaturesSection from './FeaturesSection.jsx';
import ServicesSection from './ServicesSection.jsx';
import GivingSection from './GivingSection.jsx';
import MediaLibrary from './MediaLibrary.jsx';
import ObjectivesSection from './ObjectivesSection.jsx';
import CtaBanner from './CtaBanner.jsx';
import Footer from './Footer.jsx';
import MobileNav from './MobileNav.jsx';

export default function LandingPage({
  onSignIn,
  user,
  onSignOut,
}) {
  return (
    <div className="landing-page">
      <a className="skip-link" href="#main-nav">
        Skip to navigation
      </a>

      <Navbar
        onSignIn={onSignIn}
        user={user}
        onSignOut={onSignOut}
      />

      <main id="main-content">
        <Hero onSignIn={onSignIn} />
        <FeaturesSection />
        <ServicesSection onSignIn={onSignIn} />
        <GivingSection />
        <MediaLibrary />
        <ObjectivesSection />
        <CtaBanner onSignIn={onSignIn} />
      </main>

      <Footer onSignIn={onSignIn} />
      <MobileNav />
    </div>
  );
}
