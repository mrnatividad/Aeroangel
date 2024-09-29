import './typeAircrafts.css'
import { useNavigate } from 'react-router-dom'

const TypeOfAircrafts = () => {

    const navigate = useNavigate();

        const handleLight = () => {
            navigate('/')
        }

        const handleLow = () => {
            navigate('/')
        }

        const handleGlider = () => {
            navigate('/')
        }


    return (
        <div className='typeAircrafts'>
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
                     <h2 className='title-card'>Glider</h2>
                     <img src = "/Gliders.jpg" className='discover-image' alt='gliders'/>
                     <div className='gradient-overlay'></div>
                </div>
            </div>
        </div>
    )
}

export default TypeOfAircrafts