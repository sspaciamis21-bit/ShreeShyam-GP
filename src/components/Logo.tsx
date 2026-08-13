import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  const dimensions = size === 'sm' ? 36 : size === 'lg' ? 56 : 44;
  
  return (
    <div className="brand-logo">
      <div 
        className="logo-badge" 
        style={{ width: `${dimensions}px`, height: `${dimensions}px` }}
      >
        <svg 
          width={dimensions - 12} 
          height={dimensions - 12} 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Crest Hexagon */}
          <polygon 
            points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
            stroke="currentColor" 
            strokeWidth="5" 
            fill="none" 
          />
          {/* Construction Skyscraper Pillar */}
          <rect x="42" y="32" width="16" height="46" rx="2" fill="currentColor" opacity="0.9" />
          {/* GeM Shield Facet */}
          <polygon points="50,15 65,30 50,45 35,30" fill="#38BDF8" opacity="0.8" />
          {/* Workspace Interconnected Ring */}
          <circle cx="50" cy="55" r="28" stroke="currentColor" strokeWidth="4" strokeDasharray="6 6" fill="none" />
          <circle cx="50" cy="55" r="4" fill="currentColor" />
        </svg>
      </div>
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: size === 'lg' ? '1.4rem' : '1.15rem', fontWeight: 800, lineHeight: 1.1 }}>
            SHREE SHYAM
          </span>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 600 }}>
            Group of Companies
          </span>
        </div>
      )}
    </div>
  );
};
