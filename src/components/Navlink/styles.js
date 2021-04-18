import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    backgroundColor: (props) => props.isActive && '#dae8fc',
    border: '2px solid #b3b3b3',
    borderColor: (props) => props.isActive && '#6c8ebf',
    margin: '10px 0',
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    color: 'black',
    '& span': {
      fontWeight: (props) => (props.isActive ? 'bold' : 'normal'),
    },
    textAlign: 'center',
  },
});

export default useStyles;
