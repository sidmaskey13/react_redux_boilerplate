import { combineReducers } from 'redux'
import CatFactsReducer from './cat-facts/reducer'

export default combineReducers({
    catFacts:CatFactsReducer
})