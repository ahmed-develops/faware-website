import { useState, useEffect } from 'react';
import { ChevronDown, Utensils, Store, UserCheck, Moon, Sun } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isSystemDark || document.documentElement.classList.contains('dark')) {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`tp-navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="tp-navbar tp-desktop-nav">
        {/* Logo Container */}
        <div className="tp-logo-container">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="tp-logo-btn"
          >
            <img src="/logo.png" alt="Faware Logo" style={{ height: '40px' }} />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="tp-nav-links">
          <div className="tp-nav-item-with-dropdown">
            <div className="tp-nav-link">
              Features <ChevronDown size={14} className="tp-chevron" />
            </div>
            <div className="tp-dropdown-menu">
              <a href="#" className="tp-dropdown-item">
                <div className="tp-dropdown-icon" style={{ backgroundColor: '#dbeafe' }}><Utensils size={16} color="#2563eb" /></div>
                <div className="tp-dropdown-text">
                  <strong>Back of house</strong>
                  <span>Inventory & prep automation</span>
                </div>
              </a>
              <a href="#" className="tp-dropdown-item">
                <div className="tp-dropdown-icon" style={{ backgroundColor: '#dcfce7' }}><Store size={16} color="#16a34a" /></div>
                <div className="tp-dropdown-text">
                  <strong>Front of house</strong>
                  <span>Table management & comms</span>
                </div>
              </a>
              <a href="#" className="tp-dropdown-item">
                <div className="tp-dropdown-icon" style={{ backgroundColor: '#fef3c7' }}><UserCheck size={16} color="#d97706" /></div>
                <div className="tp-dropdown-text">
                  <strong>Chef Platform</strong>
                  <span>Custom tailored workflows</span>
                </div>
              </a>
            </div>
          </div>
          <div className="tp-nav-link">Use cases</div>
          <div className="tp-nav-link">Pricing</div>
          <div className="tp-nav-link">About us</div>
        </div>

        {/* Right Actions */}
        <div className="tp-nav-actions">
          <button
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-color)',
              padding: '8px',
              borderRadius: '50%',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hover-bg)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="tp-btn tp-btn-primary tp-desktop-only">Faware MCP</button>
        </div>
      </nav>

      {/* Centered Logo Dropdown Menu (Mobile Only) */}
      <div className={`tp-logo-menu tp-mobile-only ${isMenuOpen ? 'open' : ''}`}>
        <div className="tp-nav-link" onClick={() => setIsMenuOpen(false)}>Features</div>
        <div className="tp-nav-link" onClick={() => setIsMenuOpen(false)}>Use cases</div>
        <div className="tp-nav-link" onClick={() => setIsMenuOpen(false)}>Pricing</div>
      </div>
    </div>
  );
};
