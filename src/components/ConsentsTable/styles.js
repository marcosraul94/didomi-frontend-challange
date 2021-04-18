import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    width: '600px',
    borderCollapse: 'collapse',
    '& table, th, td': {
      border: '2px solid black',
    },
    '& td': {
      padding: '10px 10px',
      minWidth: '200px',
    },
  },
  givenConsentColumn: {
    textAlign: 'left',
    paddingLeft: 9,
    minWidth: 400,
  },
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid black',
    padding: 8,
    '& > span': {
      color: 'blue',
      textDecoration: 'underline',
    },
    '& > span:hover': {
      cursor: 'pointer',
    },
  },
  paginationPrev: {
    visibility: (props) => (props.isPrevPageAvailable ? 'visible' : 'hidden'),
  },
  paginationNext: {
    visibility: (props) => (props.isNextPageAvailable ? 'visible' : 'hidden'),
  },
});

export default useStyles;
