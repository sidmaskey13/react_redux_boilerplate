import { combineReducers } from 'redux'
import PostReducer from './post/reducer'
import AuthReducer from './auth/reducer'

export default combineReducers({
    post: PostReducer,
    auth: AuthReducer,
})