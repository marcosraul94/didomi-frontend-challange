import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAgreements, selectUserEmail, selectUserName } from 'src/state/selectors/user';
import { setEmailError, setNameError } from 'src/state/slices/validation';
import { validateEmailField, validateNameField } from 'src/utils/validation';
import { CONSENTS } from 'src/utils/routes';
import { setUserAgreements, setUserEmail, setUserName } from 'src/state/slices/user';
import { addNewUser } from 'src/utils/api';
import { setPage } from 'src/state/slices/consents';
import StyledButton from './styles';

const GiveConsentButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const agreements = useSelector(selectUserAgreements);
  const name = useSelector(selectUserName);
  const email = useSelector(selectUserEmail);
  const isAnyAgreementChecked = agreements.length > 0;

  const clearUserData = () => {
    dispatch(setUserName(''));
    dispatch(setUserEmail(''));
    dispatch(setUserAgreements([]));
    dispatch(setPage(1));
  };

  const handleClick = async () => {
    const nameError = validateNameField(name);
    dispatch(setNameError(nameError));

    const emailError = validateEmailField(email);
    dispatch(setEmailError(emailError));

    if (nameError || emailError) return;

    const newUserData = { name, email, agreements };
    await addNewUser(newUserData);
    clearUserData();
    history.push(CONSENTS);
  };

  return (
    <StyledButton variant="contained" disabled={!isAnyAgreementChecked} onClick={handleClick}>
      Give consent
    </StyledButton>
  );
};

export default GiveConsentButton;
