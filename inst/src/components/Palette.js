import React, {Component} from 'react';
import InstaService from '../services/instaService';

export default class Palette extends Component {
    InstaService = new InstaService();
    state = {
        error: false,
        photos: []
    }

    componentDidMount(){
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
            .then(this.onPhotosLoaded)
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            error: false,
            photos
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const  {src, alt, autorID} = item;
            if(autorID == localStorage.getItem('id'))
            return (
                <img src={src} alt={alt}></img>
            )
        })
    }

    render() {
        const  {error, photos} = this.state;

        const items = this.renderItems(photos)
        return (
            <div className="palette">
                {items}
            </div>
        )
    }
}