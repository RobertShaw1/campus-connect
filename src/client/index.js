// Node Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader'; //---> Note that AppContainer must only wrap a single React Component

import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()

// Local Modules
import App from './components/App';
import configureStore from './configureStore'
const store = configureStore(history)

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      {/* <AppContainer> */}
        <Component />
      {/* </AppContainer>, */}
    </Provider>,
    document.getElementById('app'),
  )
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) })
}
