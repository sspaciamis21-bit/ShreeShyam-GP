import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Sparkles, ArrowRight, ShieldCheck, Building2, LayoutGrid } from 'lucide-react';

interface WelcomeSplashProps {
  onComplete?: () => void;
  duration?: number; // in milliseconds (default: 3200ms)
}

export const WelcomeSplash: React.FC<WelcomeSplashProps> = ({ 
  onComplete,
  duration = 3200 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (elapsed >= duration - 500 && !isFadingOut) {
        setIsFadingOut(true);
      }

      if (elapsed >= duration) {
        clearInterval(interval);
        handleDismiss();
      }
    }, 30);

    return () => clearInterval(interval);
  }, [duration, isFadingOut]);

  const handleDismiss = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 450);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`welcome-splash-overlay ${isFadingOut ? 'splash-exit' : 'splash-enter'}`}
      role="dialog"
      aria-label="Welcome Introduction"
    >
      {/* Dynamic Multi-layered Paint Strokes and Brush Wave Canvas */}
      <div className="paint-canvas-container">
        {/* Paint Stroke 1: Royal Blue Primary Sweep */}
        <svg 
          className="paint-stroke stroke-blue-1" 
          viewBox="0 0 1200 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M -100,400 C 150,150 450,550 750,250 C 1050,-50 1250,300 1350,150 L 1350,850 L -100,850 Z" 
            fill="url(#bluePaintGrad)" 
          />
          <defs>
            <linearGradient id="bluePaintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#002d96" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#001a5c" stopOpacity="0.95" />
            </linearGradient>
          </defs>
        </svg>

        {/* Paint Stroke 2: Vibrant Red Expressive Splash Sweep */}
        <svg 
          className="paint-stroke stroke-red-1" 
          viewBox="0 0 1200 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M -50,-50 C 250,280 400,-20 700,180 C 1000,380 1150,80 1300,220 L 1300,-50 Z" 
            fill="url(#redPaintGrad)" 
          />
          <defs>
            <linearGradient id="redPaintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ee1c25" stopOpacity="0.92" />
              <stop offset="60%" stopColor="#ff4d4d" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#c70e17" stopOpacity="0.92" />
            </linearGradient>
          </defs>
        </svg>

        {/* Paint Splatter & Brush Texture Elements */}
        <div className="paint-splatter splatter-1"></div>
        <div className="paint-splatter splatter-2"></div>
        <div className="paint-splatter splatter-3"></div>
        <div className="paint-splatter splatter-4"></div>

        {/* Central Luminous Radial Bloom */}
        <div className="paint-bloom-glow"></div>
      </div>

      {/* Floating Paint Drips & Artistic Fluid Swirls */}
      <div className="brush-swirl swirl-top-left"></div>
      <div className="brush-swirl swirl-bottom-right"></div>

      {/* Main Content Modal Card */}
      <div className="welcome-card-content">
        {/* Subtle Welcome Eyebrow Banner */}
        <div className="paint-badge">
          <Sparkles size={16} className="sparkle-icon" />
          <span>WELCOME TO</span>
          <Sparkles size={16} className="sparkle-icon" />
        </div>

        {/* Hero Logo Appearance */}
        <div className="splash-logo-wrapper">
          <Logo size="xl" />
        </div>

        {/* Paint Calligraphy Text Accent */}
        <div className="splash-brush-tagline">
          <span className="brush-underline-text">
            Excellence Across Governance, Real Estate & Modern Workspaces
          </span>
          <div className="paint-brush-line"></div>
        </div>

        {/* Three Core Corporate Pillars Teaser */}
        <div className="splash-pillars">
          <div className="splash-pillar-pill">
            <ShieldCheck size={16} color="#0284c7" />
            <span>GeM Government Supplies</span>
          </div>
          <div className="splash-pillar-pill">
            <Building2 size={16} color="#ee1c25" />
            <span>Turnkey Construction</span>
          </div>
          <div className="splash-pillar-pill">
            <LayoutGrid size={16} color="#002d96" />
            <span>Sspacia Coworking</span>
          </div>
        </div>

        {/* Progress Loading Track */}
        <div className="splash-progress-wrapper">
          <div className="splash-progress-track">
            <div 
              className="splash-progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="splash-timer-text">Entering Corporate Portal...</span>
        </div>
      </div>

      {/* Skip Button */}
      <button 
        onClick={handleDismiss}
        className="splash-skip-btn"
        aria-label="Skip introduction"
      >
        <span>Skip</span>
        <ArrowRight size={14} />
      </button>
    </div>
  );
};
