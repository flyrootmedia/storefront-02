import './ProductRatings.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductRatings = ({ detailURL, rating, count }) => {

    const stars = rating / 2;

    return (
        <div className="product-ratings">
            <Link to={detailURL}>
                <span className={`ratings-stars -rate-${rating}`}>
                    <span className="screen-reader-only">{stars} of 5 stars</span>
                </span>
                <span className="product-ratings_count">({count}<span className="hide-for-small-screens"> Reviews</span>)</span>
            </Link>
        </div>
    );
}

export default ProductRatings;