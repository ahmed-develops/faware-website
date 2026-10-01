import { useState } from 'react';
import { Utensils, Store, ChefHat, CheckCircle, X } from 'lucide-react';

interface FeatureItem {
  title: string;
  description: string;
}

interface ActiveFeature extends FeatureItem {
  color: string;
  bgColor: string;
  icon: any;
}

const backHQFeatures: FeatureItem[] = [
  { title: "Live Inventory Reconciliation", description: "Ingests real-time sales and modifier data via the MCP server to continuously calculate stock depletion against expected recipe yields." },
  { title: "Predictive Supplier Purchase Orders", description: "Evaluates historical burn rates, upcoming reservations, and lead times to automatically generate wholesale purchase orders across verified distributor accounts." },
  { title: "Dynamic Shift Trimming", description: "Monitors live labor-to-sales ratios against revenue pacing, generating lightweight mobile action cards for floor managers to release casual staff before penalty rates hit." },
  { title: "Delivery App Pacing", description: "Reads real-time kitchen line capacity and automatically pauses, throttles, or adjusts prep times on external delivery platforms to protect in-house food quality." },
  { title: "Invoice & Delivery Verification", description: "Automatically compares incoming supplier delivery dockets against original purchase orders and billed invoices to catch short-ships, off-spec cuts, and unwarranted price increases." },
  { title: "Automated Compliance Logging", description: "Collects digital HACCP logs, food temperature checks, and kitchen sanitation tasks via scheduled agent prompts without manual paper checklists." },
];

const frontHQFeatures: FeatureItem[] = [
  { title: "Autonomous Table Pacing", description: "Syncs floor status with POS table states via the MCP server to dynamically adjust seating windows and maximize seat utilization during peak service." },
  { title: "Smart Reservation Orchestration", description: "Coordinates incoming booking requests across phone, web, and walk-ins, balancing party sizes against live kitchen throughput to prevent station bottlenecks." },
  { title: "Automated Two-Way Guest Communication", description: "Handles booking confirmations, dietary requirement checks, arrival delays, and deposit verifications autonomously over SMS and WhatsApp." },
  { title: "Waitlist Flow Management", description: "Calculates dynamic quote times based on live course progression and table turnover velocity, notifying waiting guests with accurate return estimates." },
  { title: "Headless Mobile Action Cards", description: "Dispatches single-tap approval prompts to front-of-house leads for VIP table releases, large party holds, and late cancellations without requiring a dedicated terminal." },
];

const mcpFeatures: FeatureItem[] = [
  { title: "Interactive Dashboard & Chat", description: "High-level operations overview coupled with an integrated AI chat interface for rapid knowledge access." },
  { title: "Recipe & Menu Planning", description: "Dedicated tools for crafting culinary recipes and planning upcoming menus." },
  { title: "Live Inventory Management", description: "Comprehensive inventory tracking featuring a Live Cooking Panel, Baskets View, and an Add Items Wizard." },
  { title: "Automated Shopping List", description: "Real-time tracking of required ingredients and streamlined supplier order generation." },
  { title: "Vendor & HQ Workflow", description: "Integrated management of vendor APIs and centralized operations workflows." },
  { title: "AI Context Configuration", description: "Interface to govern context and operational parameters for backend AI agents." },
  { title: "Team Management", description: "Tools to oversee culinary crew profiles, ranks, and system notifications." },
];

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState<ActiveFeature | null>(null);

  const FeaturePill = ({ title, description, color, bgColor, icon: Icon }: any) => (
    <li style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '15px', color: 'var(--main-dark)', fontWeight: 500 }}>
      <CheckCircle size={18} color="#ef5b68" style={{ flexShrink: 0 }} />
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setActiveFeature({ title, description, color, bgColor, icon: Icon });
        }}
        style={{
          color: color,
          textDecoration: 'none',
          cursor: 'pointer',
          background: bgColor,
          padding: '2px 8px',
          borderRadius: '6px',
          fontSize: '13px',
          fontWeight: 600,
          transition: 'opacity 0.2s',
          lineHeight: '1.4'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        {title}
      </a>
    </li>
  );

  return (
    <section className="tp-features">
      <h2 className="tp-features-title">Level up your culinary operations</h2>
      <p className="tp-features-subtitle">Powerful tools that let your AI agents run the show while you maintain full control.</p>

      <div className="tp-features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', maxWidth: '1200px' }}>

        {/* BackHQ */}
        <div className="tp-feature-card">
          <div className="tp-feature-icon" style={{ backgroundColor: 'var(--accent-bg)' }}>
            <Utensils size={24} color="#ef5b68" />
          </div>
          <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Back of house operations (BackHQ™)</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            {backHQFeatures.map((feat, idx) => (
              <FeaturePill key={idx} {...feat} color="var(--accent-color)" bgColor="var(--accent-bg)" icon={Utensils} />
            ))}
            <FeaturePill
              title="ChefHQ™ Autonomous Sous Chef"
              description="Empowers culinary teams with customized tools tailored directly to their unique kitchen workflows and station setups."
              color="var(--accent-color)"
              bgColor="var(--accent-bg)"
              icon={ChefHat}
            />
          </ul>
        </div>

        {/* FrontHQ */}
        <div className="tp-feature-card">
          <div className="tp-feature-icon" style={{ backgroundColor: 'var(--accent-bg)' }}>
            <Store size={24} color="#ef5b68" />
          </div>
          <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Front of house operations (FrontHQ™)</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            {frontHQFeatures.map((feat, idx) => (
              <FeaturePill key={idx} {...feat} color="var(--accent-color)" bgColor="var(--accent-bg)" icon={Store} />
            ))}
          </ul>
        </div>

        {/* MCP Container */}
        <div className="tp-feature-card">
          <div className="tp-feature-icon" style={{ backgroundColor: 'var(--accent-bg)' }}>
            <ChefHat size={24} color="#ef5b68" />
          </div>
          <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>Model Context Protocol (FawareMCP™)</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            {mcpFeatures.map((feat, idx) => (
              <FeaturePill key={idx} {...feat} color="var(--accent-color)" bgColor="var(--accent-bg)" icon={ChefHat} />
            ))}
          </ul>
        </div>

      </div>

      {/* Dynamic Feature Modal */}
      {activeFeature && (
        <div className="tp-modal-overlay" onClick={() => setActiveFeature(null)}>
          <div className="tp-modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '500px', padding: '32px' }}>
            <button className="tp-modal-close" onClick={() => setActiveFeature(null)}>
              <X size={24} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div className="tp-feature-icon" style={{ backgroundColor: 'rgba(239, 91, 104, 0.15)', marginBottom: 0, width: '48px', height: '48px' }}>
                <activeFeature.icon size={24} color="#ef5b68" />
              </div>
              <h3 style={{ fontSize: '22px', margin: 0, color: 'var(--main-dark)', fontWeight: 700, lineHeight: 1.3 }}>
                {activeFeature.title}
              </h3>
            </div>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              {activeFeature.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
