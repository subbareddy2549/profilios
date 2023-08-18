import React from 'react';
import contactstyle from "./contactstyle.css";
import {MdOutlineEmail} from "react-icons/md";
import {RiWhatsappFill} from "react-icons/ri"
export const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
        <MdOutlineEmail className='contact_option-icon'/>
        <h4>Email</h4>
        <h5>bunnysubba2549@gmail.com</h5>
        <a href="mailto:bunnysubba2549@gmail.com" target='blank'> send message</a>
          </article>
          <article className="contact_option">
        <RiWhatsappFill className='contact_option-icon'/>
        <h4>Whatsapp</h4>
        <h5>+918328175483</h5>
        <a href="https://api.whatsapp.com/send?phone+918328175483" target='blank'> send message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='your full name'  required/>
          <input type="email" name='email' placeholder='Your mail' required/>
          <textarea name="message"  rows="10" required></textarea>
          <button type='submit' className='btn btn-primary'>send message</button>
        </form>
      </div>
    </section>
  )
}