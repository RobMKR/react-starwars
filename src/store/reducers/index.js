import { combineReducers } from 'redux'

import user from './user'
import planets from './planets'
import errors from "./errors";

export default combineReducers({
    user,
    planets,
    errors
})