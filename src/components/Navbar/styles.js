import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledGrid = styled(Grid)({
  backgroundColor: '#f5f5f5',
  height: '100vh',
});

const NavbarContainer = ({ children }) => (
  <StyledGrid item xs={12} sm={2}>
    {children}
  </StyledGrid>
);

NavbarContainer.propTypes = {
  children: PropTypes.node,
};

NavbarContainer.defaultProps = {
  children: undefined,
};

export default NavbarContainer;
