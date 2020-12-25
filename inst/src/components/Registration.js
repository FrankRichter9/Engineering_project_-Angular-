import React, {Component, useContext} from 'react';
import User from './User';
import Palette from './Palette';
import InstaService from '../services/instaService';
import Login from './Login';
import {Context} from './context';
import {Link} from 'react-router-dom';



export default class Registration extends Component{
  
    InstaService = new InstaService();
    state = {
        reg: null,
        error: false
    }

    RegMe = () => (e) => {
        e.preventDefault()
        const name =       e.target.elements.name.value;
        const inf =       e.target.elements.inf.value;
        const src =       e.target.elements.src.value;
        const login =       e.target.elements.login.value;
        const password =    e.target.elements.pass.value;

        this.InstaService.RegServer(name, inf, src, login, password)
            .then(res => { console.log(res.status)
               
                
                this.setState({
                    reg: res.status,
                    error: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        return(
            <div className="form__reg">
                <form onSubmit={this.RegMe(this.props)}>
                        <h1>{this.state.reg}</h1>
                        <input type="text" name="name" placeholder="name"></input>
                        <input type="text" name="inf" placeholder="information"></input>
                        <input type="text" name="src" placeholder="profile photo src"></input>
                        <input type="text" name="login" placeholder="login"></input>
                        <input type="password" name="pass" placeholder="password"></input>
                        <button type="submit" >Registration</button>
                </form>
            </div>
        )
    }
}