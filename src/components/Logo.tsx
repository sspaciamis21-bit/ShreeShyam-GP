import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  const dimensions = size === 'sm' ? 36 : size === 'lg' ? 52 : 42;
  
  return (
    <div className="brand-logo">
      <div 
        className="logo-badge" 
        style={{ width: `${dimensions}px`, height: `${dimensions}px`, flexShrink: 0 }}
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
            stroke="#0284c7" 
            strokeWidth="6" 
            fill="none" 
          />
          {/* Construction Skyscraper Pillar */}
          <rect x="42" y="32" width="16" height="46" rx="2" fill="#1d4ed8" opacity="0.9" />
          {/* GeM Shield Facet */}
          <polygon points="50,15 65,30 50,45 35,30" fill="#0284c7" />
          {/* Workspace Interconnected Ring */}
          <circle cx="50" cy="55" r="28" stroke="#0284c7" strokeWidth="4" strokeDasharray="6 6" fill="none" />
          <circle cx="50" cy="55" r="4" fill="#1d4ed8" />
        </svg>
      </div>
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: size === 'lg' ? '1.35rem' : '1.1rem', fontWeight: 800, lineHeight: 1.1, color: 'var(--text-heading)', letterSpacing: '-0.01em' }}>
            SHREE SHYAM
          </span>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--accent-skyblue)', textTransform: 'uppercase', fontWeight: 700 }}>
            Group of Companies
          </span>
        </div>
      )}
    </div>
  );
};

