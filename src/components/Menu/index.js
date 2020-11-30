import React, { useState } from 'react';
import "./styles.css"

function Menu() {
  const [checkBoxState, setCheckBoxState] = useState(false);

  function handleMenu(){
    setCheckBoxState(!checkBoxState);
  }

  return (
    

    <nav>
        <input onClick={handleMenu} type="checkbox" checked={checkBoxState} id="check"/>
        <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <label className="logo">KDUDEV</label>
        <ul>
            <li><a onClick={handleMenu} className="active" href="#home">HOME</a></li>
            <li><a onClick={handleMenu} href="#about">ABOUT</a></li>
            <li><a onClick={handleMenu} href="#activities">ACTIVITIES</a></li>
            <li><a onClick={handleMenu} href="/">PORTFOLIO</a></li>
            <li><a onClick={handleMenu} href="/">CONTACT</a></li>
        </ul>
    </nav>
  )
}



export default Menu;