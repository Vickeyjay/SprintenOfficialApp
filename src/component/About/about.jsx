import './about.css'
import FadeIn from "../AnimatedFadeIn/animated-fade-in";

const About = () => {
    return ( 
        <>
        <FadeIn>
            <div className="about-container" id='about'>

            <div className="mini-card-cover">
                <div className="mini-card mini-card-1">
                    <div className="left-content">
                        <div className="left-text">
                            <span>What we Do</span>
                        </div>
                        <div className="left-icon">
                            <span className="left-img">
                                <img src="./images/icons/pen.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="right-text">
                            <span>Sprinten is a creative design agency shaping the future of digital products in Web3 and AI. <br /><br />
                            We specialize in crafting high-impact user experiences, blending strategy, aesthetics, and usability for forward-thinking teams. With a track record of 50+ projects and a global client base, we turn complex into intuitive, elegant interfaces, from landing pages to full product ecosystems. <br /><br />Whether you're launching a new protocol or scaling your next-gen platform, we design for those who build the future.</span>
                        </div>

                        <div className="right-btn">
                            <button className="btn-1">View Our Case studies</button>
                            <button className="btn-2"><a href="https://x.com/Sprint3n">Follow Us on X</a></button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mini-card-cover">
                <div className="mini-card mini-card-1">
                    <div className="left-content">
                        <div className="left-text">
                            <span>Our Story</span>
                        </div>
                        <div className="left-icon">
                            <span className="left-img">
                                <img src="./images/icons/book.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="right-text">
                            <span>Since 2024, Sprinten has been dedicated to seamlessly integrating advanced technology with exceptional user experiences. <br /><br />Our passionate design team creates intuitive, user-centered solutions that simplify even the most complex digital platforms. <br /><br />

                            Sprinten is committed to transparency, collaboration, and design excellence, serving as a dependable partner for both emerging startups and established enterprises in bringing visionary and functionally impactful projects to life.</span>
                        </div>

                        <div className="right-btn">
                            <button className="btn-1">View Our Case studies</button>
                            <button className="btn-2"><a href="https://x.com/Sprint3n">Follow Us on X</a></button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mini-card-cover">
                <div className="mini-card mini-card-1">
                    <div className="left-content">
                        <div className="left-text">
                            <span>Why Work with us</span>
                        </div>
                        <div className="left-icon">
                            <span className="left-img">
                                <img src="./images/icons/rocket.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="right-text">
                            <span>At Sprinten, we collaborate closely with clients, offering real-time access to Figma files for fast, actionable feedback. We specialize in user-centric design for forward-thinking tech products, including platforms in Web3 and AI. <br /><br />

                            Our transparent process and efficient project management keep everything on track and aligned with your goals. <br /><br />From audit to final delivery, we act as a results-driven design partner focused on clarity, engagement, and long-term impact.</span>
                        </div>

                        <div className="right-btn">
                            <button className="btn-1">View Our Case studies</button>
                            <button className="btn-2"><a href="https://x.com/Sprint3n">Follow Us on X</a></button>
                        </div>
                    </div>
                </div>
            </div>
                
            </div>
            </FadeIn>
        </>
     );
}
 
export default About;