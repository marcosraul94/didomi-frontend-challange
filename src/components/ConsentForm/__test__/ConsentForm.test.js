import { fireEvent } from '@testing-library/react';
import * as apiCalls from 'src/utils/api';
import renderWithRedux from 'src/utils/testing';
import ConsentForm from '../index';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('ConsentForm component', () => {
  it('validates that give consent button cannot be clicked if no agreement is selected', () => {
    const addNewUser = jest.spyOn(apiCalls, 'addNewUser').mockImplementation(async () => {});

    const { getByPlaceholderText, getByText } = renderWithRedux(ConsentForm);
    const nameInput = getByPlaceholderText(/Name/);
    fireEvent.change(nameInput, { target: { value: 'test' } });

    const emailInput = getByPlaceholderText(/Email/);
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });

    const giveConsentButton = getByText('Give consent');
    fireEvent.click(giveConsentButton);

    expect(addNewUser).toHaveBeenCalledTimes(0);
  });

  it('full process of creating a new consent', () => {
    const addNewUser = jest.spyOn(apiCalls, 'addNewUser').mockImplementation(async () => {});

    const { getByPlaceholderText, getByText, container } = renderWithRedux(ConsentForm);
    const nameInput = getByPlaceholderText(/Name/);
    fireEvent.change(nameInput, { target: { value: 'test' } });

    const emailInput = getByPlaceholderText(/Email/);
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });

    const checkbox = container.querySelector('input[type=checkbox]');
    fireEvent.click(checkbox);

    const giveConsentButton = getByText('Give consent');
    fireEvent.click(giveConsentButton);

    expect(addNewUser).toHaveBeenCalled();
  });
});
