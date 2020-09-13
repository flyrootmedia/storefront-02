import { actionTypes }  from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PLP_RESULTS:
            return action.payload;
        default:
            return state;
    };
};