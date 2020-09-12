import ACTION_TYPES from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_PLP_RESULTS:
            return action.payload;
        default:
            return state;
    };
};