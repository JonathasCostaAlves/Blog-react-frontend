import React, { Component, createElement, Fragment } from 'react'
import './Form.css'
import ImgPerfil from '../ImgPerfil'
import SociaisMedias from '../SociaisMedias'
import {athenticationUser} from '../sources/api/api'
import SweetAlert from 'sweetalert' 

const initialState = { 
    email: '',
    password: '',
    elementForm: '',
    elementPassword: '',
    view: 1  
}

export default class Form extends Component {
  
  state = {...initialState}

  constructor(props) {
    super(props)
    this.validatorEmail = this.validatorEmail.bind(this)
    this.validatorPassword = this.validatorPassword.bind(this)
    this.viewPassword = this.viewPassword.bind(this)
    this.athentication = this.athentication.bind(this)
  }
 

  validatorEmail(e) {
    let email = e.target.value
    if (email == "") return
    this.setState({ email })
  }
  validatorPassword(e) {
    let password = e.target.value
    if (password == "") return
    this.setState({ elementPassword: e.target })
    this.setState({ password })
  }
  viewPassword(event){
    if(this.state.elementPassword === "") return
    const state ={ ...this.state}
    if(state.view === 1){
      state.elementPassword.type ="text"
      state.view = 2
      this.setState({ view : state.view })
      
    }else {
      state.view = 1
      state.elementPassword.type ="password"
      this.setState({ view : state.view })
    }
  } 

  async athentication(e) {
    e.preventDefault()

    const state = { ...this.state }

    if (state.email == '' || state.password == ''){
      SweetAlert({
        title:"Ops, falta alguma coisa!",
        text: "Digite o seu e-mail e senha ...",
        icon:'warning', 
        className:"modalWarning",
        classModal:true
      })
      return
    } 

    const response = await athenticationUser(state)
    
    if(response == false) {
      SweetAlert({
        title:"Ops, algo deu errado!",
        text: "E-mail ou senha incorreto.",
        icon:'error', 
        dangerMode:true,
        className:"modalUserError",
        classModal:true
      })
    }
  }


  render() {
    return (
      <main className="main-login">
        <div className="form-component">
          <div className="perfil-form ">
            <a href="#/home" className="link-home" ><i className="fa fa-arrow-left mr-2"></i>Home</a>
            <ImgPerfil />
            <SociaisMedias class="color-icon" />
          </div>
          <div className="divider"></div>
          <form action="" onSubmit={e => this.athentication(e)} method="POST" value={this.state.value}>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" className="form-control" onChange={e => this.validatorEmail(e)} value={this.state.value} name="email" id="" aria-describedby="Digite o seu e-mail" placeholder="Digite seu e-mail..." />
            </div>
            <div class="  form-group">
            <label htmlfor="password" className="labelEmail">Senha</label>
              <div className="input-group ">
                <input type="password" class="form-control passWord" onChange={e => this.validatorPassword(e)} name="password" placeholder="Digite sua senha ..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary fa fa-eye" onClick={e => this.viewPassword(e)} type="button"></button>
                </div>
              </div>
            </div>
            <span className="msgError text-danger"  >E-mail ou senha invalida, tente novamente <i className="fa fa-exclamation-circle"></i></span>

            <button type="submit" className="btn-custon">Entrar</button>
          </form>
        </div>
      </main>
    )

  }
}