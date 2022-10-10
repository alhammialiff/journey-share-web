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
    console.log("In Users reducers - action.payload",action.payload);
    console.log("In Users reducers - state",state);
    switch (action.type) {
        // Retrieve this user data
        case ActionTypes.GET_THIS_USER:
            const thisUserName = action.payload;
            const thisUserData = state.USERS.filter((user) => {
                console.log("In GET_THIS_USER - user", user.header.userName === thisUserName.userName);
                return user.header.userName === thisUserName.userName ? user : "";
                // return user.header.userName === action.payload.userName ? user : "";
            });
            console.log("In Users reducer - GET_THIS_USER - thisUserData", thisUserData);

            return { ...state, thisUser: thisUserData };
            
        case ActionTypes.ADD_USERS:
            return { ...state, users: action.payload };
        default:
            return state;
    }
}

