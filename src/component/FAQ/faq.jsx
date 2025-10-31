import { useState } from "react";
import "./faq.css";
import { GoArrowDown } from "react-icons/go";
import FadeIn from "../AnimatedFadeIn/animated-fade-in";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const faqData = [
  {
    question: "Can you help if we’re pre-product?",
    answer:
      "How Do I Place An Order Or Request A Delivery?",
  },
  {
    question: "Do you have experience in Web3 or product like mine?",
    answer:
      "Do you have experience in Web3 or product like mine?",
  },
  {
    question: "Why not just hire in-house?",
    answer:
      "Why not just hire in-house?",
  },
  {
    question: "How quickly will we see results?",
    answer:
      "How quickly will we see results?",
  },
  {
    question: "What if we’re not happy with the designs?",
    answer:
      "What if we’re not happy with the designs?",
  },
  {
    question: "What would the first steps be in getting started?",
    answer:
      "What would the first steps be in getting started?",
  },
];


  return (
    <FadeIn>
      <div className="faq-wrapper" id="faq">
      <h2 className="faq-title">FAQs</h2>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-header" onClick={() => toggleFaq(index)}>
              <p>{item.question}</p>
              <span
                className={`faq-icon ${activeIndex === index ? "open" : ""}`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <circle cx="12" cy="12" r="11.5" stroke="#FFFFFF" /> */}
                  <path
                    d="M12 7V17"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d={`M7 ${activeIndex === index ? "12" : "12"}H17`}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{
                      opacity: activeIndex === index ? 0 : 1,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                </svg>
              </span>
            </div>

            <div
              className={`faq-body-wrapper ${
                activeIndex === index ? "show" : ""
              }`}
            >
              <div className="faq-body">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </FadeIn>
    
  );
};

export default Faq;
