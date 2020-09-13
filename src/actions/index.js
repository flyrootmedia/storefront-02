import { actionTypes } from './types';
import fetchPlpResults from './fetchPlpResults';

// Called on initial PLP load to get the default full results set
export const fetchInitialPlpResults = () => async (dispatch, getState) => {
    let newPlpResults = await fetchPlpResults(getState().plpRefinements, getState().plpSort, getState().plpItemsPerPage, getState().plpPage);

    dispatch({
        type: actionTypes.FETCH_PLP_RESULTS,
        payload: newPlpResults
    });
};

// facet selections changed
export const updateSelectedPlpRefinements = (refinementId, isSelected) => async (dispatch, getState) => {
    const refinementIdsArr = getState().plpRefinements.split('+');
    const index = refinementIdsArr.indexOf(refinementId); 
    let newRefinementIdsArr = [];

    if (index > -1 && !isSelected) {
        newRefinementIdsArr = refinementIdsArr.filter(id => id !== refinementId);
    } else if (index === -1 && isSelected) {
        newRefinementIdsArr = [...refinementIdsArr, refinementId];
    }

    let newPlpRefinements = newRefinementIdsArr.join('+');

    // make request to fetchPlpResults with updated refinement values
    let newPlpResults = await fetchPlpResults(newPlpRefinements, getState().plpSort, getState().plpItemsPerPage, 0);

    dispatch({
        type: actionTypes.FETCH_PLP_RESULTS,
        payload: newPlpResults
    });

    // TODO: is this bad? Dispatching two actions from one action creator? 
    // I need to update the currently applied plp refinements in order to make sure 
    // I have the correct list the next time a selection is made. 
    dispatch({
        type: actionTypes.UPDATE_PLP_REFINEMENTS,
        payload: newPlpRefinements
    });

    dispatch({
        type: actionTypes.UPDATE_PLP_PAGE,
        payload: 0
    });
};

// sort changed
export const updateSelectedPlpSort = (selectedSort) => async (dispatch, getState) => {
    let newPlpResults = await fetchPlpResults(getState().plpRefinements, selectedSort, getState().plpItemsPerPage, 0);

    dispatch({
        type: actionTypes.FETCH_PLP_RESULTS,
        payload: newPlpResults
    });

    dispatch({
        type: actionTypes.UPDATE_PLP_SORT,
        payload: selectedSort
    });

    dispatch({
        type: actionTypes.UPDATE_PLP_PAGE,
        payload: 0
    });
};

// pagination changed
export const updateSelectedPlpPage = (selectedPageIndex) => async (dispatch, getState) => {
    let newPlpResults = await fetchPlpResults(getState().plpRefinements, getState().plpSort, getState().plpItemsPerPage, selectedPageIndex);

    dispatch({
        type: actionTypes.FETCH_PLP_RESULTS,
        payload: newPlpResults
    });

    dispatch({
        type: actionTypes.UPDATE_PLP_PAGE,
        payload: selectedPageIndex
    });
};

// fetch brands



