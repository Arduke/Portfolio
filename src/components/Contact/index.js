import React, { useState, useEffect } from 'react';
import "./styles.css"
import emailjs from 'emailjs-com'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const OnSubmit = (event)  => {
    event.preventDefault()
    emailjs.sendForm('gmail', `${process.env.REACT_APP_TEMPLATE_ID}`, event.target, `${process.env.REACT_APP_USER_ID}`)
    .then(result => {
      alert('Message Sent');
    })
  }
  
  return (
    <div className="ComponentContact">
        <div className="title">
            <h1 className="h1butnotgreen"> CONTACT <span>US</span> </h1>
        </div>
        <div className="BlockCentral">
          <div className="BlockLeftContact">
              <form onSubmit={(event) => {OnSubmit(event)}} >
              <input value={name} onChange= {(event)=> {setName(event.target.value)}} name="name" placeholder="Name" className="InputUnic"></input>
              <div className="DivDoubleInput">
                  <input value={email} onChange= {(event)=> {setEmail(event.target.value)}} name="email" placeholder="Email" className="InputDouble"> 
                  </input>
                  <input value={subject}  onChange= {(event)=> {setSubject(event.target.value)}} name="subject" placeholder="Subject" className="InputDouble">
                  </input>
              </div>
              <textarea onChange= {(event)=> {setMessage(event.target.value)}} value={message} name="message" placeholder="Your Message"></textarea>  
              <button type="submit" className="buttonDownload"> Enviar</button>  
              </form>
          </div>
          <div className="BlockRightContact">
            <h1></h1>
          </div>
        </div>
    </div>
  )
}

export default Contact
