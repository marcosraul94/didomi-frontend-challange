import React from 'react';
import { Grid, Typography } from '@material-ui/core';
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

export const NameAndEmailContainer = ({ children }) => {
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

export const AgreementText = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.agreementText}>
      I agree to:
    </Typography>
  );
};
