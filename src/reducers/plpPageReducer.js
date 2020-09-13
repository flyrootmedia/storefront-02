import { actionTypes }  from '../actions/types';

export default (state = 0, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PLP_PAGE:
            return action.payload;
        default:
            return state;
    };
};