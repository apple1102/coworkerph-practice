export function displayPropertyHasErrored(bool = false, action) {
    switch(action.type) {
        case 'DISPLAY_PROPERTY_HAS_ERRORED':
            return action.hasErrored
        default:
            return bool
    }
}

export function displayPropertyIsLoading(bool = false, action) {
    switch(action.type) {
        case 'DISPLAY_PROPERTY_IS_LOADING':
            return action.isLoading
        default:
            return bool
    }
}

export function displayPropertySuccess(property = [], action) {
    switch(action.type) {
        case 'DISPLAY_PROPERTY_SUCCESS':
            return action.property
        default:
            return property
    }
}