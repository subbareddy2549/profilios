import React from 'react';
import header from "./header.css";
import {Cta} from "./Cta";
import SUBBU from "../../Assets/SUBBU.jpg";
import { Headersocials } from './Headersocials';
export const Header = () => {
  return (
   <header>
     <h5>hiii i am</h5>
    <h1>Subbu</h1>
    <h5 className='text-light'>Fullstackdevoloper</h5>
    
    <Cta/>
   <div className="container header__container">
   
    
    <div className='me'>
    <Headersocials/>
      <div><img src={SUBBU} alt='profilepic' /></div>

      
    </div>
   
    
    
   </div>
   <a href='#contact' className='scrolldown' >Scrolldown</a>
   </header>
  )
}

