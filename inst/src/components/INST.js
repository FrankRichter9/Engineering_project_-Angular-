import React, { Component } from 'react';
import Header from './Header';
import Feed from './Feed';
import Profile from './Profile';
import GetProfile from './GetProfile';
import Registration from './Registration';
import AddPost from './AddPost';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import EditProfile from './EditProfile';

export default class INST extends Component {
    state = {
        login: localStorage.getItem('Login') === 'true',
        error: false
    }

    UpdateLogin = () => {
        
        this.setState({
            login: true
        })
        console.log('login updated');
        // this.render()
        // localStorage.setItem('Login', this.state.login);
      }

    OutLogin = () => {
        this.setState({
            login: false
        })
        localStorage.setItem('Login', false);
    }

    render(){
        return(
            <Router>
      <div className="App">
        
        <Header OutLogin={this.OutLogin} />
        <Route path='/' component={Feed} exact/>
        <Route path='/profile' render={() => <Profile UpdateLogin={this.UpdateLogin}/>} exact/>
        <Route path='/reg' component={Registration} exact/>
        <Route path='/addpost' component={AddPost} exact/>
        <Route path='/GetProfile' component={GetProfile} exact/>
        <Route path='/editProfile' component={EditProfile} exact/>
      </div>
    </Router>
    
        )
    }
}