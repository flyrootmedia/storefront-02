import './ProductsPagination.scss';

import React from 'react';
import StyledButton from './StyledButton';
import StyledSelect from './StyledSelect';

// TODO: replace these options with data
const paginationOpts = [
    {
        selected: true,
        optionKey: 0,
        value: 1,
        display: '1 of 38'
    },
    {
        selected: false,
        optionKey: 20,
        value: 2,
        display: '2 of 38'
    },
    {
        selected: false,
        optionKey: 40,
        value: 3,
        display: '3 of 38'
    },
    {
        selected: false,
        optionKey: 60,
        value: 4,
        display: '4 of 38'
    },
    {
        selected: false,
        optionKey: 80,
        value: 5,
        display: '5 of 38'
    },
    {
        selected: false,
        optionKey: 100,
        value: 6,
        display: '6 of 38'
    },
    {
        selected: false,
        optionKey: 120,
        value: 7,
        display: '7 of 38'
    },
    {
        selected: false,
        optionKey: 140,
        value: 8,
        display: '8 of 38'
    },
    {
        selected: false,
        optionKey: 160,
        value: 9,
        display: '9 of 38'
    },
    {
        selected: false,
        optionKey: 180,
        value: 10,
        display: '10 of 38'
    },
    {
        selected: false,
        optionKey: 200,
        value: 11,
        display: 'Etc., etc...'
    }
];

const ProductsPagination = () => {

    const onPreviousClick = (event) => {
        console.log('previous button clicked');
    };

    const onNextClick = (event) => {
        console.log('next button clicked');
    };

    const onPageChange = (event) => {
        console.log('new page selected');
    };

    return (
        <div className="products-pagination">
            <StyledButton
                cssClass='products-pagination_btn -previous fas fa-chevron-left' 
                dataJS='pagination-previous' 
                dataValue='' 
                isDisabled={true}
                isIconBtn={true} 
                btnText='Previous Page'
                onClick={onPreviousClick}
            />

            <StyledSelect 
                labelText='Page'
                options={paginationOpts} 
                dataJS='pagination-page-select'
                id='paginationPageSelect'
                cssClass='products-pagination_page-select-wrapper' 
                onChange={onPageChange}
            />

            <StyledButton
                cssClass='products-pagination_btn -next fas fa-chevron-right' 
                dataJS='pagination-next' 
                dataValue='20' 
                isDisabled={false}
                isIconBtn={true} 
                btnText='Next Page' 
                onClick={onNextClick}
            />
        </div>
    );
}

export default ProductsPagination;