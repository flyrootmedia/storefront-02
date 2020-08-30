import { useState, useEffect } from 'react';

const usePlpResults = (selectedRefinements, sort, itemsPerPage, activePage) => {
    const [plpResults, setPlpResults] = useState({});
    const baseURL = 'https://5f4983e18e271c001650ca8f.mockapi.io';
    let selectedRefinementsArr = [];
    let query = '';

    const onDataLoaded = (plpData, newSort) => {
        let facetsData = plpData.facets;
        let productsData = plpData.products;
        let availableProducts = [];
        let isFiltered = false;

        // if more than just the base category facet is selected, 
        // determine if the products match the selected refinements and update the product array
        if (selectedRefinementsArr.length > 1) {
            isFiltered = true;

            productsData.forEach((product) => {
                let facetIds = product.facetIds;
                let refinementIsAvailable = [];
            
                selectedRefinementsArr.forEach((refinementId) => {
                    refinementIsAvailable.push(facetIds.includes(refinementId));
                });
                
                if (refinementIsAvailable.indexOf(true) > -1) {
                    availableProducts.push(product);
                }
            });
        }

        const sortProducts = ((products) => {

            let sortedProducts = [];

            switch (newSort) {
                case 'brandName':
                    sortedProducts = products.sort((a, b) => (a.name > b.name) ? 1 : -1);
                    break;
                case 'topRated':
                    sortedProducts = products.sort((a, b) => (a.ratings.rating < b.ratings.rating) ? 1 : -1);
                    break;
                case 'priceLowToHigh':
                    sortedProducts = products.sort((a, b) =>  (a.price.lowPrice > b.price.lowPrice) ? 1 : -1);
                    break;
                case 'priceHighToLow':
                    sortedProducts = products.sort((a, b) =>  (a.price.highPrice < b.price.highPrice) ? 1 : -1);
                    break;
                case 'bestSellers':
                    sortedProducts = products.sort((a, b) =>  (b.isBestSeller) ? 1 : -1);
                    break;
                case 'featured':
                    sortedProducts = products.sort((a, b) =>  (b.isFeatured) ? 1 : -1);
                    break;
                case 'newestArrivals':
                    sortedProducts = products.sort((a, b) =>  (b.isNewArrival) ? 1 : -1);
                    break;
                default:
                    sortedProducts = products;
                    break;

            }

            return sortedProducts;
        });
        
        if (isFiltered) {
            plpData.products = sortProducts(availableProducts);
        } else {
            plpData.products = sortProducts(plpData.products);
        }

        // set the number of results
        plpData.itemCount = plpData.products.length;

        // set the active sort
        plpData.sortOptions.forEach((option) => {
            option.selected = option.value === newSort;
        });

        // determine if the refinement is selected and set the selected state
        facetsData.forEach((facet) => {
            let refinementsArr = facet.refinements;

            refinementsArr.forEach((refinement) => {
                refinement.isSelected = selectedRefinementsArr.includes(refinement.id);
            });
        });

        plpData.facets = facetsData;

        // Sort


        // Finally, set the whole PLP object
        setPlpResults(plpData);

        window.history.pushState({}, '', `?${query}`);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    useEffect(() => {
        plpRequest(selectedRefinements, sort, itemsPerPage, activePage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedRefinements, sort, itemsPerPage, activePage]);

    const plpRequest = async (facetsParam, sortParam, itemsPerPageParam, pageStartIndexParam) => {
        try {
            const plpUrl = new URL(`${baseURL}/plp`);
            selectedRefinementsArr = facetsParam.split('+');
            query = new URLSearchParams({
                facets: facetsParam,
                sort: sortParam,
                itemsPerPage: itemsPerPageParam,
                pageStartIndex: pageStartIndexParam
            });

            let plpResponse = await fetch (`${plpUrl}`, { method: 'GET' });

            if (!plpResponse.ok) {
                throw new Error(`There was an error loading the PLP data. status: ${plpResponse.status}`);
            } else {
                let plpDataArr = await plpResponse.json();
                onDataLoaded(plpDataArr[0], sortParam);
            }
        } catch (error) {
            alert(`There was an error loading the requested data. status: ${error}`)
        }
    };

    return [plpResults, plpRequest];
};

export default usePlpResults;