import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onHanleClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'submit',
};

function Button({ title, type, onHanleClick }) {
  return (
    <button className="btn" type={type} onClick={onHanleClick}>
      {title}
    </button>
  );
}

export default Button;
