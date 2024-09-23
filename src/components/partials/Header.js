import { Link} from "react-router-dom";
import './header.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)

    const handleLogoClicked = () => {
        navigate('/');
    }

    const handleOpenClose = () => {
        setIsOpen(prev => !prev)
    }




    return (
        <>
            <nav>
                <div className="navbar-container">
                    <div className="left">
                       <div className="logo-with-title" onClick={handleLogoClicked}>
                            <img src = "./logo.png" alt="logo" className="logo_title"/>
                            <div className="logo-title">Aero<span>Angel</span></div>
                       </div>
                        <div className="nav-menu">
                            <ul>
                                <li><Link to = "/discover">Discover</Link></li>
                                <li><Link to = "/">Project</Link></li>
                                <li><Link to = "/quiz">Quiz</Link></li>
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
                                <li><Link to = "/contact">Contact</Link></li>
                                <li><Link to = "/about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
