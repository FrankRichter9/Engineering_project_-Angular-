import React, {Component, useContext} from 'react';
import User from './User';
import GetUserPalette from './GetUserPalette';
import InstaService from '../services/instaService';
import Login from './Login';
import {Context} from './context';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';




export default class GetProfile extends Component{
  
    InstaService = new InstaService();

    state = {
        users: [],
        error: false
    };

    componentDidMount() {
            this.updateUsers()
    }
    
    

    updateUsers() {
        this.InstaService.getAllUsers()
            .then(this.onUsersLoaded)
            .catch(this.onError);
    }

    onUsersLoaded = (users) => {
        this.setState({
            users,
            error: false
        })
        console.log(this.state.users)
    }

    onError = (err) => {
        this.setState({
            error: true
        })
        
    }

    renderUsers(arr, id) {
        return arr.map(user => {
            if(user.id == id){
                console.log(user)
                return (
                    <div>
                    
                        <User 
                    src={user.src} 
                    alt={user.alt} 
                    name={user.name} />
                    <p className="descr">{user.inf}</p>
                    </div>
                )
            }
            
            
        });
    }
    

    render(){
        const {error, users} = this.state;
        const get = queryString.parse(this.props.location.search)
        const NeedProfile = this.renderUsers(users, get.id);
        return(
            
                <div className="container profile">
                    
                    {NeedProfile}
                    <GetUserPalette id={get.id}/>
                </div>
           
            ) 
    }
    
}

