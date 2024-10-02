import './header.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const [click, setClick] = useState(false);

    const handleLogoClicked = () => {
        navigate('/');
    };

    const handleSearch = (e) => {
        setText(e.target.value);
    };

    const handleToggleSidebar = () => {
        setClick(prev => !prev);
    };

    // Debouncing search input to avoid immediate navigation
    useEffect(() => {
        const search = text.trim().toLowerCase().replace(/\s+/g, '');
        if (search.length > 0) {
            const keywords = ['lowspeedaircraft', 'sailplane', 'lightaircraft'];
            if (keywords.includes(search)) {
                const timer = setTimeout(() => {
                    navigate(`/discover/type/${search}`);
                }, 300); // Adjust delay as needed

                return () => clearTimeout(timer);
            }
        }
    }, [text, navigate]);

    // Clear search text on location change
    useEffect(() => {
        setText('');
    }, [location.pathname]);

    return (
        <nav>
            <div className="navbar-container">
                <div className="left">
                    <div className="logo-with-title" onClick={handleLogoClicked}>
                        <img src="/LogoV2.png" alt="logo" className="logo_title" />
                        <div className="logo-title inknut-antiqua-extrabold">Aero<span className="inknut-antiqua-normal">Angel</span></div>
                    </div>
                    <div className="nav-menu">
                        <ul>
                            <li><NavLink to="/discover" className="inknut-antiqua-light">Discover</NavLink></li>
                            <li><NavLink to="/" className="inknut-antiqua-light">Project</NavLink></li>
                            <li><NavLink to="/contact" className="inknut-antiqua-light">Contact</NavLink></li>
                            <li><NavLink to="/about" className="inknut-antiqua-light">About</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="search-logo-input">
                        <div className="contain-search">
                            <img src="/magnifying.png" alt="search" className="search-logo" />
                            <input
                                type="text"
                                placeholder="Search..."
                                onChange={handleSearch}
                                value={text}
                            />
                        </div>
                    </div>
                    <div className="nav-menu-2">
                        <ul>
                            <li><NavLink to="/quiz" className="inknut-antiqua-light">Quiz</NavLink></li>
                            <li><NavLink to="/" className="inknut-antiqua-light" onClick={handleToggleSidebar}>Resources</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className={`sidebar ${click ? 'display' : ''}`}>
                    <i className="fas fa-times" onClick={handleToggleSidebar}></i>
                   <div className='link'><a href="/resources/NCA-PDF.pdf" target="_blank" download>Download PDF</a></div>
                   <div className='link'><Link to = "formula">Formula</Link> </div>
                    <div className='link'><a href = "https://m-selig.ae.illinois.edu/ads/coord_database.html" rel="noopener noreferrer" target='_blank'>References</a></div>
                    <div className='link'><a href="/resources/5-7.docx" target="_blank" download>NACA 5-7</a></div>
                </div>
            </div>
            <div className='navbar-small'>
                {/* Mobile Version */}
                <div className="logo-mobile" onClick={handleLogoClicked}>
                    <img src="/LogoV2.png" alt="logo" className="logo_title-mobile" />
                    <div className="logo-title inknut-antiqua-extrabold">Aero<span className="inknut-antiqua-normal">Angel</span></div>
                </div>
                <div className="nav-menu-mobile">
                    <ul>
                        <li><NavLink to="/discover" className="inknut-antiqua-light">Discover</NavLink></li>
                        <li><NavLink to="/" className="inknut-antiqua-light">Project</NavLink></li>
                        <li><NavLink to="/quiz" className="inknut-antiqua-light">Quiz</NavLink></li>
                        <li><NavLink to="/contact" className="inknut-antiqua-light">Contact</NavLink></li>
                        <li><NavLink to="/about" className="inknut-antiqua-light">About</NavLink></li>
                        <li><NavLink to="/" className="inknut-antiqua-light" onClick={handleToggleSidebar}>Resources</NavLink></li>
                    </ul>
                </div>
                <div className={`sidebar ${click ? 'display' : ''}`}>
                    <i className="fas fa-times" onClick={handleToggleSidebar}></i>
                    <div className='link'><a href="/resources/NCA-PDF.pdf" target="_blank" download>Download PDF</a></div>
                    <div className='link'><Link to = "formula">Formula</Link> </div>
                    <div className='link'><a href = "https://m-selig.ae.illinois.edu/ads/coord_database.html" target='_blank' rel="noopener noreferrer">References</a></div>
                    <div className='link'><a href="/resources/5-7.docx" target="_blank" download>NACA 5-7</a></div>
                </div>
                <div className="contain-search-menu">
                    <img src="/magnifying.png" alt="search" className="search-logo-mobile" />
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={handleSearch}
                        value={text}
                    />
                </div>
            </div>
        </nav>
    );
}

export default Header;
