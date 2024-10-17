import './explore.css'

const Explore = () => {
    return (
        <div className="explore">
            <div className="title-explore inknut-antiqua-normal">Types of Aircraft</div>
            <div className="explore-container">
                <img src = "/EXPLORE/LIGHT.jpg" className="explore-pic" alt= 'p1' />
                <img src = "/EXPLORE/LOW.jpg" className="explore-pic" alt= 'p2' />
                <img src = "/EXPLORE/SAILPLANE.jpg" className="explore-pic" alt= 'p3' />
                <img src = "/EXPLORE/COMMERCIAL.jpg" className="explore-pic" alt= 'p4' />
                <img src = "/EXPLORE/AGRICULTURAL.jpg" className="explore-pic" alt= 'p5' />
                <img src = "/EXPLORE/ATTACK.jpg" className="explore-pic" alt= 'p6' />
                <img src = "/EXPLORE/UAV.jpg" className="explore-pic" alt= 'p7' />
            </div>
        </div>
    )
}

export default Explore