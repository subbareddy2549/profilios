import React from 'react';
import CV from "../../Assets/CV.pdf";

export const Cta = () => {
  return (
    <div className='cta'>
    <a href={CV} className='btn' >Download CV</a>
    <a href='#contact' className='btn-primary'>Lets Talk</a>
    </div>
  )
}
