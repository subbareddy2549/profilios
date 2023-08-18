import React from 'react';
import service from "./service.css";
import {BiCheck} from "react-icons/bi"

export const Servic = () => {
  return (
    <section id='servic' >
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container service_container">
        <article className='service'>
          <div className="service_head">
            <h3>Frontend</h3>
          </div>
          <ul className='service_list'>
            <li>
         <BiCheck className='service_icon'/>
         <p>e_comerce</p>
         </li>
         <li>
         <BiCheck className='service_icon'/>
         <p>portfolio</p>
         </li>
         <li>
         <BiCheck className='service_icon'/>
         <p>chat app</p>
         </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Backend</h3>
          </div>
          <ul className='service_list'>
            <li>
         <BiCheck className='service_icon'/>
         <p>flight app</p>
         </li>
         <li>
         <BiCheck className='service_icon'/>
         <p>chatapp</p>
         </li>
         <li>
         <BiCheck className='service_icon'/>
         <p>foodbook</p>
         </li>
          </ul>
        </article>
      </div>
    </section >
  )
}
