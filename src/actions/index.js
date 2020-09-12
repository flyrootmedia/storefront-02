import history from '../history';
import ACTION_TYPES from './types';
import onPlpDataLoaded from './onPlpDataLoaded';

// Global Actions

export const openMainMenu = () => {
    return {
        type: ACTION_TYPES.OPEN_MAIN_MENU,
        payload: true
    };
};

export const closeMainMenu = () => {
    return {
        type: ACTION_TYPES.CLOSE_MAIN_MENU,
        payload: false
    };
};

// PLP Actions

export const openFacetsMenu = () => {
    return {
        type: ACTION_TYPES.OPEN_FACETS_MENU,
        payload: true
    };
};

export const closeFacetsMenu = () => {
    return {
        type: ACTION_TYPES.CLOSE_FACETS_MENU,
        payload: false
    };
};

// fetch PLP data
export const fetchPlpResults = plpParams => async (dispatch, getState) => {

    // TODO: send plpParams as an object

    try {
        const plpUrl = new URL('https://5f4983e18e271c001650ca8f.mockapi.io/plp');
        const selectedRefinementsArr = plpParams.facets.split('+');
        query = new URLSearchParams({
            facets: plpParams.facets,
            sort: plpParams.sort,
            itemsPerPage: plpParams.itemsPerPage,
            pageStartIndex: plpParams.pageStartIndex
        });

        let plpResponse = await fetch (`${plpUrl}`, { method: 'GET' });

        if (!plpResponse.ok) {
            throw new Error(`There was an error loading the PLP data. status: ${plpResponse.status}`);
        } else {
            let plpDataArr = await plpResponse.json();

            dispatch({
                type: ACTION_TYPES.FETCH_PLP_RESULTS,
                payload: onPlpDataLoaded(plpDataArr[0], selectedRefinementsArr, plpParams.sort, plpParams.pageStartIndex)
            });

            // TODO: this order is probably wrong. Need to figure out how to navigate to the query string FIRST,
            // and load the results based on that
            history.push(`?${query}`);
        }
    } catch (error) {
        alert(`There was an error loading the requested data. status: ${error}`);
    }

};

// fetch brands



