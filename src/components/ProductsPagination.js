import './ProductsPagination.scss';
import React from 'react';
import StyledButton from './StyledButton';
import StyledSelect from './StyledSelect';

const ProductsPagination = ({ pagination, onPaginationChanged }) => {

    const onPreviousClick = (event) => {
        onPaginationChanged('pageNum', pagination.previousPageStartIndex, null);
    };

    const onNextClick = (event) => {
        onPaginationChanged('pageNum', pagination.nextPageStartIndex, null);
    };

    const onPageChange = (event) => {
        onPaginationChanged('pageNum', event.target.value, null);
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

export default ProductsPagination;