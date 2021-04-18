import { setConsents, setPage } from '../consents';

const consents = [];
const page = 3;
const consentsState = { consents, page };

beforeEach(() => {
  consentsState.consents = consents;
  consentsState.page = page;
});

describe('consents reducer', () => {
  it('set consents', () => {
    const newConsents = [3];
    setConsents(consentsState, { payload: newConsents });
    expect(consentsState.consents[0]).toBe(3);
  });

  it('set page', () => {
    const newPage = 4;
    setPage(consentsState, { payload: newPage });
    expect(consentsState.page).toBe(4);
  });
});
