import React, {Component, useContext} from 'react';
import User from './User';
import Palette from './Palette';
import InstaService from '../services/instaService';
import Login from './Login';
import {Context} from './context';



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
            .then(res => {
                localStorage.setItem('Login', res);
                
                this.setState({
                    login: res,
                    error: false
                })
                if(res)props.UpdateLogin();
                // this.render()
            })
            .catch(err => {
                console.log(err)
            })
        
    }

    // renderProfile(){
        
    // }

    render(){
       

        return (this.state.login || localStorage.getItem('Login') === 'true' ?
           
                <div classNmae="container profile">
                    <User 
                        src="https://media1.fdncms.com/stranger/imager/u/large/40901734/gettyimages-92204237_mag.jpg" 
                        alt="man" 
                        name="skot" />
                    <Palette />
                </div>
            :
                <div className="form__login">
                    <form onSubmit={this.loginMe(this.props)}>
                        <input type="text" name="login" placeholder="login"></input>
                        <input type="password" name="pass" placeholder="password"></input>
                        <button type="submit" >log in</button>
                    </form>
                </div>
            ) 
    }
    
}

