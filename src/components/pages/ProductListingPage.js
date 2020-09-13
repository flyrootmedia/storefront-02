import './ProductListingPage.scss';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchInitialPlpResults } from '../../actions';
import Breadcrumbs from '../Breadcrumbs';
import PageHeader from '../PageHeader';
import AppliedFacets from '../AppliedFacets';
import FacetsMenu from '../FacetsMenu';
import FacetsOpen from '../FacetsOpen';
import ProductsSort from '../ProductsSort';
import ProductsGrid from '../ProductsGrid';
import ProductsPagination from '../ProductsPagination';
import AlertBox from '../AlertBox';
import LoadingSpinner from '../LoadingSpinner';

const ProductListingPage = ({ plpResults, fetchInitialPlpResults }) => {
    const [isFacetsOpen, setIsFacetsOpen] = useState(false);

    useEffect(() => {
        fetchInitialPlpResults();
    },[fetchInitialPlpResults]);

    // opens the facets menu overlay at mobile sizes
    const onFacetsOpenClick = () => {
        setIsFacetsOpen(true);
        document.body.classList.add('body-no-scroll');
    };

    // closes the facets menu overlay at mobile sizes
    const onFacetsCloseClick = () => {
        setIsFacetsOpen(false);
        document.body.classList.remove('body-no-scroll')
    };

    if (!plpResults.products) {
        return (
            <LoadingSpinner />
        );
    }

    return (
        <section 
            id="globalContent" 
            className="global-content product-listing-page">

            <div className="site-wrapper page-content-wrapper">
                <Breadcrumbs />
                <PageHeader />

                <AlertBox isDismissable={true}>
                    <p>
                        <strong>NOTE:</strong> This app is my first experimentation with React outside of courses/tutorials. 
                        It's currently set up with a mock api that doesn't pull from a database, so doesn't support filtering/sorting, 
                        or pagination. To get around this and make it feel a little less broken I'm performing these actions in the front end, 
                        which I know is unrealistic and expensve, and makes it feel a bit wonky. The filters aren't taking into account which 
                        ones should be additive or subtractive, and the counts are kind of messed up because of that.
                    </p>
                    <p>
                        This is a work in progress and is a portfolio project, so I'd welcome issues created for any suggestions or bugs, but I won't 
                        accept any pull requests since I would like this to remain all my own code.
                    </p>
                </AlertBox>
                
                <section id="productsTools" className="products-tools">
                    <AppliedFacets />
                    <FacetsMenu 
                        isOpen={isFacetsOpen} 
                        onCloseClick={onFacetsCloseClick}
                    />
                    <div className="products-tools_products small-screen-padding">
                        <div className="products-tools_open-filters-sorting">
                            <FacetsOpen onClick={onFacetsOpenClick} />
                            <ProductsSort />
                        </div>
                        <ProductsGrid />
                        <div className="products-tools_products-footer">
                            <ProductsPagination />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return { 
        plpResults: state.plpResults
    }
};

export default connect(
    mapStateToProps, 
    { fetchInitialPlpResults }
)(ProductListingPage);