import { actionTypes }  from '../actions/types';

export default (state = '000000', action) => {
    switch (action.type) {
        case actionTypes.UPDATE_PLP_REFINEMENTS:
            
            return action.payload;
        default:
            return state;
    };
};