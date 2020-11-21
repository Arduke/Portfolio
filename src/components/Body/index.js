import React from 'react'
import Home from '../Home'
import About from '../About'
import Contact from '../Contact'
import "./styles.css"
import Activities from '../Activities'


function Body() {
  return (
    <div className="DivRoot">
      <Home></Home>
      <About></About>
      <Activities></Activities>
      <Contact></Contact>
    </div>
  );
}

export default Body;