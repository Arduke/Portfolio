import React from 'react'
import "./styles.css"
import code_thinking from '../../image/code_thinking.svg'

function Home() {
  return (
    <div id="home" className="Component">
        <div className="BlockLeft" data-anime="left">
            <p className="home">Hello There,</p>
            <div>
            <h1 className="line typing-animation">I Am Carlos Eduardo </h1>
            </div>
            <article>
                I'm a Web Developer with knowledge in React Native, React.js and Node.js. My specialty at the moment is the creation of professional websites and mobile applications for management.
            </article>
        </div>
        <div className="BlockRight" data-anime="rigth">
            <img className="code_thinking" alt="developer" src={code_thinking} ></img>
        </div>
    </div>
  );
}

export default Home;