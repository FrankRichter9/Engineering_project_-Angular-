import React, {Component} from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

export default class Header extends Component {

    state = {
        login: false,
        error: false
    }

    componentDidMount(){
        if(this.login){
            this.setState({
                login: true
            })
        }else{
            this.setState({
                login: false
            })
        }
    }

    LogOut(){
        localStorage.setItem('Login', false);
    }
    

    renderProfile(){
        
        if(localStorage.getItem('Login') === 'true'){
            return(
                <div>
                    <p>Вы авторизированны</p>
                    <p onClick={this.props.OutLogin}>выйти</p>
                </div>
                )
        }else{
            return(
                <p>Авторизация</p>
                
            )
        }
        
    }

   

    render() {
        
        const {Login} = this.props
        console.log(Login)
        return  (
            <header>
                <div className="container h-flex">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo"></img>
                    </Link>
                    <nav className="links">
                        <ul>
                            <li>
                                <Link to="/" className="menu__links">Лента</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="menu__links">{this.renderProfile()}</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
