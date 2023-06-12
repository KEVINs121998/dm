import {Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './index.css';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/Contactus';
import Services from './components/pages/Services';


function App() {
  return (
    <div className="App">
  <Header/>
  <Navbar/>
  <Routes>
  <Route  path='/' element={<Home/>}/>
  <Route path='/about-us' element={<Aboutus/>}/>
  <Route path='/contact-us' element={<Contactus/>}/>
  <Route path='/services' element={<Services/>}/>

  </Routes>
   <Footer/>
    </div>
  );
}

export default App;
