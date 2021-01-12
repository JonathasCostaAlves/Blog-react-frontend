import React, { Component, Fragment, useState } from 'react'

import Header from './Header'
import Art from './Art'
import {ApiArticles} from '../sources/api/api'


export default class Article extends Component{

    state = {
        title:'Titulo',
        art:'Artigo',
        src: '/imgs/thumbnail.png'
    }

      async componentDidMount(){

        const id = localStorage.getItem('id')
        const title = localStorage.getItem('title')
        let data

        if(id !== null && id !=="" ){        
            console.log('ID: '+ id)
            
            const article = await  ApiArticles( `http://localhost:3001/article/${id}`)

            this.setState({
                title: article.data.title,
                art:article.data.art,
                src: article.data.src
            })                                          
        }
        if(title !== null && title !== ""){
            const article = await  ApiArticles( `http://localhost:3001/article?title=${title}`)

            this.setState({
                title: article.data[0].title,
                art:article.data[0].art,
                src: article.data[0].src
            })
            
        }    
    }

    render(){
        
        return(
            <Fragment>
               
                <Header />
               <Art title= {this.state.title} src={this.state.src} article={this.state.art} />
           </Fragment>
        )
    }
}

   
