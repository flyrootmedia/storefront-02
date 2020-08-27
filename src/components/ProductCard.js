import './ProductCard.scss';
import React from 'react';
import ProductSticker from './ProductSticker';
import ProductCardImage from './ProductCardImage';
import ProductCardStyles from './ProductCardStyles';
import ProductRatings from './ProductRatings';
import ProductPrice from './ProductPrice';

const ProductCard = ({ product }) => {
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
                    imageURL={product.image.url} 
                    altText={product.image.altText}
                />
                <ProductCardStyles
                    styles={product.styles}
                />
                <div className="product-card_title">
                    <a href="/">
                        {product.name}
                    </a>
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