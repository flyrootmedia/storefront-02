import './ProductsSort.scss';

import React from 'react';
import StyledSelect from './StyledSelect';

// TODO: replace these options with data
const sortOpts = [
    {
        selected: true,
        optionKey: 'featured',
        value: 'featured',
        display: 'Featured'
    },
    {
        selected: false,
        optionKey: 'brandName',
        value: 'brandName',
        display: 'Brand (A-Z)'
    },
    {
        selected: false,
        optionKey: 'topRated',
        value: 'topRated',
        display: 'Top Rated'
    },
    {
        selected: false,
        optionKey: 'bestSellers',
        value: 'bestSellers',
        display: 'Best Sellers'
    },
    {
        selected: false,
        optionKey: 'newestArrivals',
        value: 'newestArrivals',
        display: 'New Arrivals'
    },
    {
        selected: false,
        optionKey: 'priceHighToLow',
        value: 'priceHighToLow',
        display: '$ (High - Low)'
    },
    {
        selected: false,
        optionKey: 'priceLowToHigh',
        value: 'priceLowToHigh',
        display: '$ (Low - High)'
    }
];

const ProductsSort = () => {

    const onSortChange = (event) => {
        console.log('sort changed');
    };

    return (
        <div className="products-sort">
            <StyledSelect 
                labelText='Sort By'
                options={sortOpts} 
                dataJS='sort-select'
                id='sortSelect'
                cssClass='products-sort_select-wrapper' 
                onChange={onSortChange}
            />
        </div>
    );
}

export default ProductsSort;