import { actionTypes }  from '../actions/types';

export default (state = 'featured', action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PLP_SORT:
            return action.payload;
        default:
            return state;
    };
};