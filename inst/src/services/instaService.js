import axios from 'axios';


export default class instaService {
    constructor() {
        this._apiBase = 'http://localhost:3000';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fatch ${url} received ${res.status}`);
        }

        return await res.json();
    }

    getAllPosts = async () => {
        const res = await this.getResource('/data/');
        return res;
    }

    getAllPhotos = async () => {
        const res = await this.getResource('/data/');
        return res.map(this._transformPosts);
    }

    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt
        }
    }




    

    loginServer = async(login, password) => {
        const res = await axios.post(`${this._apiBase}/login`, [login, password])
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
            return res;
    }
}