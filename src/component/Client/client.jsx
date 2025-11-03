import { useState, useRef, useEffect } from "react";
import FadeIn from "../AnimatedFadeIn/animated-fade-in";
import "./client.css";

const testimonials = [
  {
    id: "client-1",
    logo: "./images/icons/fig8.png",
    text: "Sprinten helps me ship my product in just a months and we have been working together on the V2 also. Great guys.",
    person: "0xspolite.sol",
    img: "images/person.png",
  },
  {
    id: "client-1",
    logo: "./images/icons/fig8.png",
    text: "These guys are awesome — quick communication and clean design delivery!",
    person: "devbyjay",
    img: "images/person.png",
  },
  {
    id: "client-2",
    logo: "./images/icons/fig8.png",
    text: "Sprinten really gets it done. They understood my product vision perfectly.",
    person: "linx.eth",
    img: "images/person.png",
  },
];

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const autoSlideRef = useRef(null);

  // --- Navigation ---
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // --- Swipe Handlers ---
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (distance > swipeThreshold) nextSlide();
    if (distance < -swipeThreshold) prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // --- Auto Slide every 5 seconds ---
  useEffect(() => {
    autoSlideRef.current = setInterval(nextSlide, 5000);

    return () => clearInterval(autoSlideRef.current);
  }, []);

  // Pause auto-slide on hover
const handleMouseEnter = () => clearInterval(autoSlideRef.current);
const handleMouseLeave = () => {
  autoSlideRef.current = setInterval(nextSlide, 5000);
};


  return (
    <FadeIn>
      <div className="clients-container" id="clients">
        <div className="clients-cover">
          <div className="clients-texts-container">
            <div className="clients-main-text">
              <span>Hear from Our Satisfied Client</span>
            </div>
            <div className="clients-sub-text">
              <span>Check out the latest insights from our clients!</span>
            </div>
          </div>

            <div
                className="clients-carousel-container"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
            <div className={`clients-carousel ${testimonials[currentIndex].id}`}>
              <div className="apostrophe-image">
                <span>
                  <img src="./images/apostrophe.png" alt="quote" />
                </span>
              </div>

              <div className="clients-contents">
                <div className="clinets-logo-container">
                  <span>
                    <img
                      src={testimonials[currentIndex].logo}
                      alt="client-logo"
                    />
                  </span>
                </div>

                <div className="clients-texts">
                  <span>{testimonials[currentIndex].text}</span>
                </div>

                <div className="clients-person">
                  <span>
                    <img
                      src={testimonials[currentIndex].img}
                      alt={testimonials[currentIndex].person}
                    />
                  </span>
                  <span className="person-text">
                    {testimonials[currentIndex].person}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="carousel-buttons">
            <button onClick={prevSlide} className="prev-btn">
              ← Prev
            </button>
            <button onClick={nextSlide} className="next-btn">
              Next →
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Client;
