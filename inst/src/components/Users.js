import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
                    src="https://media1.fdncms.com/stranger/imager/u/large/40901734/gettyimages-92204237_mag.jpg" 
                    alt="man" 
                    name="skot"/>
            <div className="users__block">
            <User 
                    src="https://media1.fdncms.com/stranger/imager/u/large/40901734/gettyimages-92204237_mag.jpg" 
                    alt="man" 
                    name="skot"
                    min />
            <User 
                    src="https://media1.fdncms.com/stranger/imager/u/large/40901734/gettyimages-92204237_mag.jpg" 
                    alt="man" 
                    name="skot"
                    min />
            <User 
                    src="https://media1.fdncms.com/stranger/imager/u/large/40901734/gettyimages-92204237_mag.jpg" 
                    alt="man" 
                    name="skot"
                    min />
            <User 
                    src="https://media1.fdncms.com/stranger/imager/u/large/40901734/gettyimages-92204237_mag.jpg" 
                    alt="man" 
                    name="skot"
                    min />
            </div>
        </div>
    )
}