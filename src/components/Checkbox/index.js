import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as BaseCheckbox } from '@material-ui/core';
import InlineTypography from './styles';

const Checkbox = ({ isChecked, label, onChange }) => {
  const handleChange = () => {
    onChange(label, !isChecked);
  };

  return (
    <div>
      <BaseCheckbox
        checked={isChecked}
        onChange={handleChange}
      />
      <InlineTypography>
        {label}
      </InlineTypography>
    </div>

  );
};

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  isChecked: false,
  label: '',
};

export default Checkbox;
