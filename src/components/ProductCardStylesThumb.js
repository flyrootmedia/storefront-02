import React from 'react';

const ProductCardStyleThumb = ({ style, selectedIndex, index, onMouseEnter }) => {
    // TODO: lazy load with data-src
    return (
        <a  
            className={selectedIndex === index ? 'selected' : ''} 
            href={style.linkURL}
            onMouseEnter={onMouseEnter}
        >
            <img data-js="lazyload" src={style.imageURL} alt={style.altText} />
        </a>
    );
};

export default ProductCardStyleThumb;