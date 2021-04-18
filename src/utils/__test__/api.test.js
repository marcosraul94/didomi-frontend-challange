import * as mockAsyncDelay from '../helperAsync';
import { addNewUser, fetchAllConsents } from '../api';
import mockedDb from '../db';

let spyAsyncHelper;

beforeAll(() => {
  spyAsyncHelper = jest.spyOn(mockAsyncDelay, 'default').mockImplementation(async () => {});
});

afterAll(() => {
  spyAsyncHelper.mockRestore();
});

describe('api functions', () => {
  it('adding a new user', async () => {
    const newUser = { email: 'A' };
    await addNewUser(newUser);
    expect(mockedDb.data.find((consent) => consent.email === newUser.email)).toBeTruthy();
  });

  it('fetching all users', async () => {
    const expectedData = mockedDb.data;
    const fetchedData = await fetchAllConsents();
    expect(
      expectedData.every(
        (consent) => fetchedData.find((fetchedConsent) => fetchedConsent.email === consent.email),
      ),
    ).toBeTruthy();
  });
});
