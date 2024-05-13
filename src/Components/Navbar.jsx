import React, {useState} from "react";
import logo from '../assets/logogfc.png';
import { Link } from 'react-router-dom';


function Navbar() {

    const [nav, setnav] = useState(false);
    const  changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true); 
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <nav className={nav ? 'nav active' : 'nav'} >
            <div className="container">
                <div className="navbar-content">
                    <Link to="#main" className="logo">
                        <img src={logo} alt="Gym-logo" className="logo" />
                    </Link>
                    <input type="checkbox" className="menu-btn" id="menu-btn" />
                    <label className="menu-icon" for="menu-btn">
                        <span className="nav-icon"></span>
                    </label>

                    <ul className="navigation--lists">
                        <li className="navigation--items">
                            <a href="#main" className="navigation--links active">Home</a>
                        </li>
                        <li className="navigation--items">
                            <a href="#about" className="navigation--links">About</a>
                        </li>
                        <li className="navigation--items">
                            <a href="#services" className="navigation--links">Services</a>
                        </li>
                        <li className="navigation--items">
                            <a href="#contact" className="navigation--links">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
