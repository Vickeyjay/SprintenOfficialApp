import './hero.css'
import { useRive } from "@rive-app/react-canvas";
import ThunderLogo from "./thunder_logo.riv";
import { motion } from "framer-motion";
import FadeIn from "../AnimatedFadeIn/animated-fade-in";
import { div } from 'framer-motion/client';


const HeroPage = () => {

      const { RiveComponent } = useRive({
    src: ThunderLogo,
    autoplay: true,
  });


    return ( 
        <>
        
<FadeIn>
            <div className="hero-container" id='home'>
                
                <div className="main-hero-content">
                    <div className="content-container">

                    <div className="text-btn-container">
                    
                        <div className="text-container">
                        
                            <div className="main-text">
                                <span>Transforming ideas in <br />market ready products</span>
                            </div>
                            <div className="sub-text">
                                <span>We simplify complex tech products into intuitive, user-friendly <br />
                                experiences. Our commitment to excellence fosters a <br />
                                collaborative design process that actively engages clients.</span>
                            </div>
                        </div>
                        <div className="btn-cta-container">
                            <button className="btn-1">Book a call</button>
                            <button className="btn-2">View our Service</button>
                        </div>
                    </div>
                    <div className="brand-container">
                        <div className="brand-text">
                            <span>We are trusted by leading brand</span>
                        </div>

                        <div className="brand-images">
                            <img src="./images/superteam.png" alt="" />
                            <img src="./images/rain.png" alt="" />
                            <img src="./images/solana.png" alt="" />
                            <img src="./images/jupiter.png" alt="" />
                            <img src="./images/valiant.png" alt="" />
                        </div>
                    </div>
                </div>


                {/* <FadeIn> */}
                <div className="hero-image-container">
                    <RiveComponent />
                </div>
                {/* </FadeIn> */}
                </div>
                


                


                {/* CAROUSEL SLIDES */}


                <div className="slider">

                    <div className="slide-track">

                        <div className="slide">
                            <img src="./images/carouselOne/carousel-2.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-3.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-2.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-3.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-2.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-3.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-2.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-3.png" alt="This is an image" />
                        </div>

                        <div className="slide">
                            <img src="./images/carouselOne/carousel-2.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-3.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-2.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-3.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-2.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-3.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-2.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-3.png" alt="This is an image" />
                        </div>

                        <div className="slide">
                            <img src="./images/carouselOne/carousel-2.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-3.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-2.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-3.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-2.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-3.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-2.png" alt="This is an image" />
                        </div>
                        <div className="slide">
                            <img src="./images/carouselOne/carousel-3.png" alt="This is an image" />
                        </div>
                    </div>    
                </div>
            </div>
            </FadeIn>
        </>
     );
}
 
export default HeroPage;