import React, { Component, Fragment } from 'react'
import './Content.css'
import Image from '../sources/imgs/thumbnail.png'
import Thumbnails from "../Thumbnails"
import {Api} from '../sources/api/api'





export default class Content extends Component {
    state = {
        articles: [],
    }
  

    async componentDidMount() {
        const response = await Api.get('')
        console.log(response.data[1].src)
        this.setState({ articles: response.data})

    }

  

    render() {
        const { articles } = this.state

        return (
            <main>
                <h1 className="mt-5 mb-5">Blog, matérias e muito mais</h1>
                <div className="articles ">
                    {articles.map(article=>(
                        <Thumbnails  key={article.id} id={article.id} src={article.src} title={article.title}  />
                    ))}
                </div>
            </main>
        )
    }

}
