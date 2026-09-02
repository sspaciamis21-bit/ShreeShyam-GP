import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideData {
  id: number;
  sectorTag: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  description: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    sectorTag: 'CONGLOMERATE OVERVIEW • MULTI-SECTOR EXCELLENCE',
    titlePart1: 'Building Foundations.',
    titleHighlight: 'Empowering Growth.',
    titlePart2: '',
    description: 'Shree Shyam Group is a leading Indian multi-sector corporate group operating across GeM government procurement, civil infrastructure & turnkey construction, and Sspacia premium managed workspaces.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85',
    primaryCtaText: 'Explore Our Businesses',
    primaryCtaLink: '/businesses',
    secondaryCtaText: 'Our Story & Heritage',
    secondaryCtaLink: '/about'
  },
  {
    id: 2,
    sectorTag: 'PUBLIC SECTOR PROCUREMENT • STRATEGIC PARTNERSHIPS',
    titlePart1: 'GeM Portal Supplies &',
    titleHighlight: 'Govt Enterprise.',
    titlePart2: '',
    description: 'Authorized and verified vendors on the Government e-Marketplace (GeM), executing procurement contracts, certified supplies, and verified goods for central & state government bodies and PSUs.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=85',
    primaryCtaText: 'View GeM Capabilities',
    primaryCtaLink: '/businesses#gem',
    secondaryCtaText: 'Procurement Desk',
    secondaryCtaLink: '/contact?type=gem'
  },
  {
    id: 3,
    sectorTag: 'CIVIL CONTRACTING • URBAN INFRASTRUCTURE',
    titlePart1: 'Landmark Architecture.',
    titleHighlight: 'Enduring Strength.',
    titlePart2: '',
    description: 'Specializing in commercial towers, institutional developments, and residential real estate engineered with structural precision, architectural excellence, and on-schedule execution.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2000&q=85',
    primaryCtaText: 'Construction Portfolio',
    primaryCtaLink: '/businesses#construction',
    secondaryCtaText: 'Project Inquiry',
    secondaryCtaLink: '/contact?type=construction'
  },
  {
    id: 4,
    sectorTag: 'SSPACIA MANAGED WORKSPACES • INNOVATION HUBS',
    titlePart1: 'Modern Workspaces for',
    titleHighlight: 'Visionary Teams.',
    titlePart2: '',
    description: 'Founded by Praveen Agarwal, Sspacia Coworking provides enterprise-grade office suites, dedicated desks, and dynamic community ecosystems tailored for modern businesses.',
    image: '/sspacia/MERCADO 4-SEATER CABIN.jpg',
    primaryCtaText: 'Discover Sspacia',
    primaryCtaLink: '/businesses#sspacia',
    secondaryCtaText: 'Visit Sspacia Platform',
    secondaryCtaLink: 'https://www.sspacia.com'
  }
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section
      className="hero-slider-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Corporate Carousel"
    >
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`hero-slide ${isActive ? 'active' : ''}`}
            aria-hidden={!isActive}
          >
            {/* Background Image with Ken Burns effect */}
            <div
              className="hero-slide-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Dark Linear Gradient Overlay */}
            <div className="hero-overlay-gradient" />

            {/* Slide Content Box with dynamic stagger animation */}
            <div className="container" style={{ height: '100%' }}>
              <div className="hero-slide-content">
                <div className="hero-tag-badge">
                  {slide.sectorTag}
                </div>

                <h1 className="hero-main-title">
                  {slide.titlePart1}{' '}
                  <span className="highlight-gold">{slide.titleHighlight}</span>{' '}
                  {slide.titlePart2}
                </h1>

                <p className="hero-main-desc">
                  {slide.description}
                </p>

                <div className="hero-cta-group">
                  <Link to={slide.primaryCtaLink} className="btn-primary-corp">
                    <span>{slide.primaryCtaText}</span>
                    <span className="corp-arrow-box">&gt;</span>
                  </Link>

                  {slide.secondaryCtaLink.startsWith('http') ? (
                    <a
                      href={slide.secondaryCtaLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline-corp"
                    >
                      <span>{slide.secondaryCtaText}</span>
                      <span className="corp-arrow-box">&gt;</span>
                    </a>
                  ) : (
                    <Link to={slide.secondaryCtaLink} className="btn-outline-corp">
                      <span>{slide.secondaryCtaText}</span>
                      <span className="corp-arrow-box">&gt;</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Bottom Slider Navigation Bar with Aditya Birla Style Progress Bars */}
      <div className="hero-slider-nav-bar">
        <div className="container">
          <div className="hero-nav-inner">
            {/* Tabbed Slide Progress Indicator */}
            <div className="hero-slide-progress-list">
              {slides.map((s, idx) => (
                <div
                  key={s.id}
                  className={`hero-progress-tab ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                >
                  <div className="hero-progress-index">0{idx + 1} / 0{slides.length}</div>
                  <div className="hero-progress-title">
                    {idx === 0 ? 'Group Overview' : idx === 1 ? 'GeM Supplies' : idx === 2 ? 'Construction' : 'Sspacia Spaces'}
                  </div>
                  <div className="hero-progress-bar-bg">
                    <div
                      className="hero-progress-bar-fill"
                      style={{
                        width: idx === currentSlide ? '100%' : idx < currentSlide ? '100%' : '0%',
                        transition: idx === currentSlide ? 'width 4s linear' : 'none'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Next / Previous Arrow Buttons */}
            <div className="hero-arrow-controls">
              <button
                onClick={prevSlide}
                className="hero-nav-btn"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="hero-nav-btn"
                aria-label="Next Slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
