// Node Modules
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader'; //---> Note that AppContainer must only wrap a single React Component

import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

// 1
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// 2
const link = new HttpLink({ uri: '/graphql' })

// 3
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

// Local Modules
import App from './components/App';
import configureStore from './configureStore'
const store = configureStore(history)

const Main = () => (
    <ApolloProvider client={client}>
      <Provider store={store}>
        {/* <AppContainer> */}
          <App />
        {/* </AppContainer>, */}
      </Provider>
    </ApolloProvider>
)

const render = component => {
  ReactDOM.render(
    <AppContainer>
      {/* <Component /> */}
      {component()}
    </AppContainer>
    , document.getElementById('app'),
  )
};

// render(App);
render(Main);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => { render(Main) })
}
