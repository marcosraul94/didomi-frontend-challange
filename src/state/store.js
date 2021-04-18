import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';
import validationReducer from './slices/validation';
import consentsReducer from './slices/consents';

const store = configureStore({
  reducer: {
    user: userReducer,
    validation: validationReducer,
    consents: consentsReducer,
  },
});

export default store;
