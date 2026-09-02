import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSlider } from '../components/HeroSlider';
import { 
  ShieldCheck, 
  Building2, 
  LayoutGrid, 
  Award, 
  CheckCircle2, 
  Users, 
  ArrowRight, 
  FileText, 
  Globe2, 
  TrendingUp, 
  HeartHandshake,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="page-transition-enter">
      {/* 01: Hero Carousel Section */}
      <HeroSlider />

      {/* 02: Conglomerate Stats Ribbon Matrix (Zero overlap, fully visible) */}
      <div className="container" style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
        <div className="stats-ribbon-grid" style={{ marginTop: 0 }}>
          {/* Stat 1 */}
          <div className="stat-card-item">
            <div className="stat-number-val">0</div>
            <div className="stat-label-val">GeM Govt Tenders & Supplies</div>
            <div className="stat-sub-text">Fulfilling critical public sector orders pan-India</div>
          </div>

          {/* Stat 2 */}
          <div className="stat-card-item">
            <div className="stat-number-val">0</div>
            <div className="stat-label-val">Sq. Ft. Built & Developed</div>
            <div className="stat-sub-text">Commercial towers and residential landmarks</div>
          </div>

          {/* Stat 3 */}
          <div className="stat-card-item">
            <div className="stat-number-val">0</div>
            <div className="stat-label-val">Sspacia Workspace Seats</div>
            <div className="stat-sub-text">Flexible corporate cabins & modern workstations</div>
          </div>

          {/* Stat 4 */}
          <div className="stat-card-item">
            <div className="stat-number-val">0</div>
            <div className="stat-label-val">Years Group Legacy</div>
            <div className="stat-sub-text">Founded on principles of integrity and excellence</div>
          </div>
        </div>
      </div>

      {/* 03: Executive Vision & Founding Philosophy */}
      <section className="section-padding chairman-quote-section" style={{ marginTop: '4rem' }}>
        <div className="container">
          <div className="chairman-quote-grid">
            <div className="chairman-portrait-wrap">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85" 
                alt="Executive Boardroom & Leadership" 
                className="chairman-portrait-img"
              />
              <div className="chairman-portrait-caption">
                <div className="chairman-name">Shree Shyam Group Leadership</div>
                <div className="chairman-title">Executive Board & Founding Vision</div>
              </div>
            </div>

            <div>
              <span className="section-eyebrow">Chairman's Perspective</span>
              <div className="quote-mark">“</div>
              <blockquote className="quote-statement">
                Our relentless pursuit is to build sustainable enterprise value by bridging government procurement excellence, enduring infrastructure, and modern collaborative spaces.
              </blockquote>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
                Founded by <strong>Dilip Agarwal</strong>, Shree Shyam Group has grown into a versatile multi-sector enterprise. From securing strategic public supplies through the Government e-Marketplace (GeM) led by <strong>Abhishekh Agarwal</strong>, to developing landmark real estate projects under <strong>Komal Agarwal</strong>, and pioneering modern workspace ecosystems at <strong>Sspacia Coworking</strong> founded by <strong>Praveen Agarwal</strong>, we create lasting economic and social impact.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn-primary-corp">
                  <span>Read Our Group Story</span>
                  <span className="corp-arrow-box">&gt;</span>
                </Link>
                <Link to="/about#leadership" className="btn-outline-dark">
                  <span>Meet Executive Board</span>
                  <span className="corp-arrow-box">&gt;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04: Our Core Businesses / Sectors Showcase */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="section-eyebrow">Core Businesses</span>
              <h2 className="section-heading-lg">Diversified Industry Sectors</h2>
              <p className="section-desc-lg">
                Operating high-performance divisions across public procurement, turnkey civil engineering, and enterprise coworking environments.
              </p>
            </div>

            <Link to="/businesses" className="btn-outline-dark">
              <span>View All Sectors</span>
              <span className="corp-arrow-box">&gt;</span>
            </Link>
          </div>

          <div className="sector-grid-layout">
            {/* Sector 1: GeM Portal (Simple grounded photo - no ships) */}
            {/* Sector 1: GeM Portal with official GeM Logo */}
            <div className="sector-corp-card">
              <div className="sector-img-container" style={{ background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
                <img 
                  src="/gem-logo.png" 
                  alt="GeM Government e-Marketplace" 
                  style={{ maxHeight: '180px', maxWidth: '85%', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }}
                />
                <span className="sector-tag-pill">Division 01 • Public Sector</span>
              </div>

              <div className="sector-card-body">
                <h3 className="sector-card-title">GeM Portal Orders & Govt Supplies</h3>
                <p className="sector-card-desc">
                  Registered and verified vendor on the Government e-Marketplace (GeM). We specialize in supply chain fulfillment, OEM goods delivery, custom bidding, and certified equipment for central & state ministries, defense, and PSUs.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-dark-secondary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--corp-maroon)" />
                    <span>L1 Competitive Tender Bidding</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--corp-maroon)" />
                    <span>Pan-India Logistics & Delivery</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--corp-maroon)" />
                    <span>Strict Govt Audit & GST Compliance</span>
                  </div>
                </div>

                <Link to="/businesses#gem" className="sector-explore-btn">
                  <span>Explore GeM Division</span>
                  <span className="corp-arrow-box">&gt;</span>
                </Link>
              </div>
            </div>

            {/* Sector 2: Construction (Reliable clean building architecture photo) */}
            <div className="sector-corp-card">
              <div className="sector-img-container">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                  alt="Construction and Real Estate Infrastructure" 
                  className="sector-main-img"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <span className="sector-tag-pill">Division 02 • Real Estate</span>
              </div>

              <div className="sector-card-body">
                <h3 className="sector-card-title">Construction & Infrastructure</h3>
                <p className="sector-card-desc">
                  Delivering premier commercial spaces, institutional developments, and modern residential structures. Led by Director Komal Agarwal, our construction division emphasizes architectural excellence, structural safety, and precision execution.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-dark-secondary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--corp-maroon)" />
                    <span>Turnkey Civil Engineering</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--corp-maroon)" />
                    <span>Commercial & Office Buildings</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--corp-maroon)" />
                    <span>Premium Structural Materials</span>
                  </div>
                </div>

                <Link to="/businesses#construction" className="sector-explore-btn">
                  <span>Explore Construction</span>
                  <span className="corp-arrow-box">&gt;</span>
                </Link>
              </div>
            </div>

            {/* Sector 3: Sspacia Coworking (Actual Sspacia photo from sspacia-site) */}
            <div className="sector-corp-card">
              <div className="sector-img-container">
                <img 
                  src="/sspacia/MERCADO 4-SEATER CABIN.jpg" 
                  alt="Sspacia Coworking Spaces" 
                  className="sector-main-img"
                />
                <span className="sector-tag-pill">Division 03 • Workspaces</span>
              </div>

              <div className="sector-card-body">
                <h3 className="sector-card-title">Sspacia Coworking Spaces</h3>
                <p className="sector-card-desc">
                  Founded by Praveen Agarwal, Sspacia provides premium flexible workspace solutions, custom corporate office suites, meeting rooms, and high-speed enterprise connectivity for startups and established enterprises.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-dark-secondary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--corp-maroon)" />
                    <span>Private Corporate Cabins & Desks</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--corp-maroon)" />
                    <span>High-Speed Optical Fiber Internet</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--corp-maroon)" />
                    <span>Prime Commercial Locations</span>
                  </div>
                </div>

                <a 
                  href="https://www.sspacia.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="sector-explore-btn"
                >
                  <span>Visit Sspacia Platform</span>
                  <ExternalLink size={14} style={{ marginLeft: 'auto' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05: Values & Purpose ("A Force for Good" Aditya Birla Style) */}
      <section className="section-padding" style={{ background: 'var(--bg-platinum)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>Group Values</span>
            <h2 className="section-heading-lg">Principles That Drive Our Growth</h2>
            <p className="section-desc-lg" style={{ margin: '0 auto' }}>
              At Shree Shyam Group, corporate integrity, operational speed, and social responsibility define every project and government partnership.
            </p>
          </div>

          <div className="values-grid">
            {/* Value 1 */}
            <div className="value-card">
              <div className="value-icon-box">
                <ShieldCheck size={28} />
              </div>
              <h4 className="value-card-title">Uncompromising Integrity</h4>
              <p className="value-card-desc">
                Adhering to the highest standards of transparency, statutory compliance, and ethical contracting across all operations.
              </p>
            </div>

            {/* Value 2 */}
            <div className="value-card">
              <div className="value-icon-box">
                <Award size={28} />
              </div>
              <h4 className="value-card-title">Execution Excellence</h4>
              <p className="value-card-desc">
                Delivering verified quality materials in public procurement and unmatched durability in structural engineering.
              </p>
            </div>

            {/* Value 3 */}
            <div className="value-card">
              <div className="value-icon-box">
                <TrendingUp size={28} />
              </div>
              <h4 className="value-card-title">Agility & Innovation</h4>
              <p className="value-card-desc">
                Rapidly adapting to modern industry demands, digital GeM bidding mechanisms, and flexible workspace evolution.
              </p>
            </div>

            {/* Value 4 */}
            <div className="value-card">
              <div className="value-icon-box">
                <HeartHandshake size={28} />
              </div>
              <h4 className="value-card-title">Nation Building</h4>
              <p className="value-card-desc">
                Supporting governmental departments, public sector infrastructure, and empowering emerging businesses with workspace hubs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06: Executive Leadership Spotlight */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="section-eyebrow">Governance & Leadership</span>
              <h2 className="section-heading-lg">Meet Our Executive Board</h2>
              <p className="section-desc-lg">
                The visionary leadership guiding Shree Shyam Group across commerce, procurement, and workspace innovation.
              </p>
            </div>

            <Link to="/about#leadership" className="btn-outline-dark">
              <span>Full Leadership Team</span>
              <span className="corp-arrow-box">&gt;</span>
            </Link>
          </div>

          <div className="leaders-board-grid">
            {/* Leader 1: Dilip Agarwal */}
            <div className="leader-corp-card">
              <div className="leader-photo-box">
                <img 
                  src="/images/dilip-agarwal.jpg" 
                  alt="Dilip Agarwal"
                  className="leader-photo-img"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      const placeholder = parent.querySelector('.leader-photo-placeholder') as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }
                  }}
                />
                <div className="leader-photo-placeholder" style={{ display: 'none' }}>
                  <Users size={48} color="var(--corp-gold-light)" />
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Executive Portrait</span>
                </div>
              </div>
              <div className="leader-details-body">
                <span className="leader-badge-tag">Group Founder</span>
                <h3 className="leader-full-name">Dilip Agarwal</h3>
                <div className="leader-corporate-role">Founder & Visionary</div>
                <p className="leader-bio-summary">
                  Founding pillar who established the core values, commercial ethics, and strategic foundations of Shree Shyam Group.
                </p>
              </div>
            </div>

            {/* Leader 2: Praveen Agarwal */}
            <div className="leader-corp-card">
              <div className="leader-photo-box">
                <img 
                  src="/images/praveen-agarwal.jpg" 
                  alt="Praveen Agarwal"
                  className="leader-photo-img"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      const placeholder = parent.querySelector('.leader-photo-placeholder') as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }
                  }}
                />
                <div className="leader-photo-placeholder" style={{ display: 'none' }}>
                  <LayoutGrid size={48} color="var(--corp-gold-light)" />
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Executive Portrait</span>
                </div>
              </div>
              <div className="leader-details-body">
                <span className="leader-badge-tag">Workspaces Lead</span>
                <h3 className="leader-full-name">Praveen Agarwal</h3>
                <div className="leader-corporate-role">Director & Founder of Sspacia</div>
                <p className="leader-bio-summary">
                  Director of Shree Shyam Group and visionary Founder of Sspacia Coworking Spaces, driving next-generation managed offices.
                </p>
              </div>
            </div>

            {/* Leader 3: Abhishekh Agarwal */}
            <div className="leader-corp-card">
              <div className="leader-photo-box">
                <img 
                  src="/images/abhishekh-agarwal.jpg" 
                  alt="Abhishekh Agarwal"
                  className="leader-photo-img"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      const placeholder = parent.querySelector('.leader-photo-placeholder') as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }
                  }}
                />
                <div className="leader-photo-placeholder" style={{ display: 'none' }}>
                  <ShieldCheck size={48} color="var(--corp-gold-light)" />
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Executive Portrait</span>
                </div>
              </div>
              <div className="leader-details-body">
                <span className="leader-badge-tag">GeM Operations Lead</span>
                <h3 className="leader-full-name">Abhishekh Agarwal</h3>
                <div className="leader-corporate-role">Director (GeM & Govt Supplies)</div>
                <p className="leader-bio-summary">
                  Executive director spearheading GeM portal procurement, national tender participation, and public sector partnerships.
                </p>
              </div>
            </div>

            {/* Leader 4: Komal Agarwal */}
            <div className="leader-corp-card">
              <div className="leader-photo-box">
                <img 
                  src="/images/komal-agarwal.jpg" 
                  alt="Komal Agarwal"
                  className="leader-photo-img"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      const placeholder = parent.querySelector('.leader-photo-placeholder') as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }
                  }}
                />
                <div className="leader-photo-placeholder" style={{ display: 'none' }}>
                  <Building2 size={48} color="var(--corp-gold-light)" />
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Executive Portrait</span>
                </div>
              </div>
              <div className="leader-details-body">
                <span className="leader-badge-tag">Construction Lead</span>
                <h3 className="leader-full-name">Komal Agarwal</h3>
                <div className="leader-corporate-role">Director (Construction & Infra)</div>
                <p className="leader-bio-summary">
                  Executive director overseeing turnkey project execution, real estate development, and structural engineering standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07: High-Impact Corporate Collaboration Callout Banner */}
      <section style={{ 
        padding: '5rem 0', 
        background: 'linear-gradient(135deg, #0B1120 0%, #1E293B 100%)', 
        borderTop: '3px solid var(--corp-maroon)', 
        position: 'relative',
        color: '#FFFFFF'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '840px' }}>
          <span className="section-eyebrow" style={{ color: 'var(--corp-gold-light)', justifyContent: 'center' }}>
            Corporate Partnership
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
            Partner with Shree Shyam Group
          </h2>
          <p style={{ color: 'var(--text-light-muted)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
            Whether you represent a Government Department or PSU seeking reliable GeM portal supplies, an enterprise requiring turnkey construction, or a business looking for premium workspace at Sspacia, our executive team is prepared to deliver.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary-corp">
              <span>Send Corporate Inquiry</span>
              <span className="corp-arrow-box">&gt;</span>
            </Link>
            <Link to="/about" className="btn-outline-corp">
              <span>About Leadership & Vision</span>
              <span className="corp-arrow-box">&gt;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
