import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <h1>Guvi</h1>
            <div className='navWrap'>
            <Link to='/'>All</Link>
            <Link to='/fullstack'>Full Stack Development</Link>
            <Link to='/cyber_security'>Cyber Security</Link>
            <Link to='/data_science'>Data Science</Link>
            <Link to='/blockchain'>Blockchain</Link>
            </div>
        </div>
    );
};

export default Navigation;