import { applyMiddleware, createStore } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from './rootReducer';


const store = createStore(
    rootReducer,
    applyMiddleware(apiMiddleware)
    );

export default store;