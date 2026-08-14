import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = ''
}) => {
  const height = size === 'sm' ? 39 : size === 'md' ? 80 : size === 'lg' ? 60 : 90;

  return (
    <div
      className={`brand-logo ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center' }}
    >
      <img
        src="/useLogo.png"
        alt="Shree Shyam Construction Co."
        style={{
          height: `${height}px`,
          width: 'auto',
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </div>
  );
};
