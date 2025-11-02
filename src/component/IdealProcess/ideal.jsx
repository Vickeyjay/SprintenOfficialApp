import './ideal.css'
import FadeIn from "../AnimatedFadeIn/animated-fade-in";

const IdealProcess = () => {
    return ( 
        <>
    <FadeIn>
        <div className="services-container" >
                <div className="service-wrapper" id='services'>
                    <div className="services-text">
                    <div className="main-text">
                        <span>Our Ideal Process</span>
                    </div>
                    <div className="sub-text">
                        <span>A fast, structured approach that keeps you moving. From first idea to final handoff, we <br />design with clarity, speed, and impact. No fluff, no delays.</span>
                    </div>
                    <div className="btn-container">
                        <button className="btn"><a href="https://cal.com/sprinten">Book a Call with TOC</a></button>
                    </div>
                </div>
                    

                    <div className="services-cards">

                        <div className="cards">
                            <div className="cards-img">
                                <img src="./images/servicesCards/card-4.png" alt="" />
                            </div>

                            <div className="card-texts">
                                <div className="major-texts">
                                    <div className="big-text">
                                        <span>Discover & Align</span>
                                    </div>
                                    <div className="small-text">
                                        <span>We dive into your vision, users, and goals to set a clear <br />brdesign direction with strong foundations.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="cards-img">
                                <img src="./images/servicesCards/card-5.png" alt="" />
                            </div>

                            <div className="card-texts">
                                <div className="major-texts">
                                    <div className="big-text">
                                        <span>Design & Iterate</span>
                                    </div>
                                    <div className="small-text">
                                        <span>We explore, prototype, and refine. You get <br />fast, transparent updates and a flexible, <br />collaborative flow.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="cards-img">
                                <img src="./images/servicesCards/card-6.png" alt="" />
                            </div>

                            <div className="card-texts">
                                <div className="major-texts">
                                    <div className="big-text">
                                        <span>Deliver & Support</span>
                                    </div>
                                    <div className="small-text">
                                        <span>Final assets, documentation, and support, <br />ready to ship, scale, or hand off to devs <br />with confidence.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
    </FadeIn>
             
        </>
     );
}
 
export default IdealProcess;