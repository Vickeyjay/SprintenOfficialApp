import { useState, useEffect } from "react";
import "./carousel-2.css";
import FadeIn from "../AnimatedFadeIn/animated-fade-in";

const testimonials = [
  {
    logo: "/images/airbills.svg",
    company: "airbills",
    text: "Sprinten helps me ship my product in just a month and we have been working together on the V2 also. Great guys.",
    author: "0xspolite.sol",
    avatar: "/images/avatar1.png",
  },
  {
    logo: "/images/airbills.svg",
    company: "airbills",
    text: "Working with Sprinten was seamless — great communication, and the product came out beautiful.",
    author: "0xsol.dev",
    avatar: "/images/avatar2.png",
  },
  {
    logo: "/images/airbills.svg",
    company: "airbills",
    text: "They handled our launch like pros. Definitely sticking with them for our next release.",
    author: "0xcreator.eth",
    avatar: "/images/avatar3.png",
  },
];

const ClientCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <FadeIn>
      <div className="client-carousel">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {testimonials.map((t, i) => (
          <div key={i} className="carousel-card">
            <div className="quote">“</div>
            <img src={t.logo} alt={t.company} className="company-logo" />
            <h3>{t.company}</h3>
            <p>{t.text}</p>
            <div className="author">
              <img src={t.avatar} alt={t.author} className="avatar" />
              <span>{t.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </FadeIn>
    
  );
};

export default ClientCarousel;
