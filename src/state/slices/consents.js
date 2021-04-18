import { createSlice } from '@reduxjs/toolkit';
import {
  setConsents as setConsentsReducer,
  setPage as setPageReducer,
} from '../reducers/consents';

const initialState = {
  consents: [],
  page: 0,
};

export const consentsSlice = createSlice({
  name: 'consents',
  initialState,
  reducers: {
    setConsents: setConsentsReducer,
    setPage: setPageReducer,
  },
});

export const {
  setConsents,
  setPage,
} = consentsSlice.actions;
export default consentsSlice.reducer;
