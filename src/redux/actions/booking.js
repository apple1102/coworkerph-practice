
export function bookingHasErrored(bool) {
    return {
        type: 'BOOKING_HAS_ERRORED',
        hasErrored: bool
    }
}

export function bookingIsLoading(bool) {
    return {
        type: 'BOOKING_IS_LOADING',
        isLoading: bool
    }
}

export function bookingFetchDataSuccess(bookings) {
    return {
        type: 'BOOKING_FETCH_DATA_SUCCESS',
        bookings
    }
}
