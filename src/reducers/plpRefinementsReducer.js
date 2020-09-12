import ACTION_TYPES from '../actions/types';

export default (state = '000000', action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_PLP_REFINEMENTS:
            return action.payload;
        default:
            return state;
    };
};