import React from 'react';
import { Link } from 'react-router-dom';

const ProductCardStyleThumb = ({ style, selectedIndex, index, onMouseEnter }) => {
    // TODO: lazy load with data-src
    return (
        <Link  
            className={selectedIndex === index ? 'selected' : ''} 
            to={style.linkURL}
            onMouseEnter={onMouseEnter}>
                <img data-js="lazyload" src={style.imageURL} alt={style.altText} />
        </Link>
    );
};

export default ProductCardStyleThumb;