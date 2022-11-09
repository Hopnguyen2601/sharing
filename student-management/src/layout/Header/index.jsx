import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/common/Button';

import './styles.scss';

const Header = () => {
  return (
    <div className="main-header fixed">
      <div className="main-header__wrapper container">
        <Link to={'/'}>
          <h1 className="main-header__title">Class Management FE28</h1>
        </Link>

        <Link to={'/add'}>
          <Button title="Add student" type="text" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
