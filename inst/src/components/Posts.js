import React, {Component} from 'react';
import InstaService from '../services/instaService';
import User from './User';
import {Link} from 'react-router-dom';

export default class Posts extends Component {

    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        })
        console.log(this.state.posts)
    }

    onError = (err) => {
        this.setState({
            error: true
        })
        
    }

    AdminDelete = (id, autorID) => {
        if(localStorage.getItem('id') == 2 || localStorage.getItem('id') == autorID){
            return(
                <Link className="ProfileFunction" onClick={() => this.DeleteThisPost(id)}>Удалить запись</Link>
            )
        }
    }

    DeleteThisPost(id){
        this.InstaService.DeletePost(id)
        .then(res => { 
            
            this.setState({
                login: res.status,
                error: false
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    renderItems(arr) {
        return arr.reverse().map(item => {
            const {name, altname, autorSrc, src, alt, descr, id, autorName, autorID} = item;
            const link = "/GetProfile?id=" + autorID;
            if(localStorage.getItem('id') == id){
                const link = "/profile"
        }
            return (
                <div key={id} className="post">
                    <Link to={link}><User 
                        src={autorSrc}
                        alt={altname}
                        name={autorName}
                        min /></Link>
                <img src={src} alt={alt}></img>
                <div className="post__name">
                    {name}
                </div>
                <div className="post__descr">
                    {descr}
                </div>
                <div>
                    {this.AdminDelete(id, autorID)}
                </div>
            </div>
            )
        });
    }

    renderAddPost() {
        if(localStorage.getItem('Login') === 'true'){
            return(
                <Link to="/addpost"><div className="addPost">
                    + add post
                </div>
                </Link>
            )
        }else {
            return(
                <div>
                    
                </div>
            )
        }
    }


    render() {
        const {error, posts} = this.state;


        const items = this.renderItems(posts);
        return (
            <div className="left">
                {this.renderAddPost()}
                {items}
            </div>
        )
    }
}