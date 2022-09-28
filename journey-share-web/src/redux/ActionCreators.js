import * as ActionTypes from './ActionTypes';
import { PROMOTIONS } from '../shared/promotions';
// import {searchQueries, appendSearchQuery} from '../shared/searchQueries';

// [Uncomment when fetch is implemented later]
// import { baseUrl } from '../shared/baseUrl';

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const addTreks = (treks) => ({
    type: ActionTypes.ADD_TREKS,
    payload: treks
});

// Add filterTrek action

export const addSearchQuery = (search) => ({
    type: ActionTypes.ADD_SEARCH_QUERY,
    payload: search
})

export const postSearchQuery = (location, trekType, pax, country, region, dateFrom, dateTo) => (dispatch) => {

    const newSearch = {
        location: location,
        trekType: trekType,
        pax: pax,
        country: country,
        region: region,
        dateFrom: dateFrom,
        dateTo: dateTo
    }

    return dispatch(addSearchQuery(newSearch));
    // var searchResult = treks.filter((trek) => trek.location == search.location? trek:"");
    
    //  processSearchQuery ()

    // [TBD] - To create a separate action to store search queries
    // console.log(searchQueries);
    // appendSearchQuery(newSearch);

}

// export const addSearchResult = (search, treks) => ({
//     type: ActionTypes.ADD_SEARCH_RESULT,
//     payload: treks.filter((trek)=>)
// })