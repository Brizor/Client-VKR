import React from 'react';
import Application from './src/app';
import {Provider} from 'react-redux';
import store from './src/store';

export default function App() {

  return (
    <Provider store={store}>
          <Application/>
    </Provider>

  );
}


