import React from 'react'
import "./styles.css"

function Menu() {
  return (
    <nav>
        <input type="checkbox" id="check"/>
        <label for="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <label className="logo">KDUDEV</label>
        <ul>
            <li><a className="active" href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#activities">ACTIVITIES</a></li>
            <li><a href="/">PORTFOLIO</a></li>
            <li><a href="/">CONTACT</a></li>
        </ul>
    </nav>
  )
}

export default Menu;