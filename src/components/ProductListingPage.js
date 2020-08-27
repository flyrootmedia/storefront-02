import './ProductListingPage.scss';
import React, {useState, useEffect, useCallback, useRef} from 'react';
import Breadcrumbs from './Breadcrumbs';
import PageHeader from './PageHeader';
import AppliedFacets from './AppliedFacets';
import FacetsMenu from './FacetsMenu';
import FacetsOpen from './FacetsOpen';
import ProductsSort from './ProductsSort';
import ProductsGrid from './ProductsGrid';
import ProductsPagination from './ProductsPagination';
import AlertBox from './AlertBox';
import usePlpResults from '../hooks/usePlpResults';

const ProductListingPage = ({initialFacetIds, initialSort, itemsPerPage, startingPageIndex}) => {
    // consts/vars
    const plpEl = useRef();

    // state
    const [isFacetsOpen, setIsFacetsOpen] = useState(false);
    const [plpResults, plpRequest] = usePlpResults(initialFacetIds, initialSort, itemsPerPage, startingPageIndex, '/apis/plp.json');

    // callback to update results when refinement selections change
    const requestNewPlpResults = useCallback((paramToChange, changedParamValue, isSelected) => {
        console.log('request from callback:', paramToChange, changedParamValue, isSelected);

        let requestRefinements = plpEl.current.facetIds ? plpEl.current.facetIds : initialFacetIds;
        let requestSort = plpEl.current.sort ? plpEl.current.sort : initialSort;
        let requestItemsPerPage = plpEl.current.itemsPerPage ? plpEl.current.itemsPerPage : itemsPerPage;
        let requestPageIndex = plpEl.current.pageIndex ? plpEl.current.pageIndex : startingPageIndex;
        let requestPath = isSelected ? '/apis/plpFiltered.json' : '/apis/plp.json';

        switch (paramToChange) {
            case 'refinements':
                let facetIdsArr = requestRefinements.split('+');
                const index = facetIdsArr.indexOf(changedParamValue); 

                if (index > -1 && !isSelected) {
                    facetIdsArr.splice(index, 1);
                } else if (index === -1 && isSelected) {
                    facetIdsArr.push(changedParamValue);
                }

                // update ref and request values
                plpEl.current.facetIds = facetIdsArr.join('+');
                requestRefinements = plpEl.current.facetIds;
                break;
            case 'sort':
                // update ref and request values
                plpEl.current.sort = changedParamValue
                requestSort = plpEl.current.sort;

                // this is just for testing purposes
                requestPath = changedParamValue === 'priceHighToLow' ? '/apis/plpSorted.json' : '/apis/plp.json';
                break;
            case 'pageNum':
                // update ref and request values
                plpEl.current.pageIndex = changedParamValue
                requestPageIndex = plpEl.current.pageIndex;

                // this is just for testing purposes
                requestPath = changedParamValue > 0 ? '/apis/plpPaged.json' : '/apis/plp.json';
                break;
            default:
                break;
        }

        plpRequest(
            requestRefinements, 
            requestSort, 
            requestItemsPerPage, 
            requestPageIndex, 
            requestPath
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialFacetIds, initialSort, itemsPerPage, startingPageIndex]);

    useEffect(() => {
        console.log('plpResults loaded');
    }, [plpResults]);

    // opens the facets menu overlay at mobile sizes
    const onFacetsOpenClick = (event) => {
        setIsFacetsOpen(true);
    };

    // closes the facets menu overlay at mobile sizes
    const onFacetsCloseClick = (event) => {
        setIsFacetsOpen(false);
    };

    if (!plpResults.products) {
        return (
            <h1>Loading...</h1>
        );
    }

    return (
        <section ref={plpEl} id="globalContent" className="global-content product-listing-page">
            <div className="site-wrapper page-content-wrapper">
                <Breadcrumbs />
                <PageHeader 
                    headerText={plpResults.pageHeader}
                    itemCount={plpResults.itemCount}
                />

                <AlertBox isDismissable={true}>
                    <p><strong>NOTE:</strong> This app is currently set up with hardcoded test JSON for the different user selections, so there&rsquo;s only
                    one set of data you&rsquo;ll see change when selecting a filter, a new sort, or changing the pagination. To see it behave
                    somewhat as expected, use the following:</p>
                    <ol>
                        <li>For filtering, open the Brand filter and toggle the "Biltwell" option.</li>
                        <li>For sorting, select "$ (High - Low)" then back to "Featured"</li>
                        <li>For pagination, click the "next" button or select page 5, then go back to page 1</li>
                    </ol>
                </AlertBox>
                
                <section id="productsTools" className="products-tools">
                    <AppliedFacets />
                    <FacetsMenu 
                        facets={plpResults.facets} 
                        isOpen={isFacetsOpen} 
                        onSelectionsChanged={requestNewPlpResults}
                        onCloseClick={onFacetsCloseClick}
                    />
                    <div className="products-tools_products small-screen-padding">
                        <div className="products-tools_open-filters-sorting">
                            <FacetsOpen onClick={onFacetsOpenClick} />
                            <ProductsSort 
                                sortOptions={plpResults.sortOptions} 
                                onSortChanged={requestNewPlpResults} 
                            />
                        </div>
                        <ProductsGrid products={plpResults.products} />
                        <div className="products-tools_products-footer">
                            <ProductsPagination 
                                pagination={plpResults.pagination}
                                onPaginationChanged={requestNewPlpResults} 
                            />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default ProductListingPage;