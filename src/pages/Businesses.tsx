import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Building2, 
  LayoutGrid, 
  FileText, 
  Truck, 
  CheckCircle, 
  ExternalLink, 
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Businesses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'gem' | 'construction' | 'sspacia'>('all');

  return (
    <div style={{ padding: '3.5rem 0' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
          <span className="badge badge-skyblue" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>Business Divisions</span>
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.25rem' }}>
            Our Three Core Pillars of <br />
            <span className="gradient-skyblue-text">Commercial & Public Sector Growth</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Explore how Shree Shyam Group creates value through official Government e-Marketplace (GeM) bidding & supplies, real estate construction, and modern coworking spaces.
          </p>
        </div>

        {/* Tab Filter */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setActiveTab('all')} 
            className={`btn btn-sm ${activeTab === 'all' ? 'btn-primary' : 'btn-outline'}`}
          >
            All Divisions
          </button>
          <button 
            onClick={() => setActiveTab('gem')} 
            className={`btn btn-sm ${activeTab === 'gem' ? 'btn-primary' : 'btn-outline'}`}
          >
            <ShieldCheck size={16} />
            <span>GeM Govt Supplies</span>
          </button>
          <button 
            onClick={() => setActiveTab('construction')} 
            className={`btn btn-sm ${activeTab === 'construction' ? 'btn-primary' : 'btn-outline'}`}
          >
            <Building2 size={16} />
            <span>Construction & Real Estate</span>
          </button>
          <button 
            onClick={() => setActiveTab('sspacia')} 
            className={`btn btn-sm ${activeTab === 'sspacia' ? 'btn-primary' : 'btn-outline'}`}
          >
            <LayoutGrid size={16} />
            <span>Sspacia Coworking</span>
          </button>
        </div>

        {/* Section 1: GeM Portal */}
        {(activeTab === 'all' || activeTab === 'gem') && (
          <div id="gem" className="glass-card" style={{ padding: '2.5rem', marginBottom: '2.5rem', borderLeft: '4px solid #38bdf8' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <span className="badge badge-skyblue" style={{ marginBottom: '0.5rem' }}>Division 01 • Government e-Marketplace</span>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>GeM Portal Services & Government Supplies</h2>
              </div>
              <Link to="/contact?type=gem" className="btn btn-primary btn-sm">
                <span>GeM Vendor Inquiry</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Shree Shyam Group operates as a registered and verified vendor on the <strong>GeM (Government e-Marketplace) portal</strong>. We participate in competitive bidding, custom tender submissions, OEM product listing, and end-to-end supply of goods and services to central & state government departments, PSUs, and defense organizations.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              <div style={{ padding: '1.25rem', background: 'rgba(56, 189, 248, 0.08)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
                <FileText size={28} color="#38bdf8" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Tender & Bid Participation</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Active bidding on GeM e-tenders, L1 price compliance, technical evaluation, and contract execution.
                </p>
              </div>

              <div style={{ padding: '1.25rem', background: 'rgba(56, 189, 248, 0.08)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
                <Truck size={28} color="#38bdf8" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Pan-India Supply Logistics</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  On-time delivery of verified goods, office machinery, industrial equipment, and consumable products.
                </p>
              </div>

              <div style={{ padding: '1.25rem', background: 'rgba(56, 189, 248, 0.08)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
                <ShieldCheck size={28} color="#38bdf8" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Govt Audit & Compliance</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Complete adherence to GeM portal terms, GST compliance, ISO quality certifications, and vendor rating benchmarks.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section 2: Construction */}
        {(activeTab === 'all' || activeTab === 'construction') && (
          <div id="construction" className="glass-card" style={{ padding: '2.5rem', marginBottom: '2.5rem', borderLeft: '4px solid #fbbf24' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <span className="badge badge-amber" style={{ marginBottom: '0.5rem' }}>Division 02 • Real Estate & Civil Contracting</span>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>Construction & Infrastructure Projects</h2>
              </div>
              <Link to="/contact?type=construction" className="btn btn-primary btn-sm">
                <span>Discuss Real Estate Project</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Our construction division specializes in civil engineering, turnkey real estate developments, commercial complexes, and urban residential projects. Guided by Director Komal Agarwal, we deliver modern architectural design with structural integrity.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              <div style={{ padding: '1.25rem', background: 'rgba(217, 119, 6, 0.08)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(217, 119, 6, 0.25)' }}>
                <Building2 size={28} color="#fbbf24" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Commercial Towers</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  State-of-the-art office buildings, retail centers, and business parks built for high occupant capacity.
                </p>
              </div>

              <div style={{ padding: '1.25rem', background: 'rgba(217, 119, 6, 0.08)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(217, 119, 6, 0.25)' }}>
                <CheckCircle size={28} color="#fbbf24" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Turnkey Execution</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  End-to-end management from architectural blueprinting to structural foundation, MEP systems, and interior finishes.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section 3: Sspacia Coworking */}
        {(activeTab === 'all' || activeTab === 'sspacia') && (
          <div id="sspacia" className="glass-card" style={{ padding: '2.5rem', marginBottom: '2.5rem', borderLeft: '4px solid #c084fc' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <span className="badge badge-purple" style={{ marginBottom: '0.5rem' }}>Division 03 • Managed Workspace Brand</span>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>Sspacia Coworking Spaces</h2>
              </div>
              <a href="http://localhost:3000" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                <span>Visit Sspacia Platform</span>
                <ExternalLink size={16} />
              </a>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Founded by <strong>Praveen Agarwal</strong>, Sspacia Coworking Spaces is Shree Shyam Group's flagship workspace ecosystem. Designed for startups, freelancers, and enterprise corporate teams, Sspacia delivers premium managed desks, soundproof private cabins, conference rooms, and vibrant networking environments.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              <div style={{ padding: '1.25rem', background: 'rgba(147, 51, 234, 0.08)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(147, 51, 234, 0.25)' }}>
                <LayoutGrid size={28} color="#c084fc" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Flexible Workstations</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Hot desks, dedicated desks, and custom team seating arrangements with high-speed optical fiber internet.
                </p>
              </div>

              <div style={{ padding: '1.25rem', background: 'rgba(147, 51, 234, 0.08)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(147, 51, 234, 0.25)' }}>
                <PhoneCall size={28} color="#c084fc" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Enterprise Suites</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Custom-branded private cabins, executive boardrooms, reception desk services, and 24/7 security access.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
