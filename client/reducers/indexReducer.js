import { combineReducers } from 'redux'
import dreamReducer from './dreamReducer'
import storyReducer from './storyReducer'

// import otherReducer from './other-reducer'

export default combineReducers({
  dreamReducer,
  storyReducer
})
