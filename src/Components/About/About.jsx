import React from 'react'
import about from "./about.css";

import {BsFillAwardFill} from "react-icons/bs";
import {FiUsers} from "react-icons/fi";
import {AiOutlineProject} from "react-icons/ai"
export const About = () => {
  return (
    <section id='about'>
      <h2>Get to know</h2>
      <h5>About Me</h5>
      <div className="container about__container">
        <div className="about_me">
          
          
          <div className="about_content">
            <div className="about_cards">
            <article className='about_card'>
              <BsFillAwardFill className='about_icon'/>
              <h5>experienc</h5>
              <small>2months</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>ibm Edunet</h5>
              <small>2months</small>
            </article>
            <article className='about_card'>
              <AiOutlineProject className='about_icon'/>
              <h5>project</h5>
              <small>portifilio</small>
            </article>
            </div>
            <p>
              hii
            </p>
            <a href='#contact' className='btn btn-primary' >Lets Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}
