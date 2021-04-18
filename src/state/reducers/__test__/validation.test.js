import { setEmailError, setNameError } from '../validation';

const nameError = 'a';
const emailError = 'b';
const validationState = { name: { error: nameError }, email: { error: emailError } };

beforeEach(() => {
  validationState.name.error = nameError;
  validationState.email.error = emailError;
});

describe('validation reducer', () => {
  it('set name error', () => {
    const newNameError = 'c';
    setNameError(validationState, { payload: newNameError });
    expect(validationState.name.error).toBe('c');
  });

  it('set email error', () => {
    const newEmailError = 'd';
    setEmailError(validationState, { payload: newEmailError });
    expect(validationState.email.error).toBe('d');
  });
});
