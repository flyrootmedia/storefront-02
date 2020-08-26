import './ProductRatings.scss';

import React from 'react';

const ProductRatings = ({ detailURL, rating, count }) => {

    const stars = rating / 2;

    return (
        <div className="product-ratings">
            <a href={detailURL}>
                <span className={`ratings-stars -rate-${rating}`}>
                    <span className="screen-reader-only">{stars} of 5 stars</span>
                </span>
                <span className="product-ratings_count">({count}<span className="hide-for-small-screens"> Reviews</span>)</span>
            </a>
        </div>
    );
}

export default ProductRatings;