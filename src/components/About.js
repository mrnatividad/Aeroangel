import './about.css'


const About = () => {
        return (
           <div className="about">
            <div className="title-about inknut-antiqua-normal">About Us</div>
            <div className="about-text-image">
                <p className='inknut-antiqua-normal'>
                Aero<span className='inknut-antiqua-normal'>Angel</span> is a student-led initiative created by Holy Angel University
                aeronautical students as part of a research project. Our goal is to provide a 
                comprehensive online resource for fellow students studying aeronautics. We 
                understand the challenges of navigating complex airfoil data, and we aim to 
                simplify the process through this platform. 

                <br />   <br />
                We are passionate about aviation and believe that sharing knowledge can 
                contribute to the growth of the aeronautical community within our university.
                </p>
                <img src = './finalgrouppic.jpg' className="group" alt="group pic"/>
            </div>
           </div>
        )
}

export default About