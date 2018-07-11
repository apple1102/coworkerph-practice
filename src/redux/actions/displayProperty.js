import axios from 'axios'

export function displayPropertyHasErrored(bool = false) {
    return {
        type: 'DISPLAY_PROPERTY_HAS_ERRORED',
        hasErrored: bool
    }
}

export function displayPropertyIsLoading(bool = false) {
    return {
        type: 'DISPLAY_PROPERTY_IS_LOADING',
        isLoading: bool
    }
}

export function displayPropertySuccess(property = []) {
    return {
        type: 'DISPLAY_PROPERTY_SUCCESS',
        property
    }
}

export function fetchProperties() {
    return (dispatch) => {
        dispatch(displayPropertyIsLoading(true))
        axios
            .get('http://localhost:9000/api/property')
            .then(resp => {

                let { status, property, message } = resp.data

                if (status !== "success") {
                    dispatch(
                        displayPropertyHasErrored(message)
                    )
                }

                if (property) {
                    dispatch(displayPropertySuccess(property))
                    dispatch(displayPropertyIsLoading(false))
                }
            })
            .catch(e => dispatch(
                displayPropertyHasErrored(e.message)
            ))
    }
}