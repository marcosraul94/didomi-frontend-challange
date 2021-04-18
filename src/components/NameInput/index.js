import React from 'react';
import TextInput from '../TextInput';

const NameInput = () => {
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <TextInput value="Name" label="Name" onChange={handleChange} />
  );
};

export default NameInput;
