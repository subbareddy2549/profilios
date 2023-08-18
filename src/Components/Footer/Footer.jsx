import React from 'react';
import footer from "./footer.css";
import {CiFacebook} from "react-icons/ci";
import {BsInstagram} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs"

export const Footer = () => {
  return (
   <footer>
      <a href="#" className='footer_logo'>SUBBU</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#servic">servic</a></li>
        <li><a href="#portifilio">portifilio</a></li>
        <li><a href="#contact">contact</a></li>

      </ul>
      <div className="footer_socials">
      <a href="https:/facebook.com"><CiFacebook/></a>
        <a href="https:/instagram.com"><BsInstagram/></a>
        <a href="https:/twitter.com"><BsTwitter/></a>
      </div>
      <div className="foot_copyright">
        <small>SUBBU Portifilio.All Rights Reserved</small>
      </div>
      </footer>
   
  )
}
