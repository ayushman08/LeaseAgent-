import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './App/Store/configureStore'
import { AppRegistry } from 'react-native';
import App from './App';

const store = configureStore()

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('LeaseAgent', () => ReduxApp);
