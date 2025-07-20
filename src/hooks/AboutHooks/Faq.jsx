// src/hooks/AboutUs/FaqSection.jsx
import React, { useState } from "react";
import faqItems from "../../data/AboutUsFaq"; // Ensure each item has a unique 'id'
import "../../styles/AboutUs.css";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <div className="faq-title-section">
          <h2 className="faq-title">FAQ's</h2>
        </div>
        <div className="faq-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>

      <div className="faq-accordion">
        {faqItems.map((item, index) => (
          <div className="faq-item" key={item.id || index}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3>{item.question}</h3>
              <span className={`faq-toggle ${activeIndex === index ? "active" : ""}`}>
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              id={`faq-answer-${index}`}
              className={`faq-answer ${activeIndex === index ? "active" : ""}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;