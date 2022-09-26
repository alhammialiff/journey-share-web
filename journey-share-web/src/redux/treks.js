import * as ActionTypes from './ActionTypes';
import { TREKS } from '../shared/treks';

// Treks reducer
export const Treks = (state = { TREKS }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TREK:
            console.log("", action.payload);
            return { ...state, treks: state.treks.concat(action.payload) };
        default:
            return state;
    }
}