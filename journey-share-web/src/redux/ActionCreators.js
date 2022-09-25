import * as ActionTypes from './ActionTypes';
import { PROMOTIONS } from '../shared/promotions';
// [Uncomment when fetch is implemented later]
// import { baseUrl } from '../shared/baseUrl';

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
