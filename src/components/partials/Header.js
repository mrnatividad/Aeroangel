import { Link} from "react-router-dom";
import './header.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header = () => {
    const navigate = useNavigate();

    const handleLogoClicked = () => {
        navigate('/');
    }
    
    return (
        <>
            <nav>
                <div className="navbar-container">
                    <div className="left">
                       <div className="logo-with-title" onClick={handleLogoClicked}>
                            <img src = "./logo.png" alt="logo" className="logo_title"/>
                            <div className="logo-title inknut-antiqua-extrabold">Aero<span className="inknut-antiqua-normal">Angel</span></div>
                       </div>
                        <div className="nav-menu">
                            <ul>
                                <li><Link to = "/discover" className="inknut-antiqua-light">Discover</Link></li>
                                <li><Link to = "/" className="inknut-antiqua-light">Project</Link></li>
                                <li><Link to = "/quiz" className="inknut-antiqua-light">Quiz</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <div className="search-logo-input">
                           <div className="contain-search">
                                <img src = "./magnifying.png" alt="search" className="search-logo"/>
                                <input type = "text" placeholder="Search..."/>
                           </div>
                        </div>
                        <div className="nav-menu-2">
                            <ul>
                                <li><Link to = "/contact" className="inknut-antiqua-light">Contact</Link></li>
                                <li><Link to = "/about" className="inknut-antiqua-light">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
