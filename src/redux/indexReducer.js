import { combineReducers } from 'redux'
import CatFactsReducer from './cat-facts/reducer'
import AuthReducer from './auth/reducer'

export default combineReducers({
    catFacts: CatFactsReducer,
    auth: AuthReducer,
})