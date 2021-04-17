import React from 'react';
import { render } from '@testing-library/react';
import BaseLayout from '../index';

describe('BaseLayout component', () => {
  it('Can mount children components', () => {
    const text = 'Children';
    const Component = (
      <BaseLayout>
        <div>
          {text}
        </div>
      </BaseLayout>
    );

    const { getByText } = render(Component);
    getByText(text);
  });
});
