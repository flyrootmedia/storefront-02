import './ProductsSort.scss';
import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
    return { 
        sortOptions: state.plpResults.sortOptions
    }
};

export default connect(mapStateToProps)(ProductsSort);