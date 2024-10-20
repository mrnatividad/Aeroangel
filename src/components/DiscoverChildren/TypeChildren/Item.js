import './item.css'
import { useParams, useNavigate } from 'react-router-dom'
import { sailpane } from '../../../data/data'
import { useEffect, useState } from 'react'

const Item = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const [naca, setNaca] = useState(null);
    const ID = Number(id)

    useEffect(() => {
        let item = sailpane.filter(item => item.id === ID);
        if (item.length > 0) { // Check if the array has any elements
            setNaca(item[0]); // Set the first item if found
        }

    }, [ID])

    const handleBack = () => {
        navigate('/discover/type/sailplane')
    }


    const result = naca ? (
        <div className='item'>
             <div className='back-button' onClick={handleBack}><i className="fas fa-arrow-left"></i> Back</div>
            <div className='title-item inknut-antiqua-normal'>{naca.name}</div>
            <div className='pictures'>
                <img src = {`${naca.img}`} className='pic1' alt='picture1'/>
                <img src = {`${naca.img2}`} className='pic2' alt='picture2'/>
                <img src = {`${naca.img3}`} className='pic3' alt='picture3'/>
                <img src = {`${naca.img4}`} className='pic4' alt='picture4'/>
            </div>
        </div>
    ) : <p>Loading...</p>



    return (
      <>
        {result}
      </>
    )
}

export default Item