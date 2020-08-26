import './ProductListingPage.scss';

import React, {useState} from 'react';
import Breadcrumbs from './Breadcrumbs';
import PageHeader from './PageHeader';
import AppliedFacets from './AppliedFacets';
import FacetsMenu from './FacetsMenu';
import FacetsOpen from './FacetsOpen';
import ProductsSort from './ProductsSort';
import ProductsGrid from './ProductsGrid';
import ProductsPagination from './ProductsPagination';
import usePlpResults from '../hooks/usePlpResults';

const ProductListingPage = (initialFacetIds, initialSort, itemsPerPage, startingPageIndex) => {
    // TODO: this should default to empty string. Needs to come from data
    const [pageHeader, setPageHeader] = useState('Explore Full Face Helmets');
    // TODO: set count from data
    const [itemCount, setItemCount] = useState('750');
    const [isFacetsOpen, setIsFacetsOpen] = useState(false);
    const [plpResults, plpRequest] = usePlpResults(initialFacetIds, initialSort, itemsPerPage, startingPageIndex);

    // opens the facets menu overlay at mobile sizes
    const onFacetsOpenClick = (event) => {
        setIsFacetsOpen(true);
    };

    // closes the facets menu overlay at mobile sizes
    const onFacetsCloseClick = (event) => {
        setIsFacetsOpen(false);
    };

    // update results on facets menu selections
    const updateRefinementSelections = (id, isSelected) => {
        console.log('Refinements changed: ', id, isSelected);
    };

    if (!plpResults.products) {
        console.log('loading');
        return (
            <h1>Loading...</h1>
        );
    }

    console.log(plpResults);

    return (
        <section id="globalContent" className="global-content product-listing-page">
            <div className="site-wrapper page-content-wrapper">
                <Breadcrumbs />
                <PageHeader 
                    headerText={pageHeader}
                    itemCount={itemCount}
                />
                <section id="productsTools" className="products-tools">
                    <AppliedFacets />
                    <FacetsMenu 
                        facets={plpResults.facets} 
                        isOpen={isFacetsOpen} 
                        onSelectionsChanged={(id, isSelected) => updateRefinementSelections(id, isSelected)}
                        onCloseClick={onFacetsCloseClick}
                    />
                    <div className="products-tools_products small-screen-padding">
                        <div className="products-tools_open-filters-sorting">
                            <FacetsOpen onClick={onFacetsOpenClick} />
                            <ProductsSort />
                        </div>
                        <ProductsGrid products={plpResults.products} />
                        <div className="products-tools_products-footer">
                            <ProductsPagination />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

// TODO: this needs to come from data
// const facets = [
//     {
//         id: '100000',
//         label: 'Brand',
//         isOpen: true,
//         isFilterable: true,
//         filterLabelText: 'Search Brands',
//         seeAll: 'brands',
//         refinements: [
//             {
//                 id: '100001',
//                 label: 'AGV Helmets',
//                 count: 62,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '100002',
//                 label: 'Bell Powersports',
//                 count: 79,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '100003',
//                 label: 'Biltwell',
//                 count: 15,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '100004',
//                 label: 'Fly Racing',
//                 count: 9,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '100005',
//                 label: 'HJC Helmets',
//                 count: 65,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '100006',
//                 label: 'Icon',
//                 count: 71,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '100007',
//                 label: 'Klim',
//                 count: 2,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '100008',
//                 label: 'Nexx',
//                 count: 28,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '100009',
//                 label: 'RSD',
//                 count: 1,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '100010',
//                 label: 'Ruby Helmets',
//                 count: 18,
//                 isEnabled: true,
//                 isSelected: false
//             }
//         ]
//     },
//     {
//         id: '200000',
//         label: 'Customer Ratings',
//         isOpen: false,
//         isFilterable: false,
//         filterLabelText: '',
//         seeAll: '',
//         refinements: [
//             {
//                 id: '200001',
//                 label: '5 Only',
//                 count: 200,
//                 isEnabled: true,
//                 isSelected: false,
//                 rating: 10
//             },
//             {
//                 id: '200002',
//                 label: '4 & up',
//                 count: 300,
//                 isEnabled: true,
//                 isSelected: false,
//                 rating: 8
//             },
//             {
//                 id: '200003',
//                 label: '3 & up',
//                 count: 400,
//                 isEnabled: true,
//                 isSelected: false,
//                 rating: 6
//             },
//             {
//                 id: '200004',
//                 label: '2 & up',
//                 count: 600,
//                 isEnabled: true,
//                 isSelected: false,
//                 rating: 4
//             },
//             {
//                 id: '200005',
//                 label: '1 & up',
//                 count: 750,
//                 isEnabled: true,
//                 isSelected: false,
//                 rating: 2
//             }
//         ]
//     },
//     {
//         id: '300000',
//         label: 'Color',
//         isOpen: false,
//         isFilterable: false,
//         filterLabelText: '',
//         seeAll: '',
//         refinements: [
//             {
//                 id: '300001',
//                 label: 'Gloss Black',
//                 count: 600,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '300002',
//                 label: 'Matte Black',
//                 count: 500,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '300003',
//                 label: 'Red',
//                 count: 224,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '300004',
//                 label: 'Blue',
//                 count: 173,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '300005',
//                 label: 'White',
//                 count: 497,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '300006',
//                 label: 'Green',
//                 count: 84,
//                 isEnabled: true,
//                 isSelected: false
//             }
//         ]
//     },
//     {
//         id: '400000',
//         label: 'Price Rage',
//         isOpen: false,
//         isFilterable: false,
//         filterLabelText: '',
//         seeAll: '',
//         refinements: [
//             {
//                 id: '400001',
//                 label: '$0 - $200',
//                 count: 97,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '400002',
//                 label: '$201 - $400',
//                 count: 134,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '400003',
//                 label: '$401 - $600',
//                 count: 425,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '400004',
//                 label: '$601 - $800',
//                 count: 233,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '400005',
//                 label: '> $800',
//                 count: 2,
//                 isEnabled: true,
//                 isSelected: false
//             }
//         ]
//     },
//     {
//         id: '500000',
//         label: 'More Ways to Shop',
//         isOpen: false,
//         isFilterable: false,
//         filterLabelText: '',
//         seeAll: '',
//         refinements: [
//             {
//                 id: '500001',
//                 label: 'New Arrivals',
//                 count: 28,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '500002',
//                 label: 'On Sale',
//                 count: 175,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '500003',
//                 label: 'Open Box',
//                 count: 97,
//                 isEnabled: true,
//                 isSelected: false
//             },
//             {
//                 id: '500004',
//                 label: 'Restock',
//                 count: 42,
//                 isEnabled: true,
//                 isSelected: false
//             }
//         ]
//     }
// ]

export default ProductListingPage;