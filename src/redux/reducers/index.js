import { combineReducers } from 'redux'
import { bookingHasErrored, bookingIsLoading, bookings } from './booking'
import { loginHasErrored, loginIsLoading, loginSuccess, token, userDetails, syncUserIsLoading, logoutSuccess} from './auth'
import { displayPropertyHasErrored, displayPropertyIsLoading, displayPropertySuccess } from './displayProperty'

const appReducer = combineReducers({
    bookingHasErrored,
    bookingIsLoading,
    bookings,
    loginHasErrored,
    loginIsLoading,
    loginSuccess,
    token,
    userDetails,
    syncUserIsLoading,
    logoutSuccess,
    displayPropertyHasErrored,
    displayPropertyIsLoading,
    displayPropertySuccess
})

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer