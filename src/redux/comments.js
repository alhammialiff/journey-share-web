import * as ActionTypes from './ActionTypes';
import { USERS } from './../shared/users';


const COMMENTS = USERS.map((user)=>{
    return user.body.socialPosts;
});

export const Comments = (state = {COMMENTS}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return { comments: action.payload };
        default:
            return state;
    }
}