import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from 'src/state/selectors/user';
import { selectEmailError } from 'src/state/selectors/validation';
import { setUserEmail } from 'src/state/slices/user';
import { setEmailError } from 'src/state/slices/validation';
import { validateEmailField } from 'src/utils/validation';
import TextInput from '../TextInput';

const EmailInput = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);
  const error = useSelector(selectEmailError);

  const handleChange = (e) => {
    const newEmail = e.target.value;
    dispatch(setUserEmail(newEmail));

    const updatedError = validateEmailField(newEmail);
    dispatch(setEmailError(updatedError));
  };

  return (
    <TextInput
      value={email}
      placeholder="Email address"
      onChange={handleChange}
      error={error}
    />
  );
};

export default EmailInput;
