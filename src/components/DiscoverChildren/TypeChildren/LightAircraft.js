import './Children.css'
import { useNavigate } from 'react-router-dom'
import { lightAircraft } from '../../../data/data';


const LightAircraft = () => {
    const navigate = useNavigate();

    const arrow = () => {
        navigate('/discover/type/lowspeedaircraft')
    }

    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const chunkedLowSpeed = chunkArray(lightAircraft, 5);

    const seperated = chunkedLowSpeed.map((data, index) => (
        <div className={`box${index}`} key={index}>
            {data.map(item => (
                <div className={`box inknut-antiqua-normal`} key={item.id} onClick = {() =>  navigate(`/discover/type/lightaircraft/${item.id}`)}>{item.name}</div>
            ))}
        </div>
    ))

    const handleBack = () => {
        navigate('/discover/type')
    }


    return (
        <div className="lightAircraft">
             <div className='back-button' onClick={handleBack}><i class="fas fa-arrow-left"></i> Back</div>
           <div className='title-with-arrow'>
                <div className="titles inknut-antiqua-normal">Light Aircraft</div>
                <img src = "/arrow.png" className='arrow' alt='arrow' onClick={arrow}/>
           </div>
            <div className="title-body">
                {seperated}
            </div>
         </div>
    )
}

export default LightAircraft