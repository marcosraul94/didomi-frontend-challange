export const setUserName = (userState, { payload }) => {
  userState.name = payload;
};

export const setUserEmail = (userState, { payload }) => {
  userState.email = payload;
};

export const setUserAgreements = (userState, { payload }) => {
  userState.agreements = payload;
};

export const addUserAgreement = (userState, { payload }) => {
  userState.agreements = [...userState.agreements, payload];
};

export const removeUserAgreement = (userState, { payload }) => {
  userState.agreements = userState.agreements.filter((agreement) => agreement !== payload);
};
