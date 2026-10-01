import { useState, useEffect } from 'react';

const TYPEWRITER_WORDS = ["culinary", "kitchen", "cafe"];

interface HeroProps {
  onOpenWaitlist: () => void;
}

export const Hero = ({ onOpenWaitlist }: HeroProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 150;
    const currentWord = TYPEWRITER_WORDS[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
      } else {
        setCurrentText(
          isDeleting
            ? currentWord.substring(0, currentText.length - 1)
            : currentWord.substring(0, currentText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <main className="tp-hero">
      <h1 className="tp-headline">
        Run your <span style={{ whiteSpace: 'nowrap' }}><span className="tp-typewriter">{currentText}<span className="tp-cursor">|</span></span>ops</span><br />
        on autopilot with<br />
        <span className="tp-underline-wrapper">
          Faware.
          <svg className="tp-underline" viewBox="0 0 400 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 15 Q 100 5 200 12 T 398 10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </span>
      </h1>

      <p className="tp-subheadline">
        Agentic AI OS that plans, executes, and<br />
        schedules processes in and out of the kitchen. <br /><br />
        <b>Launching in 2027. </b>
      </p>


      <button className="tp-btn tp-btn-primary tp-hero-cta" onClick={onOpenWaitlist}>
        Join Waitlist
      </button>
    </main>
  );
};
