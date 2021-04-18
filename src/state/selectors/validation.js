export const selectValidationState = (state) => state.validation;

export const selectNameError = (state) => selectValidationState(state).name.error;

export const selectEmailError = (state) => selectValidationState(state).email.error;
