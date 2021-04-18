import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';
import validationReducer from './slices/validation';
import consentsReducer from './slices/consents';

export const storeConfiguration = {
  reducer: {
    user: userReducer,
    validation: validationReducer,
    consents: consentsReducer,
  },
};

const store = configureStore(storeConfiguration);

export default store;
