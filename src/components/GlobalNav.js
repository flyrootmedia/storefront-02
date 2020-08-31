import './GlobalNav.scss';
import React from 'react';
import GlobalNavMenu from './GlobalNavMenu';

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

                <GlobalNavMenu 
                    allowMultipleOpen={false} 
                    openIndex={0}
                    isAnimated={true}
                    isResponsive={true} 
                    items={menuItems}
                />
            </div>
        </nav>
    );
}

// static menu items data until api is set up
const menuItems = [
    {
        headerText: 'Helmets',
        isOpen: false,
        seeAllLink: '/',
        links: [
            {
                url: '/',
                label: 'Full Face'
            },
            {
                url: '/',
                label: 'Modular'
            },
            {
                url: '/',
                label: 'Open Face (3/4)'
            },
            {
                url: '/',
                label: 'Half'
            },
            {
                url: '/',
                label: 'Dual Sport'
            },
            {
                url: '/',
                label: 'Dirt'
            },
            {
                url: '/',
                label: 'Novelty'
            }
        ]
    },
    {
        headerText: 'Riding Apparel',
        isOpen: false,
        seeAllLink: '/',
        links: [
            {
                url: '/',
                label: 'Riding Jackets'
            },
            {
                url: '/',
                label: 'Riding Pants'
            },
            {
                url: '/',
                label: 'Gloves'
            },
            {
                url: '/',
                label: 'Boots'
            },
            {
                url: '/',
                label: 'Rain Gear'
            }
        ]
    },
    {
        headerText: 'Accessories',
        isOpen: false,
        seeAllLink: '/',
        links: [
            {
                url: '/',
                label: 'Bluetooth'
            },
            {
                url: '/',
                label: 'Video/Photography'
            },
            {
                url: '/',
                label: 'Mounts'
            },
            {
                url: '/',
                label: 'Racks'
            },
            {
                url: '/',
                label: 'Maintenance'
            }
        ]
    },
    {
        headerText: 'Parts',
        isOpen: false,
        seeAllLink: '/',
        links: [
            {
                url: '/',
                label: 'Handlebars'
            },
            {
                url: '/',
                label: 'Grips'
            },
            {
                url: '/',
                label: 'Mirrors'
            },
            {
                url: '/',
                label: 'Tires'
            },
            {
                url: '/',
                label: 'Windshields'
            },
            {
                url: '/',
                label: 'Hand Controls'
            },
            {
                url: '/',
                label: 'Foot Controls'
            }
        ]
    }
]

export default GlobalNav;