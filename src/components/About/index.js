import React from 'react';
import developer_activity from '../../image/developer_activity.svg'

import "./styles.css"
function About() {
  return (
      <div id="about" className="Component">
        <div className="BlockRight" data-anime="left">
            <img alt="developer" className="developer_activity" src={developer_activity}></img>
        </div>
        <div className="BlockLeft" data-anime="rigth">
            <p className="about">I Am a Junior Programmer</p>
            <article>I am just a programmer with a lot of time invested studying the best technologies and good practices to make your business or idea as current and technological as possible. Having certified hands on UX Designer, React.Js and React Native, which are technologies used by companies such as Facebook, AirBnB and Uber.</article>
            <table>
                <thead></thead>
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>:</td>
                    <td>Carlos Eduardo</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>:</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>:</td>
                    <td>São Paulo, Brasil</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>:</td>
                    <td>+(55) 13 993168374</td>
                </tr>
                <tr>
                    <td>e-mail</td>
                    <td>:</td>
                    <td>carlos.edumart@outlook.com</td>
                </tr>
                </tbody>
            </table>
            <a href="https://docs.google.com/document/d/1lEgVJFStZrXrFXQe7J0fIvw1NQ8B8qE3HOw5fQkTbvU/edit?usp=sharing" className="buttonDownload" >Download Cv</a>
        </div>
      </div>
  );
}

export default About;