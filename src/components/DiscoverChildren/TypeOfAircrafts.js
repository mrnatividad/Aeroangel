import './typeAircrafts.css'
import { useNavigate } from 'react-router-dom'

const TypeOfAircrafts = () => {

    const navigate = useNavigate();

        const handleLight = () => {
            navigate('/discover/type/lightaircraft')
        }

        const handleLow = () => {
            navigate('/discover/type/lowspeedaircraft')
        }

        const handleGlider = () => {
            navigate('/discover/type/sailplane')
        }

        const handleBack = () => {
            navigate('/discover')
        }
    
    return (
        <div className='typeAircrafts'>
            <div className='back-button' onClick={handleBack}><i className="fas fa-arrow-left"></i> Back</div>
            <div className='title-typeAircrafts inknut-antiqua-normal '>Type of Aircraft</div>
            <div className='three-types'>

                <div className='card' onClick={handleLight}>
                <h2 className='title-card'>Light Aircrafts</h2>
                     <img src = "/LightAircraft.jpg" className='discover-image' alt='lightaircrafts'/>
                     <div className='gradient-overlay'></div>
                </div>
                <div className='card' onClick={handleLow}>
                     <h2 className='title-card'>Low Speed Aircraft</h2>
                     <img src = "/LowSpeedAircraft.jpg" className='discover-image' alt='lowspeedaircrafts'/>
                     <div className='gradient-overlay'></div>
                </div>
                <div className='card' onClick={handleGlider}>
                     <h2 className='title-card'>Sailplane</h2>
                     <img src = "/Gliders.jpg" className='discover-image' alt='gliders'/>
                     <div className='gradient-overlay'></div>
                </div>
            </div>
        </div>
    )
}

export default TypeOfAircrafts