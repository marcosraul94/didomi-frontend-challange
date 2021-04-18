import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { storeConfiguration } from 'src/state/store';
import { Provider } from 'react-redux';

const renderWithRedux = (Component) => {
  const store = configureStore(storeConfiguration);
  const WrappedComponent = (
    <Provider store={store}>
      <Component />
    </Provider>
  );
  return render(WrappedComponent);
};

export default renderWithRedux;
