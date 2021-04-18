import React from 'react';
import StyledButton from './styles';

const GiveConsentButton = () => {
  const isDisabled = false;

  const handleClick = () => {

  };

  return (
    <StyledButton variant="contained" disabled={isDisabled} onClick={handleClick}>
      Give consent
    </StyledButton>
  );
};

export default GiveConsentButton;
