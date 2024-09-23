import './about.css'

const About = () => {
        return (
           <div className="about">
            <div className="title-about">About Us</div>
            <div className="about-text-image">
                <p>
                Aero<span>Angel</span> is a student-led initiative created by Holy Angel University <br />
                aeronautical students as part of a research project. Our goal is to provide a <br />
                comprehensive online resource for fellow students studying aeronautics. We <br />
                understand the challenges of navigating complex airfoil data, and we aim to <br />
                simplify the process through this platform. <br/>

                We are passionate about aviation and believe that sharing knowledge can <br />
                contribute to the growth of the aeronautical community within our university.
                </p>
                <img src = './grouppic.jpg' className="group" alt="group pic"/>
            </div>
           </div>
        )
}

export default About