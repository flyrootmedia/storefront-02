import { actionTypes } from './types';
import fetchPlpResults from './fetchPlpResults';

export const updatePlpPage = (pageIndex) => {
    return {
        type: actionTypes.UPDATE_PLP_PAGE,
        payload: pageIndex
    };
};

export const updatePlpRefinements = (refinementsStr) => {
    return {
        type: actionTypes.UPDATE_PLP_REFINEMENTS,
        payload: refinementsStr
    };
};

export const updatePlpSort = (sort) => {
    return {
        type: actionTypes.UPDATE_PLP_SORT,
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
        type: actionTypes.FETCH_PLP_RESULTS,
        payload: {...getState().plpResults, newPlpResults}
    });
};

// sort changed
export const updateSelectedPlpSort = (selectedSort) => async (dispatch, getState) => {
    // make request to fetchPlpResults with updated sort
    let newPlpResults = await new Promise(fetchPlpResults(getState().plpRefinements, selectedSort, getState().plpItemsPerPage, getState().plpActivePageIndex));

    dispatch({
        type: actionTypes.FETCH_PLP_RESULTS,
        payload: {...getState().plpResults, newPlpResults}
    });
};

// pagination changed
export const updateSelectedPlpPage = (selectedPageIndex) => async (dispatch, getState) => {
    // make request to fetchPlpResults with updated page
    // make request to fetchPlpResults with updated sort
    let newPlpResults = await new Promise(fetchPlpResults(getState().plpRefinements, getState().plpSort, getState().plpItemsPerPage, selectedPageIndex));

    dispatch({
        type: actionTypes.FETCH_PLP_RESULTS,
        payload: newPlpResults
    });
};

export const fetchInitialPlpResults = () => async (dispatch, getState) => {
    console.log('fetchInitialPlpResults');
    let newPlpResults = await fetchPlpResults(getState().plpRefinements, getState().plpSort, getState().plpItemsPerPage, getState().plpPage);

    dispatch({
        type: actionTypes.FETCH_PLP_RESULTS,
        payload: newPlpResults
    });
};

// fetch brands



