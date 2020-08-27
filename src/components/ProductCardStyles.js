import './ProductCardStyles.scss';
import React, { useState, useEffect } from 'react';
import ProductCardStylesThumb from './ProductCardStylesThumb';

const ProductCardStyles = ({ styles, onLinkHover }) => {
    // state
    const [selectedIndex, setSelectedIndex] = useState(0);

    // consts/vars
    const moreStyles = styles.length - 5;

    // set initial selected style on first render
    useEffect(() => {
        // NOTE: is this overkill? Would we ever really select any style other 
        // than the first one on the initial load?
        for (let i=0; i < styles.length; i++) {
            if (styles[i].selected) {
                setSelectedIndex(i);
                return;
            }
        }
    }, [styles]);

    const updateSelectedThumbAndImage = (imageURL, hoveredIndex) => {
        let newMainImage = imageURL.replace('80x80', '480x480');
        onLinkHover(newMainImage);
        setSelectedIndex(hoveredIndex);
    };
    
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
            <ProductCardStylesThumb
                key={style.altText} 
                style={style} 
                selectedIndex={selectedIndex}
                index={index}
                onMouseEnter={() => updateSelectedThumbAndImage(style.imageURL, index)}
            />
        );
    });

    return (
        <div className="product-card-styles">
            <div className="product-card-styles_thumbs hide-scrollbars">
                {renderedStyles}
            </div>
        </div>
    );
}

export default ProductCardStyles;