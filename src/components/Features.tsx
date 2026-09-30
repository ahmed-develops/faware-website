import { Utensils, Store, Cpu, UserCheck, Settings } from 'lucide-react';

export const Features = () => {
  return (
    <section className="tp-features">
      <h2 className="tp-features-title">Everything you need to automate your restaurant</h2>
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
  );
};
