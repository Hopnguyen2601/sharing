import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const InputText = (props) => {
  const { name, type, value, onChange } = props;
  return (
    <div className="field">
      <label className="field__label">{name}</label>
      <input
        className="field__input"
        type={type}
        name={name}
        placeholder={`Please input your ${name}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

InputText.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};
InputText.defaultProps = {
  type: 'text',
};

export default InputText;
