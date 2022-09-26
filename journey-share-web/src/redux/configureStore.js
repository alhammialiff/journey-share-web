import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Promotions } from './promotions';
import { Treks } from './treks';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialSearch } from './forms';
// To import more reducers along the way


export const ConfigureStore = () => {

    const store = createStore(
        
        combineReducers({
            promotions: Promotions,
            treks: Treks,
            ...createForms({
                search: InitialSearch
            })
        }),
        // Thunk enhancers
        applyMiddleware(thunk, logger)
        

    );

    return store;

}