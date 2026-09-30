const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="tp-footer">
      <div className="tp-footer-content">
        <div className="tp-footer-brand">
          <div className="tp-logo">
            <img src="/logo.png" alt="Faware Logo" style={{ height: '100px' }} />
          </div>
          <p>The culinary agentic OS powering the next generation of restaurants.</p>
          <div className="tp-social-links">
            <a href="https://linkedin.com/company/faware" className="tp-social-link"><LinkedinIcon size={20} /></a>
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
        <p>&copy; {new Date().getFullYear()} Faware™. All rights reserved.</p>
      </div>
    </footer>
  );
};
