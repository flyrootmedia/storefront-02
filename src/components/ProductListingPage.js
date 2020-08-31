import './ProductListingPage.scss';
import React, {useState, useCallback, useRef} from 'react';
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
        let requestRefinements = plpEl.current.facetIds ? plpEl.current.facetIds : initialFacetIds;
        let requestSort = plpEl.current.sort ? plpEl.current.sort : initialSort;
        let requestItemsPerPage = plpEl.current.itemsPerPage ? plpEl.current.itemsPerPage : itemsPerPage;
        let requestPageIndex = 0; // always reset the page start index on filtering/sorting
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
                    <p><strong>NOTE:</strong> This app is my first experimentation with React outside of courses/tutorials. 
                    It's currently set up with a mock api that doesn't pull from a database, so doesn't support filtering/sorting, 
                    or pagination. To get around this and make it feel a little less broken I'm performing these actions in the front end, 
                    which I know is unrealistic and expensve, and makes it feel a bit wonky. The filters aren't taking into account which 
                    ones should be additive or subtractive, and the counts are kind of messed up because of that.
                    </p>
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