export const selectValidation = (state) => state.validation;

export const selectNameError = (state) => selectValidation(state).name.error;

export const selectEmailError = (state) => selectValidation(state).email.error;
