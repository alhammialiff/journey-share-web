import * as ActionTypes from './ActionTypes';
import { PROMOTIONS } from '../shared/promotions';

// Treks reducer
export const Promotions = (state = { PROMOTIONS }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
            console.log("In Promotions reducers - ADD_PROMOS - action.payload ", action.payload);
            return { ...state, promos: state.promos.concat(action.payload) };
        default:
            return state;
    }
}