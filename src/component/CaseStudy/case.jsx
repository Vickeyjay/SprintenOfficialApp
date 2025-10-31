import './case.css'
import { BiSolidRightArrowAlt } from "react-icons/bi";
import FadeIn from "../AnimatedFadeIn/animated-fade-in";

const CaseStudy = () => {
    return ( 
        <>
        <FadeIn>
            <div className="case-container" id='work'>

            <div className="mini-case-cover">
                <div className="mini-case mini-case-card-1">
                    <div className="left-case-content">
                        <div className="case-img-container">
                            <span className="img">
                            <img src="./images/carouselOne/carousel-3.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="right-icon">
                            <span><img src="./images/icons/fig8.png" alt="" /></span>
                        </div>
                        <div className="right-main-text">
                            <span>PRODUCT REDESIGN</span>
                        </div>
                        <div className="right-sub-text">
                            <span>Designing the foundational UX for the future <br />leading DEX on Fogo, a
                            high-speed Layer 1 built <br />on Solana.</span>
                        </div>
                        <div className="right-btn">
                            <button className="btn-2">Read More<span><BiSolidRightArrowAlt className='arrow-icon'/></span></button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mini-card-cover">
                <div className="mini-case mini-card-2">
                    <div className="left-case-content">
                        <div className="case-img-container">
                            <span className="img">
                            <img src="./images/carouselOne/carousel-2.png" alt="" />
                        </span>
                        </div>
                    </div>
                    <div className="right-content">

                        <div className="right-icon">
                            <span><img src="./images/icons/gard.png" alt="" /></span>
                        </div>
                        <div className="right-main-text">
                            <span>GARD WEB DESIGN</span>
                        </div>
                        <div className="right-sub-text">
                            <span>Designing the foundational UX for the future <br />leading DEX on Fogo, a
                            high-speed Layer 1 built <br />on Solana.</span>
                        </div>
                        <div className="right-btn">
                            <button className="btn-2">Read More<span><BiSolidRightArrowAlt className='arrow-icon'/></span></button>
                        </div>
                    </div>
                </div>
            </div>
                
            </div>
        </FadeIn>
            
        </>
     );
}
 
export default CaseStudy;