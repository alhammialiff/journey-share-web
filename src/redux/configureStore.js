import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Promotions } from './promotions';
import { Treks } from './treks';
import { SocialTabs } from './socialTabs';
import { InitialSearch } from './forms';
import { Search } from './search';
import { Users } from './users';
import { Comments } from './comments';
import { WindowSize } from './windowSize';
import { Welcome } from './welcome';
// To import more reducers along the way

export const ConfigureStore = () => {
    
    const store = createStore(
        
        combineReducers({
            windowSize: WindowSize,
            welcome: Welcome,
            promotions: Promotions,
            treks: Treks,
            users: Users,
            activeSocialTab: SocialTabs,
            comments: Comments,
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