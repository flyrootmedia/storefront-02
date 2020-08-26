import React from 'react';

const GlobalNavButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="fas fa-bars hamburger">
            <span className="screen-reader-only">Open Menu</span>
        </button>
    );
}

export default GlobalNavButton;