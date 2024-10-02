import './Children.css'
import { useNavigate } from 'react-router-dom'
import { sailpane } from '../../../data/data';



const SailPane = () => {
    const navigate = useNavigate();

    const arrowRotate = () => {
        navigate('/discover/type/lowspeedaircraft')
    }

    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const chunkedLowSpeed = chunkArray(sailpane, 5);

    const seperated = chunkedLowSpeed.map((data, index) => (
        <div className={`box${index}`} key={index}>
            {data.map(item => (
                <div className={`box inknut-antiqua-normal`} key={item.id} onClick = {() =>  navigate(`/discover/type/sailplane/${item.id}`)}>{item.name}</div>
            ))}
        </div>
    ))

    const handleBack = () => {
        navigate('/discover/type')
    }


    return (
        <div className="lightAircraft">
             <div className='back-button' onClick={handleBack}><i className="fas fa-arrow-left"></i> Back</div>
             <div className='title-with-arrow'>
                <img src = "/arrow-rotate.png" className='arrow' alt='arrow' onClick={arrowRotate}/>
                <div className="titles inknut-antiqua-normal">SailPlane</div>
           </div>
            <div className="title-body">
               {seperated}
            </div>
        </div> 
    )
}

export default SailPane