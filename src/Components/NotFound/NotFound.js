import React from 'react';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notFound'>
            <h2><span className='text-danger'>404 </span>| Page Not Fount</h2>
            <p><iframe src="https://embed.lottiefiles.com/animation/3227"></iframe></p>
        </div>
    );
};

export default NotFound;