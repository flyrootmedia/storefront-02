import React from 'react';

const PageHeader = ({ headerText, itemCount }) => {
    const itemCountLabel = parseInt(itemCount) === 1 ? 'product' : 'products';

    return (
        <h1 className="page-header small-screen-padding">
            <span>{headerText} </span> 
            {itemCount ? <span className="page-header_item-count">({itemCount} {itemCountLabel})</span> : ''}
        </h1>
    );
}

export default PageHeader;