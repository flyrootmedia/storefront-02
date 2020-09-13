import './ProductsSort.scss';
import React from 'react';
import { connect } from 'react-redux';
import { updateSelectedPlpSort } from '../actions';
import StyledSelect from './StyledSelect';

const ProductsSort = ({sortOptions, updateSelectedPlpSort }) => {
    const onSortChange = (event) => {
        updateSelectedPlpSort(event.target.value);
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

export default connect(
    mapStateToProps,
    { updateSelectedPlpSort }
)(ProductsSort);