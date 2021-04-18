export const selectUser = (state) => state.user;

export const selectUserName = (state) => selectUser(state).name;

export const selectUserEmail = (state) => selectUser(state).email;

export const selectUserAgreements = (state) => selectUser(state).agreements;
