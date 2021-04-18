import { fireEvent } from '@testing-library/react';
import renderWithRedux from 'src/utils/testing';
import EmailInput from '../index';

describe('EmailInput component', () => {
  it('displays the intput field', () => {
    const { getByPlaceholderText } = renderWithRedux(EmailInput);
    getByPlaceholderText('Email address');
  });
  it('changes the value', () => {
    const { getByPlaceholderText, getByDisplayValue } = renderWithRedux(EmailInput);
    const input = getByPlaceholderText('Email address');
    fireEvent.change(input, { target: { value: 'a' } });
    getByDisplayValue('a');
  });
});
