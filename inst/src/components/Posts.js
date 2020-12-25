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

    renderItems(arr) {
        return arr.reverse().map(item => {
            const {name, altname, autorSrc, src, alt, descr, id, autorName} = item;

            return (
                <div key={id} className="post">
                    <User 
                        src={autorSrc}
                        alt={altname}
                        name={autorName}
                        min />
                <img src={src} alt={alt}></img>
                <div className="post__name">
                    {name}
                </div>
                <div className="post__descr">
                    {descr}
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