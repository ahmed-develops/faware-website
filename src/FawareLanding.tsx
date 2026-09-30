import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';
import './FawareLanding.css';

const FawareLanding = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="faware-container">
      <div className="faware-content">
        <Navbar />
        <Hero onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        <hr className="tp-separator" />
        <Features />
        <hr className="tp-separator" />
        <Pricing />
        <hr className="tp-separator" />
        <Faq />
        <hr className="tp-separator" />
        <Footer />
      </div>
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
};

export default FawareLanding;
