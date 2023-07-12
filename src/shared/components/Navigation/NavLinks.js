import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

import  './NavLinks.css';

const NavLinks = props => {
    return <ul className='nav-links'>
        <li> 
            <NavLink to="/">All Users</NavLink>
        </li>
        <li> 
            <NavLink to="/u1/places">My Places</NavLink>
        </li>
        <li> 
            <NavLink to="/places/new">ADD Place</NavLink>
        </li>
        <li> 
            <NavLink to="/auth">Authenticate</NavLink>
        </li>

    </ul>

};
export default NavLinks;