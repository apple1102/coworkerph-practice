export function bookingHasErrored(state = false, action) {
    
    switch(action.type) {
        case 'BOOKING_HAS_ERRORED':
            return action.hasErrored
        default:
            return state
    }

}

export function bookingIsLoading(state = false, action) {

    switch(action.type) {
        case 'BOOKING_IS_LOADING':
            return action.isLoading
        default:
            return state
    }

}

export function bookings(bookings = [], action) {

    switch(action.type) {
        case 'BOOKING_FETCH_DATA_SUCCESS':
            return action.bookings
        default:
            return bookings
    }

}