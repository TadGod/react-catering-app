import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import inventoryReducer from './inventory/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    inventory: inventoryReducer
})

export default rootReducer;