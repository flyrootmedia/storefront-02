import './ProductsPagination.scss';
import React from 'react';
import { connect } from 'react-redux';
import { updateSelectedPlpPage } from '../actions';
import StyledButton from './StyledButton';
import StyledSelect from './StyledSelect';

const ProductsPagination = ({ pagination, updateSelectedPlpPage }) => {

    if (!pagination) {
        return null;
    }

    const onPreviousClick = () => {
        updateSelectedPlpPage(pagination.previousPageStartIndex);
    };

    const onNextClick = () => {
        updateSelectedPlpPage(pagination.nextPageStartIndex);
    };

    const onPageChange = (event) => {
        updateSelectedPlpPage(event.target.value);
    };

    return (
        <div className="products-pagination">
            <StyledButton
                cssClass='products-pagination_btn -previous fas fa-chevron-left'
                isDisabled={pagination.previousPageStartIndex === null}
                isIconBtn={true} 
                btnText='Previous Page'
                onClick={onPreviousClick}
            />

            <StyledSelect 
                labelText='Page'
                options={pagination.options}
                isDisabled={pagination.options.length < 2}
                id='paginationPageSelect'
                cssClass='products-pagination_page-select-wrapper' 
                onChange={onPageChange}
            />

            <StyledButton
                cssClass='products-pagination_btn -next fas fa-chevron-right'
                isDisabled={pagination.nextPageStartIndex === null}
                isIconBtn={true} 
                btnText='Next Page' 
                onClick={onNextClick}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return { 
        pagination: state.plpResults.pagination
    }
};

export default connect(
    mapStateToProps,
    { updateSelectedPlpPage }
)(ProductsPagination);