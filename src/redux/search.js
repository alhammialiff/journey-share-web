import * as ActionTypes from './ActionTypes';
import { InitialSearch } from './forms';

// Search reducer
export const Search = (state = { InitialSearch }, action ) => {
    switch(action.type){
        // Add state of user's search query into store
        case ActionTypes.ADD_SEARCH_QUERY:
            console.log("ADD_SEARCH_QUERY TRIGGERED - ", action.payload);
            return { ...state, search:{ 
                location: action.payload.location,
                trekType: action.payload.trekType,
                pax: action.payload.pax,
                country: action.payload.country,
                region: action.payload.region,
                dateFrom: action.payload.dateFrom,
                dateTo: action.payload.dateTo 
            }};
        default:
            return state;
    }
}