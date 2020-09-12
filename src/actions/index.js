import ACTION_TYPES from './types';
import fetchPlpResults from './fetchPlpResults';

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

export const updatePlpPage = (pageIndex) => {
    return {
        type: ACTION_TYPES.UPDATE_PLP_PAGE,
        payload: pageIndex
    };
};

export const updatePlpRefinements = (refinementsStr) => {
    return {
        type: ACTION_TYPES.UPDATE_PLP_REFINEMENTS,
        payload: refinementsStr
    };
};

export const updatePlpSort = (sort) => {
    return {
        type: ACTION_TYPES.UPDATE_PLP_SORT,
        payload: sort
    };
};

// facet selections changed
export const updateSelectedPlpRefinements = (refinementId, isSelected) => async (dispatch, getState) => {
    let refinementIdsArr = getState().plpRefinements.split('+');
    const index = refinementIdsArr.indexOf(refinementId); 

    if (index > -1 && !isSelected) {
        refinementIdsArr.splice(index, 1);
    } else if (index === -1 && isSelected) {
        refinementIdsArr.push(refinementId);
    }

    // make request to fetchPlpResults with updated refinement values
    let newPlpResults = await new Promise(fetchPlpResults(refinementIdsArr.join('+'), getState().plpSort, getState().plpItemsPerPage, getState().plpActivePageIndex));

    dispatch({
        type: ACTION_TYPES.FETCH_PLP_RESULTS,
        payload: {...getState().plpResults, newPlpResults}
    });
};

// sort changed
export const updateSelectedPlpSort = (selectedSort) => async (dispatch, getState) => {
    // make request to fetchPlpResults with updated sort
    let newPlpResults = await new Promise(fetchPlpResults(getState().plpRefinements, selectedSort, getState().plpItemsPerPage, getState().plpActivePageIndex));

    dispatch({
        type: ACTION_TYPES.FETCH_PLP_RESULTS,
        payload: {...getState().plpResults, newPlpResults}
    });
};

// pagination changed
export const updateSelectedPlpPage = (selectedPageIndex) => async (dispatch, getState) => {
    // make request to fetchPlpResults with updated page
    // make request to fetchPlpResults with updated sort
    let newPlpResults = await new Promise(fetchPlpResults(getState().plpRefinements, getState().plpSort, getState().plpItemsPerPage, selectedPageIndex));

    dispatch({
        type: ACTION_TYPES.FETCH_PLP_RESULTS,
        payload: {...getState().plpResults, newPlpResults}
    });
};

// fetch brands



