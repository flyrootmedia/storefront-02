import ACTION_TYPES from '../actions/types';

export default (state = false, action) => {
    switch (action.type) {
        case ACTION_TYPES.OPEN_MAIN_MENU:
            return action.payload;
        case ACTION_TYPES.CLOSE_MAIN_MENU:
            return action.payload;
        default:
            return state;
    };
};