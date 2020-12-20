import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {HashRouter} from 'react-router-dom'

import Footer from '../components/Footer'
import Router from './routes'

export default props => 
    <div className="label">
        <HashRouter>
            <Router />
            <Footer />
        </HashRouter>
    </div>