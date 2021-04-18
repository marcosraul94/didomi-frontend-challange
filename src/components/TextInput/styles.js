import { TextField } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const ShorterTextField = styled(TextField)({
  maxWidth: 140,
  '& > p': {
    position: 'absolute',
    fontSize: 8,
  },
});

export default ShorterTextField;
