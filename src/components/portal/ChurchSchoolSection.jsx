import React, { useState } from 'react';
import Icon from '../Icon.jsx';
import sundaySchoolImg from '../../assets/images/sunday_school_1790224163332.jpg';
import marriageSchoolImg from '../../assets/images/marriage_school_1790224177828.jpg';
import { useLanguage } from '../../context/LanguageContext';

export default function ChurchSchoolSection({ onSignIn }) {
  const { language, t } = useLanguage();
  const isAm = language === 'am';
  const [activeModal, setActiveModal] = useState(null); // 'sunday' | 'marriage' | null
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'register'
  
  // Sunday School Form state
  const [sundayForm, setSundayForm] = useState({
    studentName: '',
    ageGroup: 'Junior Disciples (Ages 8–12)',
    parentName: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [sundaySubmitted, setSundaySubmitted] = useState(false);

  // Marriage School Form state
  const [marriageForm, setMarriageForm] = useState({
    coupleNames: '',
    programType: 'Pre-Marital Holy Matrimony Preparation (6 Weeks)',
    phone: '',
    email: '',
    preferredSchedule: 'Saturday Evenings (5:30 PM)',
    notes: '',
  });
  const [marriageSubmitted, setMarriageSubmitted] = useState(false);

  const openSundayModal = () => {
    setActiveModal('sunday');
    setActiveTab('overview');
    setSundaySubmitted(false);
  };

  const openMarriageModal = () => {
    setActiveModal('marriage');
    setActiveTab('overview');
    setMarriageSubmitted(false);
  };

  const handleSundaySubmit = (e) => {
    e.preventDefault();
    setSundaySubmitted(true);
  };

  const handleMarriageSubmit = (e) => {
    e.preventDefault();
    setMarriageSubmitted(true);
  };

  return (
    <section className="section section-soft church-school-section" id="church-school">
      {/* Section Header */}
      <div className="container" style={{ marginBottom: '32px' }}>
        <div className="section-heading centered">
          <p className="eyebrow" style={{ color: '#7a4b2a', marginBottom: '8px' }}>
            {isAm ? 'ሐዋርያዊ ትምህርትና ቅዱስ ጋብቻ' : 'Apostolic Catechism & Holy Matrimony'}
          </p>
          <h2>{isAm ? 'የቤተክርስቲያን ትምህርት ቤት' : 'Church School'}</h2>
          <p>
            {isAm
              ? 'በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተክርስቲያን ዘላለማዊ አስተምህሮ ላይ የተመሠረተ፤ ሕፃናትና ወጣቶችን በእምነትና በዜማ በማነፅ፣ ክርስቲያናዊ ትዳርና ቤተሰብን በበረከት የሚያጸና።'
              : 'Rooted in the eternal wisdom of the Ethiopian Orthodox Tewahedo Church, educating young minds in faith and hymnody while sanctifying Christian marriages and homes.'}
          </p>
        </div>
      </div>

      {/* Grid of Role-style Cards matching Admin Dashboard & Member Dashboard */}
      <div className="container role-grid">
        {/* 1. SUNDAY SCHOOL CARD */}
        <article className="role-card role-card--member church-school-card">
          <div
            className="role-media school-media"
            style={{
              backgroundImage: `url(${sundaySchoolImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden="true"
          />
          <div className="role-copy">
            <div className="role-head">
              <Icon name="book" size={26} className="role-icon" />
              <h3>{isAm ? 'ሕፃናትና ወጣቶች ሰንበት ትምህርት ቤት' : 'SUNDAY SCHOOL'}</h3>
            </div>
            <p className="role-sub">
              {isAm
                ? 'መንፈሳዊ ዕድገት፣ ያሬዳዊ ዜማ፣ የነገረ መለኮት ትምህርትና የወጣቶች አንድነት'
                : 'Spiritual formation, holy hymnody, patristic catechism & youth fellowship'}
            </p>
            <ul>
              {isAm ? (
                <>
                  <li>እንደ ዕድሜ የተከፋፈሉ ክፍሎች (ከሕፃናት እስከ ኮሌጅ ወጣቶች)</li>
                  <li>የቅዱስ ያሬድ ዜማ፣ ድጓ፣ ዝማሬና ማኅሌት ሥልጠና</li>
                  <li>የኦርቶዶክስ ተዋሕዶ ሃይማኖት ዶግማ፣ መጽሐፍ ቅዱስና የታሪክ ጥናት</li>
                  <li>የግዕዝና አማርኛ ቋንቋ ንባብ፣ ፊደልና የዜማ ምልክቶች</li>
                  <li>ዓመታዊ የወጣቶች ጉባኤያት፣ መንፈሳዊ ጉዞዎችና የዝማሬ መርሐ ግብሮች</li>
                </>
              ) : (
                <>
                  <li>Age-graded classes from nursery &amp; little angels to collegiate youth</li>
                  <li>Ancient Ge&apos;ez liturgical chant (Deggwa, Zema &amp; Mahlet)</li>
                  <li>Orthodox Tewahedo dogmatics, scripture study &amp; church history</li>
                  <li>Amharic &amp; Ge&apos;ez language reading, sacred writing &amp; literacy</li>
                  <li>Annual youth conferences, holy retreats &amp; choir presentations</li>
                </>
              )}
            </ul>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: 'auto' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={openSundayModal}
              >
                {isAm ? 'በሰንበት ት/ቤት ይመዝገቡ →' : 'Enroll in Sunday School →'}
              </button>
              {onSignIn && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => onSignIn('member')}
                >
                  {isAm ? 'የአባል ፖርታል' : 'Member Portal'}
                </button>
              )}
            </div>
          </div>
        </article>

        {/* 2. MARRIAGE SCHOOL & FAMILY LIFE CENTER CARD */}
        <article className="role-card role-card--admin church-school-card">
          <div
            className="role-media school-media"
            style={{
              backgroundImage: `url(${marriageSchoolImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden="true"
          />
          <div className="role-copy">
            <div className="role-head">
              <Icon name="shield" size={26} className="role-icon" />
              <h3>{isAm ? 'ጋብቻ ትምህርትና የቤተሰብ ሕይወት ማዕከል' : 'MARRIAGE SCHOOL & FAMILY LIFE CENTER'}</h3>
            </div>
            <p className="role-sub">
              {isAm
                ? 'የጋብቻ ቅድመ ዝግጅት፣ የክርስቲያናዊ ትዳር ምክርና የኦርቶዶክሳዊ አስተዳደግ ሥልጠና'
                : 'Pre-marital preparation, holy matrimony counseling & Christian family parenting'}
            </p>
            <ul>
              {isAm ? (
                <>
                  <li>የስድስት ሳምንት የጋብቻ ቅድመ ዝግጅት ሥርዓተ ትምህርትና ቡራኬ</li>
                  <li>በካህናት አባቶች የሚሰጥ ሚስጥራዊ የንስሐና የጋብቻ መንፈሳዊ ምክር</li>
                  <li>የኦርቶዶክሳዊ አስተዳደግና የጸሎት ቤት ማነፅ መርሐ ግብር</li>
                  <li>የትዳር ፍቅር፣ መግባባትና ግጭት አፈታት መንፈሳዊ መመሪያ</li>
                  <li>ወርሃዊ የጥንዶች ሕብረት፣ ሴሚናሮችና ዓመታዊ መንፈሳዊ ጉባኤ</li>
                </>
              ) : (
                <>
                  <li>Canonical pre-marital preparation course &amp; pastoral blessings</li>
                  <li>Spiritual counseling &amp; confidential guidance by ordained parish fathers</li>
                  <li>Orthodox Christian parenting &amp; cultivating prayerful, godly homes</li>
                  <li>Marital harmony, peaceful communication &amp; conflict resolution</li>
                  <li>Monthly couples fellowship, family seminars &amp; annual renewal retreats</li>
                </>
              )}
            </ul>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: 'auto' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={openMarriageModal}
              >
                {isAm ? 'የቤተሰብ አገልግሎትን ይቀላቀሉ →' : 'Join Family Ministry →'}
              </button>
              {onSignIn && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => onSignIn('member')}
                >
                  {isAm ? 'ምክር ያስይዙ' : 'Book Consultation'}
                </button>
              )}
            </div>
          </div>
        </article>
      </div>

      {/* SUNDAY SCHOOL MODAL */}
      {activeModal === 'sunday' && (
        <div className="portal-modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="portal-modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px' }}>
            <div className="portal-modal-head">
              <div className="flex items-center gap-2">
                <span style={{ fontSize: '1.5rem' }}>📖</span>
                <div>
                  <span className="service-badge" style={{ marginBottom: '2px' }}>Parish Youth Education</span>
                  <h3 style={{ margin: 0 }}>SUNDAY SCHOOL MINISTRY</h3>
                </div>
              </div>
              <button
                type="button"
                className="portal-modal-close"
                onClick={() => setActiveModal(null)}
              >
                ✕
              </button>
            </div>

            {/* Modal Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--line)', background: '#fcf8f4' }}>
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: activeTab === 'overview' ? '#fff' : 'transparent',
                  border: 'none',
                  borderBottom: activeTab === 'overview' ? '2.5px solid var(--primary)' : 'none',
                  fontWeight: activeTab === 'overview' ? 700 : 500,
                  color: activeTab === 'overview' ? 'var(--primary)' : 'var(--muted)',
                  cursor: 'pointer',
                  fontSize: '0.86rem',
                }}
              >
                Curriculum &amp; Schedule
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('register')}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: activeTab === 'register' ? '#fff' : 'transparent',
                  border: 'none',
                  borderBottom: activeTab === 'register' ? '2.5px solid var(--primary)' : 'none',
                  fontWeight: activeTab === 'register' ? 700 : 500,
                  color: activeTab === 'register' ? 'var(--primary)' : 'var(--muted)',
                  cursor: 'pointer',
                  fontSize: '0.86rem',
                }}
              >
                Student Enrollment Form
              </button>
            </div>

            <div className="portal-modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              {activeTab === 'overview' ? (
                <div>
                  <p className="modal-lead" style={{ marginBottom: '16px' }}>
                    Our Sunday School is dedicated to raising children and youth in the true Orthodox Tewahedo Faith, biblical doctrine, and sacred liturgical chant under the care of experienced deacons and instructors.
                  </p>

                  <h4 style={{ fontSize: '0.96rem', color: 'var(--text)', marginBottom: '8px' }}>
                    📚 Age-Graded Divisions
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '16px' }}>
                    <div style={{ background: '#fdfaf7', border: '1px solid var(--line)', borderRadius: '10px', padding: '12px' }}>
                      <strong style={{ display: 'block', fontSize: '0.86rem', color: 'var(--primary)' }}>Little Angels (Ages 4–7)</strong>
                      <small style={{ color: 'var(--muted)' }}>Bible stories, introductory prayers, sign of the cross &amp; basic hymns.</small>
                    </div>
                    <div style={{ background: '#fdfaf7', border: '1px solid var(--line)', borderRadius: '10px', padding: '12px' }}>
                      <strong style={{ display: 'block', fontSize: '0.86rem', color: 'var(--primary)' }}>Junior Disciples (Ages 8–12)</strong>
                      <small style={{ color: 'var(--muted)' }}>Ten Commandments, Seven Sacraments, Creed &amp; Ge&apos;ez liturgy chant.</small>
                    </div>
                    <div style={{ background: '#fdfaf7', border: '1px solid var(--line)', borderRadius: '10px', padding: '12px' }}>
                      <strong style={{ display: 'block', fontSize: '0.86rem', color: 'var(--primary)' }}>Saint Yared Choir (Ages 13–18)</strong>
                      <small style={{ color: 'var(--muted)' }}>Advanced zema chant, patristics, apologetics &amp; Christian ethics.</small>
                    </div>
                    <div style={{ background: '#fdfaf7', border: '1px solid var(--line)', borderRadius: '10px', padding: '12px' }}>
                      <strong style={{ display: 'block', fontSize: '0.86rem', color: 'var(--primary)' }}>Young Adults &amp; College (18+)</strong>
                      <small style={{ color: 'var(--muted)' }}>Theological deep dives, fellowship, spiritual mentorship &amp; community service.</small>
                    </div>
                  </div>

                  <h4 style={{ fontSize: '0.96rem', color: 'var(--text)', marginBottom: '8px' }}>
                    ⏰ Class Schedule &amp; Location
                  </h4>
                  <div style={{ background: '#f6ede4', padding: '12px 16px', borderRadius: '10px', marginBottom: '18px', fontSize: '0.84rem' }}>
                    <p style={{ margin: '0 0 6px' }}><strong>Sundays:</strong> 9:00 AM – 10:30 AM (Fellowship Hall &amp; Classrooms)</p>
                    <p style={{ margin: '0 0 6px' }}><strong>Saturdays:</strong> 3:00 PM – 5:00 PM (Zema &amp; Ge&apos;ez Choir Practice)</p>
                    <p style={{ margin: 0, color: 'var(--muted)' }}>📍 Holy Trinity &amp; Saint Michael Cathedral Education Wing</p>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setActiveTab('register')}
                    >
                      Fill Out Enrollment Form →
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  {sundaySubmitted ? (
                    <div style={{ textAlign: 'center', padding: '24px 12px' }}>
                      <span style={{ fontSize: '2.5rem', color: 'var(--primary)', display: 'block', marginBottom: '10px' }}>✝</span>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Egziabher Yibark! (እግዚአብሔር ይባርክ!)</h4>
                      <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '18px' }}>
                        Thank you for enrolling <strong>{sundayForm.studentName || 'your child'}</strong> in our Holy Sunday School ministry ({sundayForm.ageGroup}). The department director will reach out to confirm class assignment.
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          setSundaySubmitted(false);
                          setActiveModal(null);
                        }}
                      >
                        Done
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSundaySubmit}>
                      <p style={{ fontSize: '0.84rem', color: 'var(--muted)', marginBottom: '16px' }}>
                        Enroll your child or register yourself for the upcoming Sunday School liturgical academic year.
                      </p>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '12px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '4px' }}>
                            Student Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Yohannes Melaku"
                            value={sundayForm.studentName}
                            onChange={(e) => setSundayForm({ ...sundayForm, studentName: e.target.value })}
                            style={{ width: '100%', padding: '9px 12px', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '0.85rem' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '4px' }}>
                            Class Division *
                          </label>
                          <select
                            value={sundayForm.ageGroup}
                            onChange={(e) => setSundayForm({ ...sundayForm, ageGroup: e.target.value })}
                            style={{ width: '100%', padding: '9px 12px', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '0.85rem', background: '#fff' }}
                          >
                            <option>Little Angels (Ages 4–7)</option>
                            <option>Junior Disciples (Ages 8–12)</option>
                            <option>Saint Yared Choir (Ages 13–18)</option>
                            <option>Young Adults &amp; College (18+)</option>
                          </select>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '12px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '4px' }}>
                            Parent / Guardian Name
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Melaku Bekele"
                            value={sundayForm.parentName}
                            onChange={(e) => setSundayForm({ ...sundayForm, parentName: e.target.value })}
                            style={{ width: '100%', padding: '9px 12px', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '0.85rem' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '4px' }}>
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(555) 000-0000"
                            value={sundayForm.phone}
                            onChange={(e) => setSundayForm({ ...sundayForm, phone: e.target.value })}
                            style={{ width: '100%', padding: '9px 12px', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '0.85rem' }}
                          />
                        </div>
                      </div>

                      <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '4px' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="family@example.com"
                          value={sundayForm.email}
                          onChange={(e) => setSundayForm({ ...sundayForm, email: e.target.value })}
                          style={{ width: '100%', padding: '9px 12px', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '0.85rem' }}
                        />
                      </div>

                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '4px' }}>
                          Baptismal Name / Special Requests (Optional)
                        </label>
                        <textarea
                          rows={2}
                          placeholder="e.g. Haile Maryam, prior Ge'ez zema experience..."
                          value={sundayForm.notes}
                          onChange={(e) => setSundayForm({ ...sundayForm, notes: e.target.value })}
                          style={{ width: '100%', padding: '9px 12px', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '0.85rem' }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: '100%' }}
                      >
                        Submit Sunday School Registration →
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>

            <div className="portal-modal-foot">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setActiveModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MARRIAGE SCHOOL & FAMILY LIFE CENTER MODAL */}
      {activeModal === 'marriage' && (
        <div className="portal-modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="portal-modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px' }}>
            <div className="portal-modal-head">
              <div className="flex items-center gap-2">
                <span style={{ fontSize: '1.5rem' }}>🕊️</span>
                <div>
                  <span className="service-badge" style={{ marginBottom: '2px' }}>Holy Matrimony &amp; Family</span>
                  <h3 style={{ margin: 0 }}>MARRIAGE SCHOOL &amp; FAMILY LIFE</h3>
                </div>
              </div>
              <button
                type="button"
                className="portal-modal-close"
                onClick={() => setActiveModal(null)}
              >
                ✕
              </button>
            </div>

            {/* Modal Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--line)', background: '#fcf8f4' }}>
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: activeTab === 'overview' ? '#fff' : 'transparent',
                  border: 'none',
                  borderBottom: activeTab === 'overview' ? '2.5px solid var(--primary)' : 'none',
                  fontWeight: activeTab === 'overview' ? 700 : 500,
                  color: activeTab === 'overview' ? 'var(--primary)' : 'var(--muted)',
                  cursor: 'pointer',
                  fontSize: '0.86rem',
                }}
              >
                Ministry &amp; Counseling
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('register')}
                style={{
                  flex: 1,
                  padding: '12px',
                  background: activeTab === 'register' ? '#fff' : 'transparent',
                  border: 'none',
                  borderBottom: activeTab === 'register' ? '2.5px solid var(--primary)' : 'none',
                  fontWeight: activeTab === 'register' ? 700 : 500,
                  color: activeTab === 'register' ? 'var(--primary)' : 'var(--muted)',
                  cursor: 'pointer',
                  fontSize: '0.86rem',
                }}
              >
                Consultation &amp; Course Registration
              </button>
            </div>

            <div className="portal-modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              {activeTab === 'overview' ? (
                <div>
                  <p className="modal-lead" style={{ marginBottom: '16px' }}>
                    “For this reason a man shall leave his father and mother and be joined to his wife, and the two shall become one flesh.” Holy Matrimony is a divine mystery. Our ministry provides pre-marital preparation, pastoral guidance, and family preservation.
                  </p>

                  <h4 style={{ fontSize: '0.96rem', color: 'var(--text)', marginBottom: '8px' }}>
                    💍 Key Ministries &amp; Programs
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '16px' }}>
                    <div style={{ background: '#fdfaf7', border: '1px solid var(--line)', borderRadius: '10px', padding: '12px' }}>
                      <strong style={{ display: 'block', fontSize: '0.86rem', color: 'var(--primary)' }}>Pre-Marital Preparation (6 Weeks)</strong>
                      <small style={{ color: 'var(--muted)' }}>Mandatory holy course on sacramental marriage, commitment, finances &amp; Christian unity.</small>
                    </div>
                    <div style={{ background: '#fdfaf7', border: '1px solid var(--line)', borderRadius: '10px', padding: '12px' }}>
                      <strong style={{ display: 'block', fontSize: '0.86rem', color: 'var(--primary)' }}>Pastoral Marriage Counseling</strong>
                      <small style={{ color: 'var(--muted)' }}>Confidential 1-on-1 spiritual counseling with ordained parish priests and counselors.</small>
                    </div>
                    <div style={{ background: '#fdfaf7', border: '1px solid var(--line)', borderRadius: '10px', padding: '12px' }}>
                      <strong style={{ display: 'block', fontSize: '0.86rem', color: 'var(--primary)' }}>Orthodox Parenting Seminar</strong>
                      <small style={{ color: 'var(--muted)' }}>Nurturing faith in the diaspora, navigating modern culture, and instilling prayer in children.</small>
                    </div>
                    <div style={{ background: '#fdfaf7', border: '1px solid var(--line)', borderRadius: '10px', padding: '12px' }}>
                      <strong style={{ display: 'block', fontSize: '0.86rem', color: 'var(--primary)' }}>Annual Family Retreat</strong>
                      <small style={{ color: 'var(--muted)' }}>Spiritual renewal weekend, renewal of vows, fellowship &amp; communal prayer.</small>
                    </div>
                  </div>

                  <h4 style={{ fontSize: '0.96rem', color: 'var(--text)', marginBottom: '8px' }}>
                    🕊️ Confidentiality &amp; Pastoral Care
                  </h4>
                  <p style={{ fontSize: '0.84rem', color: 'var(--muted)', lineHeight: '1.5', marginBottom: '16px' }}>
                    All counseling inquiries are strictly confidential and governed under holy sacramental discretion with our parish clergy.
                  </p>

                  <div style={{ textAlign: 'center' }}>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setActiveTab('register')}
                    >
                      Request Consultation / Register →
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  {marriageSubmitted ? (
                    <div style={{ textAlign: 'center', padding: '24px 12px' }}>
                      <span style={{ fontSize: '2.5rem', color: 'var(--primary)', display: 'block', marginBottom: '10px' }}>✝</span>
                      <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>May God Bless Your Home!</h4>
                      <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '18px' }}>
                        Your inquiry for <strong>{marriageForm.programType}</strong> has been received with strict confidentiality. A parish father or family ministry coordinator will contact you promptly.
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          setMarriageSubmitted(false);
                          setActiveModal(null);
                        }}
                      >
                        Done
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleMarriageSubmit}>
                      <p style={{ fontSize: '0.84rem', color: 'var(--muted)', marginBottom: '16px' }}>
                        Register for the Pre-Marital Preparation Course or request a confidential pastoral counseling appointment.
                      </p>

                      <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '4px' }}>
                          Names of Couple / Individual *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dawit Haile &amp; Sara Tadesse"
                          value={marriageForm.coupleNames}
                          onChange={(e) => setMarriageForm({ ...marriageForm, coupleNames: e.target.value })}
                          style={{ width: '100%', padding: '9px 12px', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '0.85rem' }}
                        />
                      </div>

                      <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '4px' }}>
                          Program or Pastoral Service *
                        </label>
                        <select
                          value={marriageForm.programType}
                          onChange={(e) => setMarriageForm({ ...marriageForm, programType: e.target.value })}
                          style={{ width: '100%', padding: '9px 12px', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '0.85rem', background: '#fff' }}
                        >
                          <option>Pre-Marital Holy Matrimony Preparation (6 Weeks)</option>
                          <option>Confidential Pastoral Marriage Counseling</option>
                          <option>Orthodox Christian Parenting Seminars</option>
                          <option>Marital Renewal &amp; Spiritual Direction</option>
                        </select>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '12px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '4px' }}>
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(555) 000-0000"
                            value={marriageForm.phone}
                            onChange={(e) => setMarriageForm({ ...marriageForm, phone: e.target.value })}
                            style={{ width: '100%', padding: '9px 12px', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '0.85rem' }}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '4px' }}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="couple@example.com"
                            value={marriageForm.email}
                            onChange={(e) => setMarriageForm({ ...marriageForm, email: e.target.value })}
                            style={{ width: '100%', padding: '9px 12px', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '0.85rem' }}
                          />
                        </div>
                      </div>

                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, marginBottom: '4px' }}>
                          Wedding Date / Preferred Appointment Window &amp; Notes
                        </label>
                        <textarea
                          rows={2}
                          placeholder="e.g. Planned wedding month, preferred days for sessions..."
                          value={marriageForm.notes}
                          onChange={(e) => setMarriageForm({ ...marriageForm, notes: e.target.value })}
                          style={{ width: '100%', padding: '9px 12px', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '0.85rem' }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: '100%' }}
                      >
                        Submit Confidential Registration →
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>

            <div className="portal-modal-foot">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setActiveModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
