import * as ActionTypes from './ActionTypes';
import { PROMOTIONS } from '../shared/promotions';

// [Uncomment when fetch is implemented later]
// import { baseUrl } from '../shared/baseUrl';

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const addWelcome = (welcome) => ({
    type: ActionTypes.ADD_WELCOME,
    payload: welcome
});

export const addTreks = (treks) => ({
    type: ActionTypes.ADD_TREKS,
    payload: treks
});

export const addSearchQuery = (search) => ({
    type: ActionTypes.ADD_SEARCH_QUERY,
    payload: search
});

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

};

// Action to toggle Social Tab in Social Feed
export const toggleSocialTab = (tabNum) => ({
    type: ActionTypes.TOGGLE_SOCIAL_TAB,
    payload: tabNum
});

export const addUsers = (users) => ({
    type: ActionTypes.ADD_USERS,
    payload: users
});

export const storeWindowSize = (windowSize) => ({
    type: ActionTypes.STORE_WINDOW_SIZE,
    payload: windowSize
});

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

// Post Comment in social post comment section
export const postComment = (author, profilePic, commentDate, reactions, text) => (dispatch) => {

    const newComment = {
        author: author,
        profilePic: profilePic,
        commentDate: commentDate,
        reactions: reactions,
        text: text
    }

    return dispatch(addComment(newComment));
}
