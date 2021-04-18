import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import { ListItem, ListItemText } from '@material-ui/core';
import useStyles from './styles';

const NavLink = ({ to, text }) => {
  const isActive = to === window.location.pathname;
  const classes = useStyles({ isActive });

  return (
    <ListItem component={Link} to={to} exact className={classes.container}>
      <ListItemText className={classes.text}>
        {text}
      </ListItemText>
    </ListItem>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavLink;
