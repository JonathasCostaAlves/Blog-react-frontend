import React from 'react'
import './Header.css'
import Brand from '../Brand'
import ImgPerfil from '../ImgPerfil'
import ContactBanner from './ContactBanner'



export default prosp =>
    <header className="header">
            <nav className="nav-header ">
                <a href="#/login" className="pt-3 pr-5"><i className="fa fa-"></i> <i className="fa fa-lock pr-1"></i> Login </a>
                </nav>
        <div className="header-home">
            <ImgPerfil />
            <Brand />
       
        </div>
        <ContactBanner class="header-home"/>
           
    </header>