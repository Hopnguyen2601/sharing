import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'submit',
};

function Button({ title, type }) {
  return (
    <button className="btn" type="type">
      {title}
    </button>
  );
}

export default Button;
