import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const InputText = ({ inputValue, inputName, onHandleChange }) => {
  return (
    <input
      className="form__input"
      required
      id="standard-required"
      name={inputName}
      value={inputValue}
      onChange={onHandleChange}
      variant="standard"
    />
  );
};

InputText.propTypes = {
  inputName: PropTypes.string,
  inputValue: PropTypes.string,
};

export default InputText;
