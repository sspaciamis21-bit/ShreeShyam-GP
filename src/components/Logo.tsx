import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  height: customHeight,
  className = ''
}) => {
  const defaultHeight = size === 'sm' ? 39 : size === 'md' ? 80 : size === 'lg' ? 68 : 170;
  const actualHeight = customHeight || defaultHeight;

  return (
    <div
      className={`brand-logo ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <img
        src="/useLogo.png"
        alt="Shree Shyam Construction Co."
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
