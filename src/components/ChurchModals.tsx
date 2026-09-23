import React, { useState } from 'react';
import {
  X,
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Lock,
  LogOut,
} from 'lucide-react';
import { ServiceFeature, UserRole, Language } from '../types';
import { CHURCH_CONTACT_INFO, CHURCH_FULL_TITLE, PILLARS } from '../data/churchContent';
import { EthiopianCross } from './EthiopianCross';

interface ChurchModalsProps {
  language: Language;
  activeFeature: ServiceFeature | null;
  onCloseFeature: () => void;
  activePillarId: string | null;
  onClosePillar: () => void;
  infoModalType: string | null;
  onCloseInfoModal: () => void;
  forgotPasswordOpen: boolean;
  onCloseForgotPassword: () => void;
  authenticatedUser: { name: string; email: string; role: UserRole } | null;
  onSignOut: () => void;
  onGoToDashboard?: () => void;
}

export const ChurchModals: React.FC<ChurchModalsProps> = ({
  language,
  activeFeature,
  onCloseFeature,
  activePillarId,
  onClosePillar,
  infoModalType,
  onCloseInfoModal,
  forgotPasswordOpen,
  onCloseForgotPassword,
  authenticatedUser,
  onSignOut,
  onGoToDashboard,
}) => {
  // Prayer request or quick contact submission state inside modals
  const [prayerName, setPrayerName] = useState('');
  const [prayerIntention, setPrayerIntention] = useState('');
  const [prayerSubmitted, setPrayerSubmitted] = useState(false);

  // Forgot password email state
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  // Donation amount state
  const [donationAmount, setDonationAmount] = useState('50');
  const [donationDone, setDonationDone] = useState(false);

  const selectedPillar = PILLARS.find((p) => p.id === activePillarId);

  return (
    <>
      {/* 1. Feature Details Modal */}
      {activeFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#fefbf6] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#e8d7c2] overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#e9dcce]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#f2e4d4] flex items-center justify-center text-[#67381d] shrink-0 border border-[#dfceba]">
                  <EthiopianCross size={32} className="text-[#844926]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#915938] bg-[#f7ede2] px-2.5 py-0.5 rounded-full border border-[#ebd7c3]">
                    {activeFeature.details.badge}
                  </span>
                  <h3 className="text-xl font-bold text-[#2b170e] font-['Cinzel',Georgia,serif] mt-1">
                    {language === 'am' ? activeFeature.titleAm : activeFeature.title}
                  </h3>
                </div>
              </div>
              <button
                id="close-feature-modal"
                type="button"
                onClick={onCloseFeature}
                className="p-1.5 rounded-full text-[#886956] hover:text-[#321a0f] hover:bg-[#eddccb] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="py-5 space-y-4 text-sm text-[#573b2a]">
              <p className="leading-relaxed">
                {language === 'am' ? activeFeature.descriptionAm : activeFeature.details.summary}
              </p>

              {/* Highlights */}
              <div className="bg-[#f7efe4] p-4 rounded-2xl border border-[#e8d7c4]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#794f36] mb-2.5">
                  {language === 'am' ? 'ቁልፍ መረጃዎች' : 'Program Highlights & Details'}
                </h4>
                <ul className="space-y-2">
                  {activeFeature.details.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8c4e2b] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Special interactive forms for Prayer Request or Donation */}
              {activeFeature.id === 'prayers' && (
                <div className="pt-2">
                  {prayerSubmitted ? (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>
                        {language === 'am'
                          ? 'የጸሎት ልመናዎ ደርሶናል፤ በእግዚአብሔር ጸጋ በቅዳሴ ጊዜ ይታሰባል።'
                          : 'Your prayer petition has been submitted and will be commemorated during Holy Liturgy.'}
                      </span>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setPrayerSubmitted(true);
                      }}
                      className="space-y-3"
                    >
                      <input
                        type="text"
                        placeholder="Your Name / Baptismal Name (የክርስትና ስም)"
                        value={prayerName}
                        onChange={(e) => setPrayerName(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#dec9b4] bg-white"
                        required
                      />
                      <textarea
                        rows={2}
                        placeholder="Prayer petition details (Healing, Thanksgiving, Memorial...)"
                        value={prayerIntention}
                        onChange={(e) => setPrayerIntention(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#dec9b4] bg-white resize-none"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full py-2.5 rounded-xl bg-[#6f3b21] hover:bg-[#5b2f19] text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Prayer Petition</span>
                      </button>
                    </form>
                  )}
                </div>
              )}

              {activeFeature.id === 'donations' && (
                <div className="pt-2">
                  {donationDone ? (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>
                        {language === 'am'
                          ? 'እግዚአብሔር ይስጥልን! ስጦታዎ ለቤተክርስቲያኑ አገልግሎት ይውላል።'
                          : 'May God bless your faithful generosity and stewardship! Receipt sent.'}
                      </span>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        {['25', '50', '100', '250'].map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => setDonationAmount(amt)}
                            className={`flex-1 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              donationAmount === amt
                                ? 'bg-[#703b21] text-white border-[#703b21]'
                                : 'bg-white border-[#dfcdb9] text-[#553624]'
                            }`}
                          >
                            ${amt}
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setDonationDone(true)}
                        className="w-full py-2.5 rounded-xl bg-[#6f3b21] hover:bg-[#5b2f19] text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Heart className="w-3.5 h-3.5" />
                        <span>Donate ${donationAmount} to Church Ministry</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer button */}
            <div className="pt-4 border-t border-[#ebddce] flex justify-end">
              <button
                type="button"
                onClick={onCloseFeature}
                className="px-5 py-2 rounded-xl bg-[#ebd8c5] hover:bg-[#e1caa6] text-[#422414] font-semibold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Pillar Details Modal */}
      {selectedPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-[#fefbf6] rounded-3xl p-6 shadow-2xl border border-[#e8d7c2]">
            <div className="flex items-center justify-between pb-3 border-b border-[#e9dcce]">
              <h3 className="text-lg font-bold text-[#2c170d] font-['Cinzel',Georgia,serif]">
                {language === 'am' ? selectedPillar.titleAm : selectedPillar.title}
              </h3>
              <button
                type="button"
                onClick={onClosePillar}
                className="p-1.5 rounded-full text-[#886956] hover:text-[#321a0f] hover:bg-[#eddccb]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="py-4 text-xs sm:text-sm text-[#5d4130] space-y-3">
              <p>
                {selectedPillar.id === 'glory' &&
                  'Every aspect of parish liturgy, singing, stewardship, and community outreach is conducted in reverence and humbleness for the Almighty Lord.'}
                {selectedPillar.id === 'serve' &&
                  'Uniting parishioners, youth volunteers, and deacons in service of the sanctuary and compassionate assistance to those in need.'}
                {selectedPillar.id === 'grow' &&
                  'Deepening our rootedness in the ancient Orthodox Tewahedo Christian faith through study of holy scriptures, patristics, and spiritual guidance.'}
                {selectedPillar.id === 'build' &&
                  'Investing in our children, constructing our permanent sanctuary, and cultivating a vibrant legacy for generations to come.'}
              </p>
            </div>
            <div className="pt-3 border-t border-[#ebddce] flex justify-end">
              <button
                type="button"
                onClick={onClosePillar}
                className="px-4 py-2 rounded-xl bg-[#ebd8c5] text-[#422414] font-semibold text-xs"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Forgot Password Modal */}
      {forgotPasswordOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-[#fefbf6] rounded-3xl p-6 shadow-2xl border border-[#e8d7c2]">
            <div className="flex items-center justify-between pb-3 border-b border-[#e9dcce]">
              <div className="flex items-center gap-2 text-[#793f21]">
                <Lock className="w-5 h-5" />
                <h3 className="text-base font-bold text-[#2a170d]">
                  {language === 'am' ? 'የይለፍ ቃል መልሶ ማግኛ' : 'Reset Your Password'}
                </h3>
              </div>
              <button
                type="button"
                onClick={onCloseForgotPassword}
                className="p-1.5 rounded-full text-[#886956] hover:text-[#321a0f] hover:bg-[#eddccb]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="py-4 text-xs sm:text-sm text-[#5d4130]">
              {resetSent ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>
                    A password reset link has been dispatched to <strong>{resetEmail}</strong>. Please check your inbox and spam folder.
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setResetSent(true);
                  }}
                  className="space-y-3"
                >
                  <p className="text-xs text-[#6e5140]">
                    Enter the email address registered with your church parish account. We will send you instructions to create a new password.
                  </p>
                  <input
                    type="email"
                    required
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#dec9b4] bg-white text-[#29170e]"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#6f3b21] hover:bg-[#5b2f19] text-white font-semibold text-xs transition-all cursor-pointer"
                  >
                    Send Recovery Email
                  </button>
                </form>
              )}
            </div>
            <div className="pt-3 border-t border-[#ebddce] flex justify-end">
              <button
                type="button"
                onClick={onCloseForgotPassword}
                className="px-4 py-2 rounded-xl bg-[#ebd8c5] text-[#422414] font-semibold text-xs cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Footer Info Modals (Help, Contact, Privacy, Terms) */}
      {infoModalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#fefbf6] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#e8d7c2] max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-[#e9dcce]">
              <div className="flex items-center gap-2.5">
                <EthiopianCross size={28} className="text-[#7d4422]" />
                <h3 className="text-lg font-bold text-[#2b170e] font-['Cinzel',Georgia,serif]">
                  {infoModalType === 'help' && (language === 'am' ? 'የእርዳታ መመሪያ' : 'Church Portal Assistance')}
                  {infoModalType === 'contact' && (language === 'am' ? 'የቤተክርስቲያን አድራሻ' : 'Contact & Parish Office')}
                  {infoModalType === 'privacy' && (language === 'am' ? 'የግላዊነት ጥበቃ' : 'Parish Privacy Notice')}
                  {infoModalType === 'terms' && (language === 'am' ? 'የአገልግሎት ስምምነት' : 'Parish Guidelines & Terms')}
                  {infoModalType === 'faith' && 'Faith & Doctrine'}
                  {infoModalType === 'community' && 'Parish Community'}
                  {infoModalType === 'service' && 'Diaconal Service'}
                  {infoModalType === 'together' && 'Together in Christ'}
                </h3>
              </div>
              <button
                type="button"
                onClick={onCloseInfoModal}
                className="p-1.5 rounded-full text-[#886956] hover:text-[#321a0f] hover:bg-[#eddccb] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 text-xs sm:text-sm text-[#5d4130] space-y-4">
              {infoModalType === 'contact' && (
                <div className="space-y-3">
                  <p className="font-medium text-[#2d180e]">
                    {CHURCH_FULL_TITLE}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-3 bg-[#f7eee3] rounded-xl border border-[#e5d4c2] flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#8a4b27] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[11px] uppercase block text-[#8a4b27]">Sanctuary Address</span>
                        <span className="text-xs text-[#4e3425]">{CHURCH_CONTACT_INFO.address}</span>
                      </div>
                    </div>
                    <div className="p-3 bg-[#f7eee3] rounded-xl border border-[#e5d4c2] flex items-start gap-2.5">
                      <Phone className="w-4 h-4 text-[#8a4b27] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[11px] uppercase block text-[#8a4b27]">Parish Phone</span>
                        <span className="text-xs text-[#4e3425]">{CHURCH_CONTACT_INFO.phone}</span>
                      </div>
                    </div>
                    <div className="p-3 bg-[#f7eee3] rounded-xl border border-[#e5d4c2] flex items-start gap-2.5">
                      <Mail className="w-4 h-4 text-[#8a4b27] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[11px] uppercase block text-[#8a4b27]">Office Email</span>
                        <span className="text-xs text-[#4e3425]">{CHURCH_CONTACT_INFO.email}</span>
                      </div>
                    </div>
                    <div className="p-3 bg-[#f7eee3] rounded-xl border border-[#e5d4c2] flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#8a4b27] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[11px] uppercase block text-[#8a4b27]">Service Hours</span>
                        <span className="text-xs text-[#4e3425]">Sunday Liturgy 6:00 AM - 10:30 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {infoModalType === 'help' && (
                <div className="space-y-3">
                  <p>
                    Welcome to the HNKMSM church member and administration portal. Here is how you can utilize this system:
                  </p>
                  <ul className="list-disc pl-4 space-y-1.5 text-xs">
                    <li><strong>Members:</strong> Register your family, submit baptismal names, check liturgical feast days, and manage stewardship contributions.</li>
                    <li><strong>Clergy & Administrators:</strong> Toggle the 'Admin' badge on login to access liturgical rosters, pastoral recordbooks, and community announcements.</li>
                    <li><strong>Forgotten Passwords:</strong> Use the Forgot Password link to receive an instant verification reset token.</li>
                  </ul>
                </div>
              )}

              {infoModalType === 'privacy' && (
                <div className="space-y-3 text-xs">
                  <p>
                    Holy Name & Mary Ethiopian Orthodox Tewahedo Church upholds strict privacy standards regarding parishioner data.
                  </p>
                  <p>
                    Personal details, baptismal records, financial contributions, and prayer petitions are kept strictly confidential and accessible solely to authorized clergy and administrators according to church bylaws.
                  </p>
                </div>
              )}

              {infoModalType === 'terms' && (
                <div className="space-y-3 text-xs">
                  <p>
                    This online portal serves holy congregants, catechumens, and visitors of Holy Name & Mary EOTC LV-NV.
                  </p>
                  <p>
                    By accessing this service, users agree to maintain respectful Christian conduct, safeguard their login credentials, and honor the sacred traditions of the Ethiopian Orthodox Tewahedo Church.
                  </p>
                </div>
              )}

              {(infoModalType === 'faith' || infoModalType === 'community' || infoModalType === 'service' || infoModalType === 'together') && (
                <div className="space-y-3">
                  <p className="italic font-['Cormorant_Garamond',Georgia,serif] text-base text-[#4a2e1d]">
                    “One Lord, one faith, one baptism, one God and Father of all, who is over all and through all and in all.” — Ephesians 4:5-6
                  </p>
                  <p>
                    Our mission is rooted in the biblical and apostolic teachings preserved through the centuries by the Ethiopian Orthodox Tewahedo Church, welcoming every seeker into divine worship and spiritual renewal.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-[#ebddce] flex justify-end">
              <button
                type="button"
                onClick={onCloseInfoModal}
                className="px-4 py-2 rounded-xl bg-[#ebd8c5] text-[#422414] font-semibold text-xs cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Authenticated User Dashboard View / Welcome Sheet */}
      {authenticatedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-[#fefbf6] rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#e8d7c2]">
            <div className="flex items-center justify-between pb-3 border-b border-[#e9dcce]">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-[#f3e6d6] rounded-xl text-[#783e1f]">
                  <EthiopianCross size={28} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2a170d] font-['Cinzel',Georgia,serif]">
                    {authenticatedUser.role === 'admin' ? 'Clergy & Admin Portal' : 'Member Portal'}
                  </h3>
                  <span className="text-[11px] text-[#7d5d4a] block">{authenticatedUser.email}</span>
                </div>
              </div>
              <button
                id="signout-btn"
                type="button"
                onClick={onSignOut}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 transition-colors cursor-pointer"
                title="Sign Out"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>

            <div className="py-4 space-y-3.5 text-xs sm:text-sm text-[#4e3425]">
              <div className="p-3.5 bg-[#f6eee2] rounded-2xl border border-[#e7d7c4]">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <h4 className="font-bold text-[#2b170e]">
                    Welcome, {authenticatedUser.name}!
                  </h4>
                </div>
                <p className="text-xs text-[#6e503e] leading-relaxed">
                  You are successfully authenticated into Holy Name & Mary EOTC Las Vegas Portal as a <strong>{authenticatedUser.role}</strong>.
                </p>
              </div>

              {/* Quick links inside portal */}
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl border border-[#ebd8c5] bg-white flex items-center justify-between">
                  <span className="font-medium text-xs">Sunday Liturgy Check-in</span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">Confirmed</span>
                </div>
                <div className="p-2.5 rounded-xl border border-[#ebd8c5] bg-white flex items-center justify-between">
                  <span className="font-medium text-xs">Family Parish Roster</span>
                  <span className="text-[11px] font-semibold text-[#8b4c29]">Active • 2026</span>
                </div>
                <div className="p-2.5 rounded-xl border border-[#ebd8c5] bg-white flex items-center justify-between">
                  <span className="font-medium text-xs">Monthly Tithe & Pledge</span>
                  <span className="text-[11px] font-bold text-[#643a21]">Up to Date</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#ebddce] flex justify-end gap-2">
              <button
                type="button"
                onClick={onSignOut}
                className="px-3.5 py-2 rounded-xl bg-[#ebd8c5] hover:bg-[#dec6b0] text-[#472714] font-semibold text-xs cursor-pointer"
              >
                Sign Out
              </button>
              {onGoToDashboard && (
                <button
                  type="button"
                  onClick={onGoToDashboard}
                  className="px-4 py-2 rounded-xl bg-[#6f3b21] hover:bg-[#5b2f19] text-white font-semibold text-xs cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <span>Enter Dashboard →</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
