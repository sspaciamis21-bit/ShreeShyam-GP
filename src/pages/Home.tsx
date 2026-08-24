import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Building2, 
  LayoutGrid, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Users, 
  Briefcase, 
  ChevronRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow"></div>
        <div className="hero-glow-secondary"></div>
        
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="badge badge-skyblue" style={{ marginBottom: '1rem' }}>
                <span className="pulse-dot"></span>
                <span>Empowering Business Excellence & Government Partnerships</span>
              </div>

              <h1 className="hero-title">
                Building Futures. <br />
                <span className="gradient-skyblue-text">Empowering Growth.</span>
              </h1>

              <p className="hero-subtitle">
                Shree Shyam Group of Companies is a multi-sector corporate group specializing in official <strong>GeM (Government e-Marketplace) portal orders & government supplies</strong>, landmark <strong>construction & infrastructure projects</strong>, and managed workspaces through <strong>Sspacia Coworking</strong>.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/businesses" className="btn btn-primary">
                  <span>Explore Our Businesses</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/about" className="btn btn-outline">
                  <span>About Leadership</span>
                </Link>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={16} color="var(--accent-skyblue)" />
                  <span>Authorized GeM Seller</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={16} color="var(--accent-skyblue)" />
                  <span>Turnkey Construction</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={16} color="var(--accent-skyblue)" />
                  <span>Sspacia Workspaces</span>
                </div>
              </div>
            </div>

            {/* Visual Hero Feature Box */}
            <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--border-skyblue)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem' }}>Three Pillars of Enterprise</h3>
                <span className="badge badge-royal">Group Structure</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Division 1: GeM */}
                <div style={{ padding: '1.1rem', background: 'rgba(2, 132, 199, 0.06)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(2, 132, 199, 0.2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                    <ShieldCheck size={20} color="#0284c7" />
                    <h4 style={{ fontSize: '1rem', color: '#0284c7' }}>GeM Portal & Govt Supplies</h4>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Bidding, procurement, and seamless supply of certified goods & services to Government departments and PSUs.
                  </p>
                </div>

                {/* Division 2: Construction */}
                <div style={{ padding: '1.1rem', background: 'rgba(217, 119, 6, 0.06)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(217, 119, 6, 0.2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                    <Building2 size={20} color="#d97706" />
                    <h4 style={{ fontSize: '1rem', color: '#d97706' }}>Construction & Infrastructure</h4>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Architectural engineering, commercial buildings, residential real estate, and urban infrastructure developments.
                  </p>
                </div>

                {/* Division 3: Sspacia */}
                <div style={{ padding: '1.1rem', background: 'rgba(126, 34, 206, 0.06)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(126, 34, 206, 0.2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                    <LayoutGrid size={20} color="#7e22ce" />
                    <h4 style={{ fontSize: '1rem', color: '#7e22ce' }}>Sspacia Coworking Spaces</h4>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Modern flexible workspaces, private corporate cabins, and thriving enterprise community hubs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Group Stats Ribbon */}
          <div className="glass-card stats-ribbon" style={{ marginTop: '4rem' }}>
            <div className="stat-item">
              <div className="stat-number">0</div>
              <div className="stat-label">GeM Govt Tenders & Orders</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">0</div>
              <div className="stat-label">Sq. Ft. Built & Developed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">0</div>
              <div className="stat-label">Sspacia Workstation Seats</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">0</div>
              <div className="stat-label">Years Group Legacy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Divisions Overview Section */}
      <section style={{ padding: '4.5rem 0', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <span className="badge badge-skyblue" style={{ marginBottom: '0.75rem' }}>Our Core Competencies</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>Diversified Industry Leadership</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              From fulfilling crucial government procurement through GeM portal to constructing modern urban infrastructure and curating workspace ecosystems.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '2rem' }}>
            {/* Card 1: GeM Portal */}
            <div className="glass-card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', marginBottom: '1.5rem' }}>
                <ShieldCheck size={28} />
              </div>
              <span className="badge badge-skyblue" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>Government e-Marketplace</span>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>GeM Vendor & Supply Operations</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', flexGrow: 1, marginBottom: '1.5rem', lineHeight: '1.6' }}>
                We are registered and verified GeM portal vendors supplying high-quality goods, specialized equipment, and contract services directly to central & state government bodies, defense, and public sector undertakings (PSUs).
              </p>
              <Link to="/businesses#gem" className="btn btn-outline btn-sm" style={{ alignSelf: 'flex-start' }}>
                <span>Learn GeM Operations</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 2: Construction */}
            <div className="glass-card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(217, 119, 6, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24', marginBottom: '1.5rem' }}>
                <Building2 size={28} />
              </div>
              <span className="badge badge-amber" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>Real Estate & Civil Contracting</span>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Construction & Infrastructure</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', flexGrow: 1, marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Delivering high-performance commercial spaces, residential complexes, and civil infrastructure. Our construction division guarantees timely completion, structural precision, and modern architectural standards.
              </p>
              <Link to="/businesses#construction" className="btn btn-outline btn-sm" style={{ alignSelf: 'flex-start' }}>
                <span>View Construction Projects</span>
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 3: Sspacia */}
            <div className="glass-card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(147, 51, 234, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c084fc', marginBottom: '1.5rem' }}>
                <LayoutGrid size={28} />
              </div>
              <span className="badge badge-purple" style={{ alignSelf: 'flex-start', marginBottom: '0.75rem' }}>Founded by Praveen Agarwal</span>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>Sspacia Coworking Spaces</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', flexGrow: 1, marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Founded by Praveen Agarwal, Sspacia provides premium flexible workspace solutions, custom corporate office suites, meeting rooms, and high-speed enterprise connectivity for startups and established enterprises.
              </p>
              <a href="https://www.sspacia.com" target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" style={{ alignSelf: 'flex-start' }}>
                <span>Visit Sspacia Website</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Spotlight Teaser */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge badge-skyblue" style={{ marginBottom: '0.5rem' }}>Visionary Leadership</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.25rem)' }}>Guided by Experience & Enterprise</h2>
            </div>
            <Link to="/about" className="btn btn-outline">
              <span>Meet Full Executive Team</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {/* Dilip Agarwal */}
            <div className="glass-card leader-card">
              <div className="avatar-wrapper">
                <div className="avatar-placeholder">
                  <Users size={44} />
                </div>
              </div>
              <h3 className="leader-name">Dilip Agarwal</h3>
              <div className="leader-title">Founder</div>
              <p className="leader-bio">Visionary leader behind the establishment and foundational growth of Shree Shyam Group across industries.</p>
            </div>

            {/* Praveen Agarwal */}
            <div className="glass-card leader-card">
              <div className="avatar-wrapper" style={{ borderColor: '#c084fc' }}>
                <div className="avatar-placeholder" style={{ color: '#c084fc' }}>
                  <LayoutGrid size={44} />
                </div>
              </div>
              <h3 className="leader-name">Praveen Agarwal</h3>
              <div className="leader-title" style={{ color: '#c084fc' }}>Director & Founder of Sspacia</div>
              <p className="leader-bio">Director of Shree Shyam Group and Founder of Sspacia Coworking Spaces, driving workspace innovation.</p>
            </div>

            {/* Abhishekh Agarwal */}
            <div className="glass-card leader-card">
              <div className="avatar-wrapper" style={{ borderColor: '#38bdf8' }}>
                <div className="avatar-placeholder" style={{ color: '#38bdf8' }}>
                  <ShieldCheck size={44} />
                </div>
              </div>
              <h3 className="leader-name">Abhishekh Agarwal</h3>
              <div className="leader-title" style={{ color: '#38bdf8' }}>Director</div>
              <p className="leader-bio">Key executive overseeing group business expansion, GeM tender strategy, and operational performance.</p>
            </div>

            {/* Komal Agarwal */}
            <div className="glass-card leader-card">
              <div className="avatar-wrapper" style={{ borderColor: '#fbbf24' }}>
                <div className="avatar-placeholder" style={{ color: '#fbbf24' }}>
                  <Building2 size={44} />
                </div>
              </div>
              <h3 className="leader-name">Komal Agarwal</h3>
              <div className="leader-title" style={{ color: '#fbbf24' }}>Director</div>
              <p className="leader-bio">Director leading strategic partnerships, construction execution standards, and business growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Callout */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(56, 189, 248, 0.1) 100%)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>Partner with Shree Shyam Group</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            Whether you need GeM portal procurement fulfillment, construction project execution, or flexible workspace cabins at Sspacia, our team is ready to deliver excellence.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              <span>Send Business Inquiry</span>
              <ArrowRight size={18} />
            </Link>
            <a href="tel:+917600393779" className="btn btn-outline">
              <span>Call Corporate Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
