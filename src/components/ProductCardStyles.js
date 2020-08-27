import './ProductCardStyles.scss';
import React from 'react';

const ProductCardStyles = ({ styles }) => {
    // TODO: lazy load with data-src
    const moreStyles = styles.length - 5;
    
    const renderedStyles = styles.map((style, index) => {
        // show no more than 5 styles
        if (index > 5) {
            return false;
        }

        // show the "more styles" link
        if (index === 5 && moreStyles > 0) {
            return <a key={style.altText} href="/">{`+${moreStyles}`}</a>
        }

        return (
            <a key={style.altText} className={style.selected ? 'selected' : ''} href={style.linkURL}>
                <img data-js="lazyload" src={style.imageURL} alt={style.altText} />
            </a>
        );
    });

    return (
        <div className="product-card-styles">
            {/* TODO: wire up hovers */}
            <div className="product-card-styles_thumbs hide-scrollbars">
                {renderedStyles}
            </div>
        </div>
    );
}

export default ProductCardStyles;