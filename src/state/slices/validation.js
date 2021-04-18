import { createSlice } from '@reduxjs/toolkit';
import {
  setNameError as setNameErrorReducer,
  setEmailError as setEmailErrorReducer,
} from '../reducers/validation';

const initialState = {
  name: { error: '' },
  email: { error: '' },
};

export const validationSlice = createSlice({
  name: 'validation',
  initialState,
  reducers: {
    setNameError: setNameErrorReducer,
    setEmailError: setEmailErrorReducer,
  },
});

export const {
  setNameError,
  setEmailError,
} = validationSlice.actions;
export default validationSlice.reducer;
