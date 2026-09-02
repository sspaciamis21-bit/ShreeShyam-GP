import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  ShieldCheck, 
  Building2, 
  LayoutGrid, 
  Award, 
  CheckCircle2, 
  Target, 
  Compass, 
  Upload,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

interface LeaderMember {
  id: string;
  name: string;
  role: string;
  divisionTag: string;
  tagline: string;
  bio: string;
  imageSrc: string;
  icon: React.ReactNode;
}

export const About: React.FC = () => {
  const leadershipTeam: LeaderMember[] = [
    {
      id: 'dilip-agarwal',
      name: 'Dilip Agarwal',
      role: 'Founder & Visionary',
      divisionTag: 'Group Leadership',
      tagline: 'Founding Pillar & Group Visionary',
      bio: 'Dilip Agarwal established Shree Shyam Group with a deep commitment to commercial integrity, transparent contracting, and long-term nation-building value. Under his foundational guidance, the group systematically diversified from civil contracting into large-scale government procurement and contemporary managed office spaces.',
      imageSrc: '/images/dilip-agarwal.jpg',
      icon: <Users size={48} color="var(--corp-gold-light)" />
    },
    {
      id: 'praveen-agarwal',
      name: 'Praveen Agarwal',
      role: 'Director & Founder of Sspacia Coworking',
      divisionTag: 'Workspaces Division',
      tagline: 'Pioneering Modern Collaborative Workspaces',
      bio: 'Praveen Agarwal is a Director of Shree Shyam Group and the visionary Founder of Sspacia Coworking Spaces. Anticipating the future of modern work, he pioneered luxury managed office suites, soundproof cabins, and vibrant enterprise community hubs catering to startups, corporate branches, and growing enterprises.',
      imageSrc: '/images/praveen-agarwal.jpg',
      icon: <LayoutGrid size={48} color="var(--corp-gold-light)" />
    },
    {
      id: 'abhishekh-agarwal',
      name: 'Abhishekh Agarwal',
      role: 'Director (GeM Portal & Public Supplies)',
      divisionTag: 'Public Procurement Division',
      tagline: 'Driving Public Sector Procurement Excellence',
      bio: 'Abhishekh Agarwal spearheads the group’s official Government e-Marketplace (GeM) portal operations, tender strategies, and vendor compliance. Under his leadership, Shree Shyam Group participates actively in competitive government bids, fulfilling critical supply requirements across state and central departments.',
      imageSrc: '/images/abhishekh-agarwal.jpg',
      icon: <ShieldCheck size={48} color="var(--corp-gold-light)" />
    },
    {
      id: 'komal-agarwal',
      name: 'Komal Agarwal',
      role: 'Director (Construction & Infrastructure)',
      divisionTag: 'Real Estate Division',
      tagline: 'Engineering Quality & Architectural Precision',
      bio: 'Komal Agarwal oversees project execution standards, commercial real estate growth, and civil engineering infrastructure projects. He guarantees structural durability, modern aesthetics, safety certifications, and timely milestone deliveries across all turnkey developments.',
      imageSrc: '/images/komal-agarwal.jpg',
      icon: <Building2 size={48} color="var(--corp-gold-light)" />
    }
  ];

  return (
    <div className="page-transition-enter">
      {/* Page Header Banner */}
      <section style={{ 
        padding: '7.5rem 0 4.5rem', 
        background: 'linear-gradient(135deg, #0B1120 0%, #1E293B 100%)', 
        color: '#FFFFFF',
        borderBottom: '3px solid var(--corp-maroon)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="section-eyebrow" style={{ color: 'var(--corp-gold-light)' }}>
              Our Story & Heritage
            </span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', lineHeight: 1.15 }}>
              A Legacy of Trust, Quality & Enterprise
            </h1>
            <p style={{ color: 'var(--text-light-secondary)', fontSize: '1.15rem', lineHeight: '1.7' }}>
              Shree Shyam Group of Companies is a multi-sector Indian corporate group built on the bedrock of institutional governance, operational agility, and lasting customer partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage & Purpose Section */}
      <section id="legacy" className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow">Conglomerate Heritage</span>
              <h2 className="section-heading-lg">Building Lasting Value Across Key Economic Pillars</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-dark-muted)', lineHeight: '1.75', marginBottom: '1.5rem' }}>
                From our foundational start in civil contracting to becoming an authorized vendor on India’s official <strong>Government e-Marketplace (GeM)</strong> and pioneering collaborative ecosystems through <strong>Sspacia Coworking</strong>, Shree Shyam Group has consistently evolved to meet the nation's changing infrastructural and commercial needs.
              </p>
              <p style={{ fontSize: '1.025rem', color: 'var(--text-dark-muted)', lineHeight: '1.75', marginBottom: '2rem' }}>
                We believe that true enterprise excellence lies in the harmony between ethical conduct, strict statutory compliance, and modern architectural vision.
              </p>
            </div>

            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85" 
                alt="Corporate Architecture" 
                style={{ width: '100%', height: '440px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-medium)' }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '-1.5rem', 
                right: '1.5rem', 
                background: 'var(--corp-slate)', 
                color: '#FFFFFF', 
                padding: '1.25rem 1.75rem', 
                borderRadius: 'var(--radius-sm)',
                borderLeft: '4px solid var(--corp-gold-light)',
                maxWidth: '280px',
                boxShadow: 'var(--shadow-elevated)'
              }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--corp-gold-light)', fontWeight: 700, marginBottom: '0.25rem' }}>
                  Core Mandate
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                  Integrity, Agility & Superior Execution
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Purpose & Values */}
      <section id="values" className="section-padding" style={{ background: 'var(--bg-platinum)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem' }}>
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>Purpose & Commitments</span>
            <h2 className="section-heading-lg">Guided by Enduring Principles</h2>
            <p className="section-desc-lg" style={{ margin: '0 auto' }}>
              Our core values guide every interaction with government procurement officials, corporate tenants, and construction partners.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-box">
                <Target size={28} />
              </div>
              <h4 className="value-card-title">Visionary Focus</h4>
              <p className="value-card-desc">
                Building durable infrastructure and long-standing commercial solutions that stand the test of time and market changes.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <ShieldCheck size={28} />
              </div>
              <h4 className="value-card-title">Govt Compliance</h4>
              <p className="value-card-desc">
                Rigorous adherence to GeM portal bidding protocols, financial audits, and certified industrial standards.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <Compass size={28} />
              </div>
              <h4 className="value-card-title">Client Centricity</h4>
              <p className="value-card-desc">
                Prioritizing our clients’ custom requirements in corporate office spaces, construction blueprints, and supply schedules.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <TrendingUp size={28} />
              </div>
              <h4 className="value-card-title">Sustainable Growth</h4>
              <p className="value-card-desc">
                Balancing rapid commercial expansion with environmental responsibility, energy-efficient spaces, and community growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section id="leadership" className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>Executive Leadership</span>
            <h2 className="section-heading-lg">Board of Directors</h2>
            <p className="section-desc-lg" style={{ margin: '0 auto' }}>
              The visionary directors steering Shree Shyam Group’s strategic expansion, public partnerships, and operational performance.
            </p>
          </div>

          <div className="leaders-board-grid">
            {leadershipTeam.map((leader) => (
              <div key={leader.id} className="leader-corp-card">
                <div className="leader-photo-box">
                  <img 
                    src={leader.imageSrc} 
                    alt={leader.name}
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
                    {leader.icon}
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Executive Portrait</span>
                  </div>
                </div>

                <div className="leader-details-body">
                  <span className="leader-badge-tag">{leader.divisionTag}</span>
                  <h3 className="leader-full-name">{leader.name}</h3>
                  <div className="leader-corporate-role">{leader.role}</div>

                  <p style={{ fontSize: '0.82rem', color: 'var(--corp-maroon)', fontWeight: 700, marginBottom: '0.75rem', fontStyle: 'italic' }}>
                    "{leader.tagline}"
                  </p>

                  <p className="leader-bio-summary">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Guidance note for photo uploads */}
          <div style={{ 
            marginTop: '3.5rem', 
            padding: '1.5rem 2rem', 
            background: 'var(--bg-platinum)', 
            borderRadius: 'var(--radius-sm)', 
            border: '1px dashed var(--border-medium)', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1.25rem',
            flexWrap: 'wrap'
          }}>
            <Upload size={24} color="var(--corp-maroon)" />
            <div style={{ flexGrow: 1 }}>
              <div style={{ fontWeight: 700, fontSize: '0.925rem', color: 'var(--corp-slate)', fontFamily: 'var(--font-heading)' }}>
                Photo Upload Note:
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-dark-muted)' }}>
                To customize the directors' portraits, save photos named <code>dilip-agarwal.jpg</code>, <code>praveen-agarwal.jpg</code>, <code>abhishekh-agarwal.jpg</code>, and <code>komal-agarwal.jpg</code> in the <code>public/images/</code> folder.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Milestones & Journey */}
      <section id="milestones" className="section-padding" style={{ background: 'var(--bg-platinum)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3.5rem' }}>
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>Growth Trajectory</span>
            <h2 className="section-heading-lg">Group Milestones & Evolution</h2>
            <p className="section-desc-lg" style={{ margin: '0 auto' }}>
              Key eras in the development and expansion of Shree Shyam Group of Companies.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {/* Era 1 */}
            <div style={{ background: '#FFFFFF', padding: '2rem', borderTop: '3px solid var(--corp-maroon)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--corp-maroon)', fontFamily: 'var(--font-heading)', marginBottom: '0.25rem' }}>
                Phase 01
              </div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--corp-slate)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                Foundational Establishment
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)', lineHeight: '1.6' }}>
                Founded by Dilip Agarwal with a primary focus on civil engineering standards, contracting ethics, and commercial trust.
              </p>
            </div>

            {/* Era 2 */}
            <div style={{ background: '#FFFFFF', padding: '2rem', borderTop: '3px solid var(--corp-maroon)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--corp-maroon)', fontFamily: 'var(--font-heading)', marginBottom: '0.25rem' }}>
                Phase 02
              </div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--corp-slate)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                GeM Govt Portal Entry
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)', lineHeight: '1.6' }}>
                Abhishekh Agarwal leads entry into official GeM portal bidding, winning high-volume supply contracts for government ministries and PSUs.
              </p>
            </div>

            {/* Era 3 */}
            <div style={{ background: '#FFFFFF', padding: '2rem', borderTop: '3px solid var(--corp-maroon)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--corp-maroon)', fontFamily: 'var(--font-heading)', marginBottom: '0.25rem' }}>
                Phase 03
              </div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--corp-slate)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                Infrastructure Scaling
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)', lineHeight: '1.6' }}>
                Under Komal Agarwal's guidance, the group completes landmark commercial complexes, urban housing, and turnkey infrastructure projects.
              </p>
            </div>

            {/* Era 4 */}
            <div style={{ background: '#FFFFFF', padding: '2rem', borderTop: '3px solid var(--corp-maroon)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-subtle)' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--corp-maroon)', fontFamily: 'var(--font-heading)', marginBottom: '0.25rem' }}>
                Phase 04
              </div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--corp-slate)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                Sspacia Coworking Launch
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)', lineHeight: '1.6' }}>
                Praveen Agarwal launches Sspacia, creating flexible premium managed workspaces and innovation hubs for growing enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
