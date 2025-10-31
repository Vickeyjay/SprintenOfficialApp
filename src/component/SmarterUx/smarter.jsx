import './smarter.css'
import FadeIn from "../AnimatedFadeIn/animated-fade-in";

const SmarterUx = () => {
    return ( 
        <>
        <FadeIn>
              <div className="banner-container">
                    <span className="img-ban-1"><img src="./images/lightening-1.png" alt="" /></span>
                    <div className="banner-contents">
                        <div className="banner-texts">
                        <div className="ban-main-text">
                            <span>Smarter UX starts here.</span>
                        </div>
                        <div className="ban-sub-text">
                            <span>One call. Clear ideas. Better UX, whether <br /> you're refining,
                                launching, or scaling.</span>
                                
                        </div>
                    </div>

                    <div className="btn-container">
                        <button className="btn">Book a Call with TOC</button></div>
                    </div>

                    <span className="img-ban-2"><img src="./images/lightening-2.png" alt="" /></span>
                    
                </div>
        </FadeIn>
          
        </>
     );
}
 
export default SmarterUx;