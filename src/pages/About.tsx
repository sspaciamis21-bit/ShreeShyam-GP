import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  Building2, 
  LayoutGrid, 
  Upload,
  Sparkles
} from 'lucide-react';

interface LeaderMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  bio: string;
  imageSrc?: string;
  badge: string;
  badgeColor: 'skyblue' | 'purple' | 'royal' | 'amber';
  icon: React.ReactNode;
}

export const About: React.FC = () => {
  const leadershipTeam: LeaderMember[] = [
    {
      id: 'dilip-agarwal',
      name: 'Dilip Agarwal',
      role: 'Founder',
      tagline: 'Founding Pillar & Group Visionary',
      bio: 'Dilip Agarwal established Shree Shyam Group with a commitment to integrity, commercial excellence, and long-term value creation. Under his guidance, the group expanded into government supplies, civil construction, and enterprise solutions.',
      imageSrc: '/images/dilip-agarwal.jpg',
      badge: 'Founder',
      badgeColor: 'skyblue',
      icon: <Users size={40} color="var(--accent-skyblue)" />
    },
    {
      id: 'praveen-agarwal',
      name: 'Praveen Agarwal',
      role: 'Director & Founder of Sspacia Coworking',
      tagline: 'Director & Founder of Coworking Space Sspacia',
      bio: 'Praveen Agarwal is a Director of Shree Shyam Group and the visionary Founder of Sspacia Coworking Spaces. He pioneered modern managed office environments, flexible workspace cabins, and corporate community hubs.',
      imageSrc: '/images/praveen-agarwal.jpg',
      badge: 'Sspacia Founder & Director',
      badgeColor: 'purple',
      icon: <LayoutGrid size={40} color="#c084fc" />
    },
    {
      id: 'abhishekh-agarwal',
      name: 'Abhishekh Agarwal',
      role: 'Director',
      tagline: 'Director - GeM Operations & Govt Partnerships',
      bio: 'Abhishekh Agarwal leads strategic operations, official GeM (Government e-Marketplace) portal bidding, vendor registrations, and government order fulfillment across state and central departments.',
      imageSrc: '/images/abhishekh-agarwal.jpg',
      badge: 'Director (GeM Lead)',
      badgeColor: 'royal',
      icon: <ShieldCheck size={40} color="#60a5fa" />
    },
    {
      id: 'komal-agarwal',
      name: 'Komal Agarwal',
      role: 'Director',
      tagline: 'Director - Construction & Infrastructure Development',
      bio: 'Komal Agarwal oversees project execution standards, real estate growth, and civil engineering infrastructure projects, ensuring safety, architectural elegance, and timely project delivery.',
      imageSrc: '/images/komal-agarwal.jpg',
      badge: 'Director (Construction Lead)',
      badgeColor: 'amber',
      icon: <Building2 size={40} color="#fbbf24" />
    }
  ];

  return (
    <div style={{ padding: '3.5rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
          <span className="badge badge-skyblue" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>About Shree Shyam Group</span>
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.25rem' }}>
            Delivering Excellence Across <br />
            <span className="gradient-skyblue-text">Key Industry Pillars</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Shree Shyam Group of Companies is a multi-disciplinary conglomerate driven by quality, ethics, and innovation. We bridge public sector procurement through GeM, civil infrastructure development, and contemporary coworking spaces.
          </p>
        </div>



        {/* Executive Leadership Section */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            <span className="badge badge-skyblue" style={{ marginBottom: '0.75rem' }}>Executive Board</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.75rem' }}>Meet Our Leadership Team</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              The key visionaries guiding Shree Shyam Group's growth, strategic partnerships, and operational performance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {leadershipTeam.map((member) => (
              <div key={member.id} className="glass-card leader-card" style={{ padding: '2.25rem 1.5rem' }}>
                <div className="avatar-wrapper" style={{ 
                  borderColor: member.badgeColor === 'purple' ? '#c084fc' : member.badgeColor === 'royal' ? '#60a5fa' : member.badgeColor === 'amber' ? '#fbbf24' : 'var(--accent-skyblue)' 
                }}>
                  <img 
                    src={member.imageSrc} 
                    alt={member.name}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                      const parent = (e.target as HTMLElement).parentElement;
                      if (parent) {
                        const fallback = parent.querySelector('.avatar-placeholder') as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }
                    }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  />
                  <div className="avatar-placeholder" style={{ display: 'none' }}>
                    {member.icon}
                  </div>
                </div>

                <span className={`badge badge-${member.badgeColor}`} style={{ marginBottom: '0.75rem' }}>
                  {member.badge}
                </span>

                <h3 className="leader-name" style={{ fontSize: '1.3rem' }}>{member.name}</h3>
                <div className="leader-title" style={{ 
                  color: member.badgeColor === 'purple' ? '#c084fc' : member.badgeColor === 'royal' ? '#60a5fa' : member.badgeColor === 'amber' ? '#fbbf24' : 'var(--accent-skyblue)' 
                }}>
                  {member.role}
                </div>

                <p style={{ fontSize: '0.825rem', color: 'var(--accent-skyblue)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  "{member.tagline}"
                </p>

                <p className="leader-bio">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem', padding: '1.25rem 1.5rem', background: 'rgba(56, 189, 248, 0.05)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-skyblue)', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Upload size={22} color="var(--accent-skyblue)" />
            <div style={{ flexGrow: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--accent-skyblue)' }}>Note for User / Admin:</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                You can easily upload photos for the 4 directors by placing photo files named <code>dilip-agarwal.jpg</code>, <code>praveen-agarwal.jpg</code>, <code>abhishekh-agarwal.jpg</code>, and <code>komal-agarwal.jpg</code> into the <code>public/images/</code> folder!
              </div>
            </div>
          </div>
        </div>

        {/* Milestones / Journey */}
        <div className="glass-card" style={{ padding: '2.5rem 2rem' }}>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '2rem', textAlign: 'center' }}>Group Milestones</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.75rem' }}>
            <div style={{ borderLeft: '3px solid var(--accent-skyblue)', paddingLeft: '1.1rem' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--accent-skyblue)' }}>Phase 1</div>
              <h4 style={{ fontSize: '1.05rem', margin: '0.25rem 0' }}>Group Establishment</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Founded by Dilip Agarwal with core enterprise values and contracting excellence.</p>
            </div>

            <div style={{ borderLeft: '3px solid #60a5fa', paddingLeft: '1.1rem' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#60a5fa' }}>Phase 2</div>
              <h4 style={{ fontSize: '1.05rem', margin: '0.25rem 0' }}>GeM Government Portal</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Expanding into GeM portal vendor operations led by Abhishekh Agarwal for state & central bids.</p>
            </div>

            <div style={{ borderLeft: '3px solid #fbbf24', paddingLeft: '1.1rem' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fbbf24' }}>Phase 3</div>
              <h4 style={{ fontSize: '1.05rem', margin: '0.25rem 0' }}>Construction Expansion</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Developing major commercial real estate projects under Komal Agarwal's leadership.</p>
            </div>

            <div style={{ borderLeft: '3px solid #c084fc', paddingLeft: '1.1rem' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#c084fc' }}>Phase 4</div>
              <h4 style={{ fontSize: '1.05rem', margin: '0.25rem 0' }}>Sspacia Coworking</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Praveen Agarwal launches Sspacia, building flexible coworking hubs for modern enterprises.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
