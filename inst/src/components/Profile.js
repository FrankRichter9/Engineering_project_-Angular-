import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div classNmae="container profile">
            <User 
                src="https://media1.fdncms.com/stranger/imager/u/large/40901734/gettyimages-92204237_mag.jpg" 
                alt="man" 
                name="skot" />
            <Palette />
        </div>
    )
}

export default Profile;