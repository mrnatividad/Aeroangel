import './home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home-text">
                <p className='inknut-antiqua-normal'>
                    Welcome to Aero<span className='inknut-antiqua-normal'>Angel</span>, your go-to online resource for comprehensive 
                    NACA airfoil information, specifically designed for Holy Angel University 
                    students pursuing aeronautical engineering. Here, you’ll find an extensive 
                    database that provides detailed data on various NACA airfoil shapes and 
                    their aerodynamic properties, helping you deepen your understanding of 
                    airfoil design and its critical role in aircraft performance.

                    <br /><br />
                    Whether you're working on design projects, preparing for exams, or 
                    conducting research, Aero<span className='inknut-antiqua-normal'>Angel</span> is your trusted companion to bridge 
                    the gap between theory and practice, ensuring a solid foundation in 
                    aerodynamics as you progress through your studies at Holy Angel University.
                </p>
            </div>
            <div className="home-quote">
                <p className='inknut-antiqua-normal'>
                    "Reach beyond the skies, <span className='inknut-antiqua-normal'>
                    for every innovation 
                    you create brings humanity 
                    closer to the stars</span>.
                </p>
            </div>
        </div>
    );
}

export default Home;
