import './App.css';
import Layout from './components/partials/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Discover from './components/Discover';
import Quiz from './components/Quiz';
import Contact from './components/Contact';
import TypeOfAircrafts from './components/DiscoverChildren/TypeOfAircrafts';
import LightAircraft from './components/DiscoverChildren/TypeChildren/LightAircraft';
import SailPane from './components/DiscoverChildren/TypeChildren/SailPane';
import LowSpeedAircraft from './components/DiscoverChildren/TypeChildren/LowSpeedAircraft';
import Item from './components/DiscoverChildren/TypeChildren/Item';
import Item2 from './components/DiscoverChildren/TypeChildren/Item2';
import Item3 from './components/DiscoverChildren/TypeChildren/Item3';
import NacaAirFoilWing from './components/DiscoverChildren/NacaAirfoilWing';
import AirFoil from './components/DiscoverChildren/NacaAirfoil/Airfoil';
import Formula from './components/Formula';

function App() {

  

  return (
  <>
  <Routes>
    <Route path='/' element = {<Layout />}>
    <Route index element = {<Home />} />
    <Route path = "about" element = {<About />} />
    <Route path = "formula" element = {<Formula />} />
    <Route path = "quiz" element = {<Quiz />} />
    <Route path = "contact" element = {<Contact />} />

    <Route path = "discover" >
    <Route index element = {<Discover />} />

    <Route path= 'type' >
    <Route index element = {<TypeOfAircrafts />} />
    <Route path = 'lightaircraft' >
        <Route index element = {<LightAircraft /> } />
        <Route path = ':id' element = {<Item2 />} />
    </Route>

    <Route path = 'sailplane' >
        <Route index element = {<SailPane />} />
        <Route path = ':id' element = {<Item />} />
    </Route>

    <Route path = 'lowspeedaircraft'>
        <Route index  element = {<LowSpeedAircraft />}  />
        <Route path = ':id' element = {<Item3 />} />
    </Route>
    </Route>

    <Route path = 'airfoil'>
    <Route index element={<NacaAirFoilWing />} />
    <Route path=':id' element={<AirFoil/>} /> 
</Route>

    </Route>

    
    </Route>
  </Routes>
  </>
  );
}

export default App;
