// TODO: delete after redux is working 

// import { useState, useEffect } from 'react';

// const usePlpResults = (selectedRefinements, sort, itemsPerPage, activePage) => {
//     const [plpResults, setPlpResults] = useState({});
//     const baseURL = 'https://5f4983e18e271c001650ca8f.mockapi.io';
//     let selectedRefinementsArr = [];
//     let query = '';

//     /**
//      * @description This function is doing a lot that should not be done on the front end. I'm currently doing a bunch of 
//      * calculations for filtering, sorting, and pagination that should really be done on the back end. Just doing it here for
//      * now to make the page work a bit more realistically since I don't have an api that's making any real db request
//      * @param {obj} plpData: the entire plp data response 
//      * @param {string} newSort: the currently selected sort option
//      * @param {int} newPageStartIndex: the start index in the products array for the currently selected page
//      */
//     const onDataLoaded = (plpData, newSort, newPageStartIndex) => {
//         let availableProducts = [];
//         let paginatedProducts = [];
//         let isFiltered = selectedRefinementsArr.length > 1;
//         let numberOfPages = 0;
//         let paginationOptions = [];

//         // helper function to sort the available products
//         const sortProducts = ((products) => {
//             let sortedProducts = [];

//             switch (newSort) {
//                 case 'brandName':
//                     sortedProducts = products.sort((a, b) => (a.name > b.name) ? 1 : -1);
//                     break;
//                 case 'topRated':
//                     sortedProducts = products.sort((a, b) => (a.ratings.rating < b.ratings.rating) ? 1 : -1);
//                     break;
//                 case 'priceLowToHigh':
//                     sortedProducts = products.sort((a, b) =>  (a.price.lowPrice > b.price.lowPrice) ? 1 : -1);
//                     break;
//                 case 'priceHighToLow':
//                     sortedProducts = products.sort((a, b) =>  (a.price.highPrice < b.price.highPrice) ? 1 : -1);
//                     break;
//                 case 'bestSellers':
//                     sortedProducts = products.sort((a, b) =>  (b.isBestSeller) ? 1 : -1);
//                     break;
//                 case 'featured':
//                     sortedProducts = products.sort((a, b) =>  (b.isFeatured) ? 1 : -1);
//                     break;
//                 case 'newestArrivals':
//                     sortedProducts = products.sort((a, b) =>  (b.isNewArrival) ? 1 : -1);
//                     break;
//                 default:
//                     sortedProducts = products;
//                     break;
//             }

//             return sortedProducts;
//         });

//         // if more than just the base category facet is selected, 
//         // determine if the products match the selected refinements and update the product array
//         plpData.products.forEach((product) => {
//             if (isFiltered) {
//                 let facetIds = product.facetIds;
//                 let refinementIsAvailable = [];
            
//                 selectedRefinementsArr.forEach((refinementId) => {
//                     refinementIsAvailable.push(facetIds.includes(refinementId));
//                 });
                
//                 if (refinementIsAvailable.indexOf(true) > -1) {
//                     availableProducts.push(product);
//                 }
//             } else {
//                 availableProducts.push(product);
//             }  
//         });

//         // sort and then set the products array
//         availableProducts = sortProducts(availableProducts);

//         // set the number of results
//         plpData.itemCount = availableProducts.length;

//         // set the products to display based on the current page number
//         availableProducts.forEach((product, index) => {
//             if (newPageStartIndex <= index && index < (parseInt(newPageStartIndex) + parseInt(itemsPerPage))) {
//                 paginatedProducts.push(product);     
//             }
//         });

//         plpData.products = paginatedProducts;

//         // set pagination buttons and options
//         numberOfPages = Math.ceil(plpData.itemCount / itemsPerPage);
//         plpData.pagination.previousPageStartIndex = newPageStartIndex === 0 ? null : newPageStartIndex - itemsPerPage;
//         plpData.pagination.currentPageStartIndex = newPageStartIndex;
//         plpData.pagination.nextPageStartIndex = newPageStartIndex / itemsPerPage + 1 === numberOfPages ? null : newPageStartIndex + itemsPerPage;

//         for (let i = 0; i < numberOfPages; i++) {
//             let option = {};
//             option.selected = newPageStartIndex / itemsPerPage === i;
//             option.value = i * itemsPerPage;
//             option.display = `${i + 1} of ${numberOfPages}`; 

//             paginationOptions.push(option);
//         }

//         plpData.pagination.options = paginationOptions;

//         // set the active sort option in the select
//         plpData.sortOptions.forEach((option) => {
//             option.selected = option.value === newSort;
//         });

//         // set selected state, enabled state, and count of each refinement
//         plpData.facets.forEach((facet) => {
//             let refinementsArr = facet.refinements;

//             refinementsArr.forEach((refinement) => {
//                 refinement.isSelected = selectedRefinementsArr.includes(refinement.id);

//                 // update counts
//                 let itemCount = 0;
//                 availableProducts.forEach((product) => {
//                     if (product.facetIds.includes(refinement.id)) {
//                         itemCount = itemCount + 1;
//                     }
//                 });

//                 if (itemCount === 0) {
//                     refinement.isEnabled = false;
//                 }
//                 refinement.count = itemCount;
//             });
//         });

//         // Set the whole PLP object
//         setPlpResults(plpData);

//         // add the current options to the address bar
//         window.history.pushState({}, '', `?${query}`);
//         const navEvent = new PopStateEvent('popstate');
//         window.dispatchEvent(navEvent);
//     };

//     useEffect(() => {
//         plpRequest(selectedRefinements, sort, itemsPerPage, activePage);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [selectedRefinements, sort, itemsPerPage, activePage]);

//     const plpRequest = async (facetsParam, sortParam, itemsPerPageParam, pageStartIndexParam) => {
//         try {
//             const plpUrl = new URL(`${baseURL}/plp`);
//             selectedRefinementsArr = facetsParam.split('+');
//             query = new URLSearchParams({
//                 facets: facetsParam,
//                 sort: sortParam,
//                 itemsPerPage: itemsPerPageParam,
//                 pageStartIndex: pageStartIndexParam
//             });

//             let plpResponse = await fetch (`${plpUrl}`, { method: 'GET' });

//             if (!plpResponse.ok) {
//                 throw new Error(`There was an error loading the PLP data. status: ${plpResponse.status}`);
//             } else {
//                 let plpDataArr = await plpResponse.json();
//                 onDataLoaded(plpDataArr[0], sortParam, pageStartIndexParam);
//             }
//         } catch (error) {
//             alert(`There was an error loading the requested data. status: ${error}`)
//         }
//     };

//     return [plpResults, plpRequest];
// };

// export default usePlpResults;