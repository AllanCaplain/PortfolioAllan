import React, { useRef } from 'react'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineLinkedin} from 'react-icons/ai'
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lo1w8bt', 'template_ccgxjls', form.current, 'ORHTDyb0CiXM_iWvP')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>allan.caplain51@gmail.com</h5>
            <a href="mailto:allan.caplain51@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Allan Caplain</h5>
            <a href="https://m.me/allan.caplain" target="_blank">Send a Message</a>
          </article>
          <article className='contact_option'>
            <AiOutlineLinkedin className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Allan Caplain</h5>
            <a href="https://www.linkedin.com/in/allancaplain/" target="_blank">Contact Me !</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact