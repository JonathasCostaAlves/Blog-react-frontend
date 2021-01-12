import React from  'react'
import "./Thumbnails.css"

function eventcapture(e){
    localStorage.clear()
    if(e.target.id === "" || e.target.id === 0){
        let title = e.target
        localStorage.setItem('title', title.textContent)
        return
    }
    localStorage.setItem('id',e.target.id )
}

export default props => 
    <div className="thumbnails">
        <a href="#/article" id={`LINK ${props.id}`}  onClick={e => eventcapture(e)}  >
            <img  src={props.src} alt="img React" className="img-fluid" id={props.id}/>
            <h3>{props.title}</h3>
        </a>
    </div>