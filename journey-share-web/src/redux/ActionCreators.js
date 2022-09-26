import * as ActionTypes from './ActionTypes';
import { PROMOTIONS } from '../shared/promotions';
import { searchQueries } from '../shared/searchQueries';
// [Uncomment when fetch is implemented later]
// import { baseUrl } from '../shared/baseUrl';

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const addTrek = (treks) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: treks
});

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

    dispatch(addSearchQuery(newSearch));
    console.log(searchQueries);
    searchQueries.push(newSearch);

}
