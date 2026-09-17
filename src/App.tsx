import { useState, useEffect } from 'react';
import { Button } from './components/ui/Button';
import { Badge } from './components/ui/Badge';
import { HankoSeal } from './components/ui/HankoSeal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPartnersModalOpen, setIsPartnersModalOpen] = useState(false);
  const [isGenCuisineModalOpen, setIsGenCuisineModalOpen] = useState(false);
  const [genStep, setGenStep] = useState(0);
  const [isSmartIntModalOpen, setIsSmartIntModalOpen] = useState(false);
  const [smartStep, setSmartStep] = useState(0);
  const [isDynamicBasketsModalOpen, setIsDynamicBasketsModalOpen] = useState(false);
  const [basketsStep, setBasketsStep] = useState(0);
  const [isMenuOrchestrationModalOpen, setIsMenuOrchestrationModalOpen] = useState(false);
  const [menuStep, setMenuStep] = useState(0);
  const [isUnifiedWorkflowsModalOpen, setIsUnifiedWorkflowsModalOpen] = useState(false);
  const [workflowStep, setWorkflowStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);
  const [currencyInfo, setCurrencyInfo] = useState({ symbol: '$', rate: 1, code: 'USD' });

  useEffect(() => {
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    if (isGenCuisineModalOpen) {
      setGenStep(0);
      t1 = setTimeout(() => setGenStep(1), 3500);
      t2 = setTimeout(() => setGenStep(2), 6500);
    }
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isGenCuisineModalOpen]);

  useEffect(() => {
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    if (isSmartIntModalOpen) {
      setSmartStep(0);
      t1 = setTimeout(() => setSmartStep(1), 3500);
      t2 = setTimeout(() => setSmartStep(2), 6500);
    }
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isSmartIntModalOpen]);

  useEffect(() => {
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    if (isDynamicBasketsModalOpen) {
      setBasketsStep(0);
      t1 = setTimeout(() => setBasketsStep(1), 3500);
      t2 = setTimeout(() => setBasketsStep(2), 6500);
    }
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [isDynamicBasketsModalOpen]);

  useEffect(() => {
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    if (isMenuOrchestrationModalOpen) {
      setMenuStep(0);
      t1 = setTimeout(() => setMenuStep(1), 3500);
      t2 = setTimeout(() => setMenuStep(2), 6500);
    }
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [isMenuOrchestrationModalOpen]);

  useEffect(() => {
    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    if (isUnifiedWorkflowsModalOpen) {
      setWorkflowStep(0);
      t1 = setTimeout(() => setWorkflowStep(1), 3500);
      t2 = setTimeout(() => setWorkflowStep(2), 6500);
    }
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [isUnifiedWorkflowsModalOpen]);

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
              <span className="font-display">FawareOS</span>
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
            <article className="shi-card group shi-card-clickable" onClick={() => setIsGenCuisineModalOpen(true)}>
              <div className="shi-card-header">
                <span className="uppercase-mono" style={{ opacity: 0.6 }}>№ 001 — AI Recipes</span>
                {/* <HankoSeal text="AI" variant="round" className="scale-75" /> */}
              </div>
              <div className="shi-card-body">
                <div className="shi-card-visual">
                  <div className="anim-cuisine">
                    <div></div><div></div><div></div><div></div>
                  </div>
                </div>
                <h3 className="font-display shi-card-title">Generative Cuisine</h3>
                <p className="shi-card-text">
                  Generate recipes directly from available inventory to minimize waste, tailored by your uploaded CVs and menus.
                </p>
              </div>
            </article>

            {/* Feature 2 */}
            <article className="shi-card group shi-card-clickable" onClick={() => setIsDynamicBasketsModalOpen(true)}>
              <div className="shi-card-header">
                <span className="uppercase-mono" style={{ opacity: 0.6 }}>№ 002 — Inventory</span>
                {/* <Badge variant="dot">Live</Badge> */}
              </div>
              <div className="shi-card-body">
                <div className="shi-card-visual">
                  <div className="anim-baskets">
                    <div></div><div></div><div></div>
                  </div>
                </div>
                <h3 className="font-display shi-card-title">Dynamic Baskets</h3>
                <p className="shi-card-text">
                  Track produce, meat, dairy, and leftovers. Group items into custom "Baskets" for event prep.
                </p>
              </div>
            </article>

            {/* Feature 3 */}
            <article className="shi-card group shi-card-clickable" onClick={() => setIsMenuOrchestrationModalOpen(true)}>
              <div className="shi-card-header">
                <span className="uppercase-mono" style={{ opacity: 0.6 }}>№ 003 — Planning</span>
              </div>
              <div className="shi-card-body">
                <div className="shi-card-visual">
                  <div className="anim-menu">
                    <div></div><div></div><div></div>
                  </div>
                </div>
                <h3 className="font-display shi-card-title">Menu Orchestration</h3>
                <p className="shi-card-text">
                  Organize recipes into structured weekly planners. Automatically compile smart shopping lists from inventory gaps.
                </p>
              </div>
            </article>

            {/* Feature 4 */}
            <article className="shi-card group shi-card-clickable" onClick={() => setIsSmartIntModalOpen(true)}>
              <div className="shi-card-header">
                <span className="uppercase-mono" style={{ opacity: 0.6 }}>№ 004 — IoT Analytics</span>
              </div>
              <div className="shi-card-body">
                <div className="shi-card-visual">
                  <div className="anim-iot"></div>
                </div>
                <h3 className="font-display shi-card-title">Smart Integration</h3>
                <p className="shi-card-text">
                  Connect with IoT-enabled kitchen appliances for real-time analytics. Automate temperature logs and trigger proactive operational actions.
                </p>
              </div>
            </article>

            {/* Feature 5 */}
            <article className="shi-card group shi-card-clickable" onClick={() => setIsUnifiedWorkflowsModalOpen(true)}>
              <div className="shi-card-header">
                <span className="uppercase-mono" style={{ opacity: 0.6 }}>№ 005 — Operations</span>
              </div>
              <div className="shi-card-body">
                <div className="shi-card-visual">
                  <div className="anim-workflow">
                    <div></div><div></div>
                  </div>
                </div>
                <h3 className="font-display shi-card-title">Unified Workflows</h3>
                <p className="shi-card-text">
                  Synchronize back-of-house and front-of-house operations. Manage complex logistics, streamline supply chains, and automate inventory handling.
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

      {/* Generative Cuisine Modal */}
      {isGenCuisineModalOpen && (
        <div className="shi-modal-overlay" onClick={() => setIsGenCuisineModalOpen(false)}>
          <div className="shi-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px' }}>
            <div className="shi-modal-header border-b-sumi">
              <h3 className="font-display">Generative Cuisine</h3>
              <button className="shi-modal-close" onClick={() => setIsGenCuisineModalOpen(false)}>✕</button>
            </div>
            <div className="shi-modal-body">
              <div className="shi-gen-container border-sumi" style={{ height: '300px' }}>
                {genStep === 0 && (
                  <div className="shi-gen-step shi-fade-in">
                    <div className="shi-mic-icon">🎙️</div>
                    <div className="shi-speech-bubble">
                      <span className="shi-type-user">"I have 2kg of chicken thigh and leftover carrots. Generate a premium menu."</span>
                    </div>
                  </div>
                )}
                {genStep === 1 && (
                  <div className="shi-gen-step shi-fade-in" style={{ textAlign: 'center' }}>
                    <div className="shi-gen-icon">✨</div>
                    <div className="shi-gen-text-wrapper">
                      <span className="shi-gen-text">Crafting dynamic menu...</span>
                    </div>
                  </div>
                )}
                {genStep === 2 && (
                  <div className="shi-gen-step shi-slide-up" style={{ width: '100%', padding: '0 1rem' }}>
                    <div className="shi-recipe-card">
                      <h4 className="font-display">Chicken Ballotine</h4>
                      <div className="shi-recipe-meta">Prep: 25m • Waste: 0%</div>
                      <ul className="shi-recipe-ingredients">
                        <li>- 2kg Chicken Thigh (Deboned)</li>
                        <li>- Charred Carrot Purée</li>
                        <li>- Chicken Jus (from bones)</li>
                      </ul>
                    </div>
                  </div>
                )}
                <div className="shi-gen-overlay"></div>
              </div>
              <p style={{ marginTop: '1.5rem', fontSize: '14px', opacity: 0.8, textAlign: 'center' }}>
                {genStep === 0 && "Step 1: Verbally communicate preferences..."}
                {genStep === 1 && "Step 2: AI cross-references inventory..."}
                {genStep === 2 && "Step 3: Ready for the line."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Smart Integration Modal */}
      {isSmartIntModalOpen && (
        <div className="shi-modal-overlay" onClick={() => setIsSmartIntModalOpen(false)}>
          <div className="shi-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px' }}>
            <div className="shi-modal-header border-b-sumi">
              <h3 className="font-display">IoT Smart Integration</h3>
              <button className="shi-modal-close" onClick={() => setIsSmartIntModalOpen(false)}>✕</button>
            </div>
            <div className="shi-modal-body">
              <div className="shi-gen-container border-sumi" style={{ height: '300px' }}>
                {smartStep === 0 && (
                  <div className="shi-gen-step shi-fade-in">
                    <div className="shi-alert-icon shi-pulse-red">⚠️</div>
                    <div className="shi-recipe-card" style={{ borderLeft: '4px solid var(--color-shu)' }}>
                      <h4 className="font-display">Walk-in Fridge</h4>
                      <div className="shi-recipe-meta" style={{ color: 'var(--color-shu)' }}>Status: Critical Alert</div>
                      <p className="shi-type-user">Temperature anomaly detected: <strong>8°C</strong> (Expected: 3°C).</p>
                    </div>
                  </div>
                )}
                {smartStep === 1 && (
                  <div className="shi-gen-step shi-fade-in" style={{ textAlign: 'center' }}>
                    <div className="shi-gen-icon">✨</div>
                    <div className="shi-gen-text-wrapper">
                      <span className="shi-gen-text">AI Intercepting...</span>
                    </div>
                  </div>
                )}
                {smartStep === 2 && (
                  <div className="shi-gen-step shi-slide-up" style={{ width: '100%', padding: '0 1rem' }}>
                    <div className="shi-recipe-card" style={{ borderLeft: '4px solid #4ade80' }}>
                      <h4 className="font-display">Walk-in Fridge</h4>
                      <div className="shi-recipe-meta" style={{ color: '#4ade80', borderColor: '#4ade80', opacity: 0.8 }}>Status: Resolved</div>
                      <p className="shi-type-user">Temperature normalized: <strong>3°C</strong>. Technician dispatched for compressor check.</p>
                    </div>
                  </div>
                )}
                <div className="shi-gen-overlay"></div>
              </div>
              <p style={{ marginTop: '1.5rem', fontSize: '14px', opacity: 0.8, textAlign: 'center' }}>
                {smartStep === 0 && "Step 1: IoT sensor detects anomaly..."}
                {smartStep === 1 && "Step 2: AI triggers automated response protocol..."}
                {smartStep === 2 && "Step 3: Environment stabilized & team notified."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Baskets Modal */}
      {isDynamicBasketsModalOpen && (
        <div className="shi-modal-overlay" onClick={() => setIsDynamicBasketsModalOpen(false)}>
          <div className="shi-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px' }}>
            <div className="shi-modal-header border-b-sumi">
              <h3 className="font-display">Dynamic Baskets</h3>
              <button className="shi-modal-close" onClick={() => setIsDynamicBasketsModalOpen(false)}>✕</button>
            </div>
            <div className="shi-modal-body">
              <div className="shi-gen-container border-sumi" style={{ height: '300px' }}>
                {basketsStep === 0 && (
                  <div className="shi-gen-step shi-fade-in">
                    <div className="shi-mic-icon">📦</div>
                    <div className="shi-recipe-card">
                      <h4 className="font-display">New Delivery</h4>
                      <p className="shi-type-user">Mixed produce and dairy items scanned into inventory.</p>
                    </div>
                  </div>
                )}
                {basketsStep === 1 && (
                  <div className="shi-gen-step shi-fade-in" style={{ textAlign: 'center' }}>
                    <div className="shi-gen-icon">✨</div>
                    <div className="shi-gen-text-wrapper">
                      <span className="shi-gen-text">Organizing by expiration...</span>
                    </div>
                  </div>
                )}
                {basketsStep === 2 && (
                  <div className="shi-gen-step shi-slide-up" style={{ width: '100%', padding: '0 1rem' }}>
                    <div className="shi-recipe-card" style={{ borderLeft: '4px solid var(--color-sumi)' }}>
                      <h4 className="font-display">Weekend Brunch Basket</h4>
                      <div className="shi-recipe-meta">Auto-grouped • Expires: 2 days</div>
                      <ul className="shi-recipe-ingredients">
                        <li>- Organic Eggs (3 dozen)</li>
                        <li>- Heirloom Tomatoes (2kg)</li>
                        <li>- Fresh Basil (500g)</li>
                      </ul>
                    </div>
                  </div>
                )}
                <div className="shi-gen-overlay"></div>
              </div>
              <p style={{ marginTop: '1.5rem', fontSize: '14px', opacity: 0.8, textAlign: 'center' }}>
                {basketsStep === 0 && "Step 1: Ingredients entered into system..."}
                {basketsStep === 1 && "Step 2: AI categorizes and creates task-based groupings..."}
                {basketsStep === 2 && "Step 3: Custom baskets ready for prep."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Menu Orchestration Modal */}
      {isMenuOrchestrationModalOpen && (
        <div className="shi-modal-overlay" onClick={() => setIsMenuOrchestrationModalOpen(false)}>
          <div className="shi-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px' }}>
            <div className="shi-modal-header border-b-sumi">
              <h3 className="font-display">Menu Orchestration</h3>
              <button className="shi-modal-close" onClick={() => setIsMenuOrchestrationModalOpen(false)}>✕</button>
            </div>
            <div className="shi-modal-body">
              <div className="shi-gen-container border-sumi" style={{ height: '300px' }}>
                {menuStep === 0 && (
                  <div className="shi-gen-step shi-fade-in">
                    <div className="shi-mic-icon">📅</div>
                    <div className="shi-recipe-card">
                      <h4 className="font-display">Weekly Plan</h4>
                      <p className="shi-type-user">Scheduling 15 unique dishes for next week's service.</p>
                    </div>
                  </div>
                )}
                {menuStep === 1 && (
                  <div className="shi-gen-step shi-fade-in" style={{ textAlign: 'center' }}>
                    <div className="shi-gen-icon">✨</div>
                    <div className="shi-gen-text-wrapper">
                      <span className="shi-gen-text">Analyzing inventory gaps...</span>
                    </div>
                  </div>
                )}
                {menuStep === 2 && (
                  <div className="shi-gen-step shi-slide-up" style={{ width: '100%', padding: '0 1rem' }}>
                    <div className="shi-recipe-card" style={{ borderLeft: '4px solid var(--color-shu)' }}>
                      <h4 className="font-display">Smart Shopping List</h4>
                      <div className="shi-recipe-meta" style={{ color: 'var(--color-shu)' }}>Pending Orders</div>
                      <ul className="shi-recipe-ingredients">
                        <li>- Truffle Oil (1L required)</li>
                        <li>- Arborio Rice (5kg required)</li>
                        <li>- Saffron Threads (10g required)</li>
                      </ul>
                    </div>
                  </div>
                )}
                <div className="shi-gen-overlay"></div>
              </div>
              <p style={{ marginTop: '1.5rem', fontSize: '14px', opacity: 0.8, textAlign: 'center' }}>
                {menuStep === 0 && "Step 1: Set weekly menu structure..."}
                {menuStep === 1 && "Step 2: System calculates required yield vs current stock..."}
                {menuStep === 2 && "Step 3: Procurement list automatically generated."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Unified Workflows Modal */}
      {isUnifiedWorkflowsModalOpen && (
        <div className="shi-modal-overlay" onClick={() => setIsUnifiedWorkflowsModalOpen(false)}>
          <div className="shi-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px' }}>
            <div className="shi-modal-header border-b-sumi">
              <h3 className="font-display">Unified Workflows</h3>
              <button className="shi-modal-close" onClick={() => setIsUnifiedWorkflowsModalOpen(false)}>✕</button>
            </div>
            <div className="shi-modal-body">
              <div className="shi-gen-container border-sumi" style={{ height: '300px' }}>
                {workflowStep === 0 && (
                  <div className="shi-gen-step shi-fade-in">
                    <div className="shi-mic-icon">🔄</div>
                    <div className="shi-recipe-card">
                      <h4 className="font-display">FOH Ticket</h4>
                      <p className="shi-type-user">VIP table orders: 4x Tasting Menu.</p>
                    </div>
                  </div>
                )}
                {workflowStep === 1 && (
                  <div className="shi-gen-step shi-fade-in" style={{ textAlign: 'center' }}>
                    <div className="shi-gen-icon">✨</div>
                    <div className="shi-gen-text-wrapper">
                      <span className="shi-gen-text">Synchronizing BOH stations...</span>
                    </div>
                  </div>
                )}
                {workflowStep === 2 && (
                  <div className="shi-gen-step shi-slide-up" style={{ width: '100%', padding: '0 1rem' }}>
                    <div className="shi-recipe-card" style={{ borderLeft: '4px solid #4ade80' }}>
                      <h4 className="font-display">Station Updates</h4>
                      <div className="shi-recipe-meta" style={{ color: '#4ade80' }}>All Stations Synced</div>
                      <ul className="shi-recipe-ingredients">
                        <li>- Grill: Prep 4x Wagyu</li>
                        <li>- Garde Manger: 4x Crudo</li>
                        <li>- Inventory: Deducted automatically</li>
                      </ul>
                    </div>
                  </div>
                )}
                <div className="shi-gen-overlay"></div>
              </div>
              <p style={{ marginTop: '1.5rem', fontSize: '14px', opacity: 0.8, textAlign: 'center' }}>
                {workflowStep === 0 && "Step 1: Front-of-house action triggers event..."}
                {workflowStep === 1 && "Step 2: System orchestrates tasks across departments..."}
                {workflowStep === 2 && "Step 3: Back-of-house and inventory are instantly aligned."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
