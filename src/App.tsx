import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage.jsx';
import { AuthPage } from './components/AuthPage';
import MemberDashboard from './pages/MemberDashboard.jsx';
import { UserRole, Language } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'auth' | 'dashboard'>('landing');
  const [authRole, setAuthRole] = useState<UserRole>('member');
  const [language, setLanguage] = useState<Language>('en');
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
      if (hash === '#dashboard' || hash === '#portal') {
        setCurrentView('dashboard');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#signin' || hash === '#login' || hash === '#auth' || hash === '#admin') {
        setCurrentView('auth');
        if (hash === '#admin') {
          setAuthRole('admin');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#home' ||
        hash === '#features' ||
        hash === '#services' ||
        hash === '#giving' ||
        hash === '#media' ||
        hash === '#contact'
      ) {
        setCurrentView('landing');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenAuth = (role: UserRole = 'member') => {
    // If already authenticated, directly transition to member dashboard
    if (authenticatedUser) {
      setCurrentView('dashboard');
      window.location.hash = '#dashboard';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setAuthRole(role);
    setCurrentView('auth');
    window.location.hash = '#auth';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToDashboard = () => {
    setCurrentView('dashboard');
    window.location.hash = '#dashboard';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAuthSuccess = (user: { name: string; email: string; role: UserRole }) => {
    setAuthenticatedUser(user);
    try {
      localStorage.setItem('hnkmsm_auth_user', JSON.stringify(user));
    } catch {
      // ignore
    }
    // Transition directly to the member dashboard upon login success!
    setCurrentView('dashboard');
    window.location.hash = '#dashboard';
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

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'am' : 'en'));
  };

  if (currentView === 'dashboard') {
    return (
      <MemberDashboard
        user={authenticatedUser}
        onSignOut={handleSignOut}
        onBackToSite={handleBackToLanding}
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
    />
  );
}
