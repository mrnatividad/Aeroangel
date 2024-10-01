import './App.css';
import Layout from './components/partials/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Discover from './components/Discover';
import Quiz from './components/Quiz';
import Contact from './components/Contact';
import TypeOfAircrafts from './components/DiscoverChildren/TypeOfAircrafts';
import NacaAirfoilWing from './components/DiscoverChildren/NacaAirfoilWing';
import LightAircraft from './components/DiscoverChildren/TypeChildren/LightAircraft';
import SailPane from './components/DiscoverChildren/TypeChildren/SailPane';
import LowSpeedAircraft from './components/DiscoverChildren/TypeChildren/LowSpeedAircraft';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element = {<Layout />}>
    <Route index element = {<Home />} />
    <Route path = "about" element = {<About />} />

    <Route path = "quiz" element = {<Quiz />} />
    <Route path = "contact" element = {<Contact />} />

    <Route path = "discover" >
    <Route index element = {<Discover />} />
    <Route path= 'type' >
    <Route index element = {<TypeOfAircrafts />} />
    <Route path = 'lightaircraft' element = {<LightAircraft /> } />
    <Route path = 'sailplane' element = {<SailPane />} />
    <Route path = 'lowspeedaircraft' element = {<LowSpeedAircraft />} />
    </Route>
    <Route path = 'naca' element = {<NacaAirfoilWing />} />
    </Route>

    
    </Route>
  </Routes>
  </>
  );
}

export default App;
