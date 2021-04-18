export const selectConsentsState = (state) => state.consents;

export const selectConsents = (state) => selectConsentsState(state).consents;

export const selectPage = (state) => selectConsentsState(state).page;
