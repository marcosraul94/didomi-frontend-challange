import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from './store';

const ReduxProvider = ({ children }) => <Provider store={store}>{children}</Provider>;

ReduxProvider.propTypes = {
  children: PropTypes.node,
};

ReduxProvider.defaultProps = {
  children: undefined,
};

export default ReduxProvider;
