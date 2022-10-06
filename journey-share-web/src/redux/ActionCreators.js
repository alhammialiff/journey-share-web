import * as ActionTypes from './ActionTypes';
import { PROMOTIONS } from '../shared/promotions';

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

export const addSearchQuery = (search) => ({
    type: ActionTypes.ADD_SEARCH_QUERY,
    payload: search
})

// Sends a dispatcher to retrieve user search query and store in redux store
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

}

// Action to toggle Social Tab in Social Feed
export const toggleSocialTab = (tabNum) => ({
    type: ActionTypes.TOGGLE_SOCIAL_TAB,
    payload: tabNum
});

export const addUsers = (users) => ({
    type: ActionTypes.ADD_USERS,
    payload: users
})

// [Dev in progress: To store window size in redux store]
export const storeWindowSize = (windowSize) => ({
    type:ActionTypes.STORE_WINDOW_SIZE,
    payload: windowSize
})
