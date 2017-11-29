// Node Modules
import React from 'react';
import {render} from 'react-dom';
import {ApolloProvider, createNetworkInterface, ApolloClient} from 'react-apollo';

// Local Modules
import App from './components/App';

const networkInterface = createNetworkInterface({
  uri: 'localhost:3000/graphql'
})

const client = new ApolloClient({
  networkInterface
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('app')
)
