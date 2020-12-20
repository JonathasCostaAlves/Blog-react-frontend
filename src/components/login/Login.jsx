import React, {Fragment} from 'react'

import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Header from './Header'
import Footer from '../Footer'
import Form from './Form'



export default props=> 
    <Fragment>
        <Header />
        <Form />
        <Footer />       
    </Fragment>