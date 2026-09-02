import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  Building2, 
  LayoutGrid, 
  Users, 
  Award, 
  FileCheck
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const q = searchQuery.toLowerCase();
    setSearchOpen(false);
    setSearchQuery('');
    
    if (q.includes('gem') || q.includes('gov') || q.includes('tender') || q.includes('supply')) {
      navigate('/businesses#gem');
    } else if (q.includes('construct') || q.includes('building') || q.includes('infra') || q.includes('estate')) {
      navigate('/businesses#construction');
    } else if (q.includes('sspacia') || q.includes('cowork') || q.includes('space') || q.includes('desk') || q.includes('office')) {
      navigate('/businesses#sspacia');
    } else if (q.includes('dilip') || q.includes('praveen') || q.includes('abhishekh') || q.includes('komal') || q.includes('leader') || q.includes('about')) {
      navigate('/about');
    } else {
      navigate('/contact');
    }
  };

  return (
    <>
      <header className={`corp-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="corp-header-inner">
            {/* Logo Brand Area */}
            <Link to="/" className="header-logo-container" onClick={() => setMobileOpen(false)}>
              <div className="header-logo-badge">
                <Logo size="sm" height={38} />
              </div>
              <div className="header-brand-text">
                <span className="header-brand-title">Shree Shyam</span>
                <span className="header-brand-sub">Group of Companies</span>
              </div>
            </Link>

            {/* Desktop Navigation with Aditya Birla Style Mega Menus */}
            <nav>
              <ul className="corp-nav-list">
                {/* 01: Home */}
                <li className="corp-nav-item">
                  <NavLink to="/" className={({ isActive }) => `corp-nav-link ${isActive ? 'active' : ''}`}>
                    Home
                  </NavLink>
                </li>

                {/* 02: Our Story (With Mega Menu) */}
                <li className="corp-nav-item">
                  <NavLink to="/about" className={({ isActive }) => `corp-nav-link ${isActive ? 'active' : ''}`}>
                    <span>Our Story</span>
                    <span className="nav-chevron">⌄</span>
                  </NavLink>

                  <div className="corp-mega-menu">
                    <div className="mega-menu-content mega-grid-3">
                      {/* Card 1: Legacy */}
                      <Link to="/about#legacy" className="mega-card">
                        <div className="mega-card-img-wrap">
                          <img 
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80" 
                            alt="Group Legacy" 
                            className="mega-card-img"
                          />
                        </div>
                        <div className="mega-card-body">
                          <h4 className="mega-card-title">Legacy & Heritage</h4>
                          <p className="mega-card-desc">Decades of foundational enterprise guided by ethical leadership and commercial trust.</p>
                          <span className="mega-card-arrow">
                            <span>Explore</span>
                            <span className="mega-arrow-box">&gt;</span>
                          </span>
                        </div>
                      </Link>

                      {/* Card 2: Leadership */}
                      <Link to="/about#leadership" className="mega-card">
                        <div className="mega-card-img-wrap">
                          <img 
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80" 
                            alt="Executive Leadership" 
                            className="mega-card-img"
                          />
                        </div>
                        <div className="mega-card-body">
                          <h4 className="mega-card-title">Board of Directors</h4>
                          <p className="mega-card-desc">Meet Dilip Agarwal, Praveen Agarwal, Abhishekh Agarwal & Komal Agarwal.</p>
                          <span className="mega-card-arrow">
                            <span>Meet Leaders</span>
                            <span className="mega-arrow-box">&gt;</span>
                          </span>
                        </div>
                      </Link>

                      {/* Card 3: Values */}
                      <Link to="/about#values" className="mega-card">
                        <div className="mega-card-img-wrap">
                          <img 
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=400&q=80" 
                            alt="Values & Purpose" 
                            className="mega-card-img"
                          />
                        </div>
                        <div className="mega-card-body">
                          <h4 className="mega-card-title">Vision & Purpose</h4>
                          <p className="mega-card-desc">Delivering excellence, nation building, and customer value across every vertical.</p>
                          <span className="mega-card-arrow">
                            <span>Our Values</span>
                            <span className="mega-arrow-box">&gt;</span>
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </li>

                {/* 03: Our Businesses (With Mega Menu) */}
                <li className="corp-nav-item">
                  <NavLink to="/businesses" className={({ isActive }) => `corp-nav-link ${isActive ? 'active' : ''}`}>
                    <span>Our Businesses</span>
                    <span className="nav-chevron">⌄</span>
                  </NavLink>

                  <div className="corp-mega-menu">
                    <div className="mega-menu-content mega-grid-3">
                      {/* Business 1: GeM */}
                      <Link to="/businesses#gem" className="mega-card">
                        <div className="mega-card-img-wrap" style={{ background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem' }}>
                          <img 
                            src="/gem-logo.png" 
                            alt="GeM Government Supplies" 
                            style={{ maxHeight: '90px', maxWidth: '85%', objectFit: 'contain', display: 'block' }}
                          />
                        </div>
                        <div className="mega-card-body">
                          <h4 className="mega-card-title">GeM Govt Supplies</h4>
                          <p className="mega-card-desc">Official Government e-Marketplace verified vendor for pan-India supplies and PSU orders.</p>
                          <span className="mega-card-arrow">
                            <span>GeM Portal</span>
                            <span className="mega-arrow-box">&gt;</span>
                          </span>
                        </div>
                      </Link>

                      {/* Business 2: Construction */}
                      <Link to="/businesses#construction" className="mega-card">
                        <div className="mega-card-img-wrap">
                          <img 
                            src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=400&q=80" 
                            alt="Construction Projects" 
                            className="mega-card-img"
                          />
                        </div>
                        <div className="mega-card-body">
                          <h4 className="mega-card-title">Construction & Infra</h4>
                          <p className="mega-card-desc">Commercial towers, residential infrastructure, and turnkey civil contracting.</p>
                          <span className="mega-card-arrow">
                            <span>View Projects</span>
                            <span className="mega-arrow-box">&gt;</span>
                          </span>
                        </div>
                      </Link>

                      {/* Business 3: Sspacia */}
                      <Link to="/businesses#sspacia" className="mega-card">
                        <div className="mega-card-img-wrap">
                          <img 
                            src="/sspacia/MERCADO 4-SEATER CABIN.jpg" 
                            alt="Sspacia Coworking" 
                            className="mega-card-img"
                          />
                        </div>
                        <div className="mega-card-body">
                          <h4 className="mega-card-title">Sspacia Workspaces</h4>
                          <p className="mega-card-desc">Founded by Praveen Agarwal: premium managed offices, cabins, and flexible workstations.</p>
                          <span className="mega-card-arrow">
                            <span>Workspaces</span>
                            <span className="mega-arrow-box">&gt;</span>
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </li>

                {/* 04: Contact Us */}
                <li className="corp-nav-item">
                  <NavLink to="/contact" className={({ isActive }) => `corp-nav-link ${isActive ? 'active' : ''}`}>
                    Contact Desk
                  </NavLink>
                </li>
              </ul>
            </nav>

            {/* Header Actions: Search Trigger & Inquire CTA */}
            <div className="corp-header-actions">
              <button 
                className="search-trigger-btn" 
                onClick={() => setSearchOpen(true)}
                aria-label="Search website"
                title="Search website"
              >
                <Search size={20} />
              </button>

              <Link to="/contact" className="btn-header-inquire desk-only">
                <span>Direct Inquire</span>
                <span className="corp-arrow-box" style={{ width: '16px', height: '16px', fontSize: '0.6rem' }}>&gt;</span>
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button 
                className="mobile-menu-btn"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Global Search Modal */}
      {searchOpen && (
        <div className="search-modal-backdrop" onClick={() => setSearchOpen(false)}>
          <div className="search-modal-box" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearchSubmit} className="search-input-wrap">
              <Search size={22} color="var(--corp-maroon)" style={{ marginRight: '1rem' }} />
              <input 
                type="text" 
                autoFocus
                placeholder="Search businesses, GeM supplies, directors, Sspacia..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input-field"
              />
              <button 
                type="button" 
                onClick={() => setSearchOpen(false)}
                style={{ padding: '0.5rem', color: 'var(--text-dark-muted)' }}
              >
                <X size={22} />
              </button>
            </form>
            <div className="search-results-list">
              <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--text-dark-muted)', marginBottom: '1rem' }}>
                Quick Corporate Links:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <button 
                  type="button"
                  onClick={() => { setSearchOpen(false); navigate('/businesses#gem'); }}
                  className="btn-outline-dark" 
                  style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
                >
                  GeM Govt Supplies
                </button>
                <button 
                  type="button"
                  onClick={() => { setSearchOpen(false); navigate('/businesses#construction'); }}
                  className="btn-outline-dark" 
                  style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
                >
                  Construction Projects
                </button>
                <button 
                  type="button"
                  onClick={() => { setSearchOpen(false); navigate('/businesses#sspacia'); }}
                  className="btn-outline-dark" 
                  style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
                >
                  Sspacia Coworking
                </button>
                <button 
                  type="button"
                  onClick={() => { setSearchOpen(false); navigate('/about#leadership'); }}
                  className="btn-outline-dark" 
                  style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
                >
                  Board of Directors
                </button>
                <button 
                  type="button"
                  onClick={() => { setSearchOpen(false); navigate('/contact'); }}
                  className="btn-outline-dark" 
                  style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
                >
                  Corporate Office Desk
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div className="mobile-drawer-backdrop" onClick={() => setMobileOpen(false)} />
          <div className={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ background: '#FFFFFF', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
                  <Logo size="sm" height={28} />
                </div>
                <span style={{ color: '#FFFFFF', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.95rem' }}>Shree Shyam</span>
              </div>
              <button onClick={() => setMobileOpen(false)} style={{ color: '#FFFFFF', padding: '0.4rem' }}>
                <X size={24} />
              </button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <NavLink 
                to="/" 
                onClick={() => setMobileOpen(false)} 
                className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`}
              >
                <span>Home</span>
                <span className="corp-arrow-box">&gt;</span>
              </NavLink>

              <NavLink 
                to="/about" 
                onClick={() => setMobileOpen(false)} 
                className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`}
              >
                <span>Our Story & Leadership</span>
                <span className="corp-arrow-box">&gt;</span>
              </NavLink>

              <NavLink 
                to="/businesses" 
                onClick={() => setMobileOpen(false)} 
                className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`}
              >
                <span>Our Businesses (GeM / Real Estate / Sspacia)</span>
                <span className="corp-arrow-box">&gt;</span>
              </NavLink>

              <NavLink 
                to="/contact" 
                onClick={() => setMobileOpen(false)} 
                className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`}
              >
                <span>Contact Corporate Desk</span>
                <span className="corp-arrow-box">&gt;</span>
              </NavLink>
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <Link 
                to="/contact" 
                onClick={() => setMobileOpen(false)}
                className="btn-primary-corp" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <PhoneCall size={16} />
                <span>Executive Office Desk</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};
