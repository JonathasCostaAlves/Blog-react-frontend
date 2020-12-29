import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import Article from '../components/Article/Article'

export default props=>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/article" component={Article} />
        <Redirect from="*" to="/" />
    </Switch>