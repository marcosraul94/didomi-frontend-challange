import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../index';

const Component = (
  <Router>
    <Navbar />
  </Router>
);

describe('Navbar component', () => {
  it('get consents route link displays', () => {
    const { getByText } = render(Component);
    getByText('Give consent');
  });

  it('consents route link displays', () => {
    const { getByText } = render(Component);
    getByText('Collected consents');
  });

  it('redirects to consents', () => {
    const { getByText } = render(Component);
    const newUrlLink = getByText('Collected consents');
    fireEvent.click(newUrlLink);
    const newUrl = '/consents';
    expect(window.location.pathname).toBe(newUrl);
  });

  it('redirects to give consent', () => {
    const { getByText } = render(Component);
    const newUrlLink = getByText('Give consent');
    fireEvent.click(newUrlLink);
    const newUrl = '/give-consents';
    expect(window.location.pathname).toBe(newUrl);
  });
});
