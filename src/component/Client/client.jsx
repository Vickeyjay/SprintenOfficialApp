import ClientCarousel from '../Carousel/ClientCarousel';
import ImageCarousel from '../Carousel/ImageCarousel';
import FadeIn from "../AnimatedFadeIn/animated-fade-in";
import './client.css'

const Client = () => {
    return ( 
        <>
        <FadeIn>
             <div className="clients-container" id='clients'>
                <div className="clients-cover">
                    <div className="clients-texts-container">
                    <div className="clients-main-text">
                        <span>Hear from Our Satisfied Client</span>
                    </div>
                    <div className="clients-sub-text">
                        <span>Check out the latest insights from our clients!</span>
                    </div>
                </div>

            <div className="clients-carousel-container">
                <div className="clients-carousel">
                    <div className="apostrophe-image">
                        <span><img src="./images/apostrophe.png" alt="" /></span>
                    </div>

                    <div className="clients-contents">
                        <div className="clinets-logo-container">
                            <span><img src="./images/icons/fig8.png" alt="" /></span>
                        </div>

                        <div className="clients-texts">
                            <span>Sprinten helps me ship my product in just a months and <br />we have been working together on the V2 also. great guys</span>
                        </div>

                        <div className="clients-person">
                            <span><img src="images/person.png" alt="" /></span><span className='person-text'>0xspolite.sol</span>
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
 
export default Client;