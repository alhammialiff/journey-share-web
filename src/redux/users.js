import * as ActionTypes from './ActionTypes';
import { USERS } from '../shared/users';

const InitialUser = [{
    header: {
        userName: '',
        profilePic: '',
        country: '',
        journeyShared: '',
        mostRecentJourney: '',
        friends: [],
    },
    body: {
        socialPosts: [{
            postHeader: {
                taggedFriends: [],
                location: '',
                dateTime: ''
            },
            postBody: {
                caption: '',
                image: ''
            }
        }]
    }
}];

export const Users = (state = { USERS }, action) => {
    switch(action.type){
        case ActionTypes.ADD_USERS:
            return { ...state, users: action.payload};
        default:
            return state;
    }
}

