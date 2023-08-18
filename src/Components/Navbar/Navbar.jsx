import React from 'react';
import navbar from "./navbar.css";
import {HiHome} from "react-icons/hi";
import {SiAboutdotme} from "react-icons/si";
import {BiBook} from "react-icons/bi";
import {RiServiceFill} from "react-icons/ri";
import {GrContact} from "react-icons/gr";
import {AiFillProject} from "react-icons/ai";
import { useState } from 'react';

export const Navbar = () => {
  
    const [activeNav,setActiveNav]=useState("#")
  
  return (
    
    <nav>
     
      <a href='#'onClick={()=>setActiveNav('#')} className ={activeNav==='#'?'active':''}><HiHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className ={activeNav==='#about'?'active':''}><SiAboutdotme/></a>
      <a href='#experience'onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience'?'active':''}><BiBook/></a>
      <a href='#servic'onClick={()=>setActiveNav('#servic')} className={activeNav==='#servic'?'active':''}><RiServiceFill/></a>
      <a href='#portifilio'onClick={()=>setActiveNav('#portifilio')} className={activeNav==='#portifilio'?'active':''}><AiFillProject/></a>
      <a href='#contact'onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><GrContact/></a>
    </nav>
  )
}
