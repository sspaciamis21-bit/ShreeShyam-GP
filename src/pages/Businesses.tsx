import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Building2, 
  LayoutGrid, 
  FileText, 
  Truck, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight,
  Sparkles,
  PhoneCall,
  Clock,
  Layers,
  Award,
  Briefcase,
  Users
} from 'lucide-react';

export const Businesses: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'all' | 'gem' | 'construction' | 'sspacia'>('all');

  useEffect(() => {
    if (location.hash === '#gem') {
      setActiveTab('gem');
    } else if (location.hash === '#construction') {
      setActiveTab('construction');
    } else if (location.hash === '#sspacia') {
      setActiveTab('sspacia');
    }
  }, [location.hash]);

  return (
    <div className="page-transition-enter">
      {/* Banner */}
      <section style={{ 
        padding: '7.5rem 0 4.5rem', 
        background: 'linear-gradient(135deg, #0B1120 0%, #1E293B 100%)', 
        color: '#FFFFFF',
        borderBottom: '3px solid var(--corp-maroon)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="section-eyebrow" style={{ color: 'var(--corp-gold-light)' }}>
              Business Portfolios
            </span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', lineHeight: 1.15 }}>
              Our Sectors of Industry Leadership
            </h1>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.15rem', lineHeight: '1.7' }}>
              From securing and fulfilling critical public procurement via the official GeM portal to crafting landmark real estate and inspiring workspaces at Sspacia.
            </p>
          </div>
        </div>
      </section>

      {/* Sector Explorer Section */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          {/* Aditya Birla Style Tab Navigation */}
          <div className="corp-tab-list">
            <button 
              onClick={() => setActiveTab('all')} 
              className={`corp-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            >
              All Business Divisions
            </button>
            <button 
              onClick={() => setActiveTab('gem')} 
              className={`corp-tab-btn ${activeTab === 'gem' ? 'active' : ''}`}
            >
              01 • GeM Govt Supplies
            </button>
            <button 
              onClick={() => setActiveTab('construction')} 
              className={`corp-tab-btn ${activeTab === 'construction' ? 'active' : ''}`}
            >
              02 • Construction & Infra
            </button>
            <button 
              onClick={() => setActiveTab('sspacia')} 
              className={`corp-tab-btn ${activeTab === 'sspacia' ? 'active' : ''}`}
            >
              03 • Sspacia Coworking
            </button>
          </div>

          {/* Division 01: GeM Portal Supplies (Simple clean photo - no ships) */}
          {(activeTab === 'all' || activeTab === 'gem') && (
            <div id="gem" className="tab-pane-transition" style={{ 
              marginBottom: '4rem', 
              background: '#FFFFFF', 
              border: '1px solid var(--border-light)', 
              borderRadius: 'var(--radius-sm)', 
              boxShadow: 'var(--shadow-subtle)',
              borderLeft: '5px solid var(--corp-maroon)',
              padding: '3rem 2.5rem'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--corp-maroon-subtle)', color: 'var(--corp-maroon)', padding: '0.35rem 0.85rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: 'var(--radius-xs)', marginBottom: '1.25rem' }}>
                    <ShieldCheck size={16} />
                    <span>Verified GeM Portal Vendor</span>
                  </div>

                  <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '1rem', lineHeight: 1.2 }}>
                    GeM Portal Services & Government Supplies
                  </h2>

                  <p style={{ fontSize: '1.025rem', color: 'var(--text-dark-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    Shree Shyam Group operates as a fully registered, verified, and audited vendor on the <strong>Government e-Marketplace (GeM)</strong> portal. Spearheaded by Director <strong>Abhishekh Agarwal</strong>, this division participates in competitive tender bids, OEM product deliveries, and customized procurement contracts for central & state ministries, defense organizations, and public sector undertakings (PSUs).
                  </p>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link to="/contact?type=gem" className="btn-primary-corp">
                      <span>Submit GeM Tender Inquiry</span>
                      <span className="corp-arrow-box">&gt;</span>
                    </Link>
                  </div>
                </div>

                <div style={{ 
                  background: '#FFFFFF', 
                  border: '1px solid var(--border-light)', 
                  borderRadius: 'var(--radius-sm)', 
                  padding: '2.5rem 2rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  height: '340px',
                  boxShadow: 'var(--shadow-subtle)'
                }}>
                  <img 
                    src="/gem-logo.png" 
                    alt="GeM Government e-Marketplace - Procurement Reimagined" 
                    style={{ 
                      maxHeight: '270px', 
                      maxWidth: '100%', 
                      width: 'auto', 
                      height: 'auto', 
                      objectFit: 'contain', 
                      display: 'block' 
                    }}
                  />
                </div>
              </div>

              {/* GeM Capabilities Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '2rem' }}>
                <div style={{ background: 'var(--bg-platinum)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
                  <FileText size={26} color="var(--corp-maroon)" style={{ marginBottom: '0.75rem' }} />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                    E-Tender Participation
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-dark-muted)', lineHeight: '1.55' }}>
                    End-to-end management of reverse auctions, proprietary bids, L1 pricing compliance, and technical eligibility submissions.
                  </p>
                </div>

                <div style={{ background: 'var(--bg-platinum)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
                  <Truck size={26} color="var(--corp-maroon)" style={{ marginBottom: '0.75rem' }} />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                    Pan-India Supply Logistics
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-dark-muted)', lineHeight: '1.55' }}>
                    Timely distribution of verified commercial goods, IT equipment, industrial consumables, and office infrastructure.
                  </p>
                </div>

                <div style={{ background: 'var(--bg-platinum)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
                  <ShieldCheck size={26} color="var(--corp-maroon)" style={{ marginBottom: '0.75rem' }} />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                    Statutory Audits & Quality
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-dark-muted)', lineHeight: '1.55' }}>
                    Full GST compliance, ISO-certified vendor verification, transparent billing, and 100% adherence to GeM portal terms.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Division 02: Construction & Infrastructure */}
          {(activeTab === 'all' || activeTab === 'construction') && (
            <div id="construction" className="tab-pane-transition" style={{ 
              marginBottom: '4rem', 
              background: '#FFFFFF', 
              border: '1px solid var(--border-light)', 
              borderRadius: 'var(--radius-sm)', 
              boxShadow: 'var(--shadow-subtle)',
              borderLeft: '5px solid var(--corp-gold)',
              padding: '3rem 2.5rem'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(197, 155, 39, 0.1)', color: 'var(--corp-gold-dark)', padding: '0.35rem 0.85rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: 'var(--radius-xs)', marginBottom: '1rem' }}>
                    <Building2 size={16} />
                    <span>Real Estate & Civil Contracting</span>
                  </div>

                  <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '1rem', lineHeight: 1.2 }}>
                    Construction & Civil Infrastructure
                  </h2>

                  <p style={{ fontSize: '1.025rem', color: 'var(--text-dark-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    Our construction division specializes in civil engineering, turnkey real estate developments, commercial complexes, and urban residential projects. Guided by Director <strong>Komal Agarwal</strong>, we deliver modern architectural design with structural integrity.
                  </p>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link to="/contact?type=construction" className="btn-primary-corp" style={{ background: 'var(--corp-slate)', borderColor: 'var(--corp-slate)' }}>
                      <span>Discuss Construction Project</span>
                      <span className="corp-arrow-box">&gt;</span>
                    </Link>
                  </div>
                </div>

                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=85" 
                    alt="Construction Architecture" 
                    style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-medium)' }}
                  />
                </div>
              </div>

              {/* Construction Features Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '2rem' }}>
                <div style={{ background: 'var(--bg-platinum)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
                  <Building2 size={26} color="var(--corp-gold-dark)" style={{ marginBottom: '0.75rem' }} />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                    Commercial Real Estate
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-dark-muted)', lineHeight: '1.55' }}>
                    High-performance business towers, retail centers, and executive offices built for optimal occupant capacity.
                  </p>
                </div>

                <div style={{ background: 'var(--bg-platinum)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
                  <Layers size={26} color="var(--corp-gold-dark)" style={{ marginBottom: '0.75rem' }} />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                    Turnkey Civil Execution
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-dark-muted)', lineHeight: '1.55' }}>
                    Complete lifecycle management from structural blueprinting and foundation casting to MEP installation and interior finishes.
                  </p>
                </div>

                <div style={{ background: 'var(--bg-platinum)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
                  <Award size={26} color="var(--corp-gold-dark)" style={{ marginBottom: '0.75rem' }} />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                    Structural Safety Standards
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-dark-muted)', lineHeight: '1.55' }}>
                    Highest grade reinforced materials, seismic engineering protocols, and strict environmental safety benchmarks.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Division 03: Sspacia Coworking (Actual Sspacia photo from sspacia-site) */}
          {(activeTab === 'all' || activeTab === 'sspacia') && (
            <div id="sspacia" className="tab-pane-transition" style={{ 
              marginBottom: '4rem', 
              background: '#FFFFFF', 
              border: '1px solid var(--border-light)', 
              borderRadius: 'var(--radius-sm)', 
              boxShadow: 'var(--shadow-subtle)',
              borderLeft: '5px solid #7E22CE',
              padding: '3rem 2.5rem'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(126, 34, 206, 0.1)', color: '#7E22CE', padding: '0.35rem 0.85rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: 'var(--radius-xs)', marginBottom: '1rem' }}>
                    <LayoutGrid size={16} />
                    <span>Founded by Praveen Agarwal</span>
                  </div>

                  <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '1rem', lineHeight: 1.2 }}>
                    Sspacia Coworking & Managed Spaces
                  </h2>

                  <p style={{ fontSize: '1.025rem', color: 'var(--text-dark-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    Founded by <strong>Praveen Agarwal</strong>, Sspacia is Shree Shyam Group's premier workspace brand. Providing managed corporate office suites, soundproof private cabins, dedicated workstations, and meeting facilities designed to empower visionary teams.
                  </p>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a 
                      href="https://www.sspacia.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-primary-corp"
                      style={{ background: '#7E22CE', borderColor: '#7E22CE' }}
                    >
                      <span>Visit Sspacia Platform</span>
                      <ExternalLink size={15} style={{ marginLeft: '4px' }} />
                    </a>
                    <Link to="/contact?type=sspacia" className="btn-outline-dark">
                      <span>Book Workspace Tour</span>
                      <span className="corp-arrow-box">&gt;</span>
                    </Link>
                  </div>
                </div>

                <div>
                  <img 
                    src="/sspacia/MERCADO 4-SEATER CABIN.jpg" 
                    alt="Sspacia Coworking Interior" 
                    style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-medium)' }}
                  />
                </div>
              </div>

              {/* Sspacia Features Grid with Real Photos Gallery */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '2rem', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--bg-platinum)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
                  <LayoutGrid size={26} color="#7E22CE" style={{ marginBottom: '0.75rem' }} />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                    Flexible Desks & Cabins
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-dark-muted)', lineHeight: '1.55' }}>
                    Hot desks, dedicated team zones, and custom-branded private office suites for growing corporate branches.
                  </p>
                </div>

                <div style={{ background: 'var(--bg-platinum)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
                  <Briefcase size={26} color="#7E22CE" style={{ marginBottom: '0.75rem' }} />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                    Enterprise Amenities
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-dark-muted)', lineHeight: '1.55' }}>
                    High-speed fiber internet, video conference rooms, reception front desk, cafeteria, and 24/7 biometric security.
                  </p>
                </div>

                <div style={{ background: 'var(--bg-platinum)', padding: '1.5rem', borderRadius: 'var(--radius-sm)' }}>
                  <Users size={26} color="#7E22CE" style={{ marginBottom: '0.75rem' }} />
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                    Thriving Business Network
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-dark-muted)', lineHeight: '1.55' }}>
                    Regular investor meetups, corporate networking sessions, and collaborative community culture.
                  </p>
                </div>
              </div>

              {/* Sspacia Image Showcase Gallery */}
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.75rem' }}>
                <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--corp-slate)', marginBottom: '1rem' }}>
                  Sspacia Real Space Gallery
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <img 
                    src="/sspacia/Mercado reception.jpg" 
                    alt="Sspacia Reception" 
                    style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                  <img 
                    src="/sspacia/Executive Cabin.jpeg" 
                    alt="Sspacia Executive Cabin" 
                    style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                  <img 
                    src="/sspacia/Board room 1.jpeg" 
                    alt="Sspacia Board Room" 
                    style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                  <img 
                    src="/sspacia/Cafeteria.jpeg" 
                    alt="Sspacia Cafeteria" 
                    style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '4px' }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
