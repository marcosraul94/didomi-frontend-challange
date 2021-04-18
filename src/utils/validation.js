export const validateRequiredField = (value, fieldName) => (value ? '' : `${fieldName} field is empty`);

export const validateNameField = (value) => {
  const fieldName = 'Name';
  return validateRequiredField(value, fieldName);
};

export const validateEmailField = (value) => {
  const fieldName = 'Email';
  const requiredError = validateRequiredField(value, fieldName);
  if (requiredError) return requiredError;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  return isEmailValid ? '' : `${fieldName} field is invalid`;
};
