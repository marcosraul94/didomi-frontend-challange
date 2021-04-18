import { createSlice } from '@reduxjs/toolkit';
import {
  setUserName as setUserNameReducer,
  setUserEmail as setUserEmailReducer,
  setUserAgreements as setUserAgreementsReducer,
  addUserAgreement as addUserAgreementReducer,
  removeUserAgreement as removeUserAgreementReducer,
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
    setUserEmail: setUserEmailReducer,
    setUserAgreements: setUserAgreementsReducer,
    addUserAgreement: addUserAgreementReducer,
    removeUserAgreement: removeUserAgreementReducer,
  },
});

export const {
  setUserName,
  setUserEmail,
  setUserAgreements,
  addUserAgreement,
  removeUserAgreement,
} = userSlice.actions;
export default userSlice.reducer;
