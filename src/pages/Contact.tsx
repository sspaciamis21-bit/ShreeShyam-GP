import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Loader2, 
  Building2, 
  ShieldCheck, 
  LayoutGrid,
  FileCheck
} from 'lucide-react';

const GOOGLE_SCRIPT_URL = 
  import.meta.env.VITE_GOOGLE_SCRIPT_URL || 
  'https://script.google.com/macros/s/AKfycby9kEq0ZnynbCDdp4y04sh8NadfHnrdf3fKIafuUh3T_zjO0tJx_7FL1pUwF_O73NsIcQ/exec';

export const Contact: React.FC = () => {
  const location = useLocation();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionTime, setSubmissionTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: 'gem',
    message: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type) {
      setFormData(prev => ({ ...prev, division: type }));
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const now = new Date();
    const formattedTime = now.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    setSubmissionTime(formattedTime);

    try {
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            recipientEmail: 'praveen@shreeshyamgp.com',
            division: formData.division,
            message: formData.message,
            timestamp: formattedTime
          })
        });
      } else {
        await new Promise(resolve => setTimeout(resolve, 800));
      }
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const getDivisionName = (key: string) => {
    switch (key) {
      case 'gem': return 'GeM Portal Orders & Govt Supply Division';
      case 'construction': return 'Construction & Real Estate Infrastructure';
      case 'sspacia': return 'Sspacia Managed Coworking & Private Cabins';
      default: return 'General Corporate Inquiry';
    }
  };

  return (
    <div className="page-transition-enter">
      {/* Page Header */}
      <section style={{ 
        padding: '7.5rem 0 4.5rem', 
        background: 'linear-gradient(135deg, #0B1120 0%, #1E293B 100%)', 
        color: '#FFFFFF',
        borderBottom: '3px solid var(--corp-maroon)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="section-eyebrow" style={{ color: 'var(--corp-gold-light)' }}>
              Corporate Relations & Inquiries
            </span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', lineHeight: 1.15 }}>
              Connect with Executive Desk
            </h1>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.15rem', lineHeight: '1.7' }}>
              Whether you require GeM tender procurement execution, construction project consultation, or managed workspace booking at Sspacia, our executive team is at your service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3.5rem' }}>
            {/* Left Column: Headquarters Details */}
            <div>
              <span className="section-eyebrow">Direct Contact</span>
              <h2 style={{ fontSize: '1.85rem', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem' }}>
                Corporate Headquarters
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: 'var(--radius-xs)', background: 'var(--corp-maroon-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--corp-maroon)', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '0.35rem' }}>Head Office Address</h4>
                    <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
                      6th Floor, Mercádo, Chimanlal Girdharlal Rd, opp. Municipal Market, Vasant Vihar, Ellisbridge, Ahmedabad, Gujarat 380009
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: 'var(--radius-xs)', background: 'var(--corp-maroon-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--corp-maroon)', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '0.35rem' }}>Corporate Email Desk</h4>
                    <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.925rem' }}>
                      Official Correspondence: <a href="mailto:praveen@shreeshyamgp.com" style={{ color: 'var(--corp-maroon)', fontWeight: 700 }}>praveen@shreeshyamgp.com</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: 'var(--radius-xs)', background: 'var(--corp-maroon-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--corp-maroon)', flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '0.35rem' }}>Operational Hours</h4>
                    <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.925rem' }}>
                      24/7 Available for Government Tender Orders & Corporate Inquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Email Action Box */}
              <div style={{ 
                padding: '1.5rem 1.75rem', 
                background: 'var(--corp-maroon-subtle)', 
                border: '1px solid var(--border-maroon)', 
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--corp-maroon)', fontFamily: 'var(--font-heading)', marginBottom: '0.2rem' }}>
                    Direct Executive Email Desk
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-dark-muted)' }}>
                    Reach us directly at praveen@shreeshyamgp.com
                  </p>
                </div>

                <a 
                  href="mailto:praveen@shreeshyamgp.com?subject=Business%20Inquiry%20-%20Shree%20Shyam%20Group" 
                  className="btn-primary-corp"
                  style={{ padding: '0.6rem 1.15rem', fontSize: '0.8rem' }}
                >
                  <Mail size={16} />
                  <span>Email Now</span>
                </a>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div style={{ 
              background: '#FFFFFF', 
              border: '1px solid var(--border-light)', 
              borderRadius: 'var(--radius-sm)', 
              boxShadow: 'var(--shadow-medium)',
              borderTop: '4px solid var(--corp-maroon)',
              padding: '2.5rem 2rem'
            }}>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                Submit Official Business Inquiry
              </h3>
              <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.925rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                Please provide your project specifications or procurement scope. All inquiries are delivered directly to <strong>praveen@shreeshyamgp.com</strong>.
              </p>

              {submitted ? (
                <div style={{ 
                  padding: '2.5rem 1.5rem', 
                  textAlign: 'center', 
                  background: 'var(--corp-maroon-subtle)', 
                  borderRadius: 'var(--radius-sm)', 
                  border: '1px solid var(--border-maroon)' 
                }}>
                  <CheckCircle2 size={54} color="var(--corp-maroon)" style={{ marginBottom: '1rem', margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.4rem', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                    Inquiry Recorded Successfully
                  </h4>
                  <p style={{ color: 'var(--text-dark-muted)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Thank you, <strong>{formData.name}</strong>. Your inquiry for <strong>{getDivisionName(formData.division)}</strong> has been delivered to <strong>praveen@shreeshyamgp.com</strong>.
                  </p>

                  <div style={{ 
                    background: '#FFFFFF', 
                    padding: '1.25rem', 
                    borderRadius: 'var(--radius-xs)', 
                    border: '1px solid var(--border-light)', 
                    maxWidth: '440px', 
                    margin: '0 auto 1.5rem', 
                    textAlign: 'left', 
                    fontSize: '0.85rem' 
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--corp-maroon)', fontWeight: 700, marginBottom: '0.75rem' }}>
                      <FileCheck size={16} />
                      <span>Official Submission Receipt</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', color: 'var(--text-dark-secondary)' }}>
                      <div><strong>Target Division:</strong> {getDivisionName(formData.division)}</div>
                      <div><strong>Client Name:</strong> {formData.name}</div>
                      <div><strong>Client Email:</strong> {formData.email}</div>
                      {formData.phone && <div><strong>Client Contact:</strong> {formData.phone}</div>}
                      <div><strong>Dispatched To:</strong> praveen@shreeshyamgp.com</div>
                      <div><strong>Timestamp:</strong> {submissionTime}</div>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', division: 'gem', message: '' });
                    }} 
                    className="btn-outline-dark"
                  >
                    <span>Submit Another Inquiry</span>
                    <span className="corp-arrow-box">&gt;</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label">
                      Select Target Business Division *
                    </label>
                    <select 
                      className="form-select"
                      value={formData.division} 
                      onChange={e => setFormData({ ...formData, division: e.target.value })}
                    >
                      <option value="gem">GeM Portal Orders & Government Supply Division</option>
                      <option value="construction">Civil Construction & Infrastructure Development</option>
                      <option value="sspacia">Sspacia Coworking & Corporate Private Cabins</option>
                      <option value="general">General Group Partnership & Leadership Desk</option>
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">
                        Full Name / Organization *
                      </label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Ramesh Sharma"
                        className="form-input"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Your Contact Phone (Optional)
                      </label>
                      <input 
                        type="tel" 
                        placeholder="Your contact number"
                        className="form-input"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Official Email Address *
                    </label>
                    <input 
                      type="email" 
                      required 
                      placeholder="corporate@domain.com"
                      className="form-input"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Requirement Details & Project Scope *
                    </label>
                    <textarea 
                      rows={4} 
                      required 
                      placeholder="Please outline the GeM tender specifications, construction square footage, or Sspacia workspace seat requirements..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={submitting} 
                    className="btn-primary-corp"
                    style={{ justifyContent: 'center', marginTop: '0.5rem', opacity: submitting ? 0.8 : 1 }}
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={18} className="spin-animate" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Corporate Inquiry</span>
                        <span className="corp-arrow-box">&gt;</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
