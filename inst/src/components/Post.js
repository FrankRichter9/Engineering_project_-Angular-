import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="https://media1.fdncms.com/stranger/imager/u/large/40901734/gettyimages-92204237_mag.jpg" 
                    alt="man" 
                    name="skot"
                    min />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    lorem  ipsum
                </div>
            </div>
        )
    }
}