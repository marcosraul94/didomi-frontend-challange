import { fireEvent, waitFor } from '@testing-library/react';
import renderWithRedux from 'src/utils/testing';
import * as mockAsyncDelay from 'src/utils/helperAsync';
import CollectedConsents from '../index';

let spyAsyncHelper;
beforeAll(() => {
  spyAsyncHelper = jest.spyOn(mockAsyncDelay, 'default').mockImplementation(async () => {});
});

afterAll(() => {
  spyAsyncHelper.mockRestore();
});

describe('CollectedConsents component', () => {
  it('displays the fetched data', async () => {
    const { getByText } = renderWithRedux(CollectedConsents);
    await waitFor(() => getByText(/Bojack/));
  });
  it('changes the page of table data', async () => {
    const { getByText } = renderWithRedux(CollectedConsents);
    const nextPageButton = await waitFor(() => getByText(/Next/));
    fireEvent.click(nextPageButton);
    const nextPageRecord = /SpongeBob/;
    getByText(nextPageRecord);
  });
});
