import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pagesText = [...Array(totalPages + 1).keys()].slice(1).join(' ');
  const isPrevPageAvailable = currentPage > 0;
  const isNextPageAvailable = currentPage < totalPages - 1;
  const classes = useStyles({ isNextPageAvailable, isPrevPageAvailable });

  return (
    <div className={classes.pagination}>
      <span
        className={classes.paginationPrev}
        role="button"
        tabIndex={-1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {'<< Previous page'}
      </span>
      <span>
        {pagesText}
      </span>
      <span
        className={classes.paginationNext}
        role="button"
        tabIndex={-1}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {'Next page >>'}
      </span>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
