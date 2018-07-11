import axios from 'axios'

export function propertyHasErrored(error = '') {
  return {
    type: 'PROPERTY_HAS_ERRORED',
    error
  }
}

export function propertyIsLoading(bool = false) {
  return {
    type: 'PROPERTY_IS_LOADING',
    isLoading: bool
  }
}

export function propertySuccess(property=null) {
  return {
    type: 'PROPERTY_SUCCESS',
    property
  }
}

export function fetchProperty(hostSlug, propertySlug) {
  return (dispatch) => {
    let url = `http://localhost:9000/api/property?hostSlug=${hostSlug}&propertySlug=${propertySlug}`
    
    dispatch(propertyIsLoading(true))

    axios
      .get(url)
      .then(resp => {
        let { status, properties, message } = resp.data
        
        if (status !== 'success') {
          dispatch(propertyHasErrored(message))
          dispatch(propertyIsLoading(false))

        } else {
          dispatch(propertySuccess(properties[0]))
          dispatch(propertyIsLoading(false))
        }

      })
  }
}

