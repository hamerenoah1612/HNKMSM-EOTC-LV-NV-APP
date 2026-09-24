import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage.jsx';
import AuthPage from './components/AuthPage.tsx';
import SuperAdminDashboard from './pages/SuperAdminDashboard.jsx';
import MemberDashboard from './pages/MemberDashboard.jsx';
import AboutUsPage from './components/portal/AboutUsPage.jsx';
import ContactPage from './components/portal/ContactPage.jsx';
import { UserRole } from './types';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
  const { language, toggleLanguage } = useLanguage();
  const [currentView, setCurrentView] = useState<
    'landing' | 'auth' | 'admin-dashboard' | 'member-dashboard' | 'about-page' | 'contact-page'
  >('landing');
  const [authRole, setAuthRole] = useState<UserRole>('member');

  const [authenticatedUser, setAuthenticatedUser] = useState<{
    name: string;
    email: string;
    role: UserRole;
  } | null>(() => {
    try {
      const saved = localStorage.getItem('hnkmsm_auth_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Check URL hash on load or change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#admin-dashboard' || hash === '#admindashboard' || hash === '#superadmin') {
        setCurrentView('admin-dashboard');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#dashboard' || hash === '#member-dashboard' || hash === '#portal') {
        setCurrentView('member-dashboard');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#signin' || hash === '#login' || hash === '#auth' || hash === '#admin') {
        setCurrentView('auth');
        if (hash === '#admin') {
          setAuthRole('admin');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#about' || hash === '#about-us' || hash === '#history' || hash === '#vision') {
        setCurrentView('about-page');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact' || hash === '#contact-us' || hash === '#visit') {
        setCurrentView('contact-page');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#home' ||
        hash === '#features' ||
        hash === '#services' ||
        hash === '#events' ||
        hash === '#news' ||
        hash === '#multimedia' ||
        hash === '#learning' ||
        hash === '#shop' ||
        hash === '#giving'
      ) {
        setCurrentView('landing');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenAuth = (role: UserRole = 'member') => {
    // If already authenticated, directly transition to their corresponding dashboard
    if (authenticatedUser) {
      if (authenticatedUser.role === 'admin') {
        setCurrentView('admin-dashboard');
        window.location.hash = '#admin-dashboard';
      } else {
        setCurrentView('member-dashboard');
        window.location.hash = '#dashboard';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setAuthRole(role);
    setCurrentView('auth');
    window.location.hash = role === 'admin' ? '#admin' : '#auth';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateAbout = () => {
    setCurrentView('about-page');
    window.location.hash = '#about';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateContact = () => {
    setCurrentView('contact-page');
    window.location.hash = '#contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToDashboard = () => {
    if (authenticatedUser?.role === 'admin') {
      setCurrentView('admin-dashboard');
      window.location.hash = '#admin-dashboard';
    } else {
      setCurrentView('member-dashboard');
      window.location.hash = '#dashboard';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAuthSuccess = (user: { name: string; email: string; role: UserRole }) => {
    setAuthenticatedUser(user);
    try {
      localStorage.setItem('hnkmsm_auth_user', JSON.stringify(user));
    } catch {
      // ignore
    }
    if (user.role === 'admin') {
      setCurrentView('admin-dashboard');
      window.location.hash = '#admin-dashboard';
    } else {
      setCurrentView('member-dashboard');
      window.location.hash = '#dashboard';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignOut = () => {
    setAuthenticatedUser(null);
    try {
      localStorage.removeItem('hnkmsm_auth_user');
    } catch {
      // ignore
    }
    setCurrentView('landing');
    window.location.hash = '#home';
  };

  if (currentView === 'admin-dashboard') {
    return (
      <SuperAdminDashboard
        user={authenticatedUser}
        onSignOut={handleSignOut}
        onBackToSite={handleBackToLanding}
        language={language}
        onToggleLanguage={toggleLanguage}
      />
    );
  }

  if (currentView === 'member-dashboard') {
    return (
      <MemberDashboard
        user={authenticatedUser}
        onSignOut={handleSignOut}
        onBackToSite={handleBackToLanding}
        language={language}
        onToggleLanguage={toggleLanguage}
      />
    );
  }

  if (currentView === 'about-page') {
    return (
      <AboutUsPage
        onBackToSite={handleBackToLanding}
        onSignIn={handleOpenAuth}
        onNavigateContact={handleNavigateContact}
        language={language}
        onToggleLanguage={toggleLanguage}
      />
    );
  }

  if (currentView === 'contact-page') {
    return (
      <ContactPage
        onBackToSite={handleBackToLanding}
        onSignIn={handleOpenAuth}
        onNavigateAbout={handleNavigateAbout}
        language={language}
        onToggleLanguage={toggleLanguage}
      />
    );
  }

  if (currentView === 'auth') {
    return (
      <AuthPage
        language={language}
        onToggleLanguage={toggleLanguage}
        onBackToLanding={handleBackToLanding}
        initialRole={authRole}
        authenticatedUser={authenticatedUser}
        onSuccessAuth={handleAuthSuccess}
        onSignOut={handleSignOut}
        onGoToDashboard={handleGoToDashboard}
      />
    );
  }

  return (
    <LandingPage
      onSignIn={handleOpenAuth}
      user={authenticatedUser}
      onSignOut={handleSignOut}
      onOpenDashboard={handleGoToDashboard}
      onNavigateAbout={handleNavigateAbout}
      onNavigateContact={handleNavigateContact}
      language={language}
      onToggleLanguage={toggleLanguage}
    />
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
