import './services.css'
import FadeIn from "../AnimatedFadeIn/animated-fade-in";

const Services = () => {
    return ( 
        <>
        <FadeIn>
            <div className="services-container" >
                <div className="service-wrapper" id='services'>
                                    <div className="services-text">
                    <div className="main-text">
                        <span>A full-service digital design partner</span>
                    </div>
                    <div className="sub-text">
                        <span>Experience a unique partnership where you're involved at every step!</span>
                    </div>
                </div>
                    

                    <div className="services-cards">

                        <div className="cards">
                            <div className="cards-img">
                                <img src="./images/servicesCards/card-1.png" alt="" />
                            </div>

                            <div className="card-texts">
                                <div className="major-texts">
                                    <div className="big-text">
                                        <span>UIUX Design</span>
                                    </div>
                                    <div className="small-text">
                                        <span>Human-centered design for next-gen digital products.</span>
                                    </div>
                                </div>

                                <div className="list-texts">
                                    <span className='list-img'><img src="./images/servicesCards/check.png" alt="" /><span>UX architecture & User Flows</span>
                                    </span>

                                    <span className='list-img'><img src="./images/servicesCards/check.png" alt="" /><span>High-end UI systems tailored to your product</span>
                                    </span>

                                    <span className='list-img'><img src="./images/servicesCards/check.png" alt="" /><span>Premium-grade components, built to scale</span>
                                    </span>
                                </div>

                                <div className="services-btn">
                                    <button className="btn">Get a Quote</button>
                                </div>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="cards-img">
                                <img src="./images/servicesCards/card-2.png" alt="" />
                            </div>

                            <div className="card-texts">
                                <div className="major-texts">
                                    <div className="big-text">
                                        <span>Branding</span>
                                    </div>
                                    <div className="small-text">
                                        <span>Turn your vision into a brand people remember.</span>
                                    </div>
                                </div>

                                <div className="list-texts">
                                    <span className='list-img'><img src="./images/servicesCards/check.png" alt="" /><span>Strategic Brand Foundations</span>
                                    </span>

                                    <span className='list-img'><img src="./images/servicesCards/check.png" alt="" /><span>Timeless, high-end Visual Identity</span>
                                    </span>

                                    <span className='list-img'><img src="./images/servicesCards/check.png" alt="" /><span>Crafted to elevate perception and trust</span>
                                    </span>
                                </div>

                                <div className="services-btn">
                                    <button className="btn">Get a Quote</button>
                                </div>
                            </div>
                        </div>

                        <div className="cards">
                            <div className="cards-img">
                                <img src="./images/servicesCards/card-3.png" alt="" />
                            </div>

                            <div className="card-texts">
                                <div className="major-texts">
                                    <div className="big-text">
                                        <span>Consulting</span>
                                    </div>
                                    <div className="small-text">
                                        <span>Design-driven insights to unlock your product’s full potential.</span>
                                    </div>
                                </div>

                                <div className="list-texts">
                                    <span className='list-img'><img src="./images/servicesCards/check.png" alt="" /><span>Product & UX strategy audits</span>
                                    </span>

                                    <span className='list-img'><img src="./images/servicesCards/check.png" alt="" /><span>Guidance tailored to Web3 & AI teams</span>
                                    </span>

                                    <span className='list-img'>
                                        <img src="./images/servicesCards/check.png" alt="" />
                                        <span>Positioning and growth insights</span>
                                    </span>
                                </div>

                                <div className="services-btn">
                                    <button className="btn">Get a Quote</button>
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
 
export default Services;