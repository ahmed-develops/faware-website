import { useState } from 'react';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
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
            <li><Check size={18} color="#ef5b68" /> Basic Restaurant Ops</li>
            <li><Check size={18} color="#ef5b68" /> Standard Support</li>
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
            <p>For growing restaurants and small chains.</p>
          </div>
          <ul className="tp-pricing-features">
            <li><Check size={18} color="#ef5b68" /> 5 AI Agents</li>
            <li><Check size={18} color="#ef5b68" /> Advanced FOH & BOH</li>
            <li><Check size={18} color="#ef5b68" /> Priority Support</li>
            <li><Check size={18} color="#ef5b68" /> Custom MCP Integration</li>
            <li className="disabled"><Check size={18} color="#ccc" /> Multi-location Sync</li>
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
            <li><Check size={18} color="#ef5b68" /> Multi-location Sync</li>
            <li><Check size={18} color="#ef5b68" /> 24/7 Dedicated Support</li>
            <li><Check size={18} color="#ef5b68" /> Custom MCP Integration</li>
            <li><Check size={18} color="#ef5b68" /> Team Collaboration</li>
          </ul>
          <button className="tp-btn tp-btn-secondary tp-pricing-btn">Contact Sales</button>
        </div>
      </div>
    </section>
  );
};
