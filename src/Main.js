import React from 'react';
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Loadable from 'react-loadable'

const Loading = () => (
    <div></div>
)

const Homepage = Loadable({
    loader: () => import('./containers/Homepage'),
    loading: Loading
})

const Login = Loadable({
    loader: () => import('./containers/Login'),
    loading: Loading
})

const Bookings = Loadable({
    loader: () => import('./containers/Bookings'),
    loading: Loading
})

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/bookings" component={Bookings} />
            </Switch>
        </main>
    )
}

export default Main
