import React from  'react'
import "./Thumbnails.css"



export default props => 
    <div className="thumbnails">
        <a href="#">
        <img src={props.src} alt="img React" className="img-fluid"/>
        <h3>{props.title}</h3>
        </a>
    </div>