import React, {Component, useContext} from 'react';
import User from './User';
import Palette from './Palette';
import InstaService from '../services/instaService';
import Login from './Login';
import {Context} from './context';
import {Link} from 'react-router-dom';



export default class EditProfile extends Component{
  
    InstaService = new InstaService();
    state = {
        reg: null,
        error: false
    }

    EditMe = () => (e) => {
        e.preventDefault()
        const name =       e.target.elements.name.value;
        const inf =       e.target.elements.inf.value;
        const src =       e.target.elements.src.value;
        

        this.InstaService.EditServer(localStorage.getItem('id'), name, inf, src)
            .then(res => { console.log(res.status)
               
                this.props.history.push('/')
                this.setState({
                    reg: res.status,
                    error: false
                })
            })
            .catch(err => {
                console.log(err)
            })
            
                localStorage.setItem('inf', inf);
                localStorage.setItem('src', src);
                localStorage.setItem('name', name);
    }

    render(){
        
        return(
            <div className="form__reg">
                <form onSubmit={this.EditMe(this.props)}>
                        <h1>{this.state.reg}</h1>
                        <input type="text" name="name" placeholder="name" defaultValue={localStorage.getItem('name')}></input>
                        <textarea type="text" name="inf" placeholder="information" defaultValue={localStorage.getItem('inf')} className="EditProfile__descr" rows="10"></textarea>
                        <textarea type="text" name="src" placeholder="profile photo src" defaultValue={localStorage.getItem('src')} className="EditProfile__descr" rows="5"></textarea>
                        <button type="submit" >Изменить</button>
                </form>
            </div>
        )
    }
}