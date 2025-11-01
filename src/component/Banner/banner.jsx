import './banner.css'
// import FadeIn from "../AnimatedFadeIn/animated-fade-in";

const Banner = () => {
    return ( 
        <>
             <div className="banner-container">
                    <span className="img-ban-1"><img src="./images/lightening-1.png" alt="" /></span>
                    <div className="banner-contents">
                        <div className="banner-texts">
                        <div className="ban-main-text">
                            <span>Your UX Deserves better</span>
                        </div>
                        <div className="ban-sub-text">
                            <span>Got a product idea or UX issue? Book a call and let’s <br />
                            explore how we can elevate your product together.</span>
                        </div>
                    </div>

                    <div className="btn-container">
                        <button className="btn">Book a Call with TOC</button></div>
                    </div>

                    <span className="img-ban-2"><img src="./images/lightening-2.png" alt="" /></span>
                    
                </div>
               
        </>
     );
}
 
export default Banner;