import './ProductCardImage.scss';
import React from 'react';

const ProductCardImage = ({detailURL, imageURL, altText}) => {
    // TODO: lazy load with data-src
    return (
        <div className="product-card-image">
            <a href={detailURL}>
                <img data-js="lazyload" src={imageURL} alt={altText} />
            </a>
        </div>
    );
}

export default ProductCardImage;