import { useState, useEffect } from 'react';
import { Button } from './components/ui/Button';
import { Badge } from './components/ui/Badge';
import { HankoSeal } from './components/ui/HankoSeal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPartnersModalOpen, setIsPartnersModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);
  const [currencyInfo, setCurrencyInfo] = useState({ symbol: '$', rate: 1, code: 'USD' });

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const rates: Record<string, { symbol: string, rate: number }> = {
          'EUR': { symbol: '€', rate: 0.92 },
          'GBP': { symbol: '£', rate: 0.79 },
          'AUD': { symbol: 'A$', rate: 1.5 },
          'CAD': { symbol: 'C$', rate: 1.35 },
          'JPY': { symbol: '¥', rate: 150 },
          'INR': { symbol: '₹', rate: 83 },
        };
        const currency = data.currency;
        if (currency && rates[currency]) {
          setCurrencyInfo({ ...rates[currency], code: currency });
        }
      })
      .catch(err => console.error('Failed to fetch region', err));
  }, []);

  const getPrice = (baseMonthlyUSD: number) => {
    const discountedUSD = isAnnual ? baseMonthlyUSD * 0.5 : baseMonthlyUSD;
    const converted = discountedUSD * currencyInfo.rate;
    if (currencyInfo.code === 'JPY' || currencyInfo.code === 'INR') {
      return Math.round(converted).toLocaleString();
    }
    // Round to nearest whole number for cleaner pricing display
    return Math.round(converted).toString();
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsSubmitted(false), 300); // reset after transition
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="shi-layout">
      {/* Header */}
      <header className="shi-header">
        <div className="shi-header-content">
          <div className="shi-logo">
            <span className="shi-logo-icon"></span>
            <span className="shi-logo-text">
              <span className="font-display">CHEFHQ</span>
              <span className="uppercase-mono" style={{ opacity: 0.6 }}>Kitchen OS</span>
            </span>
          </div>

          <nav className="shi-nav">
            <a href="#features" className="shi-nav-link">Features</a>
            <a href="#ecommerce" className="shi-nav-link">Marketplace</a>
            <a href="#network" className="shi-nav-link">Network</a>
            <a href="#pricing" className="shi-nav-link">Pricing</a>
          </nav>

          <div className="shi-header-actions">
            <Button variant="outline">Join Waitlist</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="shi-hero border-b-sumi">
          <div className="shi-hero-content">
            <div className="shi-hero-text">
              <div className="shi-kicker">
                <span className="shi-kicker-dash"></span>
                <span className="uppercase-mono">Next-Gen Culinary OS</span>
              </div>
              <h1 className="shi-headline">
                Paper.<br />
                Prep. <span className="text-shu">Perfect.</span>
              </h1>
              <p className="shi-subheadline">
                Streamline your kitchen operations with AI-powered recipe generation, dynamic inventory management, and intelligent menu planning. Built for modern chefs.
              </p>

              <div className="shi-hero-actions">
                <Button variant="primary" onClick={() => setIsModalOpen(true)}>Get Early Access ↓</Button>
                <Button variant="ghost">View Demo</Button>
              </div>
            </div>

            <div className="shi-hero-visual">
              <img src="/images/hero-ramen.jpg" alt="AI Generated Ramen" className="shi-hero-img" />
              <span className="shi-vertical-text shi-vertical-title shi-text-overlay">厨房のOS</span>
              <span className="shi-vertical-text shi-vertical-sub shi-text-overlay">Fig. 01 — ChefHQ</span>

              <div className="shi-hero-footer">
                <span className="shi-footer-col">創</span>
                <span className="shi-footer-col">作</span>
                <span className="shi-footer-col text-shu">食</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="shi-section">
          <div className="shi-section-header border-y-sumi">
            <Badge variant="solid">01</Badge>
            <h2 className="font-display shi-section-title">Core capabilities</h2>
            <span className="shi-section-divider"></span>
            <span className="uppercase-mono shi-section-meta">ChefHQ / Toolkit</span>
          </div>

          <div className="shi-grid">
            {/* Feature 1 */}
            <article className="shi-card group">
              <div className="shi-card-header">
                <span className="uppercase-mono" style={{ opacity: 0.6 }}>№ 001 — AI Recipes</span>
                {/* <HankoSeal text="AI" variant="round" className="scale-75" /> */}
              </div>
              <div className="shi-card-body">
                <h3 className="font-display shi-card-title">Generative Cuisine</h3>
                <p className="shi-card-text">
                  Generate recipes directly from available inventory to minimize waste, tailored by your uploaded CVs and menus.
                </p>
              </div>
            </article>

            {/* Feature 2 */}
            <article className="shi-card group">
              <div className="shi-card-header">
                <span className="uppercase-mono" style={{ opacity: 0.6 }}>№ 002 — Inventory</span>
                {/* <Badge variant="dot">Live</Badge> */}
              </div>
              <div className="shi-card-body">
                <h3 className="font-display shi-card-title">Dynamic Baskets</h3>
                <p className="shi-card-text">
                  Track produce, meat, dairy, and leftovers. Group items into custom "Baskets" for event prep.
                </p>
              </div>
            </article>

            {/* Feature 3 */}
            <article className="shi-card group">
              <div className="shi-card-header">
                <span className="uppercase-mono" style={{ opacity: 0.6 }}>№ 003 — Planning</span>
              </div>
              <div className="shi-card-body">
                <h3 className="font-display shi-card-title">Menu Orchestration</h3>
                <p className="shi-card-text">
                  Organize recipes into structured weekly planners. Automatically compile smart shopping lists from inventory gaps.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Ecommerce Section */}
        <section id="ecommerce" className="shi-section">
          <div className="shi-section-header border-y-sumi">
            <Badge variant="solid">02</Badge>
            <h2 className="font-display shi-section-title">Ecommerce Integration</h2>
            <span className="shi-section-divider"></span>
            <span className="uppercase-mono shi-section-meta">ChefHQ / Trade</span>
          </div>

          <div className="shi-banner border-sumi" style={{ flexDirection: 'row-reverse' }}>
            <div className="shi-banner-visual border-l-sumi hidden md-block">
              <img src="/images/ecommerce-market.jpg" alt="Marketplace Trading" className="shi-banner-img" />
            </div>
            <div className="shi-banner-content">
              <h3 className="font-display shi-banner-title">Direct to Marketplace.</h3>
              <p className="shi-banner-text">Seamlessly integrate your inventory gaps with local food marketplaces. Instantly procure fresh ingredients from vendors when your generated menus require them.</p>
            </div>
            <div className="shi-banner-action border-r-sumi">
              <Button variant="outline" onClick={() => setIsPartnersModalOpen(true)} style={{ height: '100%', width: '100%', border: 'none' }}>View Partners</Button>
            </div>
          </div>
        </section>

        {/* Network Section */}
        <section id="network" className="shi-section">
          <div className="shi-section-header border-y-sumi">
            <Badge variant="solid">03</Badge>
            <h2 className="font-display shi-section-title">The Network</h2>
            <span className="shi-section-divider"></span>
            <span className="uppercase-mono shi-section-meta">ChefHQ / Connect</span>
          </div>

          <div className="shi-banner border-sumi">
            <div className="shi-banner-visual border-r-sumi hidden md-block">
              <img src="/images/features-veg.jpg" alt="Chef Tools" className="shi-banner-img" />
            </div>
            <div className="shi-banner-content">
              <h3 className="font-display shi-banner-title">Collaborate across the brigade.</h3>
              <p className="shi-banner-text">View profiles of other culinary professionals. Share your public recipes and learn from network specialties.</p>
            </div>
            <div className="shi-banner-action border-l-sumi">
              <Button variant="primary" onClick={() => setIsModalOpen(true)} style={{ height: '100%', width: '100%', border: 'none' }}>Join Network</Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="shi-section">
          <div className="shi-section-header border-y-sumi">
            <Badge variant="solid">04</Badge>
            <h2 className="font-display shi-section-title">Plans & Pricing</h2>
            <span className="shi-section-divider"></span>
            <span className="uppercase-mono shi-section-meta">ChefHQ / Value</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <div className="shi-toggler">
              <button
                className={`shi-toggler-btn ${!isAnnual ? 'active' : ''}`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={`shi-toggler-btn ${isAnnual ? 'active' : ''}`}
                onClick={() => setIsAnnual(true)}
              >
                Annually (Save 50%)
              </button>
            </div>
          </div>

          <div className="shi-grid">
            {/* Starter Plan */}
            <article className="shi-card shi-pricing-card">
              <div className="shi-card-header">
                <span className="font-display" style={{ fontSize: '20px' }}>Starter</span>
              </div>
              <div className="shi-card-body" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="shi-pricing-price font-display">
                  {currencyInfo.symbol}{getPrice(4.99)} <span style={{ fontSize: '14px', opacity: 0.6 }} className="font-sans font-normal">/ mo</span>
                </div>
                <ul className="shi-pricing-features font-sans">
                  <li>HQ Credits (100/mo)</li>
                  <li>Basic Inventory Tracking</li>
                  <li>Weekly Menu Planner</li>
                </ul>
                <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                  <Button 
                    variant="outline" 
                    style={{ width: '100%' }} 
                    onClick={() => window.open(
                      isAnnual 
                        ? 'https://buy.stripe.com/test_4gMcN5gZf9z0aBUgqE3ks01' 
                        : 'https://buy.stripe.com/test_cNicN524l7qSaBU2zO3ks04', 
                      '_blank'
                    )}
                  >
                    Choose Starter
                  </Button>
                </div>
              </div>
            </article>

            {/* Pro Plan */}
            <article className="shi-card shi-pricing-card border-shu">
              <div className="shi-card-header border-b-shu" style={{ backgroundColor: 'var(--color-shu)', color: 'var(--color-paper)' }}>
                <span className="font-display" style={{ fontSize: '20px' }}>Professional</span>
                <Badge variant="outline" style={{ borderColor: 'var(--color-paper)', color: 'var(--color-paper)', backgroundColor: 'transparent' }}>Popular</Badge>
              </div>
              <div className="shi-card-body" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="shi-pricing-price font-display">
                  {currencyInfo.symbol}{getPrice(9.99)} <span style={{ fontSize: '14px', opacity: 0.6 }} className="font-sans font-normal">/ mo</span>
                </div>
                <ul className="shi-pricing-features font-sans">
                  <li>HQ Credits (250/mo)</li>
                  <li>Credit Banking</li>
                  <li>Advanced Baskets & Analytics</li>
                  <li>Ecommerce Integrations</li>
                  <li>Network Collaboration</li>
                </ul>
                <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                  <Button 
                    variant="primary" 
                    style={{ width: '100%' }} 
                    onClick={() => window.open(
                      isAnnual 
                        ? 'https://buy.stripe.com/test_fZu5kD10h4eG4dw1vK3ks00' 
                        : 'https://buy.stripe.com/test_6oU14nbEV6mO9xQ5M03ks03', 
                      '_blank'
                    )}
                  >
                    Choose Pro
                  </Button>
                </div>
              </div>
            </article>

            {/* Enterprise Plan */}
            <article className="shi-card shi-pricing-card">
              <div className="shi-card-header">
                <span className="font-display" style={{ fontSize: '20px' }}>Enterprise</span>
              </div>
              <div className="shi-card-body" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="shi-pricing-price font-display">
                  Custom
                </div>
                <ul className="shi-pricing-features font-sans">
                  <li>Dedicated AI Training Models</li>
                  <li>Multi-location Inventory</li>
                  <li>Custom ERP Integrations</li>
                  <li>24/7 Priority Support</li>
                </ul>
                <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                  <Button variant="outline" style={{ width: '100%' }} onClick={() => setIsModalOpen(true)}>Contact Sales</Button>
                </div>
              </div>
            </article>
          </div>
        </section>

      </main>

      <footer className="shi-footer border-t-sumi">
        <div className="shi-footer-inner">
          <div className="uppercase-mono">&copy; 2026 CHEFHQ</div>
          <HankoSeal text="詩印" variant="square" />
        </div>
      </footer>

      {/* Early Access Modal */}
      {isModalOpen && (
        <div className="shi-modal-overlay" onClick={handleModalClose}>
          <div className="shi-modal" onClick={e => e.stopPropagation()}>
            <div className="shi-modal-header border-b-sumi">
              <h3 className="font-display">Join the Waitlist</h3>
              <button className="shi-modal-close" onClick={handleModalClose}>✕</button>
            </div>
            <div className="shi-modal-body">
              {isSubmitted ? (
                <div className="shi-success-msg">
                  <HankoSeal text="完" variant="round" />
                  <p>You're on the list! We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="shi-form">
                  <p style={{ marginBottom: '1rem', fontSize: '14px', opacity: 0.8 }}>Enter your email to reserve your spot.</p>
                  <input type="email" required placeholder="chef@kitchen.com" className="shi-input border-sumi" />
                  <Button variant="primary" type="submit" style={{ width: '100%' }}>Submit</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Partners Modal */}
      {isPartnersModalOpen && (
        <div className="shi-modal-overlay" onClick={() => setIsPartnersModalOpen(false)}>
          <div className="shi-modal" onClick={e => e.stopPropagation()}>
            <div className="shi-modal-header border-b-sumi">
              <h3 className="font-display">Integrated Partners</h3>
              <button className="shi-modal-close" onClick={() => setIsPartnersModalOpen(false)}>✕</button>
            </div>
            <div className="shi-modal-body">
              <p style={{ marginBottom: '1.5rem', fontSize: '14px', opacity: 0.8 }}>ChefHQ currently syncs with the following regional marketplaces and suppliers:</p>
              <ul className="shi-pricing-features font-sans" style={{ textAlign: 'left' }}>
                <li>Woolworths (Direct API)</li>
                <li>Coles (Direct API)</li>
                <li>Aldi (CSV Export)</li>
                <li>IGA (Coming Soon)</li>
                <li>Harris Farm Markets</li>
                <li>Bidfood Australia</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
