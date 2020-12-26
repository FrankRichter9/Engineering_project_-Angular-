import React, {Component, useContext} from 'react';
import User from './User';
import Palette from './Palette';
import InstaService from '../services/instaService';
import Login from './Login';
import {Context} from './context';
import {Link} from 'react-router-dom';



export default class Profile extends Component{
  
    InstaService = new InstaService();
    state = {
        login: false,
        error: false
    }

    
    
    loginMe = (props) => (e) => {
        e.preventDefault()
        const login =       e.target.elements.login.value;
        const password =    e.target.elements.pass.value;
        this.InstaService.loginServer(login, password)
            .then(res => { console.log(res.status)
                localStorage.setItem('Login', res.status);
                localStorage.setItem('inf', res.inf);
                localStorage.setItem('src', res.src);
                localStorage.setItem('name', res.name);
                localStorage.setItem('alt', res.alt);
                localStorage.setItem('id', res.id);
                
                
                this.setState({
                    login: res.status,
                    error: false
                })
                if(res)props.UpdateLogin();
                this.render()
            })
            .catch(err => {
                console.log(err)
            })
        
    }

    DeleteThisProfile = () => {
        this.InstaService.DeleteProfile(localStorage.getItem('id'))
        localStorage.setItem('Login', false);
                localStorage.setItem('inf', undefined);
                localStorage.setItem('src', undefined);
                localStorage.setItem('name', undefined);
                localStorage.setItem('alt', undefined);
                localStorage.setItem('id', undefined);
    }

    // renderProfile(){
        
    // }
    GetDelete = () => {
        if(localStorage.getItem('id') == 2){
            return(
                <Link className="ProfileFunction yellow">Данный профиль нельзя удалить</Link>
            )
        }else{
            return(
                <Link className="ProfileFunction" onClick={this.DeleteThisProfile}>Удалить Профиль</Link>
            )
        }
    }
    render(){
       
        
        return (this.state.login || localStorage.getItem('Login') === 'true' ?
           
                <div className="container profile">
                    <User 
                        src={localStorage.getItem('src')} 
                        alt={localStorage.getItem('alt')} 
                        name={localStorage.getItem('name')} />
                        <p className="descr">{localStorage.getItem('inf')}</p>
                        <Link to="/editProfile" className="ProfileFunction">Редактировать Профиль</Link>
                        {this.GetDelete()}
                    <Palette />
                </div>
            :
                <div className="form__login">
                    <form onSubmit={this.loginMe(this.props)}>
                        <input type="text" name="login" placeholder="login"></input>
                        <input type="password" name="pass" placeholder="password"></input>
                        <button type="submit" >Log in</button>
                        <Link to="reg"><button >Registration</button></Link>
                    </form>
                </div>
            ) 
    }
    
}

