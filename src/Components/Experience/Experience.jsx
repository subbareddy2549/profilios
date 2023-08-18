import React from 'react';
import experience from "./experience.css";
import {BsFillPatchCheckFill} from "react-icons/bs";

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container" >
        <div className="front-end">
          <h3>Frontend Devolopment</h3>
          <div className="experience_content">
           
          <article className='experience_details'>
             <BsFillPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Html</h4>
             <small className='text-light'>experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsFillPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Css</h4>
             <small className='text-light'>experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsFillPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Bootstrap</h4>
             <small className='text-light'>experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsFillPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>javaScript</h4>
             <small className='text-light'>experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsFillPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>React</h4>
             <small className='text-light'>experienced</small>
             </div>
            </article>
          </div>
        </div>
        <div className="back-end">
          <h3>Backend Devolopment</h3>
        <div className="experience_content">
           
           <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>nodejs</h4>
              <small className='text-light'>experienced</small>
              </div>
             </article>
             <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>mongodb</h4>
              <small className='text-light'>experienced</small>
              </div>
             </article>
             <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>mysql</h4>
              <small className='text-light'>experienced</small>
              </div>
             </article>
             <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>php</h4>
              <small className='text-light'>experienced</small>
              </div>
             </article>
             <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>python</h4>
              <small className='text-light'>experienced</small>
              </div>
             </article>
           </div>
        </div>
      </div>
    </section >
  )
}
