import React from 'react';
import { render } from '@testing-library/react';
import MainSection from '../index';

describe('MainSection component', () => {
  it('Can mount children components', () => {
    const text = 'Children';
    const Component = (
      <MainSection>
        <div>
          {text}
        </div>
      </MainSection>
    );

    const { getByText } = render(Component);
    getByText(text);
  });
});
