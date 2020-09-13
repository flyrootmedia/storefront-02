import React from 'react';
import { connect } from 'react-redux';

const PageHeader = ({ headerText, itemCount }) => {
    const itemCountLabel = parseInt(itemCount) === 1 ? 'product' : 'products';

    return (
        <h1 className="page-header small-screen-padding">
            <span>{headerText} </span> 
            {itemCount ? <span className="page-header_item-count">({itemCount} {itemCountLabel})</span> : ''}
        </h1>
    );
}

const mapStateToProps = (state) => {
    return { 
        headerText: state.plpResults.pageHeader,
        itemCount: state.plpResults.itemCount
    }
};

export default connect(mapStateToProps)(PageHeader);