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
                                <a href="plp.html" className="see-all">See all</a>
                            </li>
                            <li><a href="plp.html">Full Face</a></li>
                            <li><a href="plp.html">Modular</a></li>
                            <li><a href="plp.html">Open Face (3/4)</a></li>
                            <li><a href="plp.html">Half</a></li>
                            <li><a href="plp.html">Dual Sport</a></li>
                            <li><a href="plp.html">Dirt</a></li>
                            <li><a href="plp.html">Novelty</a></li>
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
                                <a href="plp.html" className="see-all">See all</a>
                            </li>
                            <li><a href="plp.html">Riding Jackets</a></li>
                            <li><a href="plp.html">Riding Pants</a></li>
                            <li><a href="plp.html">Gloves</a></li>
                            <li><a href="plp.html">Boots</a></li>
                            <li><a href="plp.html">Rain Gear</a></li>
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
                                <a href="plp.html" className="see-all">See all</a>
                            </li>
                            <li><a href="plp.html">Bluetooth</a></li>
                            <li><a href="plp.html">Video/Photography</a></li>
                            <li><a href="plp.html">Mounts</a></li>
                            <li><a href="plp.html">Racks</a></li>
                            <li><a href="plp.html">Maintenance</a></li>
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
                                <a href="plp.html" className="see-all">See all</a>
                            </li>
                            <li><a href="plp.html">Handlebars</a></li>
                            <li><a href="plp.html">Grips</a></li>
                            <li><a href="plp.html">Mirrors</a></li>
                            <li><a href="plp.html">Tires</a></li>
                            <li><a href="plp.html">Windshields</a></li>
                            <li><a href="plp.html">Hand Controls</a></li>
                            <li><a href="plp.html">Foot Controls</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default GlobalNav;