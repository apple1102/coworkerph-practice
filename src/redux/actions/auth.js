import axios from 'axios'
import qs from 'query-string'


export function loginHasErrored(message) {
    return {
        type: 'LOGIN_HAS_ERRORED',
        message
    }
}

export function loginIsLoading(bool) {
    return {
        type: 'LOGIN_IS_LOADING',
        isLoading: bool
    }
}

export function loginSuccess(bool) {
    return {
        type: 'LOGIN_SUCCESS',
        isSuccessful: bool
    }
}

export function userDetails(details) {
    return {
        type: 'USER_DETAILS',
        details
    }
}

export function token(token) {
    return {
        type: 'TOKEN',
        token
    }
}

export function syncUserIsLoading(bool) {
    return {
        type: 'SYNCUSER_IS_LOADING',
        isLoading: bool
    }
}

export function userLogout() {
    return {
        type: 'USER_LOGOUT'
    }
}

export function userLogoutSuccess(bool) {
    return {
        type: 'USER_LOGOUT_SUCCESS',
        isLoggedOut: bool
    }
}

export function logout() {
    return (dispatch) => {
        localStorage.removeItem('token')
        dispatch(userLogout())
        dispatch(userLogoutSuccess(true))
    }
}

export function resetLogoutStatus() {
    return (dispatch) => {
        dispatch(userLogoutSuccess(false));
    }
}

export function syncUser() {
    return (dispatch) => {
        
        let tokenFromStorage = localStorage.getItem('token')
        dispatch(syncUserIsLoading(true))
        getUserDetails(tokenFromStorage)
            .then((user) => {
                dispatch(userDetails(user))
                dispatch(token(tokenFromStorage))
                dispatch(syncUserIsLoading(false))
            })
    }
}

function getUserDetails(Authorization) {
    return new Promise((resolve, reject) => {
        axios
            .get('http://localhost:9000/api/user', {
                headers: { Authorization }
            })
            .then(resp => {
                let data = resp.data
                if (data.user) {
                    resolve(data.user)
                } else {
                    reject()
                }
            })
    })
}

export function login(credentials) {
    return (dispatch) => {
        dispatch(loginIsLoading(true))
        axios
            .post('http://localhost:9000/api/auth/user', qs.stringify({
                email: credentials.email,
                password: credentials.password
            }))
            .then(resp => {
                let data = resp.data;
                if (data.status !== 'success') {
                    dispatch(loginIsLoading(false))
                    dispatch(loginHasErrored(data.message))
                } else {
                    localStorage.setItem("token", data.token)
                    dispatch(token(data.token))
                    getUserDetails(data.token)
                        .then((user) => {
                            dispatch(loginSuccess(true))
                            dispatch(loginIsLoading(false))
                            dispatch(userDetails(user))
                        })
                }
            })
            .catch(e => {
                dispatch(loginHasErrored(e.message))
            })
    }
}