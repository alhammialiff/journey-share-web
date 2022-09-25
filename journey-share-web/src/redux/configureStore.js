import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Promotions } from './promotions';
import { InitialSearch } from './forms';
// To import more reducers along the way


export const ConfigureStore = () => {

    const store = createStore(
        
        combineReducers({
            promotions: Promotions,
            ...createForms({
                search: InitialSearch
            })
        })
        // Add trek promotions reducers
        

    );

    return store;

}