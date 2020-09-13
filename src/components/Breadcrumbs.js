import './Breadcrumbs.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
    return (
        <ul className="breadcrumbs small-screen-padding">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Helmets</Link></li>
            <li className="active">Full Face Helmets</li>
        </ul>
    );
}

export default Breadcrumbs;