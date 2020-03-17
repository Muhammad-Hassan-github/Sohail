import { createStore , combineReducers ,applyMiddleware ,compose} from 'redux';
import thunk from "redux-thunk"

import accountsDetails from './reducers/accountsDetails'
import usersReducer from './reducers/reducer-users'
import debitCredit from './reducers/reducer-DebitCredit'


const allReducers = combineReducers({ accountsDetails, usersReducer ,debitCredit })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(allReducers,composeEnhancers(applyMiddleware(thunk)) );

export default store