import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { 
  ShieldCheck, 
  Building2, 
  LayoutGrid, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="corp-footer">
      <div className="container">
        {/* Top Grid Matrix */}
        <div className="footer-top-grid">
          {/* Col 1: About the Group */}
          <div className="footer-about-block">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{ background: '#FFFFFF', padding: '0.35rem 0.65rem', borderRadius: '4px' }}>
                <Logo size="sm" height={32} />
              </div>
              <span className="footer-brand-title">Shree Shyam Group</span>
            </div>

            <p className="footer-about-desc">
              Shree Shyam Group of Companies is an Indian multi-sector conglomerate operating across strategic GeM (Government e-Marketplace) procurement, landmark civil construction, and managed flexible workspaces (Sspacia).
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <span style={{ fontSize: '0.72rem', background: 'rgba(255, 255, 255, 0.08)', color: 'var(--corp-gold-light)', padding: '0.25rem 0.6rem', border: '1px solid rgba(255, 255, 255, 0.15)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                GeM Verified Vendor
              </span>
              <span style={{ fontSize: '0.72rem', background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', padding: '0.25rem 0.6rem', border: '1px solid rgba(255, 255, 255, 0.15)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                Civil Contracting
              </span>
              <span style={{ fontSize: '0.72rem', background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', padding: '0.25rem 0.6rem', border: '1px solid rgba(255, 255, 255, 0.15)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                Sspacia Workspaces
              </span>
            </div>
          </div>

          {/* Col 2: Group Navigation */}
          <div>
            <h4 className="footer-nav-col-title">Our Story & Group</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item"><Link to="/"><ChevronRight size={14} color="var(--corp-maroon)" /> Home Overview</Link></li>
              <li className="footer-link-item"><Link to="/about#legacy"><ChevronRight size={14} color="var(--corp-maroon)" /> Heritage & Legacy</Link></li>
              <li className="footer-link-item"><Link to="/about#leadership"><ChevronRight size={14} color="var(--corp-maroon)" /> Board of Directors</Link></li>
              <li className="footer-link-item"><Link to="/about#values"><ChevronRight size={14} color="var(--corp-maroon)" /> Vision & Corporate Values</Link></li>
              <li className="footer-link-item"><Link to="/about#milestones"><ChevronRight size={14} color="var(--corp-maroon)" /> Milestones & Growth</Link></li>
            </ul>
          </div>

          {/* Col 3: Business Sectors */}
          <div>
            <h4 className="footer-nav-col-title">Business Divisions</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/businesses#gem">
                  <ChevronRight size={14} color="var(--corp-maroon)" />
                  <span>GeM Govt Supplies</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <Link to="/businesses#construction">
                  <ChevronRight size={14} color="var(--corp-maroon)" />
                  <span>Construction & Infra</span>
                </Link>
              </li>
              <li className="footer-link-item">
                <a href="https://www.sspacia.com" target="_blank" rel="noreferrer">
                  <ChevronRight size={14} color="var(--corp-maroon)" />
                  <span>Sspacia Coworking</span>
                  <ExternalLink size={12} style={{ marginLeft: '4px' }} />
                </a>
              </li>
              <li className="footer-link-item">
                <Link to="/businesses">
                  <ChevronRight size={14} color="var(--corp-maroon)" />
                  <span>All Business Sectors</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Headquarters */}
          <div>
            <h4 className="footer-nav-col-title">Corporate Headquarters</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--corp-gold-light)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: 'var(--text-light-muted)', lineHeight: '1.5' }}>
                  6th Floor, Mercádo, Chimanlal Girdharlal Rd, opp. Municipal Market, Vasant Vihar, Ellisbridge, Ahmedabad, Gujarat 380009
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={16} color="var(--corp-gold-light)" style={{ flexShrink: 0 }} />
                <a href="mailto:praveen@shreeshyamgp.com" style={{ color: '#FFFFFF', fontWeight: 600 }}>
                  praveen@shreeshyamgp.com
                </a>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <Link to="/contact" className="btn-outline-corp" style={{ padding: '0.45rem 0.95rem', fontSize: '0.75rem' }}>
                  <span>Connect with Desk</span>
                  <span className="corp-arrow-box" style={{ width: '16px', height: '16px', fontSize: '0.6rem' }}>&gt;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} Shree Shyam Group of Companies. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link to="/about" style={{ color: 'var(--text-light-muted)' }}>Corporate Governance</Link>
            <Link to="/contact" style={{ color: 'var(--text-light-muted)' }}>Support & Inquiries</Link>
            <button 
              onClick={scrollToTop} 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#FFFFFF', fontWeight: 600, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              <span>Back to Top</span>
              <ArrowUp size={15} color="var(--corp-gold-light)" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
