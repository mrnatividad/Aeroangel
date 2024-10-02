import './Children.css';
import { lowSpeed } from '../../../data/data';
import { useNavigate } from 'react-router-dom'
import Item from './Item';

const LowSpeedAircraft = () => {

    const navigate = useNavigate();

    const arrowRotate = () => {
        navigate('/discover/type/lightaircraft')
    }
    const arrow = () => {
        navigate('/discover/type/sailplane')
    }

    
    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const chunkedLowSpeed = chunkArray(lowSpeed, 5);

    const seperated = chunkedLowSpeed.map((data, index) => (
        <div className={`box${index}`} key={index}>
            {data.map(item => (
                <div onClick = {() =>  navigate(`/discover/type/lowspeedaircraft/${item.id}`)} className={`box inknut-antiqua-normal`} key={item.id}>{item.name}
                </div>
            ))}
        </div>
    ))

    const handleBack = () => {
        navigate('/discover/type')
    }


    return (
        <div className="lightAircraft">
             <div className='back-button' onClick={handleBack}><i class="fas fa-arrow-left"></i> Back</div>
            <div className="title-with-arrow">
                <img src="/arrow-rotate.png" className="arrow" alt="arrow" onClick={arrowRotate}/>
                <div className="titles inknut-antiqua-normal">Low Speed Aircraft</div>
                <img src="/arrow.png" className="arrow" alt="arrow" onClick={arrow} />
            </div>
            <div className="title-body">
                {seperated}
            </div>
        </div>
    );
};

export default LowSpeedAircraft;
