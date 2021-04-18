import { fireEvent } from '@testing-library/react';
import renderWithRedux from 'src/utils/testing';
import NameInput from '../index';

describe('NameInput component', () => {
  it('displays the intput field', () => {
    const { getByPlaceholderText } = renderWithRedux(NameInput);
    getByPlaceholderText('Name');
  });
  it('changes the value', () => {
    const { getByPlaceholderText, getByDisplayValue } = renderWithRedux(NameInput);
    const input = getByPlaceholderText('Name');
    fireEvent.change(input, { target: { value: 'a' } });
    getByDisplayValue('a');
  });
});
