import './nacaAirfoilWing.css'
import { useNavigate } from 'react-router-dom'

const NacaAirFoil = () => {
    const navigate = useNavigate();
    
    const handleBack = () => {
        navigate('/discover')
    }

    return (
        <div className='nacaAirfoil-container'>
            <div className='back-button' onClick={handleBack}><i class="fas fa-arrow-left"></i> Back</div>
            <div className='title'>Naca Airfoil Wing</div>
            <div className='item-container'>

            </div>
        </div>
    )
}

export default NacaAirFoil