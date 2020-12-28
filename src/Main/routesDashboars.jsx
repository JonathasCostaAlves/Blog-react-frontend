import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import ArticleList from '../components/dashboard/ArticleList'
import IncludeArticle from '../components/dashboard/IncludeArticle'

export default props => 
    <Switch>
        <Route exact path="/contentPainel" component={ArticleList}/>
        <Route exact path="/IncludeArticle" component={IncludeArticle} />
    </Switch>