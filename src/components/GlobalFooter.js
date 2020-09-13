import './GlobalFooter.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const GlobalFooter = () => {
    return (
        <footer id="globalFooter" className="global-footer">
            <div className="site-wrapper">
                <span>&copy; 2020 FlyRoot Moto.</span> 
                <Link to="/">About</Link> 
                <Link to="/">Contact Us</Link> 
                <Link to="/">Financing Options</Link> 
                <Link to="/">Shop By Brand</Link>
                <Link to="/">Blog</Link>
            </div>
        </footer>
    );
}

export default GlobalFooter;