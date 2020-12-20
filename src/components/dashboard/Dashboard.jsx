import React, {Fragment} from 'react'
import './Dashboard.css'

import Header from './Header'
import Nav from './Nav'
import Main from './Main'

export default props=> 
    <div className="dashboard">
        <Header />
        <Nav />
        <Main />
    </div>