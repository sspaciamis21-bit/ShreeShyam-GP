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
            <p className="footer-desc">
              Shree Shyam Group of Companies is a multi-sector conglomerate operating in official GeM (Government e-Marketplace) procurement, modern real estate construction, and premium coworking spaces (Sspacia).
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-skyblue" style={{ fontWeight: 600 }}>GeM Approved</span>
              <span className="badge badge-royal" style={{ fontWeight: 600 }}>Govt Contractor</span>
              <span className="badge badge-purple" style={{ fontWeight: 600 }}>Sspacia Workspaces</span>
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
                <Link to="/businesses#gem" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={16} color="#38bdf8" />
                  <span>GeM Portal & Govt Supplies</span>
                </Link>
              </li>
              <li>
                <Link to="/businesses#construction" className="footer-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Building2 size={16} color="#fbbf24" />
                  <span>Construction & Infrastructure</span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.sspacia.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-link" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <LayoutGrid size={16} color="#c084fc" />
                  <span>Sspacia Coworking</span>
                  <ExternalLink size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.925rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <MapPin size={20} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span className="footer-contact-text">6th Floor, Mercádo, Chimanlal Girdharlal Rd, opp. Municipal Market, Vasant Vihar, Ellisbridge, Ahmedabad, Gujarat 380009</span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Phone size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <a href="tel:+917600393779" className="footer-link" style={{ color: '#f8fafc', fontWeight: 600 }}>+91 7600 393 779</a>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <a href="mailto:design.shreeshyamco@gmail.com" className="footer-link" style={{ color: '#f8fafc', fontWeight: 600 }}>design.shreeshyamco@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Shree Shyam Group of Companies. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '1.75rem' }}>
            <Link to="/privacy" className="footer-link" style={{ fontSize: '0.875rem' }}>Privacy Policy</Link>
            <Link to="/terms" className="footer-link" style={{ fontSize: '0.875rem' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
