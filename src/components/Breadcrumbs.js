import './Breadcrumbs.scss';
import React from 'react';

const Breadcrumbs = () => {
    return (
        <ul className="breadcrumbs small-screen-padding">
            <li><a href="/">Home</a></li>
            <li><a href="/">Helmets</a></li>
            <li className="active">Full Face Helmets</li>
        </ul>
    );
}

export default Breadcrumbs;