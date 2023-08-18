import React from 'react';
import {BsLinkedin} from "react-icons/bs"; 
import {GrGithub} from "react-icons/gr";
import {BsTwitter} from "react-icons/bs";

export const Headersocials = () => {
  return (
    <div className='Headersocials'>
         <a href='https://linkedin.com' target='blank'><BsLinkedin/></a>
        <a href='https://github.com' target='blank'><GrGithub/></a>
        <a href='https://twitter.com' target='blank'><BsTwitter/></a>
    </div>
  )
}
