import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  nameAndEmailContainer: {
    '& > *': {
      margin: '0 12px',
    },
  },
  agreementText: {
    margin: '20px 0',
  },
});

const NameAndEmailContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.nameAndEmailContainer}
    >
      {children}
    </Grid>
  );
};

NameAndEmailContainer.propTypes = {
  children: PropTypes.node,
};

NameAndEmailContainer.defaultProps = {
  children: undefined,
};

export default NameAndEmailContainer;
