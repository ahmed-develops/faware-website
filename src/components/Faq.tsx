import { useState } from 'react';

const faqs = [
  { question: "What is Faware?", answer: "Faware is an AI-powered culinary management platform that leverages agents to plan, execute, and schedule your restaurant operations automatically." },
  { question: "Who is Faware for?", answer: "It's built for restaurant owners, chefs, and hospitality groups who want to scale their operations without spending hours on manual administration." },
  { question: "How is Faware different from standard POS systems?", answer: "Unlike traditional tools that just record transactions, Faware's AI agents actually manage workflows, automate inventory, and adapt to your unique kitchen processes." },
  { question: "Can I use my existing softwares with Faware?", answer: "Yes. Faware's MCP allows integration model with existing third-party software quick and efficient. Faware MCP is currently planned for launch in mid-2027" }
];

export const Faq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="tp-faq">
      {/* <div className="tp-faq-badge">FAQ</div> */}
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
  );
};
