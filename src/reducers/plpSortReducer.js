import ACTION_TYPES from '../actions/types';

export default (state = 'featured', action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_PLP_SORT:
            return action.payload;
        default:
            return state;
    };
};