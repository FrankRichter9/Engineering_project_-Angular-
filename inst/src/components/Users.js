import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaService';
import {Link} from 'react-router-dom';

export default class Users extends Component {

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
    
        renderUsers(arr) {
            return arr.map(user => {
                const {name, src} = user;
    
                return (
                        <User 
                        src={src}
                        alt="man" 
                        name={name}
                        min />
                )
            });
        }
        renderMyAccount() {
                if(localStorage.getItem('Login') === 'true'){
                        return(
                                <Link to="/profile"><User 
                                    src={localStorage.getItem('src')}
                                    alt="man" 
                                    name={localStorage.getItem('name')}/>
                                    </Link>
                        )
                }else
                        return(
                                <div>
                                        Вы не авторизованы
                                </div>
                                
                        )
        }
        render(){

                const {error, users} = this.state;

                const AllUsers = this.renderUsers(users);
                return (
                        <div className="right">
                            {this.renderMyAccount()}
                            <div className="users__block">
                            
                            {AllUsers}
                            </div>
                        </div>
                    )
        }
    
}