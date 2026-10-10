import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import chefPlating from '../assets/chef_plating.jpg';
import restaurantInterior from '../assets/restaurant_interior.jpg';
import pantryShelves from '../assets/pantry_shelves.jpg';
import platedDish from '../assets/plated_dish.jpg';
import produceBoxes from '../assets/produce_boxes.jpg';

interface Scenario {
  category: string;
  title: string;
  description: string;
  image: string;
}

const scenarios: Scenario[] = [
  {
    category: "HEAD CHEF OPERATIONS",
    title: "ChefHQ™",
    description: "Autonomous sous-chef assistant for head chefs.",
    image: chefPlating
  },
  {
    category: "FRONT OF HOUSE",
    title: "Outsource dispute handling",
    description: "Handle disputes with food partners .",
    image: restaurantInterior
  },
  // {
  //   category: ""
  // },
  {
    category: "INVENTORY",
    title: "Live inventory reconciliation",
    description: "Continuously calculate stock depletion against expected recipe yields.",
    image: pantryShelves
  },
  {
    category: "SERVICE",
    title: "Smart device management",
    description: "Link all your kitchen devices and manage them smartly.",
    image: platedDish
  },
  {
    category: "PROCUREMENT",
    title: "Predictive purchasing",
    description: "Automatically generate wholesale purchase orders across verified distributors.",
    image: produceBoxes
  }
];

export const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = scenarios.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, handleNext]);

  const getStyleForIndex = (index: number) => {
    const diff = (index - activeIndex + total) % total;
    let left = '50%';
    let width = '400px';
    let height = '400px';
    let zIndex = 5;

    // Calculate positions to simulate a 3D circular carousel
    if (diff === 0) {
      left = '50%';
      width = '420px';
      height = '420px';
      zIndex = 5;
    } else if (diff === 1) {
      left = '72%';
      width = '280px';
      height = '280px';
      zIndex = 4;
    } else if (diff === 2) {
      left = '88%';
      width = '200px';
      height = '200px';
      zIndex = 3;
    } else if (diff === total - 2) {
      left = '12%';
      width = '200px';
      height = '200px';
      zIndex = 3;
    } else if (diff === total - 1) {
      left = '28%';
      width = '280px';
      height = '280px';
      zIndex = 4;
    }

    return {
      left,
      top: '50%',
      width,
      height,
      zIndex,
      transform: 'translate(-50%, -50%)',
    };
  };

  const activeScenario = scenarios[activeIndex];

  return (
    <section className="tp-carousel-section" id="features">
      {/* <div className="tp-pill-nav">
        <button className="tp-pill-btn active">Scenarios</button>
        <button className="tp-pill-btn">BackHQ™</button>
        <button className="tp-pill-btn">FrontHQ™</button>
      </div> */}

      <div
        className="tp-carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {scenarios.map((scenario, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`tp-carousel-item ${isActive ? 'active' : ''}`}
              style={getStyleForIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <img src={scenario.image} alt={scenario.title} />
              {isActive && (
                <div className="watch-btn">
                  See in action
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="tp-carousel-text">
        {/* <div className="tp-carousel-category">
          {activeScenario.category}
        </div> */}
        <div className="tp-carousel-title-row">
          <button className="tp-nav-arrow" onClick={handlePrev} aria-label="Previous scenario">
            <ChevronLeft size={24} />
          </button>
          <h3 className="tp-carousel-title">
            {activeScenario.title}
          </h3>
          <button className="tp-nav-arrow" onClick={handleNext} aria-label="Next scenario">
            <ChevronRight size={24} />
          </button>
        </div>
        <p className="tp-carousel-desc">
          {activeScenario.description}
        </p>

        <div className="tp-carousel-footer">
          These are example workflows. Yours are tuned to your kitchen as per your needs.
        </div>
      </div>
    </section>
  );
};
