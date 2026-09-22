import React, { useState } from 'react';
import {
  User,
  UserPlus,
  Users,
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  CheckCircle2,
  Phone,
  Shield,
} from 'lucide-react';
import { UserRole, AuthMode, Language } from '../types';

interface AuthCardProps {
  language: Language;
  initialRole?: UserRole;
  onSuccessAuth: (user: { name: string; email: string; role: UserRole }) => void;
  onForgotPassword: () => void;
}

export const AuthCard: React.FC<AuthCardProps> = ({
  language,
  initialRole = 'member',
  onSuccessAuth,
  onForgotPassword,
}) => {
  const [authMode, setAuthMode] = useState<AuthMode>('signin');
  const [role, setRole] = useState<UserRole>(initialRole);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  React.useEffect(() => {
    if (initialRole) {
      setRole(initialRole);
    }
  }, [initialRole]);

  // Form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  // Status & validation
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Helper to fill demo credentials
  const fillDemoCredentials = (targetRole: UserRole) => {
    setRole(targetRole);
    if (targetRole === 'admin') {
      setEmail('admin@hnkmsm-eotc.org');
      setPassword('ChurchAdmin2026!');
      setFullName('Kes (Priest) Gebre Maryam');
    } else {
      setEmail('member@example.com');
      setPassword('TewahedoFaith77');
      setFullName('Selamawit & Dawit Haile');
    }
    setErrorMsg(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!email || !password) {
      setErrorMsg(language === 'am' ? 'እባክዎ ኢሜይል እና የይለፍ ቃል ያስገቡ።' : 'Please enter your email and password.');
      return;
    }

    if (authMode === 'signup') {
      if (!fullName) {
        setErrorMsg(language === 'am' ? 'እባክዎ ሙሉ ስምዎን ያስገቡ።' : 'Please enter your full name.');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMsg(language === 'am' ? 'የይለፍ ቃሎቹ አይመሳሰሉም።' : 'Passwords do not match.');
        return;
      }
      if (password.length < 6) {
        setErrorMsg(language === 'am' ? 'የይለፍ ቃል ቢያንስ 6 ፊደላት መሆን አለበት።' : 'Password must be at least 6 characters.');
        return;
      }
    }

    setIsLoading(true);

    // Simulate authentic authentication process
    setTimeout(() => {
      setIsLoading(false);
      const userName = fullName || (role === 'admin' ? 'Church Administrator' : 'Church Member');
      setSuccessMsg(
        authMode === 'signin'
          ? (language === 'am' ? `እንኳን በደህና መጡ፣ ${userName}!` : `Welcome back, ${userName}!`)
          : (language === 'am' ? `መለያዎ በተሳካ ሁኔታ ተፈጥሯል፣ ${userName}!` : `Account created successfully, ${userName}!`)
      );

      setTimeout(() => {
        onSuccessAuth({
          name: userName,
          email,
          role,
        });
      }, 700);
    }, 600);
  };

  return (
    <div className="w-full max-w-[440px] mx-auto bg-white/95 backdrop-blur-xs rounded-3xl p-5 sm:p-7 shadow-xl border border-[#ebd7c2] transition-all">
      {/* Top Pill Tabs: Sign In / Create Account */}
      <div className="grid grid-cols-2 p-1 bg-[#f4ebd9] rounded-2xl mb-5">
        <button
          id="tab-signin"
          type="button"
          onClick={() => {
            setAuthMode('signin');
            setErrorMsg(null);
          }}
          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            authMode === 'signin'
              ? 'bg-[#6b381e] text-white shadow-md'
              : 'text-[#623c26] hover:text-[#2b170e]'
          }`}
        >
          <User className="w-4 h-4" />
          <span>{language === 'am' ? 'ይግቡ (Sign In)' : 'Sign In'}</span>
        </button>
        <button
          id="tab-signup"
          type="button"
          onClick={() => {
            setAuthMode('signup');
            setErrorMsg(null);
          }}
          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            authMode === 'signup'
              ? 'bg-[#6b381e] text-white shadow-md'
              : 'text-[#623c26] hover:text-[#2b170e]'
          }`}
        >
          <UserPlus className="w-4 h-4" />
          <span>{language === 'am' ? 'መለያ ይፍጠሩ' : 'Create Account'}</span>
        </button>
      </div>

      {/* Continue As Role Selection */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-[#79543e]">
            {language === 'am' ? 'ይቀጥሉ እንደ' : 'Continue as'}
          </label>

          {/* Quick Demo Pre-fill Shortcut */}
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="text-[#a4816c] hidden sm:inline">Demo:</span>
            <button
              id="demo-member-btn"
              type="button"
              onClick={() => fillDemoCredentials('member')}
              className="text-[#884725] hover:underline font-medium cursor-pointer"
            >
              Member
            </button>
            <span className="text-[#c7a996]">|</span>
            <button
              id="demo-admin-btn"
              type="button"
              onClick={() => fillDemoCredentials('admin')}
              className="text-[#884725] hover:underline font-medium cursor-pointer"
            >
              Admin
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {/* Member Card */}
          <button
            id="role-select-member"
            type="button"
            onClick={() => setRole('member')}
            className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
              role === 'member'
                ? 'border-[#8f4f2c] bg-[#faf2e9] ring-2 ring-[#8f4f2c]/15 shadow-xs'
                : 'border-[#e8d8c6] bg-[#fcf9f5] hover:bg-[#f6eee4] opacity-80'
            }`}
          >
            <div className={`p-2 rounded-lg mt-0.5 shrink-0 ${role === 'member' ? 'bg-[#ebd7c2] text-[#63351b]' : 'bg-[#eee4d6] text-[#866551]'}`}>
              <Users className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-xs sm:text-[13px] font-bold text-[#2b170e]">
                  {language === 'am' ? 'አባል' : 'Member'}
                </span>
                {role === 'member' && <span className="w-1.5 h-1.5 rounded-full bg-[#8f4f2c]" />}
              </div>
              <p className="text-[10px] text-[#785946] leading-tight truncate">
                {language === 'am' ? 'የቤተክርስቲያን አባል' : 'Church member, family'}
              </p>
            </div>
          </button>

          {/* Admin Card */}
          <button
            id="role-select-admin"
            type="button"
            onClick={() => setRole('admin')}
            className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
              role === 'admin'
                ? 'border-[#8f4f2c] bg-[#faf2e9] ring-2 ring-[#8f4f2c]/15 shadow-xs'
                : 'border-[#e8d8c6] bg-[#fcf9f5] hover:bg-[#f6eee4] opacity-80'
            }`}
          >
            <div className={`p-2 rounded-lg mt-0.5 shrink-0 ${role === 'admin' ? 'bg-[#ebd7c2] text-[#63351b]' : 'bg-[#eee4d6] text-[#866551]'}`}>
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-xs sm:text-[13px] font-bold text-[#2b170e]">
                  {language === 'am' ? 'አስተዳዳሪ' : 'Admin'}
                </span>
                {role === 'admin' && <span className="w-1.5 h-1.5 rounded-full bg-[#8f4f2c]" />}
              </div>
              <p className="text-[10px] text-[#785946] leading-tight truncate">
                {language === 'am' ? 'የሰበካ ጉባኤ፣ ካህናት' : 'Church staff, clergy'}
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Role Context Hint */}
      {role === 'admin' && (
        <div className="mb-4 p-2.5 rounded-xl bg-[#fdf5eb] border border-[#f0dac0] text-[11px] text-[#73472c] flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#9c5a35] shrink-0" />
          <span>
            {language === 'am'
              ? 'የአስተዳዳሪ መግቢያ ለካህናት እና ለሰበካ ጉባኤ አባላት የተፈቀደ ነው።'
              : 'Clergy & administration privileges apply. Multi-factor verification enforced.'}
          </span>
        </div>
      )}

      {/* Error & Success Messages */}
      {errorMsg && (
        <div className="mb-4 p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
          {errorMsg}
        </div>
      )}
      {successMsg && (
        <div className="mb-4 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Authentication Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Full Name (Sign Up only) */}
        {authMode === 'signup' && (
          <div>
            <label className="block text-xs font-semibold text-[#442718] mb-1">
              {language === 'am' ? 'ሙሉ ስም (የክርስትና ስም ጨምሮ)' : 'Full Name & Baptismal Name'}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#97735e]">
                <User className="w-4 h-4" />
              </div>
              <input
                id="signup-fullname"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={language === 'am' ? 'ስም እና የአባት ስም' : 'e.g., Dawit & Selamawit'}
                className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#decbb7] bg-[#fbf8f4] text-[#29170e] placeholder-[#a68d7c] focus:outline-none focus:border-[#8e4f2b] focus:ring-2 focus:ring-[#8e4f2b]/15 transition-all"
                required={authMode === 'signup'}
              />
            </div>
          </div>
        )}

        {/* Email Address */}
        <div>
          <label className="block text-xs font-semibold text-[#442718] mb-1">
            {language === 'am' ? 'የኢሜይል አድራሻ' : 'Email Address'}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#97735e]">
              <Mail className="w-4 h-4" />
            </div>
            <input
              id="auth-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#decbb7] bg-[#fbf8f4] text-[#29170e] placeholder-[#a68d7c] focus:outline-none focus:border-[#8e4f2b] focus:ring-2 focus:ring-[#8e4f2b]/15 transition-all"
              required
            />
          </div>
        </div>

        {/* Phone Number (Sign up only) */}
        {authMode === 'signup' && (
          <div>
            <label className="block text-xs font-semibold text-[#442718] mb-1">
              {language === 'am' ? 'ስልክ ቁጥር (ከተፈለገ)' : 'Phone Number (Optional for Parish alerts)'}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#97735e]">
                <Phone className="w-4 h-4" />
              </div>
              <input
                id="signup-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(702) 000-0000"
                className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#decbb7] bg-[#fbf8f4] text-[#29170e] placeholder-[#a68d7c] focus:outline-none focus:border-[#8e4f2b] focus:ring-2 focus:ring-[#8e4f2b]/15 transition-all"
              />
            </div>
          </div>
        )}

        {/* Password */}
        <div>
          <label className="block text-xs font-semibold text-[#442718] mb-1">
            {language === 'am' ? 'የይለፍ ቃል' : 'Password'}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#97735e]">
              <Lock className="w-4 h-4" />
            </div>
            <input
              id="auth-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={language === 'am' ? 'የይለፍ ቃልዎን ያስገቡ' : 'Enter your password'}
              className="w-full pl-9 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-[#decbb7] bg-[#fbf8f4] text-[#29170e] placeholder-[#a68d7c] focus:outline-none focus:border-[#8e4f2b] focus:ring-2 focus:ring-[#8e4f2b]/15 transition-all"
              required
            />
            <button
              id="toggle-password-visibility"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#97735e] hover:text-[#422212] transition-colors cursor-pointer"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Confirm Password (Sign up only) */}
        {authMode === 'signup' && (
          <div>
            <label className="block text-xs font-semibold text-[#442718] mb-1">
              {language === 'am' ? 'የይለፍ ቃል ያረጋግጡ' : 'Confirm Password'}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#97735e]">
                <Lock className="w-4 h-4" />
              </div>
              <input
                id="signup-confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={language === 'am' ? 'የይለፍ ቃልዎን በድጋሚ ያስገቡ' : 'Re-enter your password'}
                className="w-full pl-9 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-[#decbb7] bg-[#fbf8f4] text-[#29170e] placeholder-[#a68d7c] focus:outline-none focus:border-[#8e4f2b] focus:ring-2 focus:ring-[#8e4f2b]/15 transition-all"
                required={authMode === 'signup'}
              />
              <button
                id="toggle-confirm-password-visibility"
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#97735e] hover:text-[#422212] transition-colors cursor-pointer"
                aria-label="Toggle confirm password visibility"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
        )}

        {/* Remember me & Forgot Password */}
        <div className="flex items-center justify-between text-xs pt-0.5">
          <label className="flex items-center gap-2 cursor-pointer select-none text-[#5f3f2e]">
            <input
              id="auth-remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-[#ceb9a5] text-[#8e4f2b] focus:ring-[#8e4f2b] accent-[#8e4f2b] cursor-pointer"
            />
            <span className="font-medium">
              {language === 'am' ? 'አስታውሰኝ' : 'Remember me'}
            </span>
          </label>

          {authMode === 'signin' && (
            <button
              id="forgot-password-link"
              type="button"
              onClick={onForgotPassword}
              className="font-medium text-[#884725] hover:text-[#5a2e16] hover:underline cursor-pointer"
            >
              {language === 'am' ? 'የይለፍ ቃል ረሱ?' : 'Forgot password?'}
            </button>
          )}
        </div>

        {/* Primary Action Button: Sign In / Create Account */}
        <button
          id="auth-submit-btn"
          type="submit"
          disabled={isLoading}
          className="w-full mt-2 py-3 px-4 rounded-xl bg-[#6f3b21] hover:bg-[#5b2f19] text-white font-semibold text-sm sm:text-[15px] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <LogIn className="w-4 h-4" />
              <span>
                {authMode === 'signin'
                  ? (language === 'am' ? 'ይግቡ' : 'Sign In')
                  : (language === 'am' ? 'መለያ ይፍጠሩ' : 'Create Account')}
              </span>
            </>
          )}
        </button>
      </form>

      {/* Or continue with Divider */}
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#e8d7c4]" />
        </div>
        <div className="relative flex justify-center text-[11px] uppercase tracking-wider">
          <span className="bg-white px-3 text-[#9b7b67] font-medium">
            {language === 'am' ? 'ወይም በነዚህ ይቀጥሉ' : 'Or continue with'}
          </span>
        </div>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Google Button */}
        <button
          id="social-login-google"
          type="button"
          onClick={() => {
            setEmail('google.member@example.com');
            setPassword('GoogleVerifiedAuth7');
            setFullName('Orthodox Parishioner');
            onSuccessAuth({
              name: 'Google Parishioner',
              email: 'google.member@example.com',
              role,
            });
          }}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#ddccba] bg-[#fdfaf7] hover:bg-[#f5ecdf] text-xs font-semibold text-[#3e2417] transition-all cursor-pointer shadow-2xs"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.13C3.26 21.43 7.34 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.24C.45 8.15 0 9.92 0 12s.45 3.85 1.24 5.42l4.04-3.13z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.57 1.24 6.58l4.04 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
            />
          </svg>
          <span className="truncate">{language === 'am' ? 'Google' : 'Google'}</span>
        </button>

        {/* Facebook Button */}
        <button
          id="social-login-facebook"
          type="button"
          onClick={() => {
            setEmail('facebook.member@example.com');
            setPassword('FbVerifiedAuth7');
            setFullName('Facebook Congregant');
            onSuccessAuth({
              name: 'Facebook Congregant',
              email: 'facebook.member@example.com',
              role,
            });
          }}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#ddccba] bg-[#fdfaf7] hover:bg-[#f5ecdf] text-xs font-semibold text-[#3e2417] transition-all cursor-pointer shadow-2xs"
        >
          <svg className="w-4 h-4 fill-[#1877F2] shrink-0" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <span className="truncate">{language === 'am' ? 'Facebook' : 'Facebook'}</span>
        </button>
      </div>

      {/* Role-Based Security Notice Box */}
      <div className="mt-5 p-3 rounded-2xl bg-[#f7efe3] border border-[#e5d4c1] flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#ebd8c4] flex items-center justify-center shrink-0 text-[#67381d]">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <h4 className="text-xs font-bold text-[#2a170d]">
            {language === 'am' ? 'ደህንነቱ የተጠበቀ ሚና-ተኮር መዳረሻ' : 'Secure. Role-Based Access.'}
          </h4>
          <p className="text-[11px] text-[#715442] leading-tight">
            {language === 'am'
              ? 'አንድ መለያ ለአባላት፣ ለሰበካ አስተዳዳሪዎች እና ለመንፈሳዊ መሪዎች።'
              : 'One account for members, administrators, and church leaders.'}
          </p>
        </div>
      </div>
    </div>
  );
};
