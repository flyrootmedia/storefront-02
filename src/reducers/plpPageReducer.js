import ACTION_TYPES from '../actions/types';

export default (state = 0, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_PLP_PAGE:
            return action.payload;
        default:
            return state;
    };
};