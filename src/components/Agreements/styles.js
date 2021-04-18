import { Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const AgreementsOuterContainer = styled(Box)({
  '& > *': {
    margin: '10px 0',
  },
});

export const AgreementsTextCentered = styled(Typography)({
  textAlign: 'center',
});

export const AgreementsInnerContainer = styled(Box)({
  border: '1px solid #b3b3b3',
  paddingRight: 5,
  fontSize: '1.2rem',
});
