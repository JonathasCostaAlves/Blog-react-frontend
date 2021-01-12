import axios from 'axios'

export const Api = axios.create({
    baseURL: 'http://localhost:3001/article'
})



export function ApiArticles(url){
    const article = axios.get(url)
    return article
}



export default (
    Api, 
    ApiArticles
    )