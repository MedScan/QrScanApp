/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import AppContainer from './src/app/navigator';
import client from './src/app/redux/apollo/client';
import store from './src/app/redux/store';
import {ApolloProvider} from 'react-apollo';

const App = () => {
    return <ApolloProvider client={client} store={store}>
        <AppContainer />
    </ApolloProvider>
}

export default App;

