import './GlobalFooter.scss';

import React from 'react';

const GlobalFooter = () => {
    return (
        <footer id="globalFooter" className="global-footer">
            <div className="site-wrapper">
                <span>&copy; 2020 FlyRoot Moto.</span> 
                <a href="/">About</a> 
                <a href="/">Contact Us</a> 
                <a href="/">Financing Options</a> 
                <a href="/">Shop By Brand</a>
                <a href="/">Blog</a>
            </div>
        </footer>
    );
}

export default GlobalFooter;