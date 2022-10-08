import * as ActionTypes from './ActionTypes';
import { WELCOME } from '../shared/welcome';

// Treks reducer
export const Welcome = (state = { WELCOME }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_WELCOME:
            console.log("In Welcome reducers - ADD_PROMOS - action.payload ", action.payload);
            return { ...state, promos: state.promos.concat(action.payload) };
        default:
            return state;
    }
}