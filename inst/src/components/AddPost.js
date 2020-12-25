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
        add: null,
        error: false
    }

    AddPost = () => (e) => {
        e.preventDefault()
        const src =       e.target.elements.src.value;
        const descr =       e.target.elements.descr.value;
        

        this.InstaService.AddPost(src, descr)
            .then(res => { console.log(res.status)
               
                
                this.setState({
                   add: res.status,
                    error: false
                })
            })
            .catch(err => {
                console.log(err)
            })
            window.open("/");
    }

    render(){
        return(
            <div className="form__reg">
                <form onSubmit={this.AddPost(this.props)}>
                        <h1>{this.state.reg}</h1>
                        <input type="text" name="src" placeholder="photo src"></input>
                        <input type="text" name="descr" placeholder="description"></input>
                        <button type="submit" >Add post</button>
                </form>
            </div>
        )
    }
}