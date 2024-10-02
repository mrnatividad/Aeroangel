import './nacaAirfoilWing.css'
import { useNavigate } from 'react-router-dom'
import { naca } from '../../data/data';
import { useEffect, useState } from 'react';

const NacaAirFoil = () => {
    const navigate = useNavigate();
    const [item, setItem] = useState(null)

    const handleBack = () => {
        navigate('/discover')
    }

    useEffect(() => {
           const items = naca.map(item => (
            <div className='item inknut-antiqua-normal'  key={item.id}>{item.name}</div>
           ))

          if(items){
            setItem(items)
          }
    }, [])




    return (
        <div className='nacaAirfoil-container'>
            <div className='back-button' onClick={handleBack}><i className="fas fa-arrow-left"></i> Back</div>
            <div className='titles inknut-antiqua-normal'>Naca Airfoil Wing</div>
            <div className='item-container inknut-antiqua-normal'>
                {item ? item : <p>Loading...</p>}
            </div>
        </div>
    )
}

export default NacaAirFoil