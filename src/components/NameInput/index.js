import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'src/state/selectors/user';
import { selectNameError } from 'src/state/selectors/validation';
import { setUserName } from 'src/state/slices/user';
import { setNameError } from 'src/state/slices/validation';
import { validateNameField } from 'src/utils/validation';
import TextInput from '../TextInput';

const NameInput = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const error = useSelector(selectNameError);

  const handleChange = (e) => {
    const newName = e.target.value;
    dispatch(setUserName(newName));

    const updatedError = validateNameField(newName);
    dispatch(setNameError(updatedError));
  };

  return (
    <TextInput
      value={name}
      placeholder="Name"
      error={error}
      onChange={handleChange}
    />
  );
};

export default NameInput;
