import { useState, useEffect } from 'react';

const usePlpResults = (selectedRefinements, sort, itemsPerPage, activePage, requestPath) => {

    // NOTE: only passing requestPath for now to differentiate between the static results

    const [plpResults, setPlpResults] = useState({});
    const baseURL = 'https://5f4983e18e271c001650ca8f.mockapi.io';
    const selectedRefinementsArr = selectedRefinements.split('+');
    let query = '';
    let plpData = {};
    let facetsData = [];
    let productsData = [];

    const onDataLoaded = () => {
        //console.log('selectedRefinementsArr', selectedRefinementsArr);
            //console.log(plpData);
            //console.log(facetsData);
            //console.log(productsData);

            let availableProducts = productsData.map((product) => {
                let facetIds = product.facetIds;
                let availableProduct = null;
                
                facetIds.forEach((facetId) => {
                    if (selectedRefinementsArr.includes(facetId)) {
                        availableProduct = product;
                    }
                });
                return availableProduct;
            });

            plpData.products = availableProducts;
            plpData.facets = facetsData;

            console.log(plpData);

            setPlpResults(plpData);

            window.history.pushState({}, '', `?${query}`);
            const navEvent = new PopStateEvent('popstate');
            window.dispatchEvent(navEvent);
    };

    useEffect(() => {
        plpRequest(selectedRefinements, sort, itemsPerPage, activePage, requestPath)
            .then(() => {
                onDataLoaded();
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedRefinements, sort, itemsPerPage, activePage, requestPath]);

    const plpRequest = async (facetsParam, sortParam, itemsPerPageParam, pageStartIndexParam, newRequestPath) => {
        try {
            query = `facets=${facetsParam}&sort=${sortParam}&itemsPerPage=${itemsPerPageParam}&pageStartIndex=${pageStartIndexParam}`;

            let plpUrl = new URL(`${baseURL}/plp`);
            let productsUrl = new URL(`${baseURL}/products`);
            let facetsUrl = new URL(`${baseURL}/facets`);
            
            // PLP request
            let plpResponse = await fetch (`${plpUrl}`, { method: 'GET' });

            if (!plpResponse.ok) {
                throw new Error(`There was an error loading the PLP data. status: ${plpResponse.status}`);
            } else {
                let plpDataArr = await plpResponse.json();
                plpData = plpDataArr[0];
            }

            // Facets request
            let facetsResponse = await fetch (`${facetsUrl}`, { method: 'GET' });

            if (!facetsResponse.ok) {
                throw new Error(`There was an error loading the products data. status: ${facetsResponse.status}`);
            } else {
                facetsData = await facetsResponse.json();
            }

            // Products request
            let productsResponse = await fetch (`${productsUrl}`, { method: 'GET' });

            if (!productsResponse.ok) {
                throw new Error(`There was an error loading the products data. status: ${productsResponse.status}`);
            } else {
                productsData = await productsResponse.json();
            }
        } catch (error) {
            alert(`There was an error loading the requested data. status: ${error}`)
        }
        
    };

    return [plpResults, plpRequest];
};

export default usePlpResults;