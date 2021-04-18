import mockedDb, { dumbData } from '../db';

beforeEach(() => {
  mockedDb.update(dumbData);
});

describe('mocked db', () => {
  it('initialization', () => {
    const expectedRecord = dumbData[0];
    const fetchedRecord = mockedDb.data[0];
    expect(fetchedRecord.email).toBe(expectedRecord.email);
  });

  it('update records', () => {
    const expectedLength = 0;
    mockedDb.update([]);
    const actualLength = mockedDb.data.length;
    expect(actualLength).toBe(expectedLength);
  });
});
