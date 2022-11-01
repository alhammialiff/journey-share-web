import * as ActionTypes from './ActionTypes';
import { PROMOTIONS } from '../shared/promotions';

const baseUrl = 'http://localhost:3000/';

// [Uncomment when fetch is implemented later]
// import { baseUrl } from '../shared/baseUrl';

// PROMOS ACTION TYPES
export const addPromos = (promotions) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promotions
});

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING,
})

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
})

export const fetchPromos = () => (dispatch) => {
    console.log("In fetch promos...");

    // [PROMO_LOADING delays the fetching of data] 
    // essentially causing MainComponent to not receive promotion states at all
    // dispatch(promosLoading(true));

    // Fetch promotions data from /public/promotions.json
    return fetch(baseUrl + 'promotions.json')
    .then((response) => response.json())
    .then((promos) => {
        console.log("promos fetched: ",promos);
        dispatch(addPromos(promos));
    })
    .catch(error => console.log(error));

}


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

// Temporary action to replicate authenticated user (i.e John Doe)
export const getThisUser = (userName) => ({
    type: ActionTypes.GET_THIS_USER,
    payload: userName
});

export const addUsers = (users) => ({
    type: ActionTypes.ADD_USERS,
    payload: users
});

export const appendProfilePic = (profilePic) => ({
    type: ActionTypes.APPEND_PROFILE_PIC,
    payload: profilePic
})

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
};
