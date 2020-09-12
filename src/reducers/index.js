import { combineReducers } from 'redux';
import facetsMenuIsOpenReducer from './facetsMenuIsOpenReducer';
import mainMenuIsOpenReducer from './mainMenuIsOpenReducer';
import plpItemsPerPageReducer from './plpItemsPerPageReducer';
import plpPageReducer from './plpPageReducer';
import plpRefinementsReducer from './plpRefinementsReducer';
import plpResultsReducer from './plpResultsReducer';
import plpSortReducer from './plpSortReducer';

// All brands data

// export all state values
export default combineReducers({
    facetsMenuIsOpen: facetsMenuIsOpenReducer,
    mainMenuIsOpen: mainMenuIsOpenReducer,
    plpItemsPerPage: plpItemsPerPageReducer,
    plpPage: plpPageReducer,
    plpRefinements: plpRefinementsReducer,
    plpResults: plpResultsReducer,
    plpSort: plpSortReducer
});