import axios from 'axios'

export const Api = axios.create({
    baseURL: 'http://localhost:3001/article'
})
export const ApiUser = axios.create({
    baseURL: 'http://localhost:3001/users'
})

export async function athenticationUser (user) {
    const users = await ApiUser.get('')
    let status 
    const validator =  users.data.filter(checkUser => checkUser.email === user.email && checkUser.passWord === user.password)
    if(validator.length == 0 ){ 
        status = false
    }else {
        status = true
        window.location.href= 'http://localhost:3000/#/contentPainel'
    }
    return status
}


export default (
    Api,
    ApiUser,
    athenticationUser
    )