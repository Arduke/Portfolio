import React from 'react'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import "./styles.css"
import Activities from '../Activities'


function Body() {

  

  return (
    window.addEventListener('scroll', function() {
      const target = document.querySelectorAll('[data-anime]')
      const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
      
      target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
          element.classList.add('animate')
        } else {
          element.classList.remove('animate')
        }
      })
    }),
    <div className="DivRoot">
      <Home></Home>
      <About></About>
      <Activities></Activities>
      <Contact></Contact>
    </div>
  );
}

export default Body;