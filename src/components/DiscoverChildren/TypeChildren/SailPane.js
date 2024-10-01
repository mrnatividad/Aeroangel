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
                <div className={`box inknut-antiqua-normal`} key={item.id}>{item.name}</div>
            ))}
        </div>
    ))



    return (
        <div className="lightAircraft">
             <div className='title-with-arrow'>
                <img src = "/arrow-rotate.png" className='arrow' alt='arrow' onClick={arrowRotate}/>
                <div className="title inknut-antiqua-normal">SailPlane</div>
           </div>
            <div className="title-body">
               {seperated}
            </div>
        </div> 
    )
}

export default SailPane