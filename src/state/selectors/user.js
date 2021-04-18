export const selectUserState = (state) => state.user;

export const selectUserName = (state) => selectUserState(state).name;

export const selectUserEmail = (state) => selectUserState(state).email;

export const selectUserAgreements = (state) => selectUserState(state).agreements;
