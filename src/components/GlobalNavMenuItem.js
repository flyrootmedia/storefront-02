import './GlobalNavMenuItem.scss';
import React from 'react';

const GlobalNavMenuItem = ( {item, onHeaderClick}) => {
    const menuLinks = item.links.map((link) => {
        return (
            <li>
                <a href={link.url}>{link.label}</a>
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
                    <a href={item.seeAllLink} className="see-all">See all</a>
                </li>
                {menuLinks}
            </ul>
        </li>
    );
}

export default GlobalNavMenuItem;