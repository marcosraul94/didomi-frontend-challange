import React from 'react';
import PropTypes from 'prop-types';

const Rows = ({ rows }) => (
  <>
    {rows.map((row) => (
      <tr key={row.email}>
        <td>
          {row.name}
        </td>
        <td>
          {row.email}
        </td>
        <td>
          {row.agreements.join(', ')}
        </td>
      </tr>
    ))}
  </>
);

Rows.propTypes = {
  rows: PropTypes.instanceOf(Array),
};

Rows.defaultProps = {
  rows: [],
};

export default Rows;
