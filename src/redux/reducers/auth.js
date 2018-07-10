export function loginHasErrored(message = '', action) {
    switch(action.type) {
        case 'LOGIN_HAS_ERRORED':
            return action.message
        default:
            return message
    }
}

export function loginIsLoading(bool = false, action) {
    switch(action.type) {
        case 'LOGIN_IS_LOADING':
            return action.isLoading
        default:
            return bool
    }
}

export function loginSuccess(bool = false, action) {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return action.isSuccessful
        default:
            return false
    }
}

export function token(token = null, action) {
    switch(action.type) {
        case 'TOKEN':
            return action.token
        default: 
            return token
    }
}

export function userDetails(details=null, action) {
    switch(action.type) {
        case 'USER_DETAILS':
            return action.details
        default:
            return details
    }
}

export function syncUserIsLoading(bool = false, action) {
    switch(action.type) {
        case 'SYNCUSER_IS_LOADING':
            return action.isLoading
        default: 
            return bool
    }
}

export function logoutSuccess(bool = false, action) {
    switch(action.type) {
        case 'USER_LOGOUT_SUCCESS':
            return action.isLoggedOut
        default:
            return bool
    }
}