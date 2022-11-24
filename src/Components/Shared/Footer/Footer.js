import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
       <footer className='bg-black py-4 text-white'>
        <p>Copyright © Abdur Rahman {year}</p>
       </footer>
    );
};

export default Footer;