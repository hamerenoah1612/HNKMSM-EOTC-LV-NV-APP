import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import GivingSection from './components/GivingSection.jsx';
import MediaLibrary from './components/MediaLibrary.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import Footer from './components/Footer.jsx';
import MobileNav from './components/MobileNav.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <FeaturesSection />
        <ServicesSection />
        <GivingSection />
        <MediaLibrary />
        <CtaBanner />
      </main>

      <Footer />
      <MobileNav />
    </>
  );
}
