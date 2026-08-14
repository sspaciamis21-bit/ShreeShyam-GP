import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, PhoneCall, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container navbar">
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About Us
          </NavLink>
          <NavLink to="/businesses" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Our Businesses
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact Us
          </NavLink>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link to="/contact" className="btn btn-primary btn-sm desk-only">
            <span>Inquire Now</span>
            <ArrowUpRight size={16} />
          </Link>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay Drawer */}
      {mobileOpen && (
        <div className="mobile-nav-overlay">
          <NavLink 
            to="/" 
            onClick={() => setMobileOpen(false)} 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          >
            <span>Home</span>
            <ChevronRight size={18} />
          </NavLink>

          <NavLink 
            to="/about" 
            onClick={() => setMobileOpen(false)} 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          >
            <span>About Us</span>
            <ChevronRight size={18} />
          </NavLink>

          <NavLink 
            to="/businesses" 
            onClick={() => setMobileOpen(false)} 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          >
            <span>Our Businesses</span>
            <ChevronRight size={18} />
          </NavLink>

          <NavLink 
            to="/contact" 
            onClick={() => setMobileOpen(false)} 
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
          >
            <span>Contact Us</span>
            <ChevronRight size={18} />
          </NavLink>

          <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn btn-primary" style={{ width: '100%' }}>
              <PhoneCall size={18} />
              <span>Contact Office Desk</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

