import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, Grid } from '@material-ui/core';

const BaseLayout = ({ children }) => (
  <div>
    <CssBaseline />
    <Grid container>
      {children}
    </Grid>
  </div>
);

BaseLayout.propTypes = {
  children: PropTypes.node,
};

BaseLayout.defaultProps = {
  children: undefined,
};

export default BaseLayout;
