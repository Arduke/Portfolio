import React from 'react'
import "./styles.css"


function Contact() {
  return (
    <div className="ComponentContact">
        <div className="title">
            <h1 className="h1butnotgreen"> CONTACT <span>US</span> </h1>
        </div>
        <div className="BlockCentral">
          <div className="BlockLeftContact">
              <form>
              <input placeholder="Name" className="InputUnic"></input>
              <div className="DivDoubleInput">
                  <input placeholder="Email" className="InputDouble"> 
                  </input>
                  <input placeholder="Subject" className="InputDouble">
                  </input>
              </div>
              <textarea placeholder="Your Message"></textarea>    
              </form>
          </div>
          <div className="BlockRightContact">
            <h1>Batata</h1>
          </div>
        </div>
    </div>
  )
}

export default Contact