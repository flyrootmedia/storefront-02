import { actionTypes }  from '../actions/types';

// TODO: make the default state configurable for the category you're actually on
export default (state = '000000', action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PLP_REFINEMENTS:
            
            return action.payload;
        default:
            return state;
    };
};