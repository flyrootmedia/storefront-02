import './ProductPrice.scss';

import React from 'react';

const ProductPrice = ({salePrice, wasPrice}) => {
    return (
        <div className="product-price">
            <div className="product-price_column">
                <span className="screen-reader-only">Product Price&nbsp;</span>
                <span className="product-price_sale-price">
                    {salePrice}&nbsp; 
                    {wasPrice ? <span className="was-price">{wasPrice}</span> : ''}
                </span>
            </div>
        </div>
    );
}

export default ProductPrice;