import './ProductSticker.scss';
import React from 'react';

const ProductSticker = ({cssClass, stickerText}) => {
    if (!stickerText) {
        return <div />;
    }

    return (
        <div className={`sticker-text ${cssClass}`}>
            <span dangerouslySetInnerHTML={{ __html: stickerText}}></span>
        </div>
    );
}

export default ProductSticker;