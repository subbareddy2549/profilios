import logo from './logo.svg';
import './App.css';
import {Header}from "./Components/Header/Header";
import { Navbar } from './Components/Navbar/Navbar';
import { About } from './Components/About/About';
import {Contact} from './Components/Contacts/Contact';
import { Experience } from './Components/Experience/Experience';

import { Portifilio } from './Components/Portifilio/Portifilio';
import { Footer } from './Components/Footer/Footer';
import { Servic } from './Components/Servics/Servic';


function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <About/>
     
     <Experience/>
     
     <Servic/>
     <Portifilio/>
     
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
