import React, {Component} from 'react';
import "./styles.css"
import emailjs from 'emailjs-com'
import FormErrors from '../FormErrors/formErrors';

class Contact extends Component{
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    formErrors: {email: '', name: '', subject: '', message: ''},
    nameValid: false,
    emailValid: false,
    subjectValid:false,
    messageValid:false,
    formValid: false,
  }

  OnSubmit = (event)  => {
    event.preventDefault()
    emailjs.sendForm('gmail', `${process.env.REACT_APP_TEMPLATE_ID}`, event.target, `${process.env.REACT_APP_USER_ID}`)
    .then(result => {
      alert('Message Sent');
    })
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, 
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let subjectValid = this.state.subjectValid;
    let messageValid = this.state.messageValid;
  
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' Email is invalid.';
        break;
      case 'name':
        nameValid = value.length >= 3;
        fieldValidationErrors.password = nameValid ? '': ' Write the name longer than tree letters. ';
        break;
      case 'message': 
        messageValid = value.length >= 25;
        fieldValidationErrors.message = messageValid ? '': 'Write a little more in the message.';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    nameValid: nameValid
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }
  
  
  render () {
    return (
      <div id="contact" className="ComponentContact">
          <div className="title">
              <h1 className="h1butnotgreen"> CONTACT <span>US</span> </h1>
          </div>
          <div className="BlockCentral">
            <div className="BlockLeftContact">
                <div>
                  <FormErrors formErrors={this.state.formErrors}/>
                </div>
                <form onSubmit={(e) => {this.OnSubmit(e)}} >
                <input 
                  value={this.state.name} 
                  onChange={(e) => this.handleUserInput(e)}
                  name="name" 
                  placeholder="Name" 
                  className="InputUnic">
                </input>
                <div className="DivDoubleInput">
                    <input 
                      type="email" 
                      value={this.state.email} 
                      onChange={(e) => this.handleUserInput(e)} 
                      name="email" 
                      placeholder="Email" 
                      className="InputDouble"> 
                    </input>
                    <input 
                      value={this.state.subject}  
                      onChange={(e) => this.handleUserInput(e)} 
                      name="subject" 
                      placeholder="Subject" 
                      className="InputDouble">
                    </input>
                </div>
                <textarea 
                  onChange={(e) => this.handleUserInput(e)} 
                  value={this.state.message} 
                  name="message" 
                  placeholder="Your Message">
                </textarea>  
                <button 
                  type="submit" 
                  className="buttonDownload"
                > 
                  Enviar
                </button>  
                </form>
                
            </div>
            <div className="BlockRightContact">
               <a  rel="noreferrer" target="_blank" href='https://wa.me/5513991368374' className="buttonGradient">
                <i className="whatsapp icon large"></i>
                (13) 99136-8374
               </a>

               <a  rel="noreferrer" target="_blank" href='https://www.facebook.com/profile.php?id=100000818611560' className="buttonGradient">
                <i className="facebook f icon large "></i>
                facebook.com.br/KaduEdu
               </a>
               
               <a  rel="noreferrer" target="_blank" href='https://github.com/Arduke' className="buttonGradient">
                <i className="github icon large"></i>
                github.com.br/Arduke
               </a>
               
               <a  rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/carlos-eduardo-martins-filho-8a38b3174/' className="buttonGradient">
                <i className="linkedin icon large"></i>
                linkedin.com.br/Carlos
               </a>
               
            </div>
          </div>
      </div>
    )
  }
}

export default Contact
