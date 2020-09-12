import { combineReducers } from 'redux';
import facetsMenuIsOpenReducer from './facetsMenuIsOpenReducer';
import mainMenuIsOpenReducer from './mainMenuIsOpenReducer';
import plpResultsReducer from './plpResultsReducer';

// All brands data

export default combineReducers({
    facetsMenuIsOpen: facetsMenuIsOpenReducer,
    mainMenuIsOpen: mainMenuIsOpenReducer,
    plpResults: plpResultsReducer
});