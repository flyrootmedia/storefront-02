import './ProductCard.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSticker from './ProductSticker';
import ProductCardImage from './ProductCardImage';
import ProductCardStyles from './ProductCardStyles';
import ProductRatings from './ProductRatings';
import ProductPrice from './ProductPrice';

const ProductCard = ({ product }) => {

    const [productImage, setProductImage] = useState(product.image.url);

    const updateProductCardImage = (imageURL) => {
        setProductImage(imageURL);
    };

    return (
        <div className="product-card">
            <div className="product-card_sticker">
                <ProductSticker
                    cssClass={product.sticker.cssClass} 
                    stickerText={product.sticker.stickerText}
                />
            </div>
            <div className="product-card_content">
                <ProductCardImage 
                    detailURL={product.defaultSkuURL} 
                    imageURL={productImage} 
                    altText={product.image.altText}
                />
                <ProductCardStyles
                    styles={product.styles}
                    onLinkHover={updateProductCardImage}
                />
                <div className="product-card_title">
                    <Link to="/product-detail">
                        {product.name}
                    </Link>
                </div>
                <ProductRatings 
                    detailURL={product.productURL}
                    rating={product.ratings.rating} 
                    count={product.ratings.count}
                />
                <ProductPrice
                    salePrice={product.price.salePrice} 
                    wasPrice={product.price.wasPrice}
                />
            </div>
        </div>
    );
}

export default ProductCard;