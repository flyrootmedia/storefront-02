import './GlobalHeader.scss';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import GlobalNav from './GlobalNav';
import GlobalNavButton from './GlobalNavButton';

const GlobalHeader = () => {
    const[navIsOpen, setNavIsOpen] = useState(false);

    const toggleNavState = () => {
        setNavIsOpen(!navIsOpen);
    };

    return (
        <header id="globalHeader" className="global-header">
            <div className="site-wrapper">
                <GlobalNavButton onClick={toggleNavState} /> 
                <Link to="/" className="site-logo">FlyRoot Moto</Link>
                <NavLink exact to="/my-account" className="fas fa-user">
                    <span className="screen-reader-only">My Account</span>
                </NavLink>
                <NavLink exact to="/cart" className="fas fa-shopping-cart">
                    <span className="screen-reader-only">Cart</span>
                    <span className="cart-count">12</span>
                </NavLink>
            </div> 
            <GlobalNav navIsOpen={navIsOpen} setNavState={toggleNavState} />
        </header>
    );
};

export default GlobalHeader;