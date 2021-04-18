export const setNameError = (validationState, { payload }) => {
  validationState.name.error = payload;
};

export const setEmailError = (validationState, { payload }) => {
  validationState.email.error = payload;
};
