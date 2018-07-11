export function propertyHasErrored(error = '', action) {
  switch(action.type) {
    case 'PROPERTY_HAS_ERRORED':
      return action.error
    default:
      return error
  }
}

export function propertyIsLoading(bool = false, action) {
  switch(action.type) {
    case 'PROPERTY_IS_LOADING':
      return action.isLoading
    default:
      return bool
  }
}

export function propertySuccess(property=null, action) {
  switch(action.type) {
    case 'PROPERTY_SUCCESS':
      return action.property
    default:
      return property
  }
}