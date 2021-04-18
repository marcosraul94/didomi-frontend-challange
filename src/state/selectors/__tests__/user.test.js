import {
  selectUserState, selectUserAgreements, selectUserEmail, selectUserName,
} from '../user';

const mockedState = { user: { name: 'a', email: 'b', agreements: [] } };

describe('user selectors', () => {
  it('user state', () => {
    const actualState = selectUserState(mockedState);
    const actualKeys = Object.keys(actualState);
    const expectedKeys = ['name', 'email', 'agreements'];
    const isEveryFieldFound = expectedKeys.every((expectedKey) => actualKeys.includes(expectedKey));
    expect(isEveryFieldFound).toBeTruthy();
  });

  it('user agreements array', () => {
    const actualAgreements = selectUserAgreements(mockedState);
    expect(Array.isArray(actualAgreements)).toBeTruthy();
  });

  it('user name', () => {
    const actualName = selectUserName(mockedState);
    expect(actualName).toBe('a');
  });

  it('user email', () => {
    const actualEmail = selectUserEmail(mockedState);
    expect(actualEmail).toBe('b');
  });
});
