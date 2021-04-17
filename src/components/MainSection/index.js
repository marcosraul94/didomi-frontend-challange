import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const MainSectionContainer = ({ children }) => (
  <Grid item xs={12} sm={8}>
    {children}
  </Grid>
);

MainSectionContainer.propTypes = {
  children: PropTypes.node,
};

MainSectionContainer.defaultProps = {
  children: undefined,
};

export default MainSectionContainer;
