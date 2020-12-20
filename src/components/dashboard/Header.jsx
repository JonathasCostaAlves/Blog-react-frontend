import React from 'react'
import Brand from '../Brand'

export default props =>
    <header className='header'>
        <Brand /> 
        <nav className="mt-3">
            <a href="#/home" className="nav-home ">
                <i className="fa fa-home mr-2" ></i> 
                Home
            </a>
                </nav>
    </header>