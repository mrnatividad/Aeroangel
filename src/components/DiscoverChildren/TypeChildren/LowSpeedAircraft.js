import './Children.css';
import { lowSpeed } from '../../../data/data';
import { useNavigate } from 'react-router-dom'

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
                <div className={`box inknut-antiqua-normal`} key={item.id}>{item.name}</div>
            ))}
        </div>
    ))


    return (
        <div className="lightAircraft">
            <div className="title-with-arrow">
                <img src="/arrow-rotate.png" className="arrow" alt="arrow" onClick={arrowRotate}/>
                <div className="title inknut-antiqua-normal">Low Speed Aircraft</div>
                <img src="/arrow.png" className="arrow" alt="arrow" onClick={arrow} />
            </div>
            <div className="title-body">
                {seperated}
            </div>
        </div>
    );
};

export default LowSpeedAircraft;
