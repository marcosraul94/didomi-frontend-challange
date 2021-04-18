import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavLink from '../index';

const Component = (
  <Router>
    <NavLink to="/" text="a" />
  </Router>
);

describe('NavLink component', () => {
  it('renders link', () => {
    const { getByText } = render(Component);
    getByText('a');
  });

  it('redirects', () => {
    const { getByText } = render(Component);
    const link = getByText('a');
    fireEvent.click(link);
    expect(window.location.pathname).toBe('/');
  });
});
