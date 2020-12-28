import React from 'react'
import './Main.css'
import {HashRouter} from 'react-router-dom'
import Route from '../../Main/routesDashboars' 

import ArticleList from './ArticleList'
import IncludeArticle from './IncludeArticle'

export default props => 
    <main className="main">
        <HashRouter>
            <Route />
        </HashRouter>
    </main>