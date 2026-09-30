import { useState } from 'react';
import { Check, X } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [isWaitlistSubmitted, setIsWaitlistSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    setTimeout(() => setIsWaitlistSubmitted(false), 300);
  };

  return (
    <div className="tp-modal-overlay" onClick={handleClose}>
      <div className="tp-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="tp-modal-close" onClick={handleClose}>
          <X size={20} />
        </button>

        {!isWaitlistSubmitted ? (
          <>
            <h2 className="tp-modal-title">Join the Waitlist</h2>
            <p className="tp-modal-subtitle">Be the first to know when Faware is ready for you.</p>

            <form className="tp-modal-form" onSubmit={(e) => { e.preventDefault(); setIsWaitlistSubmitted(true); }}>
              <div className="tp-input-group">
                <label>Full Name / Company Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="tp-input-group">
                <label>Email Address</label>
                <input type="email" placeholder="john.doe@marriot.com" required />
              </div>
              <button type="submit" className="tp-btn tp-btn-primary tp-modal-submit">
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="tp-modal-success">
            <div className="tp-success-icon">
              <Check size={40} color="#fff" strokeWidth={3} />
            </div>
            <h2 className="tp-modal-title">You're on the list!</h2>
            <p className="tp-modal-subtitle">We'll reach out as soon as a spot opens up.</p>
            <button className="tp-btn tp-btn-secondary" onClick={handleClose} style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
