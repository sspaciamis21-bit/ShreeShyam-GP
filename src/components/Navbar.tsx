import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Sun, Moon, Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={toggleTheme} 
            className="btn btn-outline btn-sm" 
            title="Toggle theme"
            style={{ padding: '0.5rem', borderRadius: '50%' }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link to="/contact" className="btn btn-gold btn-sm desk-only">
            <span>Inquire Now</span>
            <ArrowUpRight size={16} />
          </Link>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <NavLink to="/" onClick={() => setMobileOpen(false)} className="nav-link">Home</NavLink>
          <NavLink to="/about" onClick={() => setMobileOpen(false)} className="nav-link">About Us</NavLink>
          <NavLink to="/businesses" onClick={() => setMobileOpen(false)} className="nav-link">Our Businesses</NavLink>
          <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="nav-link">Contact Us</NavLink>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn btn-gold" style={{ marginTop: '0.5rem' }}>
            <PhoneCall size={16} />
            <span>Contact Office</span>
          </Link>
        </div>
      )}
    </header>
  );
};
