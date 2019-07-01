import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav >
        <h1>GIFS</h1>
        <ul className='nav-links'>
            <Link to='/search'>
                <li style={{ color: 'white' }}>Search</li>
            </Link>
            <Link to='/saved'>
                <li style={{ color: 'white' }}>Saved</li>
            </Link>
            <Link to='/about'>
                <li style={{ color: 'white' }}>About</li>
            </Link>

        </ul>
    </nav>
)
export default Nav;