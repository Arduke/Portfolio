import React from 'react'
import "./styles.css"
import emailjs from 'emailjs-com'

function Contact() {
  
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
              <input name="name" placeholder="Name" className="InputUnic"></input>
              <div className="DivDoubleInput">
                  <input name="email" placeholder="Email" className="InputDouble"> 
                  </input>
                  <input name="subject" placeholder="Subject" className="InputDouble">
                  </input>
              </div>
              <textarea name="message" placeholder="Your Message"></textarea>  
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
