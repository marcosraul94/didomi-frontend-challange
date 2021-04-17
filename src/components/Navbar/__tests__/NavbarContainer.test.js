import React from 'react';
import { render } from '@testing-library/react';
import NavbarContainer from '../styles';

describe('NavbarContainer component', () => {
  it('Can mount children components', () => {
    const text = 'Children';
    const Component = (
      <NavbarContainer>
        <div>
          {text}
        </div>
      </NavbarContainer>
    );

    const { getByText } = render(Component);
    getByText(text);
  });
});
