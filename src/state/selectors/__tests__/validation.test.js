import {
  selectEmailError, selectNameError, selectValidationState,
} from '../validation';

const mockedState = { validation: { name: { error: 'a' }, email: { error: 'b' } } };

describe('validation selectors', () => {
  it('validation state', () => {
    const actualState = selectValidationState(mockedState);
    const actualKeys = Object.keys(actualState);
    const expectedKeys = ['name', 'email'];
    const isEveryFieldFound = expectedKeys.every((expectedKey) => actualKeys.includes(expectedKey));
    expect(isEveryFieldFound).toBeTruthy();
  });

  it('name error', () => {
    const actualNameError = selectNameError(mockedState);
    expect(actualNameError).toBe('a');
  });

  it('email error', () => {
    const actualEmailError = selectEmailError(mockedState);
    expect(actualEmailError).toBe('b');
  });
});
