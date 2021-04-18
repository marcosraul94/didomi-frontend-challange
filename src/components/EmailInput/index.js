import React from 'react';
import TextInput from '../TextInput';

const EmailInput = () => {
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <TextInput value="marcos@gmail.com" label="Email address" onChange={handleChange} />
  );
};

export default EmailInput;
