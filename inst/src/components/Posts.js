import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859" alt="inst" />

                <Post src="https://s7g3.scene7.com/is/image/soloinvest/n11346A?$big_image_web$" alt="second" />
            </div>
        )
    }
}