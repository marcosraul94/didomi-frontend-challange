import React from 'react';
import PropTypes from 'prop-types';
import ShorterTextField from './styles';

const TextInput = ({
  value,
  placeholder,
  onChange,
  error,
}) => (
  <ShorterTextField
    variant="outlined"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    error={Boolean(error)}
    helperText={error}
  />
);

TextInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  value: '',
  placeholder: '',
  error: '',
};

export default TextInput;
