import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const NavbarContainer = ({ children }) => (
  <Grid item xs={12} sm={4}>
    {children}
  </Grid>
);

NavbarContainer.propTypes = {
  children: PropTypes.node,
};

NavbarContainer.defaultProps = {
  children: undefined,
};

export default NavbarContainer;
