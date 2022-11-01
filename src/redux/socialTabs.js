import * as ActionTypes from './ActionTypes';

// Set default active Social Tab to Notification (or '1')
const InitialTab = {
    tabPane: '1'
};

// Social Tabs Reducer
export const SocialTabs = (state = {InitialTab}, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_SOCIAL_TAB:
            console.log("In SocialTabs Reducer - TOGGLE_SOCIAL_TAB - ", action.payload);
            return {
                ...state, activeTab: action.payload
                // ...state, ...action.payload
                };
        default:
            return state;
    }
}