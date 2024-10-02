import './nacaAirfoilWing.css'
import { useNavigate } from 'react-router-dom'
import { naca } from '../../data/data';
import { useEffect, useState } from 'react';

const NacaAirFoilWing = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    const handleBack = () => {
        navigate('/discover')
    }

    useEffect(() => {
        console.log('NACA Data:', naca);
        setItems(naca); 
    }, []);



    const itemComponents = items.map(item => (
        
        <div 
            className='item inknut-antiqua-normal' 
            key={item.id} 
            onClick={() => navigate(`/discover/airfoil/${item.id}`)} // Ensure this path is correct
        >
            {item.name}
        </div>
    ));


    return (
        <div className='nacaAirfoil-container'>
            <div className='back-button' onClick={handleBack}><i className="fas fa-arrow-left"></i> Back</div>
            <div className='titles inknut-antiqua-normal'>Naca Airfoil Wing</div>
            <div className='item-container inknut-antiqua-normal'>
                {itemComponents.length > 0 ? itemComponents : <p>Loading...</p>}
            </div>
        </div>
    )
}

export default NacaAirFoilWing