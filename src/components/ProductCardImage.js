import './ProductCardImage.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCardImage = ({detailURL, imageURL, altText}) => {
    // TODO: lazy load with data-src
    return (
        <div className="product-card-image">
            <Link to={detailURL}>
                <img data-js="lazyload" src={imageURL} alt={altText} />
            </Link>
        </div>
    );
}

export default ProductCardImage;