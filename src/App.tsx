import React from 'react';
import { Main } from './views';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Main/>
    </PersistGate>
  </Provider>
);
