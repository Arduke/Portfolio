import React from 'react'
import "./styles.css"

function Activities() {
    return (
        <div id="activities" className="ComponentActivities"> 
            <p  className="pCenter">My Activities</p>
            <div className="l-cards"> 
                <article className="c-card" data-anime="left">
                    <span className="material-icons">public</span> 
                    <h2>Suporte</h2>
                    <article> More than three years of experience in maintaining computers, notebooks and support for any type of digital need. </article>
                </article>
                <article className="c-card" data-anime="rigth">
                    <span className="material-icons">public</span> 
                    <h2>Web Developer</h2>
                    <article> Using current technologies for web development with responsive pages and mobile and desktop designer for greater conversion on landing pages </article>
                </article>
                <article className="c-card" data-anime="left">
                    <span className="material-icons">public</span> 
                    <h2>Mobile Developer</h2>
                    <article> Using current technology for Mobile development with React Native and Node.js that work with the most current version of EcmaScript javascript and typescript for android applications. </article>
                </article>
                <article className="c-card" data-anime="rigth">
                    <span className="material-icons">public</span> 
                    <h2>Backend</h2>
                    <article> Using mongoose, knex, express, socket.io and many other libraries for any type of need, be it for chatbot, real-time programming and control with Sql or NoSql banks. </article>
                </article>
                <article className="c-card" data-anime="left">
                    <span className="material-icons">public</span> 
                    <h2>Junior Dev</h2>
                    <article> Without professional experience as dev, however with plenty of experience with study and personal applications </article>
                </article>
                <article className="c-card" data-anime="rigth">
                    <span className="material-icons">public</span> 
                    <h2>Data base</h2>
                    <article> MongoDB, MySql, Sql Server, Sqlite and Firebase. Working with data security and authentication. </article>
                </article>
            </div>
        </div>
        );
}

export default Activities;