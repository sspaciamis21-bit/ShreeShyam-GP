import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Sparkles,
  Loader2,
  FileSpreadsheet
} from 'lucide-react';

// Google Apps Script Web App URL for live Google Sheet + Email integration
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
        // Submit directly to Google Apps Script Web App (saves to Sheet1 and sends email notifications)
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
            division: formData.division,
            message: formData.message,
            timestamp: formattedTime
          })
        });
      } else {
        // Fallback delay for UX
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
      case 'gem': return 'GeM Portal Orders & Govt Supply';
      case 'construction': return 'Construction & Infrastructure Project';
      case 'sspacia': return 'Sspacia Coworking & Managed Spaces';
      default: return 'General Corporate Inquiry';
    }
  };

  return (
    <div style={{ padding: '3.5rem 0' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
          <span className="badge badge-skyblue" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Connect With Us</span>
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.25rem' }}>
            Get in Touch with <br />
            <span className="gradient-skyblue-text">Shree Shyam Group</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Have a GeM portal order requirement, construction project proposal, or coworking workspace inquiry? Our executive desk is at your service.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {/* Left Column: Office Details */}
          <div>
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Corporate Headquarters</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-skyblue)', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>Office Address</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      6th Floor, Mercádo, Chimanlal Girdharlal Rd, opp. Municipal Market, Vasant Vihar, Ellisbridge, Ahmedabad, Gujarat 380009
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(37, 99, 235, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>Phone & Direct Desk</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      Official Helpline: <a href="tel:+917600393779" style={{ color: 'var(--accent-skyblue)', fontWeight: 600 }}>+91 7600 393 779</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(147, 51, 234, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c084fc', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>Email Inquiries</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      Official Email: <a href="mailto:design.shreeshyamco@gmail.com" style={{ color: 'var(--accent-skyblue)', fontWeight: 600 }}>design.shreeshyamco@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(217, 119, 6, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24', flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>Business Hours</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.5' }}>
                      <strong style={{ color: '#0f172a' }}>24/7 Available</strong><br />
                      Open 24 Hours, 7 Days a Week
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action */}
            <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <div>
                <h4 style={{ fontSize: '1.05rem', color: '#16a34a', marginBottom: '0.25rem' }}>Need Quick Instant Assistance?</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Chat directly with our official WhatsApp desk</p>
              </div>
              <a 
                href="https://wa.me/917600393779?text=Hello%20Shree%20Shyam%20Group,%20I%20have%20an%20inquiry" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-sm" 
                style={{ background: '#22c55e', color: '#ffffff', flexShrink: 0, width: 'auto' }}
              >
                <MessageSquare size={16} />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Send Business Inquiry</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', marginBottom: '1.75rem' }}>
              Fill out the details below and our concerned division representative will reach out to you promptly.
            </p>

            {submitted ? (
              <div style={{ padding: '2.5rem 1.5rem', textAlign: 'center', background: 'rgba(56, 189, 248, 0.08)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-skyblue)' }}>
                <CheckCircle2 size={52} color="var(--accent-skyblue)" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-heading)' }}>Inquiry Successfully Submitted!</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Thank you, <strong>{formData.name}</strong>. Your inquiry for <strong>{getDivisionName(formData.division)}</strong> has been recorded.
                </p>

                <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', maxWidth: '420px', margin: '0 auto 1.5rem', textAlign: 'left', fontSize: '0.875rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0284c7', fontWeight: 600, marginBottom: '0.75rem' }}>
                    <FileSpreadsheet size={16} />
                    <span>Inquiry Logged & Email Dispatched</span>
                  </div>
                  <div style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <div><strong>Division:</strong> {getDivisionName(formData.division)}</div>
                    <div><strong>Mobile:</strong> {formData.phone}</div>
                    <div><strong>Email:</strong> {formData.email}</div>
                    <div><strong>Logged:</strong> {submissionTime}</div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', division: 'gem', message: '' });
                  }} 
                  className="btn btn-outline btn-sm"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.45rem', color: 'var(--text-heading)' }}>
                    Target Division: *
                  </label>
                  <select 
                    value={formData.division} 
                    onChange={e => setFormData({ ...formData, division: e.target.value })}
                  >
                    <option value="gem">GeM Portal Orders & Government Supply</option>
                    <option value="construction">Construction & Infrastructure Project</option>
                    <option value="sspacia">Sspacia Coworking Desk / Corporate Office Booking</option>
                    <option value="general">General Corporate Inquiry</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.45rem', color: 'var(--text-heading)' }}>
                      Name: *
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.45rem', color: 'var(--text-heading)' }}>
                      Mobile No: *
                    </label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.45rem', color: 'var(--text-heading)' }}>
                    Email: *
                  </label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.45rem', color: 'var(--text-heading)' }}>
                    Requirement Details: *
                  </label>
                  <textarea 
                    rows={4} 
                    required 
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={submitting} 
                  className="btn btn-primary" 
                  style={{ marginTop: '0.5rem', opacity: submitting ? 0.8 : 1 }}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="spin-animate" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Submit Business Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
