import React from 'react';
import { render } from '@testing-library/react';
import Checkbox from '../index';

let toggledIsChecked = false;
const Component = (
  <Checkbox
    isChecked={toggledIsChecked}
    label="a"
    onChange={(newValue) => { toggledIsChecked = newValue; }}
  />
);

describe('Checkbox component', () => {
  it('displays the label', () => {
    const { getByText } = render(Component);
    getByText('a');
  });
});
