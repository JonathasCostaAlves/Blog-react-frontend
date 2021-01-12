import React from 'react'
import './Art.css'

export default props => 
    <main>
        <h1>{props.title}</h1>
        <p>{props.article}</p>
        <img src={props.src} className="img-article"/>
    </main>