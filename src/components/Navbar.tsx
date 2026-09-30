import { useState, useEffect } from 'react';
import { ChevronDown, Utensils, Store, UserCheck } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`tp-navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="tp-navbar">
        <div className="tp-logo">
          <img src="/logo.png" alt="Faware Logo" style={{ height: '50px' }} />
        </div>

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
        </div>

        <div className="tp-nav-actions">
          <button className="tp-btn tp-btn-primary">Coming Soon</button>
        </div>
      </nav>
    </div>
  );
};
