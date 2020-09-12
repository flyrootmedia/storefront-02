import ACTION_TYPES from '../actions/types';

export default (state = 10, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_PLP_ITEMS_PER_PAGE:
            return action.payload;
        default:
            return state;
    };
};