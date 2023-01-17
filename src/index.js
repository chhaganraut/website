import ReactDOM from 'react-dom/client';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';





var record = (
  
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/aboutus" element={ <About />} /> 
        <Route path="/contactus" element={ <Contact />} /> 
        
       
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(record);