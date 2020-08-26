import './ProductCard.scss';

import React from 'react';
import ProductSticker from './ProductSticker';
import ProductCardImage from './ProductCardImage';
import ProductCardStyles from './ProductCardStyles';
import ProductRatings from './ProductRatings';
import ProductPrice from './ProductPrice';

const ProductCard = ({ product }) => {
    return (
        <div data-product-card className="product-card">
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

// TODO: this is just until I get a actual product data going, then delete
// ProductCard.defaultProps = {
//     product: {
//         productURL: '/',
//         defaultSkuURL: '/',
//         sticker: {
//             cssClass: '',
//             stickerText: 'Long Sticker Text to Demonstrate Ellipsis!'
//         },
//         name: 'Test Product Name',
//         image: {
//             url: '/images/products/arai-corsair-x-rc_480x480.jpg',
//             altText: 'Arai Corsair X - RC'
//         },
//         styles: [
//             {
//                 selected: true,
//                 linkURL: '/',
//                 imageURL: '/images/products/bell-eliminator-rally-orange_80x80.jpg',
//                 altText: 'Bell Eliminator - Rally Orange - Thumbnail'
//             },
//             {
//                 selected: false,
//                 linkURL: '/',
//                 imageURL: '/images/products/bell-eliminator-gloss-black_80x80.jpg',
//                 altText: 'Bell Eliminator - Gloss Black - Thumbnail'
//             },
//             {
//                 selected: false,
//                 linkURL: '/',
//                 imageURL: '/images/products/bell-eliminator-gloss-white_80x80.jpg',
//                 altText: 'Bell Eliminator - Gloss White - Thumbnail'
//             },
//             {
//                 selected: true,
//                 linkURL: '/',
//                 imageURL: '/images/products/bell-eliminator-rally-orange_80x80.jpg',
//                 altText: 'Bell Eliminator - Rally Orange 2 - Thumbnail'
//             },
//             {
//                 selected: false,
//                 linkURL: '/',
//                 imageURL: '/images/products/bell-eliminator-gloss-black_80x80.jpg',
//                 altText: 'Bell Eliminator - Gloss Black 2 - Thumbnail'
//             },
//             {
//                 selected: false,
//                 linkURL: '/',
//                 imageURL: '/images/products/bell-eliminator-gloss-white_80x80.jpg',
//                 altText: 'Bell Eliminator - Gloss White 2 - Thumbnail'
//             },
//             {
//                 selected: true,
//                 linkURL: '/',
//                 imageURL: '/images/products/bell-eliminator-rally-orange_80x80.jpg',
//                 altText: 'Bell Eliminator - Rally Orange 3 - Thumbnail'
//             },
//             {
//                 selected: false,
//                 linkURL: '/',
//                 imageURL: '/images/products/bell-eliminator-gloss-black_80x80.jpg',
//                 altText: 'Bell Eliminator - Gloss Black 4 - Thumbnail'
//             },
//             {
//                 selected: false,
//                 linkURL: '/',
//                 imageURL: '/images/products/bell-eliminator-gloss-white_80x80.jpg',
//                 altText: 'Bell Eliminator - Gloss White 5 - Thumbnail'
//             }
//         ],
//         ratings: {
//             rating: 10,
//             count: 97
//         },
//         price: {
//             salePrice: '$799.99 - $849.95',
//             wasPrice: '$899.99'
//         }
//     }
// }

export default ProductCard;