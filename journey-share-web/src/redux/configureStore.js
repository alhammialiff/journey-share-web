import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Promotions } from './promotions';
import { Treks } from './treks';
import { SocialTabs } from './socialTabs';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialSearch } from './forms';
import { Search } from './search';
import { Users } from './users';
import { WindowSize } from './windowSize';
// To import more reducers along the way


export const ConfigureStore = () => {

    const store = createStore(
        
        combineReducers({
            windowSize: WindowSize,
            promotions: Promotions,
            treks: Treks,
            users: Users,
            activeSocialTab: SocialTabs,
            // Quick search state (search) is linked to react-redux-form createForms()
            // 'search' state is linked to 'Search' reducer (search.js) 
            ...createForms({
                search: Search
            })
        }),
        // Redux enhancers
        applyMiddleware(thunk, logger)
        

    );

    return store;

}