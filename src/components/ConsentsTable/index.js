import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import Columns from './Columns';
import Rows from './Rows';
import Pagination from './Pagination';

const ConsentsTable = ({
  currentPage,
  totalPages,
  onPageChange,
  columns,
  rows,
}) => {
  const classes = useStyles();

  return (
    <div>
      <table className={classes.table}>
        <tbody>
          <Columns columns={columns} />
          <Rows rows={rows} />
        </tbody>
      </table>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

ConsentsTable.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  columns: PropTypes.instanceOf(Array),
  rows: PropTypes.instanceOf(Array),
};

ConsentsTable.defaultProps = {
  columns: [],
  rows: [],
};

export default ConsentsTable;
