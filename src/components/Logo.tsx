import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  height?: number;
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  height: customHeight,
  className = ''
}) => {
  const defaultHeight = size === 'sm' ? 36 : size === 'md' ? 52 : size === 'lg' ? 68 : 96;
  const actualHeight = customHeight || defaultHeight;

  return (
    <div
      className={`corp-brand-logo ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <img
        src="/useLogo.png"
        alt="Shree Shyam Group"
        style={{
          height: `${actualHeight}px`,
          maxWidth: '100%',
          width: 'auto',
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </div>
  );
};
