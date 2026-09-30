import { useState } from 'react';
import { ChevronDown, Utensils, Store, Cpu, UserCheck, Settings, Check, X } from 'lucide-react';
import './TrypostLanding.css';



const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);



const TrypostLanding = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const faqs = [
    { question: "What is TryPost?", answer: "TryPost is an AI-powered social media management platform that leverages agents to plan, write, and schedule your posts automatically." },
    { question: "Who is TryPost for?", answer: "It's built for creators, marketers, and agencies who want to scale their social presence without spending hours drafting and scheduling content." },
    { question: "Which social networks does TryPost support?", answer: "Currently, we support X (Twitter), LinkedIn, and Instagram, with more networks like TikTok and Facebook coming soon." },
    { question: "How is TryPost different from Buffer or Hootsuite?", answer: "Unlike traditional tools that just schedule what you write, TryPost's AI agents actually generate the content based on your brand voice and strategic goals." },
    { question: "How does pricing work?", answer: "We offer a Starter plan for free, a Pro plan for growing brands, and an Agency plan for teams needing unlimited capacity and custom MCP integrations." },
    { question: "Can I manage multiple brands or clients?", answer: "Yes! Our Agency plan is specifically designed for managing multiple brand profiles, each with its own distinct AI agent and voice." },
    { question: "Can my team collaborate on posts?", answer: "Absolutely. You can invite team members to review, edit, and approve AI-generated drafts before they are scheduled." }
  ];

  return (
    <div className="trypost-container">
      <div className="trypost-content">
        {/* Navbar */}
        <div className="tp-navbar-wrapper">
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

        {/* Hero Section */}
        <main className="tp-hero">
          <div className="tp-toggle-wrapper">
            <span className="tp-toggle-label inactive">Schedule manually</span>
            <div className="tp-toggle-switch">
              <div className="tp-toggle-knob" style={{ transform: 'translate(24px, -50%)' }}></div>
            </div>
            <span className="tp-toggle-label active">Schedule with AI agents</span>
          </div>

          <h1 className="tp-headline">
            Run your restaurant ops
            on autopilot with <span className="tp-underline-wrapper">
              Faware.
              <svg className="tp-underline" viewBox="0 0 400 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 15 Q 100 5 200 12 T 398 10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="tp-subheadline">
            Connect an agent over MCP. It plans, writes, and<br />
            schedules a week of posts across every network.
          </p>

          <button className="tp-btn tp-btn-primary tp-hero-cta" onClick={() => setIsWaitlistOpen(true)}>
            Join Waitlist
          </button>
        </main>

        <hr className="tp-separator" />

        {/* Features Section */}
        <section className="tp-features">
          <h2 className="tp-features-title">Everything you need to automate social</h2>
          <p className="tp-features-subtitle">Powerful tools that let your AI agents run the show while you maintain full control.</p>

          <div className="tp-features-grid">
            <div className="tp-feature-card">
              <div className="tp-feature-icon" style={{ backgroundColor: '#dbeafe' }}>
                <Utensils size={20} color="#2563eb" />
              </div>
              <h3>Back of house automation</h3>
              <p>Streamline your inventory, supplier orders, and kitchen prep through smart AI agents.</p>
            </div>

            <div className="tp-feature-card">
              <div className="tp-feature-icon" style={{ backgroundColor: '#dcfce7' }}>
                <Store size={20} color="#16a34a" />
              </div>
              <h3>Front of house automation</h3>
              <p>Automate table management, reservations, and customer communications effortlessly.</p>
            </div>

            <div className="tp-feature-card">
              <div className="tp-feature-icon" style={{ backgroundColor: '#f3e8ff' }}>
                <Cpu size={20} color="#9333ea" />
              </div>
              <h3>MCP (existing software integration)</h3>
              <p>Seamlessly connect and communicate with your existing POS and management software.</p>
            </div>

            <div className="tp-feature-card">
              <div className="tp-feature-icon" style={{ backgroundColor: '#fef3c7' }}>
                <UserCheck size={20} color="#d97706" />
              </div>
              <h3>Personalised chef platform in-built</h3>
              <p>Empower your chefs with customized tools tailored to their unique workflow.</p>
            </div>

            <div className="tp-feature-card">
              <div className="tp-feature-icon" style={{ backgroundColor: '#fee2e2' }}>
                <Settings size={20} color="#dc2626" />
              </div>
              <h3>All administration tools included</h3>
              <p>Get access to all administrative capabilities across every single pricing tier.</p>
            </div>


          </div>
        </section>

        <hr className="tp-separator" />

        {/* Pricing Section */}
        <section className="tp-pricing">
          <div className="tp-pricing-badge">PRICING</div>
          <h2 className="tp-pricing-title">Simple, transparent pricing</h2>
          <p className="tp-pricing-subtitle" style={{ marginBottom: '32px' }}>Start for free, upgrade when your AI agent needs more power.</p>

          <div className="tp-toggle-wrapper" style={{ marginBottom: '64px' }}>
            <span className={`tp-toggle-label ${!isAnnual ? 'active' : 'inactive'}`} onClick={() => setIsAnnual(false)} style={{ cursor: 'pointer' }}>Monthly</span>
            <div className="tp-toggle-switch" onClick={() => setIsAnnual(!isAnnual)}>
              <div className="tp-toggle-knob" style={{ transform: isAnnual ? 'translate(24px, -50%)' : 'translate(0, -50%)' }}></div>
            </div>
            <span className={`tp-toggle-label ${isAnnual ? 'active' : 'inactive'}`} onClick={() => setIsAnnual(true)} style={{ cursor: 'pointer' }}>
              Annual <span className="tp-discount-badge">Save 50%</span>
            </span>
          </div>

          <div className="tp-pricing-grid">
            {/* Free Tier */}
            <div className="tp-pricing-card">
              <div className="tp-pricing-header">
                <h3>Starter</h3>
                <div className="tp-price">
                  <span className="currency">$</span>0<span className="period">/mo</span>
                </div>
                <p>Perfect for trying out basic AI automation.</p>
              </div>
              <ul className="tp-pricing-features">
                <li><Check size={18} color="#ef5b68" /> 1 AI Agent</li>
                <li><Check size={18} color="#ef5b68" /> 2 Social Networks</li>
                <li><Check size={18} color="#ef5b68" /> 10 Posts / month</li>
                <li className="disabled"><Check size={18} color="#ccc" /> Custom MCP Integration</li>
                <li className="disabled"><Check size={18} color="#ccc" /> Team Collaboration</li>
              </ul>
              <button className="tp-btn tp-btn-secondary tp-pricing-btn">Get Started Free</button>
            </div>

            {/* Pro Tier */}
            <div className="tp-pricing-card featured">
              <div className="tp-pricing-header">
                <div className="tp-popular-badge">MOST POPULAR</div>
                <h3>Pro</h3>
                <div className="tp-price">
                  <span className="currency">$</span>{isAnnual ? '15' : '30'}<span className="period">/mo</span>
                </div>
                <p>For creators and small businesses growing fast.</p>
              </div>
              <ul className="tp-pricing-features">
                <li><Check size={18} color="#ef5b68" /> 5 AI Agents</li>
                <li><Check size={18} color="#ef5b68" /> Unlimited Networks</li>
                <li><Check size={18} color="#ef5b68" /> 150 Posts / month</li>
                <li><Check size={18} color="#ef5b68" /> Custom MCP Integration</li>
                <li className="disabled"><Check size={18} color="#ccc" /> Team Collaboration</li>
              </ul>
              <button className="tp-btn tp-btn-primary tp-pricing-btn">Upgrade to Pro</button>
            </div>

            {/* Team Tier */}
            <div className="tp-pricing-card">
              <div className="tp-pricing-header">
                <h3>Agency</h3>
                <div className="tp-price">
                  <span className="currency">$</span>{isAnnual ? '49' : '99'}<span className="period">/mo</span>
                </div>
                <p>Advanced controls and team workflows.</p>
              </div>
              <ul className="tp-pricing-features">
                <li><Check size={18} color="#ef5b68" /> Unlimited AI Agents</li>
                <li><Check size={18} color="#ef5b68" /> Unlimited Networks</li>
                <li><Check size={18} color="#ef5b68" /> Unlimited Posts</li>
                <li><Check size={18} color="#ef5b68" /> Custom MCP Integration</li>
                <li><Check size={18} color="#ef5b68" /> Team Collaboration</li>
              </ul>
              <button className="tp-btn tp-btn-secondary tp-pricing-btn">Contact Sales</button>
            </div>
          </div>
        </section>

        <hr className="tp-separator" />

        {/* FAQ Section */}
        <section className="tp-faq">
          <div className="tp-faq-badge">FAQ</div>
          <h2 className="tp-faq-title">Frequently asked questions</h2>
          <p className="tp-faq-subtitle">The questions we get most. If yours isn't here, ask in support and we'll answer.</p>

          <div className="tp-faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`tp-faq-item ${openFaq === index ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="tp-faq-header">
                  <span className="tp-faq-question">{faq.question}</span>
                  <div className="tp-faq-icon" style={{ transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M5 12H19" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="tp-faq-answer">
                  <div className="tp-faq-answer-inner">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="tp-separator" />

        {/* Footer */}
        <footer className="tp-footer">
          <div className="tp-footer-content">
            <div className="tp-footer-brand">
              <div className="tp-logo">
                <img src="/logo.png" alt="Faware Logo" style={{ height: '100px' }} />
              </div>
              <p>The culinary agentic OS powering the next generation of restaurants.</p>
              <div className="tp-social-links">
                {/* <a href="#" className="tp-social-link"><TwitterIcon size={20} /></a> */}
                <a href="https://linkedin.com/company/faware" className="tp-social-link"><LinkedinIcon size={20} /></a>
                {/* <a href="#" className="tp-social-link"><InstagramIcon size={20} /></a> */}
              </div>
            </div>

            <div className="tp-footer-links">
              <div className="tp-footer-column">
                <h4>Product</h4>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Integrations</a>
                <a href="#">Changelog</a>
              </div>
              <div className="tp-footer-column">
                <h4>Resources</h4>
                <a href="#">Documentation</a>
                <a href="#">Blog</a>
                <a href="#">Community</a>
                <a href="#">Support</a>
              </div>
              <div className="tp-footer-column">
                <h4>Legal</h4>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
          <div className="tp-footer-bottom">
            <p>&copy; {new Date().getFullYear()} faware. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* Waitlist Modal */}
      {isWaitlistOpen && (
        <div className="tp-modal-overlay" onClick={() => setIsWaitlistOpen(false)}>
          <div className="tp-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="tp-modal-close" onClick={() => setIsWaitlistOpen(false)}>
              <X size={20} />
            </button>
            <h2 className="tp-modal-title">Join the Waitlist</h2>
            <p className="tp-modal-subtitle">Be the first to know when Faware is ready for you.</p>
            
            <form className="tp-modal-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks for joining!"); setIsWaitlistOpen(false); }}>
              <div className="tp-input-group">
                <label>Full Name</label>
                <input type="text" placeholder="Gordon Ramsay" required />
              </div>
              <div className="tp-input-group">
                <label>Email Address</label>
                <input type="email" placeholder="gordon@kitchen.com" required />
              </div>
              <button type="submit" className="tp-btn tp-btn-primary tp-modal-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrypostLanding;
