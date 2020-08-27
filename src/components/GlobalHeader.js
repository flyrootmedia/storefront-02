import './GlobalHeader.scss';
import React, { useState } from 'react';
import GlobalNav from './GlobalNav';
import GlobalNavButton from './GlobalNavButton';

const GlobalHeader = () => {
    const[navIsOpen, setNavIsOpen] = useState(false);

    const toggleNavState = (event) => {
        setNavIsOpen(!navIsOpen);
    };

    return (
        <header id="globalHeader" className="global-header">
            <div className="site-wrapper">
                <GlobalNavButton onClick={toggleNavState} /> 
                <span className="site-logo">FlyRoot Moto</span>
                <a href="/" className="fas fa-user">
                    <span className="screen-reader-only">My Account</span>
                </a>
                <a href="/" className="fas fa-shopping-cart">
                    <span className="screen-reader-only">My Account</span>
                    <span className="cart-count">12</span>
                </a>
            </div> 
            <GlobalNav navIsOpen={navIsOpen} setNavState={toggleNavState} />
        </header>
    );
};

export default GlobalHeader;