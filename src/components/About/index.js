import React from 'react';
import developer_activity from '../../image/developer_activity.svg'

import "./styles.css"
function About() {
  return (
      <div id="about" className="Component">
        <div className="BlockRight">
            <img alt="developer" className="developer_activity" src={developer_activity}></img>
        </div>
        <div className="BlockLeft">
            <p className="about">I Am a Junior Programmer</p>
            <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tellus est, finibus ut congue sed, faucibus ut dui. Sed congue nisl dolor, id dapibus leo elementum posuere. Ut aliquam metus quis laoreet elementum. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Aliquam porta faucibus arcu, et consequat velit vestibulum in. Donec quis tellus ut urna volutpat posuere quis consectetur quam.</article>
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
            <a href="/" className="buttonDownload" >Download Cv</a>
        </div>
      </div>
  );
}

export default About;