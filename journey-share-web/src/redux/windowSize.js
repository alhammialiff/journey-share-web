import * as ActionTypes from './ActionTypes';

const InitialWindow = [{
    windowWidth: window.innerWidth,
    windowWidth: window.innerHeight
}];

export const WindowSize = (state = {InitialWindow}, action) =>{

    switch(action.type){
        case ActionTypes.STORE_WINDOW_SIZE:
            return {windowSize: action.payload}
        default:
            return state;
    }

}