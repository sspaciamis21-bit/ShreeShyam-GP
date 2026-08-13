import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ShieldCheck, Building2, LayoutGrid, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1 */}
          <div>
            <Logo size="lg" />
            <p style={{ color: 'var(--text-muted)', marginTop: '1.25rem', fontSize: '0.925rem', maxWidth: '340px' }}>
              Shree Shyam Group of Companies is a multi-sector conglomerate operating in official GeM (Government e-Marketplace) procurement, modern real estate construction, and premium coworking spaces (Sspacia).
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <span className="badge badge-gold">GeM Approved</span>
              <span className="badge badge-blue">Govt Contractor</span>
              <span className="badge badge-purple">Sspacia Workspaces</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/businesses" className="footer-link">Our Businesses</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="footer-col">
            <h4>Business Divisions</h4>
            <ul className="footer-links">
              <li>
                <Link to="/businesses#gem" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ShieldCheck size={14} color="#38bdf8" />
                  <span>GeM Portal & Govt Supplies</span>
                </Link>
              </li>
              <li>
                <Link to="/businesses#construction" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Building2 size={14} color="#fbbf24" />
                  <span>Construction & Infrastructure</span>
                </Link>
              </li>
              <li>
                <a 
                  href="http://localhost:3000" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-link" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <LayoutGrid size={14} color="#c084fc" />
                  <span>Sspacia Coworking</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Shree Shyam Corporate Hub, Commercial Complex, India</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Phone size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>+91 98250 30862</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Mail size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                <span>info@shreeshyamgroup.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Shree Shyam Group of Companies. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
