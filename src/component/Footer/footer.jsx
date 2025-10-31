import './footer.css'
import FadeIn from "../AnimatedFadeIn/animated-fade-in";

const Footer = () => {
    return ( 
        <>
        <FadeIn>
            <div className="footer-container">
                <div className="text-logo-container">
                    <div className="footer-logo">
                        <div className="footer-img">
                        <span>
                            <img src="./images/logo.png" alt="" />
                        </span>
                        </div>
                        

                        <div className="copy-right">
                            <span> &copy; 2025 Sprinten</span>
                        </div>
                    </div>

                    <div className="footer-link-container">
                    <div>
                        <span><a href="#home">Home</a></span>
                        <span><a href="#about">About</a></span>
                        <span><a href="#services">Services</a></span>
                        <span><a href="#work">Our Work</a></span>
                        <span><a href="#cspanents">Our Clients</a></span>
                    </div>
                </div>
                </div>

                <div className="footer-image">
                    <span><img src="./images/footer-logo.png" alt="" /></span>
                </div>
            </div>  
        </FadeIn>
            
        </>
     );
}
 
export default Footer;