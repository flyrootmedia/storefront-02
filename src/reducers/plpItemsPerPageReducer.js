import { actionTypes } from '../actions/types';

// TODO: make the default state configurable
export default (state = 10, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PLP_ITEMS_PER_PAGE:
            return action.payload;
        default:
            return state;
    };
};