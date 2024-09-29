import './discover.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const Discover = () => {
    const navigate = useNavigate();

    const handleType = () => {
        navigate('/discover/type'); // Navigate to /discover/type
    };
    
    const handleNaca = () => {
        navigate('/discover/naca'); // Navigate to /discover/naca
    };

    return (
        <div className='discover'>
            <div className='title-discover inknut-antiqua-normal '>Discover</div>
            <div className='two-types'>
                <div className='card' onClick={handleType}>
                     <h2 className='title-card'>Type of Aircrafts</h2>
                     <img src = "/discover1.jpg" className='discover-image'alt='typeOfAircrafts'/>
                     <div className="gradient-overlay"></div>
                </div>
                <div className='card' onClick={handleNaca}>
                     <h2 className='title-card'>NACA Airfoil Wing</h2>
                     <img src = "/discover2.jpg" className='discover-image' alt='nacaAirfoilWing'/>
                     <div className="gradient-overlay"></div>
                </div>
            </div>
        </div>
    )
}

export default Discover