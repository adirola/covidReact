import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import StateLoader from './StateLoader';

const stateLoader = new StateLoader();

const store = createStore(
    rootReducer,
    stateLoader.loadState(),
    applyMiddleware(thunk)
);

export default store;