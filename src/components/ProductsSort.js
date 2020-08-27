import './ProductsSort.scss';
import React from 'react';
import StyledSelect from './StyledSelect';

const ProductsSort = ({sortOptions, onSortChanged }) => {
    const onSortChange = (event) => {
        onSortChanged('sort', event.target.value, null);
    };

    return (
        <div className="products-sort">
            <StyledSelect 
                labelText='Sort By'
                options={sortOptions}
                id='sortSelect'
                cssClass='products-sort_select-wrapper' 
                onChange={onSortChange}
            />
        </div>
    );
}

export default ProductsSort;