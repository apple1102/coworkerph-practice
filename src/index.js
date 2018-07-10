import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import configureStore from './redux/store/configureStore'

import MainNav from './components/MainNav'
import Main from './Main'

const store = configureStore()
const history = createHistory()

const App = () => {
    return (
        <div className='App'>
            <Provider store={store}>
                <Router history={history}>
                    <div>
                        <MainNav />
                        <Main />
                    </div>
                </Router>
            </Provider>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
