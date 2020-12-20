import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import Content from '../components/home/Content'

import Home from '../components/home/Home'
import Login from '../components/login/Login'
import ContentManagement from "../components/contentManagement/header"

export default props=>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/contentPainel" component={ContentManagement} />
        <Redirect from="*" to="/" />
    </Switch>