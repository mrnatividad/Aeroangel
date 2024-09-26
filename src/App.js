import './App.css';
import Layout from './components/partials/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Discover from './components/Discover';
import Quiz from './components/Quiz';
import Contact from './components/Contact';
import TypeOfAircrafts from './components/discoverChildren/TypeOfAircrafts';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element = {<Layout />}>
    <Route index element = {<Home />} />
    <Route path = "about" element = {<About />} />
    <Route path = "discover" element = {<Discover />} />
    <Route path = "type" element = {<TypeOfAircrafts />} />
    <Route path = "quiz" element = {<Quiz />} />
    <Route path = "contact" element = {<Contact />} />
    </Route>
  </Routes>
  </>
  );
}

export default App;
