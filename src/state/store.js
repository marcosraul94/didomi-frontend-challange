import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';
// import validationReducer from './slices/validation';

const store = configureStore({
  reducer: {
    user: userReducer,
    // validation: validationReducer,
  },
});

export default store;
