import './header.css';
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {NavLink} from 'react-router-dom'


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
                            <img src = "/LogoV2.png" alt="logo" className="logo_title"/>
                            <div className="logo-title inknut-antiqua-extrabold">Aero<span className="inknut-antiqua-normal">Angel</span></div>
                       </div>
                        <div className="nav-menu">
                            <ul>
                                <li><NavLink to = "/discover" className="inknut-antiqua-light"  >Discover</NavLink></li>
                                <li><NavLink to = "/" className="inknut-antiqua-light">Project</NavLink></li>
                                <li><NavLink to = "/contact" className="inknut-antiqua-light">Contact</NavLink></li>
                                <li><NavLink to = "/about" className="inknut-antiqua-light">About</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <div className="search-logo-input">
                           <div className="contain-search">
                                <img src = "/magnifying.png" alt="search" className="search-logo"/>
                                <input type = "text" placeholder="Search..."/>
                           </div>
                        </div>
                        <div className="nav-menu-2">
                            <ul>
                               
                                <li><NavLink to = "/quiz" className="inknut-antiqua-light">Quiz</NavLink></li>
                                <li><NavLink to = "/" className="inknut-antiqua-light">Resources</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='navbar-small'>
                        <div className="logo-mobile" onClick={handleLogoClicked}>
                        <img src = "/LogoV2.png" alt="logo" className="logo_title-mobile"/>
                        <div className="logo-title inknut-antiqua-extrabold">Aero<span className="inknut-antiqua-normal">Angel</span></div>
                        </div>

                        <div className="nav-menu-mobile">
                            <ul>
                                <li><NavLink to = "/discover" className="inknut-antiqua-light"  >Discover</NavLink></li>
                                <li><NavLink to = "/" className="inknut-antiqua-light">Project</NavLink></li>
                                <li><NavLink to = "/quiz" className="inknut-antiqua-light">Quiz</NavLink></li>
                                <li><NavLink to = "/contact" className="inknut-antiqua-light">Contact</NavLink></li>
                                <li><NavLink to = "/about" className="inknut-antiqua-light">About</NavLink></li>
                                <li><NavLink to = "/" className="inknut-antiqua-light">Resources</NavLink></li>
                            </ul>
                        </div>
                        <div className="contain-search-menu">
                                <img src = "/magnifying.png" alt="search" className="search-logo-mobile"/>
                                <input type = "text" placeholder="Search..."/>
                        </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
