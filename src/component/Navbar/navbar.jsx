import './navbar.css'
import Hamburger from '../Hamburger/hamburger';


const Navbar = () => {
    return ( 
        <>
            <div className="navbar-container">
                <nav className="nav-content-container">
                    <div className="logo-container">
                        <a href="#home"><img src="./images/logo.png" alt="" /></a>
                    
                </div>

                <div className="link-container">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#work">Our Work</a></li>
                        <li><a href="#clients">Our Clients</a></li>
                    </ul>
                </div>

                <div className="hamburger-wrapper">
                    <Hamburger />
                </div>
                </nav>
                
                
            </div>
        </>
     );
}
 
export default Navbar;