import { selectConsents, selectConsentsState, selectPage } from '../consents';

const mockedState = { consents: { consents: [], page: 3 } };

describe('consents selectors', () => {
  it('consents state', () => {
    const actualState = selectConsentsState(mockedState);
    const actualKeys = Object.keys(actualState);
    const expectedKeys = ['consents', 'page'];
    const isEveryFieldFound = expectedKeys.every((expectedKey) => actualKeys.includes(expectedKey));
    expect(isEveryFieldFound).toBeTruthy();
  });

  it('consents array', () => {
    const actualConsents = selectConsents(mockedState);
    expect(Array.isArray(actualConsents)).toBeTruthy();
  });

  it('page', () => {
    const actualPage = selectPage(mockedState);
    expect(actualPage).toBe(3);
  });
});
