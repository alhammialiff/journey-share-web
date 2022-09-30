import * as ActionTypes from './ActionTypes';

const InitialTab = {
    tabPane: '1'
};

export const SocialTabs = (state = {InitialTab}, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_SOCIAL_TAB:
            console.log("In SocialTabs Reducer - TOGGLE_SOCIAL_TAB - ", action.payload);
            return {
                ...state, activeTab: {
                    tabPane: action.payload
                }
            };
        default:
            return state
    }
}