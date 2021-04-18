import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

const Columns = ({ columns }) => {
  const classes = useStyles();

  return (
    <tr>
      {columns.map((column) => (
        <th
          key={column}
          className={column === 'Given consent for' ? classes.givenConsentColumn : undefined}
        >
          {column}
        </th>
      ))}
    </tr>
  );
};

Columns.propTypes = {
  columns: PropTypes.instanceOf(Array),
};

Columns.defaultProps = {
  columns: [],
};

export default Columns;
