import React from 'react';
import Button from '../../components/common/Button';

import './styles.scss';

const Header = () => {
  return (
    <div className="main-header">
      <div className="main-header__wrapper">
        <h1 className="main-header__title">Class Management FE28</h1>
        <Button title="Add student" />
      </div>
    </div>
  );
};

export default Header;
