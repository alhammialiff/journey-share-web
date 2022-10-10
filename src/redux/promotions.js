import * as ActionTypes from './ActionTypes';
import { PROMOTIONS } from '../shared/promotions';



// Promotions reducer
export const Promotions = (state = { 
    isLoading: false,
    errMess: null,
    promotions: []
 }, action) => {
    
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
            console.log("In Promotions reducers - ADD_PROMOS - action.payload ", action.payload);
            return { ...state, isLoading: false, errMess: null, promotions: action.payload};
        case ActionTypes.PROMOS_LOADING:
            console.log("In Promotions reducers - PROMOS_LOADING - action.payload ", action.payload);
            return { ...state, isLoading: true, errMess: null, promotions: []};
        case ActionTypes.PROMOS_FAILED:
            console.log("In Promotions reducers - PROMOS_FAILED - action.payload ", action.payload);
            return { ...state, isLoading: false, errMess: action.payload, promotions: []};
        default:
            return state;
    }
}