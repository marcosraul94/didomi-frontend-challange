import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const StyledButton = styled(Button)({
  backgroundColor: '#008cff',
  color: 'white',
  textTransform: 'none',
  marginTop: 5,
  padding: '10px 20px',
  borderRadius: 10,
  fontSize: '1.2rem',
  border: '1px solid #40749f',
  '&:disabled': {
    border: 'none',
  },
  '&:hover': {
    backgroundColor: '#dae8fc',
    color: 'black',
  },
});

export default StyledButton;
