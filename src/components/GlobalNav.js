import './GlobalNav.scss';
import React from 'react';

// TODO: make this data driven and create accordion module functionality
const GlobalNav = ({ navIsOpen, setNavState }) => {
    return (
        <nav id="globalNav" className={`global-nav ${navIsOpen === true ? '-open' : '' }`}>
            <div className="global-nav_scroll-wrapper">
                <h2>Menu</h2>

                <button
                    type="button"  
                    className="global-nav_close btn -primary -close"
                    onClick={setNavState}>
                    &times;<span className="screen-reader-only">Close Menu</span>
                </button>

                <ul>
                    <li className="global-nav_menu -open">
                        <button 
                            type="button">
                            Helmets
                        </button>
                        <ul>
                            <li className="global-nav_menu-header">
                                <h4>Helmets</h4>
                                <a href="/" className="see-all">See all</a>
                            </li>
                            <li><a href="/">Full Face</a></li>
                            <li><a href="/">Modular</a></li>
                            <li><a href="/">Open Face (3/4)</a></li>
                            <li><a href="/">Half</a></li>
                            <li><a href="/">Dual Sport</a></li>
                            <li><a href="/">Dirt</a></li>
                            <li><a href="/">Novelty</a></li>
                        </ul>
                    </li>
                    <li className="global-nav_menu">
                        <button 
                            type="button">
                            Riding Apparel
                        </button>
                        <ul>
                            <li className="global-nav_menu-header">
                                <h4>Riding Apparel</h4>
                                <a href="/" className="see-all">See all</a>
                            </li>
                            <li><a href="/">Riding Jackets</a></li>
                            <li><a href="/">Riding Pants</a></li>
                            <li><a href="/">Gloves</a></li>
                            <li><a href="/">Boots</a></li>
                            <li><a href="/">Rain Gear</a></li>
                        </ul>
                    </li>
                    <li className="global-nav_menu">
                        <button 
                            type="button">
                            Accessories
                        </button>
                        <ul>
                            <li className="global-nav_menu-header">
                                <h4>Accessories</h4>
                                <a href="/" className="see-all">See all</a>
                            </li>
                            <li><a href="/">Bluetooth</a></li>
                            <li><a href="/">Video/Photography</a></li>
                            <li><a href="/">Mounts</a></li>
                            <li><a href="/">Racks</a></li>
                            <li><a href="/">Maintenance</a></li>
                        </ul>
                    </li>
                    <li className="global-nav_menu">
                        <button 
                            type="button">
                            Parts
                        </button>
                        <ul>
                            <li className="global-nav_menu-header">
                                <h4>Parts</h4>
                                <a href="/" className="see-all">See all</a>
                            </li>
                            <li><a href="/">Handlebars</a></li>
                            <li><a href="/">Grips</a></li>
                            <li><a href="/">Mirrors</a></li>
                            <li><a href="/">Tires</a></li>
                            <li><a href="/">Windshields</a></li>
                            <li><a href="/">Hand Controls</a></li>
                            <li><a href="/">Foot Controls</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default GlobalNav;