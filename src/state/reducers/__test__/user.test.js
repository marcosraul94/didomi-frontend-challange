import {
  addUserAgreement, removeUserAgreement, setUserAgreements, setUserEmail, setUserName,
} from '../user';

const name = 'a';
const email = 'b';
const agreements = ['c'];
const userState = { name, email, agreements };

beforeEach(() => {
  userState.name = name;
  userState.email = email;
  userState.agreements = agreements;
});

describe('user reducer', () => {
  it('set name', () => {
    const newName = 'c';
    setUserName(userState, { payload: newName });
    expect(userState.name).toBe('c');
  });

  it('set email', () => {
    const newEmail = 'd';
    setUserEmail(userState, { payload: newEmail });
    expect(userState.email).toBe('d');
  });

  it('add agreement', () => {
    const newAgreement = 'j';
    addUserAgreement(userState, { payload: newAgreement });
    const wasAdded = userState.agreements.includes(newAgreement);
    expect(wasAdded).toBeTruthy();
  });

  it('remove agreement', () => {
    const agremeentToRemove = 'c';
    removeUserAgreement(userState, { payload: agremeentToRemove });
    expect(userState.agreements.length).toBe(0);
  });

  it('set agreements', () => {
    setUserAgreements(userState, { payload: [] });
    expect(userState.agreements.length).toBe(0);
  });
});
