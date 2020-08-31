import React, { useState } from 'react';
import GlobalNavMenuItem from './GlobalNavMenuItem';

const GlobalNavMenu = ({ allowMultipleOpen, openIndex, isAnimated, isResponsive, items }) => {

    const [activeIndex, setActiveIndex] = useState(openIndex);

    const onHeaderClick = (index) => {
        let openItem = index !== activeIndex ? index : null;
        setActiveIndex(openItem);
    };

    const menuItems = items.map((item, index) => {
        item.isOpen = index === activeIndex;

        return (
            <GlobalNavMenuItem 
                key={item.header}
                item={item} 
                onHeaderClick={() => onHeaderClick(index)}
            />
        );
    });

    return (
        <ul className="global-nav-menu">
            {menuItems}      
        </ul>
    );
}

export default GlobalNavMenu;