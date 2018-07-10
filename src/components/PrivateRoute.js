import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux' 

const PrivateRoute = ({ userDetails, token, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => (
                userDetails && token ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            )}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        userDetails: state.userDetails,
        token: state.token
    }
}

export default connect(mapStateToProps, null)(PrivateRoute)

