import './GlobalNavMenuItem.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const GlobalNavMenuItem = ( {item, onHeaderClick}) => {
    const menuLinks = item.links.map((link) => {
        return (
            <li key={link.label}>
                <Link to={link.url}>{link.label}</Link>
            </li>
        );
    });
    return (
        <li className={`global-nav-menu-item ${item.isOpen ? '-open' : ''}`}>
            <button 
                type="button" 
                onClick={onHeaderClick}>
                {item.headerText}
            </button>
            <ul>
                <li className="global-nav-menu-item_header">
                    <h4>{item.headerText}</h4>
                    <Link to={item.seeAllLink} className="see-all">See all</Link>
                </li>
                {menuLinks}
            </ul>
        </li>
    );
}

export default GlobalNavMenuItem;