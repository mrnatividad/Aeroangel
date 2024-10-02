import './nacaAirfoil.css';
import { naca } from '../../../data/data';
import { useParams, useNavigate } from 'react-router-dom';


const AirFoil = () => {

    const navigate = useNavigate();




    const { id } = useParams(); // Extract the id from the URL
    const ID = Number(id);

    // Use find instead of filter to get the item directly
    const item = naca.find(item => item.id === ID);
    console.log(item);

    // Check if item exists before rendering
    const content = item ? (
        <div className='picture-container'>
            <img src={item.img1} className='naca_pic' alt={`NACA ${ID} Image 1`} />
            <img src={item.img2} className='naca_pic' alt={`NACA ${ID} Image 2`} />
            <img src={item.img3} className='naca_pic' alt={`NACA ${ID} Image 3`} />
        </div>
    ) : (
        <p>Loading....</p>
    );

    const handleBack = () => {
        navigate('/discover/airfoil')
    }

    return (
        <div className='nacaAirfoil-container'>
            <div className='back-button' onClick={handleBack}><i className="fas fa-arrow-left"></i> Back</div>
            <div className='title inknut-antiqua-normal'>Naca Airfoil Wing</div>
           {content}
        </div>
    );
}

export default AirFoil;
