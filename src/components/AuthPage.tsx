import React, { useState } from 'react';
import { Header } from './Header';
import { ChurchServicesList } from './ChurchServicesList';
import { CenterIconDisplay } from './CenterIconDisplay';
import { AuthCard } from './AuthCard';
import { AuthFooter } from './AuthFooter';
import { ChurchModals } from './ChurchModals';
import { ServiceFeature, UserRole, Language } from '../types';
import { SERVICE_FEATURES } from '../data/churchContent';

interface AuthPageProps {
  language: Language;
  onToggleLanguage: () => void;
  onBackToLanding: () => void;
  initialRole?: UserRole;
  authenticatedUser: {
    name: string;
    email: string;
    role: UserRole;
  } | null;
  onSuccessAuth: (user: { name: string; email: string; role: UserRole }) => void;
  onSignOut: () => void;
  onGoToDashboard?: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({
  language,
  onToggleLanguage,
  onBackToLanding,
  initialRole = 'member',
  authenticatedUser,
  onSuccessAuth,
  onSignOut,
  onGoToDashboard,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modals state
  const [activeFeature, setActiveFeature] = useState<ServiceFeature | null>(null);
  const [activePillarId, setActivePillarId] = useState<string | null>(null);
  const [infoModalType, setInfoModalType] = useState<string | null>(null);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);

  return (
    <div className="min-h-screen w-full relative bg-[#fdfaf5] text-[#2b180d] overflow-x-hidden flex flex-col justify-between font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Sacred Canvas Layer using uploaded church portal background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Full-coverage authentic Ethiopian Church portal backdrop */}
        <img
          src="/assets/church_portal_background.jpg"
          alt="Ethiopian Orthodox Church Sacred Mural Backdrop"
          className="w-full h-full object-cover object-center opacity-65 contrast-[1.08] saturate-[1.12]"
        />

        {/* Delicate antique parchment luminous gradient over top and bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdf9f3]/70 via-[#fdf8f0]/20 to-[#fdf8f0]/80 pointer-events-none" />

        {/* Soft Golden Radiant Aura behind central holy icon */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full bg-radial from-[#fde6c4]/45 via-[#fae0b8]/20 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* Main Page Layout */}
      <div className="relative z-10 flex flex-col flex-1 w-full min-h-screen">
        {/* Top Header Component with Back to Site button */}
        <Header
          language={language}
          onToggleLanguage={onToggleLanguage}
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
          onOpenInfo={(type) => setInfoModalType(type)}
          onBackToLanding={onBackToLanding}
        />

        {/* Mobile Navigation Drawer Dropdown when toggled */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f5ecdf]/95 backdrop-blur-md border-b border-[#ddcbba] px-6 py-4 animate-in slide-in-from-top-2 duration-200 z-30 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#7e553e]">
                {language === 'am' ? 'የቤተክርስቲያን አገልግሎቶች' : 'Parish Quick Navigation'}
              </h3>
              <button
                type="button"
                onClick={onBackToLanding}
                className="text-xs font-semibold text-[#824726] underline"
              >
                {language === 'am' ? '← ወደ ዋና ገጽ' : '← Back to Website'}
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#442718]">
              {SERVICE_FEATURES.map((feature) => (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => {
                    setActiveFeature(feature);
                    setMobileMenuOpen(false);
                  }}
                  className="p-2 text-left rounded-lg bg-[#faede0] hover:bg-[#ebd8c5] border border-[#ddccba] truncate cursor-pointer"
                >
                  {language === 'am' ? feature.titleAm : feature.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 w-full px-4 sm:px-6 md:px-10 lg:px-12 py-4 sm:py-6 md:py-8 flex items-center">
          <div className="w-full max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-10 items-center">
            
            {/* Left Column: Welcome & Church Services */}
            <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center order-2 lg:order-1">
              <ChurchServicesList
                language={language}
                onSelectFeature={(feature) => setActiveFeature(feature)}
              />
            </div>

            {/* Center Column: Sacred Icon Art, Tagline & 4 Ministry Pillars */}
            <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2">
              <CenterIconDisplay
                language={language}
                onSelectPillar={(pillarId) => setActivePillarId(pillarId)}
              />
            </div>

            {/* Right Column: Floating Auth Card */}
            <div className="lg:col-span-4 xl:col-span-4 flex justify-center order-3">
              <AuthCard
                language={language}
                initialRole={initialRole}
                onSuccessAuth={onSuccessAuth}
                onForgotPassword={() => setForgotPasswordOpen(true)}
              />
            </div>

          </div>
        </main>

        {/* Bottom Auth Footer Component */}
        <AuthFooter
          language={language}
          onOpenInfo={(type) => setInfoModalType(type)}
        />
      </div>

      {/* Interactive Church Modals (Features, Pillars, Auth, Info, Reset) */}
      <ChurchModals
        language={language}
        activeFeature={activeFeature}
        onCloseFeature={() => setActiveFeature(null)}
        activePillarId={activePillarId}
        onClosePillar={() => setActivePillarId(null)}
        infoModalType={infoModalType}
        onCloseInfoModal={() => setInfoModalType(null)}
        forgotPasswordOpen={forgotPasswordOpen}
        onCloseForgotPassword={() => setForgotPasswordOpen(false)}
        authenticatedUser={authenticatedUser}
        onSignOut={onSignOut}
        onGoToDashboard={onGoToDashboard}
      />
    </div>
  );
};

export default AuthPage;
