import React from 'react';
import PropTypes from 'prop-types';
import ShorterTextField from './styles';

const TextInput = ({
  value,
  label,
  onChange,
  error,
}) => (
  <ShorterTextField
    variant="outlined"
    value={value}
    label={label}
    onChange={onChange}
    error={Boolean(error)}
    helperText={error}
  />
);

TextInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  value: '',
  label: '',
  error: '',
};

export default TextInput;
