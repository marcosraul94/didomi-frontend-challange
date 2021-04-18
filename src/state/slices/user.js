import { createSlice } from '@reduxjs/toolkit';
import {
  setUserName as setUserNameReducer,
} from '../reducers/user';

const initialState = {
  name: '',
  email: '',
  agreements: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: setUserNameReducer,
    // setNewUserEmail: setNewUserEmailReducer,
  },
});

export const { setUserName } = userSlice.actions;
export default userSlice.reducer;
