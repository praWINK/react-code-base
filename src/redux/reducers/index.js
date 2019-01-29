import { combineReducers } from 'redux';
import homepage from './homepage';
import indexPage from './indexPage'

export const reducers = combineReducers({
   homepage,
   indexPage
});
